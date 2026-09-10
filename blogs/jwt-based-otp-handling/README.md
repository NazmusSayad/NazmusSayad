# Secure JWT-Based OTP Authentication Handling

## Overview

This document outlines a JWT-based OTP authentication mechanism for user registration and password reset. The approach ensures security without storing OTPs in a database by dynamically generating secrets for JWT signing.

---

## Registration Process

### Step 1: Request OTP

1. The client submits user details (e.g., email, username, password) to the server.
2. The server generates a random OTP.
3. The server signs a JWT token with a secret key:
   - **Secret Key Format:** `server-secret + OTP`
   - The token contains the user details.
4. The server sends the OTP to the user via email/SMS and returns the JWT token to the client.
5. The client stores the token temporarily.

### Step 2: Verify OTP and Complete Registration

1. The client submits the JWT token and OTP to the server.
2. The server verifies the JWT token using the secret key (`server-secret + OTP`).
3. If verification succeeds:
   - The server checks if the email/username already exists in the database.
   - [If] the email/username does not exist, the user is created based on the user details from the token.
   - [Else], an error message is returned.
4. If verification fails, an error message is returned.

### Security Enhancements

- To prevent duplicate account creation with the same token and OTP:
  1. On the first step of registration, the server checks if the email/username already exists.
  2. On the second step, the server can also check if the email/username already exists. This can be optimized by using a unique email/username constraint in the database.

---

## Password Reset Process

### Step 1: Request Password Reset Token

1. The client submits user identification (email/username/ID) to the server.
2. The server generates a random OTP.
3. The server signs a JWT token with a secret key:
   - **Secret Key Format:** `server-secret + OTP`
   - The token contains the user identifier.
4. The server sends the OTP to the user and returns the JWT token to the client.
5. The client stores the token temporarily.

### Step 2: Verify OTP and Reset Password

1. The client submits the JWT token and OTP to the server along with the new password.
2. The server verifies the JWT token using `server-secret + OTP`.
3. If verification succeeds:
   - The server checks if the password has already been reset using `passwordChangedAt`.
   - [If] `passwordChangedAt` is after the token creation date, the request is rejected.
   - [Else], the password is updated, and `passwordChangedAt` is set to the current timestamp.
4. If verification fails, an error message is returned.

### Security Enhancements

- Prevent repeated password resets with the same token and OTP:
  - Save `passwordChangedAt` in the user record.
  - [If] a reset attempt is made with an old token, the server checks if `passwordChangedAt` is after the token creation date. Then the request needs to be rejected.

---

## Example Implementation

**Install the required packages:**

```bash
npm install express jsonwebtoken
```

```ts
import express from 'express'
import jwt from 'jsonwebtoken'

const app = express()
app.use(express.json())

const SERVER_REGISTER_SECRET = 'your-server-register-secret'
const SERVER_RESET_PASSWORD_SECRET = 'your-server-reset-password-secret'

// Step 1: Request OTP
app.post('/register/request-otp', (req, res) => {
  const { email, password } = req.body as RegisterTokenRequestBody

  // Check if user already exists
  if (users.find((user) => user.email === email)) {
    res.status(400).json({ error: 'User already exists' })
    return
  }

  // Generate OTP and sign the token
  const otp = generateOTP()
  const secretKey = `${SERVER_REGISTER_SECRET}-${otp}`
  const token = jwt.sign({ email, password }, secretKey, { expiresIn: '5m' })

  console.log(`OTP for ${email}:`, otp) // Simulate sending OTP
  res.json({ token })
})

// Step 2: Verify OTP & Register
app.post('/register/verify', (req, res) => {
  const { token, otp } = req.body as RegisterVerifyRequestBody
  const secretKey = `${SERVER_REGISTER_SECRET}-${otp}`

  try {
    // Verify the token
    const decoded = jwt.verify(token, secretKey) as RegisterJwtPayload

    // Check if user already exists
    if (users.find((user) => user.email === decoded.email)) {
      res.status(400).json({ error: 'User already exists' })
      return
    }

    // Insert user into the database
    users.push({
      email: decoded.email,
      password: decoded.password,
      passwordChangedAt: new Date(),
    })

    res.json({ message: 'User registered successfully' })
  } catch (err) {
    res.status(400).json({ error: 'Invalid OTP or token' })
  }
})

// Step 1: Request Password Reset Token
app.post('/password-reset/request', (req, res) => {
  const { email } = req.body as ResetPasswordTokenRequestBody

  // Check if user exists
  if (!users.find((user) => user.email === email)) {
    res.status(400).json({ error: 'User not found' })
    return
  }

  // Generate OTP and sign the token
  const otp = generateOTP()
  const secretKey = `${SERVER_RESET_PASSWORD_SECRET}-${otp}`
  const token = jwt.sign({ email }, secretKey, { expiresIn: '5m' })

  console.log(`OTP for password reset ${email}:`, otp) // Simulate sending OTP
  res.json({ token })
})

// Step 2: Verify OTP & Reset Password
app.post('/password-reset/verify', (req, res) => {
  const { token, otp, newPassword } = req.body as ResetPasswordVerifyRequestBody
  const secretKey = `${SERVER_RESET_PASSWORD_SECRET}-${otp}`

  try {
    // Verify the token
    const decoded = jwt.verify(token, secretKey) as ResetPasswordJwtPayload

    // Check if user exists
    const user = users.find((user) => user.email === decoded.email)

    if (!user) {
      res.status(400).json({ error: 'User not found' })
      return
    }

    if (!decoded.iat) {
      throw new Error('Token issued date not found')
    }

    if (
      user.passwordChangedAt &&
      decoded.iat < user.passwordChangedAt.getTime()
    ) {
      res
        .status(400)
        .json({ error: 'Token issued before last password change' })

      return
    }

    // Update password on the database
    user.password = newPassword
    user.passwordChangedAt = new Date()

    res.json({ message: 'Password reset successful' })
  } catch (err) {
    res.status(400).json({ error: 'Invalid OTP or token' })
  }
})

app.listen(3000, () => console.log('Server running on port 3000'))

// ---------- Utilities and Databases --- Can be a separate file

// User model
type User = {
  email: string
  password: string
  passwordChangedAt: Date
}

// Simulate database
const users: User[] = []

function generateOTP(): string {
  return Math.floor(100000 + Math.random() * 900000).toString()
}

// ---------- Necessary Types --- Can be a separate file

type RegisterJwtPayload = jwt.JwtPayload & {
  email: string
  password: string
}

type ResetPasswordJwtPayload = jwt.JwtPayload & {
  email: string
}

type RegisterTokenRequestBody = {
  email: string
  password: string
}

type RegisterVerifyRequestBody = {
  token: string
  otp: string
}

type ResetPasswordTokenRequestBody = {
  email: string
}

type ResetPasswordVerifyRequestBody = {
  token: string
  otp: string
  newPassword: string
}
```

## Best Practices

- Use a dynamic secret key for JWT signing:
  - Registration: `${server-secret}-REGISTER-${OTP}`
  - Password Reset: `${server-register-secret}-${OTP}`
- Ensure unique tracking of user actions (e.g., email uniqueness, `passwordChangedAt` timestamps).
- Use small OTP expiry times to reduce security risks. eg. 5 minutes.
- Implement rate limiting to prevent brute-force attacks.
- Use an HMAC function (e.g., SHA256) instead of directly appending OTP to the secret key.

  ```ts
  import crypto from 'crypto'

  function getSecretKey(baseSecret: string, otp: string): string {
    return crypto.createHmac('sha256', baseSecret).update(otp).digest('hex')
  }

  const secretKey = getSecretKey(SERVER_REGISTER_SECRET, OTP)
  ```

This approach secures registration and password reset flows while avoiding persistent OTP storage.

## Limitations

- Handle Token Expiration: If a registration/reset password token is created multiple times, previous tokens and OTPs will still be valid until they expire.
- Can be more complex for crazy tasks: This method can be difficult to integrate with other OTP management systems. Invalidating previous tokens would require additional tracking mechanisms like `lastAccessedAt`, which can add complexity.
- No Centralized OTP Tracking: Since OTPs are not stored in a database, there is no way to manually revoke or track OTP usage.
- Limited Token Expiry Control: JWTs are stateless, meaning once issued, they cannot be revoked unless additional tracking (like blacklistedTokens or lastAccessedAt) is implemented.
- Potential Synchronization Issues: If multiple OTP requests are made in quick succession, users might enter an older OTP, leading to failed verification. Even thought this is impractical, it is still a possibility.
- No Multi-Factor Authentication (MFA): This approach only relies on OTP for verification, which might not be sufficient for extremely high-security applications.

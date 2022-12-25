const getList = (...items) => {
  return items
    .map(([label, url, description]) => {
      return `- **[${label}](${url})** - ${description}`
    })
    .join('\n')
}

module.exports = {
  projectList: getList(
    [
      'npm-ez',
      'https://www.npmjs.com/package/npm-ez',
      'A tool to create npm packages easily',
    ],

    [
      'use-react-api',
      'https://www.npmjs.com/package/use-react-api',
      'Make usages of fetch/http easier with the help of axios',
    ],

    [
      'code-info',
      'https://www.npmjs.com/package/code-info',
      'A cli tool scan your code and get basic details',
    ],

    [
      'req-error',
      'https://www.npmjs.com/package/req-error',
      'Express tool for large applications',
    ],

    [
      'manual-node-env',
      'https://www.npmjs.com/package/manual-node-env',
      'Stop wasting time to use external third party packages to set NODE_ENV, do that from your code',
    ],

    [
      'node-ls-files',
      'https://www.npmjs.com/package/node-ls-files',
      'Get all the files inside a dir as an array',
    ],

    [
      'vite-pwa',
      'https://www.npmjs.com/package/vite-pwa',
      'A vite plugin to create PWA apps easily',
    ],

    [
      'Salah Time',
      'https://namaz.vercel.app',
      'Get the accurate time for salah',
    ],

    [
      'Mini Crypt',
      'https://mini-crypt.vercel.app',
      'Toy hashing algorithm to hash your message',
    ],

    [
      'Tic Tac Toe',
      'https://tictactoe-basic.vercel.app',
      'One of my early project',
    ]
  ),
}

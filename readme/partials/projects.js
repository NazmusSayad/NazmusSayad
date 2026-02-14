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
      'Maileditor',
      'https://maileditor.net',
      'Web application to edit your emails',
    ],
    [
      'UiGraph',
      'https://uigraph.app',
      'Visual diagrams and system mapping tool',
    ],
    [
      'OiPer',
      'https://www.oiper.com',
      'Email builder with reusable modules and configurable presets',
    ],
    [
      'Salah Time',
      'https://namaz.vercel.app',
      'Get the accurate time for salah',
    ],
    [
      'Todoi',
      'https://todoi.vercel.app',
      'Task management application for personal and teams',
    ],
    [
      'Mini Crypt',
      'https://mini-crypt.vercel.app/baby',
      'Toy hashing algorithm to hash your message',
    ],
    [
      'Ai Tic Tac Toe',
      'https://ai-tictactoe.vercel.app',
      'Tic tac toe with AI opponent',
    ],
    [
      'npmize',
      'https://www.npmjs.com/package/npmize',
      'Create npm packages with ease',
    ],
    [
      'noarg',
      'https://www.npmjs.com/package/noarg',
      'Parse your arg with excellent type support',
    ],
    [
      'netserv',
      'https://www.npmjs.com/package/netserv',
      'Serve your files over the local network',
    ],
    [
      'tailwind-variant-group',
      'https://www.npmjs.com/package/tailwind-variant-group',
      'Use tailwind css like never before',
    ],
    [
      'code-info',
      'https://www.npmjs.com/package/code-info',
      'A cli tool scan your code and get basic details',
    ],
    [
      'daily-code',
      'https://www.npmjs.com/package/daily-code',
      'Reuse casual utilities',
    ],
    [
      'uni-run',
      'https://www.npmjs.com/package/uni-run',
      'Run all kind of code',
    ],
    [
      'one-time-jwt',
      'https://www.npmjs.com/package/one-time-jwt',
      'One-time use JWT tokens',
    ],
    [
      'css-wrapper',
      'https://wrapper.sayad.dev',
      'CSS utility wrapper. Visual css wrapper generator',
    ],
    [
      'auto-fold',
      'https://marketplace.visualstudio.com/items?itemName=NazmusSayad.auto-fold',
      'VS Code extension for auto folding',
    ],
    [
      'chrome-tab-mute',
      'https://chromewebstore.google.com/detail/jookegifmgjobinhjncmbjamaeldmabm',
      'Chrome extension to mute browser tabs',
    ],
    [
      'Wakapi',
      'https://wakapi.dev',
      'Time tracking for programmers (contributor)',
    ],
    [
      'rype',
      'https://www.npmjs.com/package/rype',
      'Runtime type check in JS (deprecated)',
    ]
  ),
}

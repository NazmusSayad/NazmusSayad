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
      'npmize',
      'https://www.npmjs.com/package/npmize',
      'A tool to create npm packages easily',
    ],

    [
      'noarg',
      'https://www.npmjs.com/package/noarg',
      'A argument parser for nodejs, simple and easy to use',
    ],

    [
      'netserv',
      'https://www.npmjs.com/package/netserv',
      'Serve your files over the local network',
    ],

    [
      'rype',
      'https://www.npmjs.com/package/rype',
      'A type checking library for javascript, perfectly typed',
    ],

    [
      'react-net-kit',
      'https://www.npmjs.com/package/react-net-kit',
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
      'tailwind-variant-group',
      'https://www.npmjs.com/package/tailwind-variant-group',
      'Enables classes inside a variant block',
    ],

    [
      'Todoi (not completed)',
      'https://todoi.vercel.app',
      'Simple task management application for personal and teams',
    ],

    [
      'Messagen (not completed)',
      'https://messagen.vercel.app',
      'Full featured chat applicaion',
    ],

    [
      'cli-node-env',
      'https://www.npmjs.com/package/cli-node-env',
      'Set NODE_ENV directly from your code or CLI',
    ],

    [
      'lskit',
      'https://www.npmjs.com/package/lskit',
      'Get all the files inside a dir as an array',
    ],

    [
      'use-active-state',
      'https://www.npmjs.com/package/use-active-state',
      'React hook for managing active element in the browser.',
    ],

    [
      'vite-vscode',
      'https://www.npmjs.com/package/vite-vscode',
      'This automatically creates some vscode config from vite config',
    ],

    [
      'dom-theme',
      'https://www.npmjs.com/package/dom-theme',
      'Theme management basic tool',
    ],

    [
      'react-ts',
      'https://github.com/NazmusSayad/react-ts',
      'A boilerplate for React with typescript',
    ],

    [
      'node-ts',
      'https://github.com/NazmusSayad/node-ts',
      'A boilerplate for Node, MongoDB & Express with typescript',
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

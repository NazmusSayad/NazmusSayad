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
      'tailwind-variant-group',
      'https://www.npmjs.com/package/tailwind-variant-group',
      'Enables classes inside a variant block',
    ],

    [
      'Todoi',
      'https://todoi.vercel.app',
      'Simple task management application for personal and teams',
    ],

    [
      'Messagen (not completed)',
      'https://messagen.vercel.app',
      'Full featured chat applicaion',
    ],

    [
      'manual-node-env',
      'https://www.npmjs.com/package/manual-node-env',
      'Set NODE_ENV directly from your code or CLI',
    ],

    [
      'node-ls-files',
      'https://www.npmjs.com/package/node-ls-files',
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
    ],

    [
      'react-js',
      'https://github.com/NazmusSayad/react-redux-pwa-boilerplate-vite',
      'A boilerplate for React using vite',
    ],

    [
      'react-js',
      'https://github.com/NazmusSayad/react-redux-pwa-boilerplate-webpack',
      'A boilerplate for React using webpack',
    ],

    [
      'node-js',
      'https://github.com/NazmusSayad/node-express-mongoose-boilerplate',
      'A boilerplate for Node, MongoDB & Express',
    ]
  ),
}

[![Dev dependencies][dependencies-badge]][dependencies]
[![Node.js version][nodejs-badge]][nodejs]
[![NPM version][npm-badge]][npm]
[![Build Status][travis-badge]][travis-ci]

[![MIT License][license-badge]][LICENSE]
[![PRs Welcome][prs-badge]][prs]
[![Donate][donate-badge]][donate]

[![Watch on GitHub][github-watch-badge]][github-watch]
[![Star on GitHub][github-star-badge]][github-star]
[![Tweet][twitter-badge]][twitter]

# node-typescript-boilerplate

Original template: <https://github.com/jsynowiec/node-typescript-boilerplate>

Minimalistic boilerplate to jump-start a [Node.js][nodejs] project in [TypeScript][typescript] [2.3][typescript-23].

Provides a basic template, batteries included:

+ [TypeScript][typescript] 2.3 to ES6 transpilation,
+ [TSLint][tslint] 5.x with [Microsoft recommended rules][slint-microsoft-contrib],
+ [Jest][jest] unit testing and code coverage,
+ Type definitions for Node.js v6.x (LTS) and Jest,
+ [NPM scripts for common operations](#available-scripts),
+ a simple example of TypeScript code and unit test,
+ .editorconfig for consistent file format.

## Quick start

This project is intended to be used with nvm, which will automatically install [Node.js v6.x (LTS)][nodejs] or later. 
Make sure you have nvm installed, or install Node and NPM manually. Then just type following commands:

```sh
git clone https://github.com/lukaselmer/node-typescript-boilerplate
cd node-typescript-boilerplate
bin/setup
bin/check
bin/tdd
```

## Available scripts

### Scripts

+ `bin/setup` - installs everything you need, 
+ `bin/check` - remove coverage data, Jest cache and transpiled files,
+ `bin/tdd` - transpile TypeScript to ES6,

### NPM

+ `clean` - remove coverage data, Jest cache and transpiled files,
+ `build` - transpile TypeScript to ES6,
+ `watch` - interactive watch mode to automatically transpile source files, 
+ `lint` - lint source files and tests,
+ `test` - run tests,
+ `test:watch` - interactive watch mode to automatically re-run tests

## Alternative

As an alternative to TypeScript, you can try my [Node.js Flow boilerplate][flow-boilerplate]. It's basically the same but with ES6, async/await, Flow type checking and ESLint.

## License

MIT License. See the [LICENSE](https://github.com/lukaselmer/node-typescript-boilerplate/blob/master/LICENSE) file.

[dependencies-badge]: https://david-dm.org/lukaselmer/node-typescript-boilerplate/dev-status.svg
[dependencies]: https://david-dm.org/lukaselmer/node-typescript-boilerplate?type=dev
[nodejs-badge]: https://img.shields.io/badge/node->=%206.9.0-blue.svg
[nodejs]: https://nodejs.org/dist/latest-v6.x/docs/api/
[npm-badge]: https://img.shields.io/badge/npm->=%203.10.8-blue.svg
[npm]: https://docs.npmjs.com/
[travis-badge]: https://travis-ci.org/lukaselmer/node-typescript-boilerplate.svg?branch=master
[travis-ci]: https://travis-ci.org/lukaselmer/node-typescript-boilerplate
[typescript]: https://www.typescriptlang.org/
[typescript-23]: https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-3.html
[license-badge]: https://img.shields.io/badge/license-MIT-blue.svg
[license]: https://github.com/lukaselmer/node-typescript-boilerplate/blob/master/LICENSE
[prs-badge]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg
[prs]: http://makeapullrequest.com
[donate-badge]: https://img.shields.io/badge/$-support-green.svg
[donate]: http://bit.ly/donate-js
[github-watch-badge]: https://img.shields.io/github/watchers/lukaselmer/node-typescript-boilerplate.svg?style=social
[github-watch]: https://github.com/lukaselmer/node-typescript-boilerplate/watchers
[github-star-badge]: https://img.shields.io/github/stars/lukaselmer/node-typescript-boilerplate.svg?style=social
[github-star]: https://github.com/lukaselmer/node-typescript-boilerplate/stargazers
[twitter]: https://twitter.com/intent/tweet?text=Check%20out%20this%20Node.js%20TypeScript%20boilerplate!%20https://github.com/lukaselmer/node-typescript-boilerplate%20%F0%9F%91%8D
[twitter-badge]: https://img.shields.io/twitter/url/https/lukaselmer/node-typescript-boilerplate.svg?style=social
[jest]: https://facebook.github.io/jest/
[tslint]: https://palantir.github.io/tslint/
[slint-microsoft-contrib]: https://github.com/Microsoft/tslint-microsoft-contrib

[flow-boilerplate]: https://github.com/lukaselmer/node-flowtype-boilerplate
[wiki-js-tests]: https://github.com/lukaselmer/node-typescript-boilerplate/wiki/Unit-tests-in-plain-JavaScript

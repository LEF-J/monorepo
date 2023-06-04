# LEF-J Monorepo

> Is important to use pnpm throughout the repo

## Monrepo Basic

- repositories stay inside the `apps/` folder
- Create a new 'app' by:

  ```bash
  cd apps/
  pnpm create next-app@latest # example
  ```

- `Packages` are simpler app that can be share between multiple apps, like a
  component library or shared configs (`tsconfigs.json`...) or a server/client provider for fetching ...

## Pnpm Basics

| Command                           | npm                                  | yarn                                           | pnpm                                            |
| --------------------------------- | ------------------------------------ | ---------------------------------------------- | ----------------------------------------------- |
| Install                           | `npm i`                              | `yarn [install]`                               | `pnpm i`                                        |
| Add package                       | `npm i <package> [--global]`         | `yarn [global] add <package>`                  | `pnpm add <package> [--global]`                 |
| Add package as `peerDependencies` |                                      | `yarn add <package> --peer`                    | `pnpm add <package> --save-peer`                |
| Add package as `devDependencies`  | `npm i <package> --save-dev`         | `yarn add -D <package>`                        | `pnpm add <package> --save-dev`                 |
| Uninstall package                 | `npm uninstall <package> [--global]` | `yarn [global] remove <package>`               | `pnpm uninstall <package> [--global]`           |
| Update package                    | `npm update [<package>] [--global]`  | `yanr [global] upgrade [<package>] [--latest]` | `pnpm update [<package>] [--latest] [--global]` |
| List top level packages           | `npm list --depth 0`                 | `yarn list --depth 0`                          | `pnpm list --depth 0`                           |
| List outdated packages            | `npm outdated`                       | `yarn outdated`                                | `pnpm outdated`                                 |
| Run script                        | `npm run <script>`                   | `yarn <script>`                                | `pnpm [run] script`                             |
| Run remotely                      | `npx <package>`                      | `yarn dlx <package>`                           | `pnpm dlx <package>`                            |
| Run Create level remotely         | `npx create-<pacakge>`               | `yarn create <package>`                        | `pnpm create <package>`                         |

### Apps and Packages

- `web/`: a `pnpm create next-app` example [Next.js](https://nextjs.org/) app
- `ui/`: a stub React component library shared by both `web` and/or any other applications under `apps/` `[DEFAULT example]`
- `eslint-config-custom/`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`) `[DEFAULT example]`
- `tsconfig/`: `tsconfig.json`s used throughout the monorepo
- `configs/`: any package config shared throughout the monorepo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This Turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

### Build

To build all apps and packages, run the following command:

```bash
pnpm build
# or
pnpm build --filter <app?name> # for single app
```

### Develop

To develop all apps and packages, run the following command:

```bash
pnpm dev
# or
pnpm dev --filter <app?name> # for single app
```

### Remote Caching

Turborepo can use a technique known as [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching) to share cache artifacts across machines, enabling you to share build caches with your team and CI/CD pipelines.

By default, Turborepo will cache locally. To enable Remote Caching you will need an account with Vercel. If you don't have an account you can [create one](https://vercel.com/signup), then enter the following commands:

```bash
npx turbo login
```

This will authenticate the Turborepo CLI with your [Vercel account](https://vercel.com/docs/concepts/personal-accounts/overview).

Next, you can link your Turborepo to your Remote Cache by running the following command from the root of your Turborepo:

```bash
npx turbo link
```

## Useful Links

Learn more about the power of Turborepo:

- [PNPM](https://pnpm.io/)
- [Tasks](https://turbo.build/repo/docs/core-concepts/monorepos/running-tasks)
- [Caching](https://turbo.build/repo/docs/core-concepts/caching)
- [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching)
- [Filtering](https://turbo.build/repo/docs/core-concepts/monorepos/filtering)
- [Configuration Options](https://turbo.build/repo/docs/reference/configuration)
- [CLI Usage](https://turbo.build/repo/docs/reference/command-line-reference)

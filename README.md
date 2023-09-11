# React MonoRepo. Template

## if you are going to build CMS or CRM this will be a great starter.

This Template built under vite. mono repo(Multi module) using yarn workspace and yarn-berry zero install.

- **Typescript Based**
- **Mui for UI tools (https://mui.com/)**
- **Storybook for testing components**
- **Zustand for global state**
- **You can build the project various development environment (local, develop, production ...) using .env\[mode]**
  <br/>

> **The goal for This Project is Simple to use**

## Installation

It requires yarn-berry(yarn3) to install nothing but just yarn to install dependancies.

```sh
yarn
```

## Create new package

```sh
mkdir packages/{NewServiceName}
cd packages/{NewServiceName}
yarn init
yarn add @gdev219/common
```

**packages/{newServiceName}/package.json** should be like this

```json
{
  "name": "@gdev219/service2",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "dependencies": {
    "@gdev219/common": "workspace:^"
  }
}
```

## Deploy Project

We are using vite as a build tool. each of package has its own build command in package.json. for your convinience you can specify your own build command for each project on top of package.

```json
"scripts": {
    "storybook": "yarn workspace @gdev219/common storybook",
    "local:service1": "yarn workspace @gdev219/service1 dev",
    "build-dev:service1": "yarn workspace @gdev219/service1 build:dev"
}
```

## Source Structure

```
mono-repo/
├── node_modules/
├── packages/
│   ├── common
│   ├── service1
|   |   ├── src/
│   |   ├── components/
│   |   │   ├── Header.ts
│   |   │   ├── Sidebar.ts
│   |   │   ├── ...
│   |   ├── pages/
│   |   │   ├── Home.ts
│   |   │   ├── About.ts
│   |   │   ├── ...
│   |   ├── styles/
│   |   │   ├── main.css
│   |   │   ├── ...
│   |   ├── utils/
│   |   │   ├── api.ts
│   |   │   ├── helpers.ts
│   |   ├── App.ts
│   |   ├── index.ts
|   |   ├── .gitignore
│   └── service2
├── package.json
├── README.md
└── ...
```

## License

MIT

**Free Software, Hell Yeah!**

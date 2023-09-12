# React MonoRepo. Template

## if you are going to build CMS or CRM this will be a great starter.

This Template built under vite. mono repo(Multi module) using yarn workspace and yarn-berry zero install.

- **Typescript Based**
- **Mui for UI tools (https://mui.com/)**
- **Storybook for testing components**
- **Zustand for global state**
- **You can build the project various development environment (local, develop, production ...) using .env\[mode]**
- **Yarn-berry Zero install**
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

## State Management

In a production environment, it's common to encounter various states scattered across our components. To mitigate this, it's advisable to keep the components as pure as possible and rely on the store solely for managing global states, such as tokens and user information.

**Zustand [🔗](https://github.com/pmndrs/zustand)**

out global states is consist of bunch of slices

```typescript
export const createUserSlice: StateCreator<GlobalState, [], [], UserSlice> = (set, get) => ({
  user: {
    id: '',
  },
  updateUser: () => set((state) => ({ user: state.user })),
  getIsLoggedIn: () => {
    const user = get().user;
    return !!Object.keys(user);
  },
});
```

you can add new slice with **StateCreator**
and also simply persist some state to storage you wang by using partialize

```typescript
create<GlobalState>()(
  persist(
    (...state) => ({
      ...createTokenSlice(...state),
      ...createUserSlice(...state),
    }),
    {
      name: 'gdev219',
      partialize: (state) => {
        return { tokens: state.tokens };
      },
    },
  ),
);
```

## MUI [🔗](https://mui.com/)

Customize MUI theme pallette.

```typescript
export const theme = createTheme(customTheme, {
  palette: {
    page: customTheme.palette.augmentColor({
      color: { main: '#F5F6F8' },
      name: 'page',
    }),
  },
});
```

Customize MUI component using styled engine

```typescript
const StyledDialog = styled(Dialog)(() => ({
  '& .MuiPaper-root': {
    padding: '40px',
  },
}));
```

## Useful built-in components

<H4>BaseIcon</H4>

BaseIcon component read files(.svg) from file system using <code>import.meta.glob</code>

<H4>BaseMenu</H4>

Recursive components that support an infinitely deep tree of menus.

<H4>PageGridLayout</H4>

With PageGridLayout component you can build Page consist of Grid,Search,Filter with just insulting slots.

```tsx
<PageGridLayout
  filter={<CustomDataGridFilter filters={filters} onChangeFilters={handleChangeFilters} />}
  header={
    <CustomDataGridHeader
      count={{ select: selectCount, search: 0, total: 0 }}
      sortList={[
        { title: '최신순', value: 'new' },
        { title: '등록일순', value: 'old' },
      ]}
    />
  }
  grid={
    <DataGrid
      apiRef={apiRef}
      rows={rows}
      columns={columns}
      hideFooterPagination
      checkboxSelection
      disableRowSelectionOnClick
      disableColumnFilter
      hideFooter
    />
  }
  pagination={<CustomDataGridPagination variant="text" count={10} defaultPage={10} boundaryCount={10} />}
/>
```

## Build Project

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

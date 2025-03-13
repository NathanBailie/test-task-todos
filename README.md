# Frontend test task

## Description

Test task for the Frontend Developer position.

---

## Main Features:

1. **Data Provider** — a Higher-Order Component (HOC) that fetches data using service `fetchData`, manages filter states, errors, and shares them via DataContext to child components.
2. **TaskTable** — implements a feature that displays a list of tasks. It shows a spinner while the data is loading and an error message if the fetching fails.
3. **TaskAdder** — implemented a feature that allows users to add new tasks. It updates the task list when a task is added via a button click or pressing the "Enter" key.
4. **TaskFilter** — implemented a feature that allows sorting all tasks by completion status. It includes options to filter active tasks, display the active task counter, and clear completed tasks.
5. **Custom UI components**: implemented a small library of custom UI components, including Checkbox, ErrorMessage, Input, Spinner, and Text.
6. **TaskItem** — implemented an `entity` that displays individual tasks with a checkbox to mark completion and the ability to toggle between viewing and editing task text. It updates the task list when changes are made.
7. **Adaptability** - all components are fully responsive.

---

## Tech Stack

1. **React** — the project was manually configured from scratch. All libraries, dependencies, including bundlers, linters, formatters, and pre-commit hooks, were configured manually.
2. **TypeScript** — used in combination with React.
3. **React Testing Library & Jest** — for testing.
4. **Husky + Lint Staged** — for pre-commit hooks.
5. **ESLint + StyleLint** — for automatic code quality control.
6. **Prettier** — for auto-formatting the code.
7. **Webpack** — for project bundling.
8. **Vite** — for fast development mode.

---

## Project launch

```
npm install - install dependencies
npm run start - launch the project using Vite
npm run start:webpack - launch the project on the Webpack dev server
```

---

## Scripts

- `npm run start` - Launch the frontend project using Vite
- `npm run start:webpack` - Launch the frontend project on the Webpack dev server on port 3000
- `npm run build:dev` - Build the project in development mode using Webpack
- `npm run build:prod` - Build the project in production mode using Webpack
- `npm run lint:ts` - Run ESLint to check TypeScript and TSX files for linting issues
- `npm run lint:ts:fix` - Run ESLint and automatically fix linting issues in TypeScript and TSX files
- `npm run lint:scss` - Run Stylelint to check SCSS files for linting issues
- `npm run lint:scss:fix` - Run Stylelint and automatically fix linting issues in SCSS files
- `npm run prettier` - Format TypeScript, TSX, and JSON files using Prettier
- `npm run prepare` - Automatically set up Husky for managing Git hooks
- `npm run test:unit` - Run unit tests with jest

---

## Project architecture

The project is developed according to the Feature-Sliced Design methodology.

Documentation link - - [Feature-Sliced Design](https://feature-sliced.design/docs/get-started/tutorial)

---

## Tests

The project uses tests with **Jest** and **React Testing Library**:

- `npm run test:unit` - this script will run unit tests

---

## Linting

This project uses ESLint, Stylelint, and Prettier to maintain code quality. ESLint ensures consistent and error-free TypeScript code, Stylelint checks SCSS files for style issues, and Prettier automatically formats TypeScript, TSX, and JSON files for consistent code styling.

##### Launch linters and formatter:

- `npm run lint:ts` - Lint TypeScript files
- `npm run lint:ts:fix` - Fix TypeScript files with ESLint
- `npm run lint:scss` - Lint SCSS files with the style linter
- `npm run lint:scss:fix` - Fix SCSS files with the style linter
- `npm run prettier` - Format TypeScript, TSX, and JSON files using Prettier

---

## Project configuration

For development, the project contains 2 configs:

- [Webpack](/config/webpack/config_build.ts)
- [Vite](/vite.config.ts)

---

## Features

- [TaskTable](/src/features/TaskTable)
- [TaskAdder](/src/features/TaskAdder)
- [TaskFilter](/src/features/TaskFilter)

## Entities

- [TableItem](/src/entities/TableItem)
- [MainTitle](/src/entities/MainTitle)

## Widgets

- [ActiveTaskCounter](/src/widgets/ActiveTaskCounter)
- [StatusFilters](/src/widgets/StatusFilters)

## Shared UI

- [Checkbox](/src/shared/ui/Checkbox)
- [ErrorMessage](/src/shared/ui/ErrorMessage)
- [Input](/src/shared/ui/Input)
- [Text](/src/shared/ui/Text)
- [Spinner](/src/shared/ui/Spinner)

---

## Screenshots

<img src="https://github.com/NathanBailie/test-task-todos/raw/main/src/shared/assets/screenshots/main.png" width="900" />
<img src="https://github.com/NathanBailie/test-task-todos/raw/main/src/shared/assets/screenshots/with-done-task.png" width="900" />
<img src="https://github.com/NathanBailie/test-task-todos/raw/main/src/shared/assets/screenshots/task-adding.png" width="900" />
<img src="https://github.com/NathanBailie/test-task-todos/raw/main/src/shared/assets/screenshots/mobile.png" width="500" />
<img src="https://github.com/NathanBailie/test-task-todos/raw/main/src/shared/assets/screenshots/tests.png" width="500" />

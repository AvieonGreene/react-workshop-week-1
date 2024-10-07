# React workshop week 1

welcome! in this workshop you'll learn how to work on React projects.
we'll help you get the project and your dev environment set up.
then, we'll make some changes to get you familiar with the workflow of a React project.
we'll also give you a bonus goal to implement for fun 🙂

## getting started

first, we'll need to clone this repo.
open a terminal.
navigate to your code directory.
run

```sh
git clone https://github.com/CodeYouOrg/react-workshop-week-1
```

second, we'll install the project's dependencies.
we'll do this with [npm](https://docs.npmjs.com/cli/v10/commands/npm).
npm comes with Node.js.
`cd` into the directory for the newly cloned repo and run

```sh
npm install
# or
npm i
```

this installs React, along with [Vite](https://vitejs.dev/).
Vite is two tools in one:

- a development server that allows you to see your changes as they happen
- a build command that bundles the project and produces files for a production deploy 

once we've installed the project's dependencies, we can finally run it!
run

```sh
npm run dev
```

this will start a server at [localhost:5173](localhost:5173).
we can start making changes and they will reflect in our browser immediately

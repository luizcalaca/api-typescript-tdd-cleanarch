# api-typescript-tdd-cleanarch

## Git configurations

```sh
git config --list (all the configurations that we have on local machine
git config --system (git for all users on system)
git config --global (configuration for my user for all projects)
```

```sh
git config --global --edit (for editing configurations with vi)
git config --global core.editor code (for editing with visual code)
```

Some created alias with --global:

```sh
[core]
	editor = code --wait
[alias]
	s = !git status -s
	c = !git add --all && git commit -m
	l = !git log --pretty=format:'%C(blue)%h %C(red)%d %C(white)%s - %C(cyan)%cn, %C(green)%cr'
```

```sh
git commit --ammend --no-edit (join with previous commit)
```
## Git commit linter for conventional commits

Link: https://www.conventionalcommits.org/en/v1.0.0/
Link: https://www.npmjs.com/package/git-commit-msg-linter

```sh
npm i git-commit-msg-linter
```

## Typescript configurations

```sh
npm i -D typescript @types/node
```

After install it we can create the tsconfig.json

ESlint with Typescript

link: https://github.com/standard/eslint-config-standard-with-typescript

## Husky and Lint-staged configurations

```sh
npm install husky --save-dev
```

We use it for commit quality, because it not permits that file be committed without typescript standard (eslint)

Let's use lint-staged for husky executing only in files on staging area. Like this, we don't need do verify all files, but just the current work.

```sh
npm i -D lint-staged 
```

Create .huskyrc.json and its configurations as well .lintstagedrc.json.
Husky call lint-staged for eslint executing.

## Jest configurations

```sh
npm i -D jest @types/jest ts-jest
```

```sh
npx jest --init
```
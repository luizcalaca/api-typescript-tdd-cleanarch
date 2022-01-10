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
## Typescript configurations

```sh
npm i -D typescript @types/node
```

After install it we can create the tsconfig.json
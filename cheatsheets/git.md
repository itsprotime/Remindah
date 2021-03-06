---
path: "/git"
title: "Git"
---

# Git

>Note: Just replace the <text> including the arrows with real data

## Commands

| <ins>Commands</ins> | <ins>Descriptions</ins> |
| --- | --- |
| <br /><br /> |
| `git init`                                        | Initializes git for your project |
| `git clone <url>`                                 | Clones or downloads a repository to your local environment |
| `git status`                                      | Checks the status or changes of the repository |
| `git diff`                                        | Show and lets you review the changes you have made |
| `git diff --cached`                               | Show the changes of the file/s that is/are about to be committed |
| `git diff --stat`                                 | Still, it will show the changes that were made, to check the number of lines changed |
| `git add .`                                       | Add ALL the files to be committed |
| `git add -A`                                      | Handles all deletions, modifications and automatically moves to staging |
| `git commit -am "message here"`                   | A short hand for adding or staging files then also immediately committing the files |
| `git commit -m "message here"`                    | Committing or preparing the changes you made, with -m you are able to put a message |
| `git commit --amend`                              | This will allow you to change the commit message from your previous commits |
| `git push`                                        | Pushes all changes, meaning everything will overwritten with the new changes |
| `git push --force-with-lease`                     | Gives you the flexibility to override new commits on your remote branch, whilst protecting your old commit history |
| `git pull`                                        | It is a shorthand for git fetch, which will get all the latest overall status of the repository |
| `git fetch --all`                                 | Other way to pull or fetch all the latest commits |
| `git log`                                         | It basically just show all the commit logs, who did and when |
| `git config --global user.email "user@email.com"` | Sets the committer email |
| `git checkout <file>`                             | file modified but you want to ignore the change, so undo |
| `git reset HEAD <file>`                           | unstaging, ignoring "added" files then add the new modified one |
| `git rm <file>`                                   | deletes file and put to staging automatically, ready for commit |
| `git rm -r --cached <directoryName>`              | deletes the remote directory but will not delete the local |
| `git cherry-pick <commit-hash>`                   | This will grab a commit from a different branch and applies it to the current branch |
| <br /><br /> |
| **Branch** |
| `git checkout hash`                     | this will let you restore a specific log, you can also save it as master if you like |
| `git branch <newBranchname>`            | creating a fresh branch |
| `git checkout <branchName>`             | this will allow you to select a specific branch, or if you want to return to master |
| `git checkout -b <newBranchName>`       | this is a shortcut that lets you create a new branch and immediately switch to that newly created branch |
| `git branch`                            | lists all branches |
| `git branch -a`                         | list ALL branches, even branches that are on the remote |
| `git branch <newBranchname> hash`       | after returning to master, you can create a new branch from the specific log you loaded seconds ago |
| `git branch -m <oldName newName>`       | changing a branch name to something else |
| `git branch -d <branchName>`            | safer way of deleting branches |
| `git branch -D <branchName>`            | force delete a branch |
| `git push origin --delete <branchName>` | deleting a remote branch |
| `git push origin <branchName>`          | if there is no upstream branch, use this to push your branch |
| `git pull origin <branchName>`          | it will allow you to get the most recent changes from the remote branch |
| `git pull --rebase origin <branchName>` | it will pull changes from a specific branch and rebase it to your branch to latest commits |
| `git rebase -i origin/<branchName>`     | rebase applies commits, one by one, from current branch onto another. The -i will open an editor with a list of commits which are about to be changed |
| `git reset --hard origin/master`        | it will unstage and reset all your local changes and will match the file in origin/master |
| `git reset --hard origin/<branchName>`  | the same with above but if you are on a branch, you can use this |
| <br /><br /> |
| **Merge** |
| `git merge master`              | if you are inside a branch, then you can use this to merge master to the branch you're in |
| `git rebase master`             | if you are inside a branch, this will take your changes off from the branch you're in, get latest master changes, then it will combine but this will not merge yet |
| `git merge <branchName>`        | merging branch to master, this code applies if you are already inside master |
| `git merge <branchName> -no-ff` | if you are already on master, this tells git you want to retain all of the commit messages prior to merge, good for future reference |
| `git merge --abort`             | this will return to the clean state BEFORE you started the merge at any time |
| `git reset --hard`              | in case you've made a mistake, and you just realize this after the merge, then you can undo and roll back to the commit before the merge, start over again |
| <br /><br /> |
| **Merge, pertaining to conflicts** |
| `git config rerere.enabled true`   | can be a solution :: if ever there is a same conflict that has been previously recorded, this, if enabled, will automatically resolve it for you |
| `git merge -s ours <branchName>`   | if in case there is a conflict and you want to use/select your branch |
| `git merge -s theirs <branchName>` | if in case there is a conflict and you want to use/select their branch |
| <br /><br /> |
| **Initialize a Remote Repo** |
| `git remote add origin <yourRemoteRepoURL>` | if you have just git init a local directory and you want to initialize a repo into that local directory, use this |
| `git remote -v`                             | this will verify your new remote repo URL, use this after the first command |
| <br /><br /> |
| **List** |
| `git ls-tree --full-tree -r HEAD` | will list all the content within the current directory |
| <br /><br /> |
| **Config** |
| `git config --list` | will display all settings in your git config file |
<br />

---
<br />

## `.gitignore` File Patterns

| <ins>File Pattern</ins> | <ins>Descriptions</ins> |
| --- | --- |
| `.file`       | name your files starting with a . (dot), this particular pattern will ignore file or folder named target recursively |
| `.directory/` | name your files starting with a . (dot), this particular pattern will ignore directory (due to the trailing /) recursively |
| `*.text`      | this particular pattern(Prepending `*`) is a wildcard, and it will ignore every file or folder ending with `.text` recursively. <br />Eg., `a.text`, `b.text`, `abc.text`, these files will all be ignored. |

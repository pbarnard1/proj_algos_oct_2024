# Collaborating on GitHub

Collaborating is essential as you will likely be working on tons of projects with coworkers in the future.  One common way to share code is through GitHub.

Think of the main/master branch as the working - or enterprise - code for the application you're building or adding features onto.  **Branches** are used a lot to allow coders to write and test their own code before it is saved as part of the main application.

One common branch is a development branch.  The development branch will come off the main/master branch.  Now from the development branch will be branches for each feature that will be built, like login/registration, adding a "Like" button with the updated functionality, etc.

Once someone is finished building their features, they talk to whomever is responsible for managing the project to make what's called a **pull request**.  A pull request is essentially a request to have a person's code added to a branch.  So when the pull request is made, that person will talk to the other members of the project - usually the leads - and discuss what they added.  One can add as much code as they wish while in their own branch until it is set and ready.  If the code is good, that person's branch will be merged into the development branch.  Once all the features are added, then the development branch can be merged into the main/master branch to become part of the enterprise code.

## Starting a collaborative effort - owner only

The owner of the repository should create a repository with minimal files.  I would recommend just a .gitignore file and possibly a README.md file that describes the routes your project will have and the features it'll hold.  Once that person pushes the repository online (through `git init`, `git add .`, `git commit`, `git remote add origin` and `git push`), then that person should create a new branch.  To do so, type this command:
```
git checkout -b new_branch_name
```
This will create a new branch named "new_branch_name".  (The -b flag means new branch.)  I recommend naming this branch something that describes that you're developing some features, so something like "development_branch", "dev_branch" or a similar name.

Now the owner should be in that new branch.  That person should then begin laying out the basic file and folder structure that everyone in the project will use.  Once it's set up, do `git add` and `git commit` like normal.  However, when pushing, be CAREFUL - use this command:
```
git push -u origin new_branch_name
```
Here "new_branch_name" is the name of the branch you just made that has the new files.  (The "-u" flag will set up the current branch as the default we're pushing from when we add to the repo online.)

Once that's done, now you can invite other people to your repository.  Go to your repo online, then go to "Settings" -> look for "Collaborators" under "Access", then under "Manage Access", click on "Add people".  All you need are the names of the profiles of the people you wish to add.  Those people will need to accept the invitations.

(Alternately, you can set up an organization and add collaborators that way before you create the repository.  This will allow people to work on multiple repositories.)

Recommendation: You can add a branch protection rule to the "main" branch, or whichever branches you wish that will contain the main code.  In your repo, go to "Settings" -> "Branches" -> "Add branch protection rule", then add the branch name and select "Require a pull request before merging."  This way, everyone, including the owner, needs approval from at least one collaborator (you can specify the number required, although for your projects it'll usually be 1).

## Other group members
Once you've received the invitation, accept it.  Navigate to the spot in your computer you want to put the project in.  (IMPORTANT: Make sure this ISN'T an already existing repo, as we don't want you to have nested repositories!)

Use this command:
```
git clone https://github.com/<owner_name_here>/<repo_name_here>.git
```
Remove the "<>".  You might need a personal access token here, and if you do, then try the following instead:
```
git clone https://<your_token_here>@github.com/<owner_name_here>/<repo_name_here>.git
```
(If you need a personal access token, click on your profile image, then go to "Settings" -> scroll down to "Developer settings" -> "Personal access tokens" -> "Tokens (classic)" [NOT the fine-grained tokens] -> click on "Generate new token" [select classic] -> select all the checkboxes -> then generate the new token.  Make sure it's saved somewhere safe!!)

If successful, you'll get the repo saved in a new folder.  Navigate (cd) into that folder.

Now do:
```
git checkout new_branch_name
```
Here new_branch_name is the name of the branch that the owner created.  You will want to either talk to the owner OR go to the repo online and find that branch name.

Once you've moved into that branch, create a new branch and name it as you see fit.  The command is:
```
git checkout -b your_individual_branch_name
```
The -b flag means a new branch.  You can pick any branch name you want, as long as it's not a duplicate of a previously existing branch with that name.

Now you can add code!  Once you're set, do the usual `git add` and `git commit`.  Now when you push, type the following:
```
git push -u origin your_individual_branch_name
```
Now create a pull request online.  When you do that, the format is:
"branch_to_merge_into" <- "your_individual_branch_name"
Make sure you select the correct branches!  Contact the owner or another collaborator to let them know you're ready.

If the pull request is approved, your code will be merged.

## For ALL:
It's important to pull ALL the time!!!  Do it at the start of every day at least!!!  

To bring in the latest code, **make sure you're in the main (or whichever branch has the primary or working code) branch!!**  (If not, do `git checkout main` [or `git checkout <branch_to_go_to>`].)  Then do the following:
```
git pull
```
For most, if not all of you, it'll be the main/development branch.  The `git pull` command brings in the latest version of the *current* branch you're in, which is why it's important to switch to the main branch!

In order to bring in the latest code to your branch, make sure you're in that branch first!!  Once you are, then do the following:
```
git merge name_to_merge_from
```
This will bring in the code from the branch you're merging from, which likely is the main/development branch.

From here, it's `git add`, `git commit`, `git push origin name_of_your_branch`, make a pull request, etc.  Remember to pull constantly and merge into your branch as needed!

To switch between branches, do:
```
git checkout branch_to_go_to
```
Notice there's no "-b" flag as the branches should still be there.

Collaborating takes a ton of practice!

## Merge conflicts
Oftentimes you will run into this for various reasons, such as two people working on the same file.  The best way to resolve this is to pull the code like normal to your machine, and look at it in VS Code or STS.  There you can decide what to keep and what to leave out.  Alternately you can resolve the conflicts on GitHub's site, although the interface isn't as good.  How you do it is up to you.  Stay in touch, especially if there's a merge conflict!  Talk to your fellow group members if there's a problem that arises due to a conflict.

## Debugging: what if you accidentally add files to the staging area but did NOT commit them yet in your repository on your computer?
You can use the command `git reset file_to_remove` or `git reset .` to remove changes.  Don't worry, your files won't go anywhere on your computer; they only get removed from the staging area (where your files go when you run `git add`).

## Debugging: what if you accidentally added files and committed them but did NOT push to GitHub yet?
1. Type `git log` to look at your commit history.  Each commit will say something along the lines of `commit 0123456789abcdef`, where you have an SHA hash consisting of hexadecimal characters (so 0-9, and the letters A-F) that follows the word `commit` that essentially represents an ID of that timestamp of your history.  Pick out the one you want to revert to, and copy its SHA.
2. Run `git reset the_id_you_want_here` to bring your repository's version of the repo back to that point.  Your newest commit will no longer be part of your history.  (Technically, that's not 100% accurate, as the newest commit is effectively orphaned, meaning there's no direct connection.  Git will delete it interally via garbage collection within 30 days.)  Don't worry, your files should still be there on your computer.

## Debugging: what if you accidentally push stuff to GitHub?

If you ever run into the scenario where you accidentally push stuff to GitHub that shouldn't be there, don't panic!  If you want to just undo the history WITHOUT removing any files locally on your machine, here's how:

1. Type `git log` to look at your commit history.  Each commit will say something along the lines of `commit 0123456789abcdef`, where you have an SHA hash consisting of hexadecimal characters (so 0-9, and the letters A-F) that follows the word `commit` that essentially represents an ID of that timestamp of your history.  Pick out the one you want to revert to, and copy its SHA.
2. Run `git reset the_id_you_want_here` to bring your repository's version of the repo back to that point.  This will NOT update on GitHub yet!  Don't worry, your files should still be there on your computer.
3. Run `git push -f` to force a push.  This will revert the commit on GitHub for good.

More info here: https://www.atlassian.com/git/tutorials/undoing-changes

(You can alternately try a different command called `git revert` which creates a new commit [timestamp] while going back to a previous version of your repository.  In other words, the commit that was undone is still part of your history, whereas the newest commit is basically a previous commit.  The command `git reset` allows you to change your history.  So `git reset` is more useful if you want to permanently undo stuff that you don't want in your history - particularly on GitHub, especially if you accidentally push stuff like secret keys, passwords, other credentials, etc.

Be a bit careful with using `git reset`, though.  `git revert` is actually more often used in a real-life setting, as `git reset` is considered a more dangerous command that ideally should only be used for your local version of the repository and not the repository on GitHub.  You can find more info here on reset vs. revert: https://www.atlassian.com/git/tutorials/undoing-changes/git-revert.)

## Other commands that you might find useful:
- `git stash`: Temporarily stashes stuff you added to the staging area via `git add`.  More info here: https://www.atlassian.com/git/tutorials/saving-changes/git-stash
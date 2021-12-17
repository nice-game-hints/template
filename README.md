# Writing a guide
So, you want to write your own hints for a game? That's cool. Every game should have spoiler free hints! Best place to start is [this template repository](https://github.com/nice-game-hints/template). It has examples and the following instructions.

<p class="hidden">
Fill this README.md with something you want to tell _a contributor_. This README is not shown in the www.nicegamehints.com site.
 
Copy this template repository (From the green "Clone or download" button) to get started with your own game hints.
</p>

# Concepts of a game hint repository
The concepts for the NGH hints are **a game** that contains multiple **guides**. **A guide** has multiple **hints** that the reader can then reveal one by one. **A guide** can also have **subguides**.

Guide files are written using [markdown](https://guides.github.com/features/mastering-markdown/) language.

## index.md - Metadata about the game
The one required file is `index.md`. This file defines the name of the game and other metadata for the game. Example `index.md` looks like this:
```markdown
---
title: Deponia Doomsday
keywords: deponia doomsday, guide
author: Juho Rutila
praise: https://www.buymeacoffee.com/jrutila
---

Welcome to free hints for Deponia Doomsday! Select a guide.
```

The part between `---` lines is _metadata_:
 - _title_: The name of the game that is shown in the page and page title etc.
 - _keywords_: list of keywords to help search engines
 - _author_: Your name. Shown under every guide.
 - _praise_: buymeacoffee.com url to ask readers to give you money for your hard work with the guide.

The rest of the text is markdown shown in the first page of the guide.

## Guide file
A guide file is just a md file containing the hints with headers. Example of a guide file:
```markdown
---
title: How to get tin foil?
keywords: tin foil, baked potato
---

This text is shown first to the reader and it is also visible in Google snippet.

# Show the first hint
Everything until the next `#` line is part of the first hint. You can use markdown notations.

# Show the second hint
This is the contents of the second hint. Here is a picture:
![This picture text is not shown](picture_file_name.png)

## Tell me the solution
The two hashtags means that this text will contain spoilers. The button is rendered red so that the reader knows to watch out.
```

Again, the guide file starts with mandatory metadata:
 - _title_: Title of the guide shown in the subguide buttons and as the page title for example in Google listings
 - _keywords_: list of keywords to help search engines
 
The following text is shown to the user straight away so don't give up the solution here yet! It is also shown in Google's listings as they have a preview of the page. The actual hints are not shown in Google.

Every `#` line (markdown's header) denotes one hint under the guide. That text is shown in the hint button so don't make it too long. It can be as simple as "Hint 1", "Hint 2" etc.

Every '##' line denotes a hint that will reveal a spoiler next. These hints get special treatment in the UI.

You can use basic markdown notations: https://guides.github.com/features/mastering-markdown/

## Subguides
Guides form a folder structure. All the folders and md files under the guide's folder form the subguides. Under the guide folder a `index.md` file is required. Example of guide folder structure:
```
📦 repository root
 ┣ 📜 index.md
 ┣ 📂 01-first-part-of-the-game
 ┃ ┣ 📜 index.md
 ┃ ┣ 📜 010-subguide.md
 ┃ ┗ 📂 020-subguide-for-first-part
 ┃   ┗ 📜 index.md
 ┣ 📂 02-second-part-of-the-game
 ┃ ┣ 📜 index.md
 ┃ ┣ 📜 another.md
 ┃ ┗ 📜 benother.md
```

Subguides are listed in alphabetical order so it is suggested to ~~use numbering to name the files~~ use the `order`metadata. The file name is only visible in browser location bar and some other places.
The preferred option is to use `order` metadata. It will then order the sub guides from lower number to higher. For example if you want to order the `benother.md` before `another.md`:
```markdown
filename: another.md
---
title: Second item
order: 50
---
```

```markdown
filename: benother.md
---
title: First item
order: 20
---
```

## Linking between the guides
To link to another guide you write markdown's links. Here is an example guide file.:
```markdown
---
title: How to get tin foil?
---

Guide for tin foil.

# Show the first hint
First, you need [a hot potato](030-potato.md). This will link to another guide file that is in the same folder as the guide file.

# Show the second hint
Next, you need [a potato peeler](../040-potato-peeler/index.md). This will link to another subguide that is in parent folder.

# Show the third hint
Finally, get [a permission to peel](/04-fourth-part-of-the-game/010-permission.md). This will link starting from the root of the guide folder structure.
```

## Linking between the guides to certain hint
To link to another guide's certain hint you write markdown's links with anchors. Here is an example target guide file.:
```markdown
---
title: Linked hints
---

Intro

# First hint
This is the first hint and needs to be skipped

# Second hint {#second}
This is  the second hint we want the reader to get directly

```

To link directly to the second hint:
```markdown
---
title: How to get tin foil?
---

Guide for tin foil.

# Show the first hint
Go to the [other guide's second hint](guide.md#second). This will link to another guide file's second hint.

```


## Quick hints
You can write quick hints inside a guide file. A quick hint is rendered as a question mark button that will show the hint in a popup.

Write quick hint with the markdown footnote notation: `^[ footnote notation ]`

```markdown
---
title: Example about quick hint
---

In this hint you should use some eating utensil. ^[ You can find a fork in the kitche drawer. ]

# I have a tool
The fork? Be careful with it. ^[ Stick the fork into the electric outlet. ]

# Show me
Click on the right question mark to see a picture. ^[ ![This picture text is not shown](picture_inside_quickhint.png) ]
```

## Subguide links
You can also show a link in the subguide list that will point to another guide file.

```markdown
---
linkTitle: This is a subguide linking to another guide
link: /full/path/to/guide.md
```

## background.jpg
You can add a file named `background.jpg` in the root folder of you guide. That image will be used as the background image of the guide. 


## small_bg.jpg
You can add a file named `small_bg.jpg` in the root folder of you guide. That image will be used as the background image in the listing. It has to be 500x300 jpg. 

## Examples?
Browse the [Nice Game Hints repository](https://github.com/nice-game-hints) for examples. The Deponia guides are great to start with!

# Testing the guide
You can test your written guide in www.nicegamehints.com. First you have to have the guide in a local directory structure. This probably is the case if you are writing it locally. Next, you need to serve the directory via http. Simplest way is to use something like http-server (https://www.npmjs.com/package/http-server).

After installing the http-server go to the root of your guide (where the README.md and index.md are).
Then run
```
http-server --cors -d true -c-1 .
```

It should output something like this:
```
Starting up http-server, serving .
Available on:
  http://192.168.64.1:8080
  http://180.97.36.27:8080
  http://127.0.0.1:8080
Hit CTRL-C to stop the server
```
Please note the port of your http-server (in the example it is 8080).

You can test if the http-server is working by navigating with your browser (note the port number) to http://localhost:8080/index.md. You should see your raw index file.

If the http-server is running properly and you see the file, you can now try to navigate to address http://www.nicegamehints.com/guide/local:8080/ (please note the port number).

Adjust your cookies (disable all but required) to see the guide in pure form. The navigation might be having issues (especially when navigating *back*). Please check the url and remove excess "/" characters if you end up in a 404 page.

# Publishing the guide
Please create [an issue](https://github.com/nice-game-hints/template/issues) to this repository about publishing and I will help you with it.

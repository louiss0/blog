<!-- markdownlint-disable-file MD033 -->

# Blog

This project is a blog site that is created to display articles about various topics that
I talk about.
It has only an index page which is created to introduce the site and make the user click on links
to navigate the site.
The two other pages are dynamic pages.
The `topic/[slug]` page is created to generate a page that introduces all posts related to a topic.
The `[collection]/[slug]` page is created to generate a page
for each post.

**To create a page.**

1. Press <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>P</kbd>
2. Select **Front Mattter create content from defined type or template**
3. Select from the list of folders shown.
4. Select a template.
    - **Standalone** is for ramdom info.
    - **Tutorial** is for step by step **tutorials**.
    - **Series** is for a set of posts related to each other .

When writing a blog post you want to place the server right next to you.
I use a vs code extension called Browser Lite to write blog posts in VS code.
It's useful for making sure that my posts are nice to look at.

**To use Browser Lite.**

1. Press <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>P</kbd>
2. Select **Browser Lite: Open**

You are given the option to open it when you start your server.

**To start the server.**

```sh
pnpm run dev
```

This project uses pagefind for search indexes it works whenever you build the website.

- The build command executes `astro build`.

- After that it executes the command for indexing the site.

    `pnpm dlx pagefind --site dist --root-selector body`

- Then it copies the folder created by pagefind into the `public/` folder.

    `cp -r dist/pagefind public`.

The preview script is configured to first build the site then execute `astro preview`.
The main config file for the website is found under. `src/collections.ts`
 This was done to make sure that I could use the `COLLECTION_NAMES`,
an array made from the schema in other files.

## Features

This blog site is a site that is created with three pages each being a feature.
The [Intro Page](#intro-page) is the page that the user uses to navigate the site
and search for single posts.
The [Topic Page](#topic-page) is made to generate a page based on titles of posts related to a topic.
The [Post Page](#post-page) is the page that is used to generate a new page based on each post.

The user can choose between light and dark mode throughout each page.
There is also a way for the user to subscribe to see the feed using RSS.
The user can search for information based on words and titles.

### Intro Page

The intro page is the static page that introduces the site.
It's header has a navbar that allows the user to.
Click on buttons to.

- Toggle dark mode.
- Navigate to the RSS Feed.
- Toggle the search index.

The header has the introduction to the site and hides
the search index input. The user has to click on the
button with the **search icon** to show it. The first section shows the latest 5 posts.
The first one is shown on the left in as a giant card.
The last four are shown on the right as a small card.
The second section has links to all the topic pages.
The footer is a section that first asks the user to either subscribe to the RSS Feed or find me online.
At the bottom of it it features an icon that leads to each social media page that features my profile.

### Topic Page

The topic page is a page that allows the user to toggle
dark mode or go back home using the navbar.
It uses the header to introduce the topic.
Then it has three sections.

- Standalone links to standalone posts
- Tutorial links to tutorials.
- Series links to posts that are related to a series.

### Post Page

The post page is the page that allows it's user to toggle dark mode or go home.
In the navbar then as you navigate down you see an image that is related to the post.
Then you see a Table of Contents and the rest is the
contents of the article.

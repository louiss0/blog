<!-- <!-- markdownlint-disable-file MD033 --> -->
# Blog

This project is the official one for my [blog](https://sheltonswebdevblog.onrender.com).
This project uses Astro and vue to create the app. It uses pagefind in order to search for posts.
Markdoc is used to render the pages since it's more performant than MDX. It uses a tool
called FrontmatterCMS to create pages.


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

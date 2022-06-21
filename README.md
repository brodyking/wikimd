<div id="top"></div>
<!-- PROJECT LOGO -->
<br />
<div align="center">
  <h3 align="center" style="margin: 0px;">[[ wikimd ]] </h3>
  <p align="center">
    A lightweight wiki software that allows for basic page creation in markdown.
    <br />
    <a href="#docs"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://brodyking.github.io/staticjs/">View Demo</a>
    ·
    <a href="https://github.com/brodyking/staticjs/issues">Report Bug</a>
    ·
    <a href="https://github.com/brodyking/staticjs/issues">Request Feature</a>
  </p>
</div>


<!-- ABOUT THE PROJECT -->
## About The Project

<img src='https://bkjs.us/projects/staticjs/editing.png' style='width: 100%;'>

I had a problem, I wanted to create a simple website that would only have a few pages and that would also reuse some components.
Simple enough right? Wrong. My project quickly grew unorganized and a pain to manage.

Thats why I created this! It lets you create websites that have reusable page templates and code snippets.
It runs very fast and dosent even require a server to work!

It was made with 100% vanilla JavaScript, so feel free to look around the src/ folder to see the backend stuff!

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- GETTING STARTED -->
## Getting Started

First, download the latest release by cloning the repo or downloading it directly from github.com
```sh
git clone https://github.com/brodyking/staticjs.git
```

### Prerequisites

You dont need anything to test it on your computer, but it is recommended you host your site on a NGINX or APACHE server.

<div id="docs"></div>

## Documentation

This section of the README is all the documentation that is provided for SJS.

### How it works

When  the `index.html` page is opened, the file `app/pages/index.js` is also run.
This file tells the computer what template and what content should be displayed. 

#### Pages and Layouts
Every page must have a layout provided. A layout is the stuff displayed around the content, like a navigation bar and a footer.
Each layout must have a div with a id of `content`.

All pages live in the `app/pages` directory and all layouts live in the `app/layouts`.

To goto a page, type it in after a `#`. Here is a example: `www.example.com/index.html#about`
When you have any # info in the URL, the site tries to find a page assosiated to it.

#### Configuration
All website configuration happens in `app/config.js`.
Here are some variables you should set

`configPageTitle` title at the top of the tab <br>
`configPageDescription` seo page description <br>
`configPageKeywords` seo page keywords <br>
`configPageAuthor` seo page author <br>

#### Functions
This framework come included with some that you should familiarize yourself with.

`dom(id,condition,content)` allows for easier dom modification <br>
`include(url)` import other js documents <br>
`includeCSS(url)` import other css documents <br>
`layoutAdd(title,url)` import new layouts <br>
`layoutSet(content)` set the content of a layout (put this in the layout file) <br>
`pageAdd(title,url)` import new pages <br>
`pageEdit(layout,content)` set the content of a page (put this in the page file) <br>
`pageLoad(title)` (avoid using this) load pages. <br>
`pluginAdd(title,url)` (avoid using this) import new plugins <br>
`pluginRun(title)` (avoid using this) start plugins <br>
`configSave()` required for config.js to work, makes it all take effect <br>
`snippetAdd(title,url)` import new snippets <br>
`snippetSet(content)` set the content of a snippet (put this in the snippet file) <br>
`snippetGrab()` (avoid using this) search for snippets when page is run.  <br>



<!-- ROADMAP -->
## Roadmap

- [x] Importing CSS
- [x] Page title in tab
- [ ] Improved SEO
- [ ] Better link support

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## Contributing

Contributing to this project would be very helpful as I am not very good at programming and you could probably figure out a way to do everything 10x easier and faster.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- LICENSE -->
## License

Distributed under the Apache License 2.0

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

[Brody King](https://bkjs.us) - bk.2k@hotmail.com

[https://github.com/your_username/repo_name](https://github.com/brodyking/staticjs)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

Here are some tools I used to create this. If you make a future contribution I will add you to this list if you dont do it yourself.

* [Best README Template](https://github.com/othneildrew/Best-README-Template)
* [GitHub Pages](https://pages.github.com)

<p align="right">(<a href="#top">back to top</a>)</p>

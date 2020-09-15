# 11ty-starter

An example static site which uses [Eleventy](https://www.11ty.dev/) as a complete build system for HTML, CSS, JavaScript, and image optimization.

The following Eleventy features are demonstrated:

* markdown content and front-matter
* custom Nunchucks templates
* pages and article posts
* draft and future articles
* article indexes
* filters for dates and word counts
* a shortcode to generate navigation menus
* transformations for HTML and CSS
* image optimization
* PostCSS SCSS processing
* Rollup.js JavaScript processing


## Installation

Ensure Node.js v12 or above is installed, clone the repository, and install all modules:

```sh
git clone https://github.com/craigbuckler/11ty-starter
cd 11ty-starter
npm i
```


## Development mode build

Set `ELEVENTY_ENV` to `development` to enable development mode on Linux/macOS:

```sh
ELEVENTY_ENV=development
```

Windows cmd:

```sh
set ELEVENTY_ENV=development
```

Or Windows Powershell:

```sh
$env:ELEVENTY_ENV="development"
```

Launch the Eleventy build process and server:

```sh
npx eleventy --serve
```

Navigate to <http://localhost:8080> in your browser.


## Production mode build

Set `ELEVENTY_ENV` to `production` to enable production mode on Linux/macOS:

```sh
ELEVENTY_ENV=production
```

Windows cmd:

```sh
set ELEVENTY_ENV=production
```

Or Windows Powershell:

```sh
$env:ELEVENTY_ENV="production"
```

Run the Eleventy build process:

```sh
npx eleventy
```

The files generated in the `build` folder can be uploaded to any web host.

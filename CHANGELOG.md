# Changelog

All notable changes to this project will be documented in this file.

## [0.8.0] - 2024-03-20

### Bug Fixes

- Change `h3` font size
- Do not cache giscus style
- Fix taxonomy titles
- Fix title conditionals
- Adjust cactus fonts
- Fix CSP string
- Update `connect-src` directive
- Fix `content` padding
- Fix `date-highlight` margin
- Drop invalid `none`
- Adjust `search-container` layout
- Realign footer text
- Set footer paragraphs
- Handle `NOASSERTION` case
- Reduce motion if requested

### Documentation

- Fix `sup` description
- Update front matter description
- Update comment system info
- Add code blocks
- Update `features`
- Update theme description
- Update header

### Features

- Add category images
- [**breaking**] Error if more than one category is present
- [**breaking**] Add cactus comments
- [**breaking**] Update `extra.comments` settings
- Improve `kbd` tag
- Add search
- Use responsive search containers
- [**breaking**] Add `footer` options
- Control comments via `page.extra.disable_comments`

### Miscellaneous tasks

- Update projects
- Update default settings
- Disable glitch
- Add placeholders

### Operations

- Bump `labeler` to v5
- Add `feature` label
- Add `config` label

### Performance

- Convert `Pixeboy` to WOFF2

### Refactor

- Merge taxonomy templates

## [0.7.2] - 2024-03-10

### Bug Fixes

- Properly handle data types
- Filter `loaded_data`
- Improve `data` whitespace control
- Set `author` meta element
- Allow csp overrides
- Correct `head` blocks
- Set `lang` attribute
- Allow live reloads
- Adjust `ul`/`ol` font size
- Improve `nav-bar` indications
- Adjust `inner-post` fonts
- Improve `project` layout

### Documentation

- Add config example
- Improve config guide

### Miscellaneous tasks

- Add `theme` setting

## [0.7.1] - 2024-03-08

### Bug Fixes

- Set footer link attributes
- Change index footer layout
- Make index page scrollable
- Set `dl` font size
- Adjust `notice` font size
- Set `table` font size
- Set `address` font size

### Miscellaneous tasks

- Update index page
- Add giscus source link
- Update docs link

### Performance

- Move `glitch` style
- Move language color codes
- Move giscus style

## [0.7.0] - 2024-03-06

### Bug Fixes

- Correct taxonomy divs
- Move closing div
- Adjust footer layout
- Edit footer margin

### Features

- Add `footer`

## [0.6.1] - 2024-02-22

### Bug Fixes

- Set definition lists
- Set dark mode notices
- Switch `notice` to rem
- Improve dark mode colors

### Miscellaneous tasks

- Fix markup post
- Note `h1` usage
- Add buttons to markup post

## [0.6.0] - 2024-02-20

### Bug Fixes

- Change home logo size
- Adjust post list layout
- Add `about-info` dark mode colors
- Add `nav-bar` webkit properties
- Set `nav-bar` text decoration for webkit
- Speed up `nav-bar` transitions
- Remove old property prefixes
- Add syntax theme files
- Adjust `nav-bar` borders
- Improve taxonomy layout

### Features

- Add `extra.home.logo` settings
- Add `nav-bar` border
- Support HTTP URLs
- Add Twitch button

### Miscellaneous tasks

- Enable home logo
- Set Cache-Control

### Performance

- Move syntax theme import
- Conditionally include syntax highlight files

## [0.5.0] - 2024-02-13

### Bug Fixes

- Improve config checks
- Realign social buttons
- Adjust social button spacing
- Use flex container for social buttons
- Improve flex container
- Use flex gaps
- Adjust `about-info` headers
- Set `var`

### Documentation

- Update tags
- Add `Usage`
- Fix missing bracket
- Add `Configuration`
- Update description
- Fix content command
- Highlight `theme` location
- Fix typo in `Configuration`

### Features

- Add `comments` block
- Add `menu` settings
- Improve config layout
- Indicate current page
- [**breaking**] Add `images`, `home`
- Add `glitch` option

### Miscellaneous tasks

- Update tables in markup post
- Ignore syntax themes
- Enable xmpp
- Add screenshot
- Crop screenshot

### Operations

- Add release job

## [0.4.0] - 2024-02-08

### Bug Fixes

- Set table size for small screens
- Use local fonts
- Change `h1` size
- Adjust header sizes
- Center images
- Set header margins
- Adjust project card header
- Change `page-toc` margin
- Set project header size on small screens

### Features

- Add data shortcode
- Add `toc` option

### Miscellaneous tasks

- Add data post
- Update image post
- Fix image post example
- Fix usage in posts

## [0.3.0] - 2024-02-06

### Bug Fixes

- Correct `youtube` source string
- Adjust `h1`/`h2` font size
- Adjust `li` size
- Adjust `h1`/`h2` size on small screens
- Style `em` tag

### Features

- Add `nav` block
- Add audio shortcode

### Miscellaneous tasks

- Add audio post

### Styling

- Fix formatting in posts
- Fix image post headers
- Add example headers

## [0.2.1] - 2024-02-05

### Bug Fixes

- Drop ToC underline
- Fix anchor colors
- Edit dark mode table style
- Adjust table borders

### Miscellaneous tasks

- Edit CSP section

## [0.2.0] - 2024-01-28

### Bug Fixes

- Adjust table colors for dark mode
- Set main images
- Update theme config
- Add image cache busting
- Improve `image` output
- Handle external images in `image`
- Properly output image source
- Set image path
- Use local image path
- Add `giscus` CSP checks
- Set image meta tags
- Fix image meta tag path
- Rename `image` source variable
- Handle `mov` file type
- Set video margin
- Set youtube title
- Set youtube playlist

### Documentation

- Update feature list

### Features

- Add logo to index page
- Handle external images
- Use optional variables in `image`
- Add `image` dimensions
- Add `csp_img`
- Add anchor links
- Add video shortcodes
- Improve `video` shortcode
- Improve `image` shortcode
- Support URLs in `project`
- Add github authentication

### Miscellaneous tasks

- Add funding info
- Update test post
- Fix test post
- Add image shortcodes post
- Update image shortcodes post
- Rename image shortcodes post
- Update post tags
- Move markup post
- Update `image` post
- Edit markup post
- Fix index page
- Add information post
- Edit information post
- Describe `image` options
- Add video post
- Edit home page
- Edit video post
- Edit `project` post title
- Update content tags
- Reformat markup post
- Update project post
- Highlight github in project post
- Edit features section

### Operations

- Add `check` workflow
- Add `labeler` workflow
- Add pull request template
- Update `labeler`

### Refactor

- Reorder `nav-menu` list

### Styling

- Fix `vimeo` formatting

## [0.1.0] - 2024-01-19

### Bug Fixes

- Change base settings
- Handle social button focus
- Drop grid layout
- Fix xmpp button
- Add `Info`
- Underline index page links
- Improve index anchor's text decorations
- Set `kbd` tag
- Fix tables
- Update test post
- Fix list markers
- Update blockquotes
- Set `about-info` colors
- Fix `projects` layout
- Drop relative links

### Documentation

- Update README.md
- Edit `Installation`

### Features

- Add giscus settings
- Optional comment box
- Add `SCSS` color
- Add `csp` option
- Move giscus settings

### Miscellaneous tasks

- Enable comments
- Update project page content
- Add .gitignore
- Disable comments



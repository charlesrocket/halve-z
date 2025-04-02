# Changelog

All notable changes to this project will be documented in this file.

## [0.20.4] - 2025-04-02

### Bug Fixes

- Fix block quotes spacing
- Adjust paragraph margins

### Miscellaneous tasks

- Bump zola to 0.20.0

## [0.20.3] - 2025-02-09

### Bug Fixes

- Fix nerd fonts syntax
- Change section title font size

## [0.20.2] - 2025-02-01

### Bug Fixes

- Set `#homepage` content margin
- Change `.date-highlight` margin
- Update `figure` margin
- Center video elements

### Miscellaneous tasks

- Bump cache to v18

## [0.20.1] - 2025-01-23

### Bug Fixes

- Improve navigation container
- Improve content layout
- Improve `homepage` layout
- Limit content width
- Update `.projects`
- Drop text wrapping
- Set `#nav-container` gaps
- Adjust `.search-container` width
- Edit pagination margin
- Responsive `#nav-container`
- Realign search results
- Move `toastBox` layer
- Responsive `.post-info`

### Documentation

- Update data post

### Miscellaneous tasks

- Bump cache to v17

## [0.20.0] - 2025-01-06

### Bug Fixes

- Ignore cactus requests
- Use width only

### Features

- Add `img` dimensions

### Miscellaneous tasks

- Update LICENSE
- Bump cache to v16

### Build

- Bump required version to 0.19.2

## [0.19.2] - 2024-11-11

### Bug Fixes

- Drop destination check

### Documentation

- Add notifications

## [0.19.1] - 2024-10-21

### Bug Fixes

- Fix `fetchedResponse()` return
- Fix search cache
- Fix offline mode
- Update `fetchedResponse` log message
- Handle navigation request
- Set 404 title

### Miscellaneous tasks

- Bump cache to v15

### Styling

- Reformat `onmessage` event

## [0.19.0] - 2024-10-19

### Bug Fixes

- Remove `base` element
- Return on error
- Switch on `request.destination`
- Move activation message
- Cache app icons
- Improve default cache strategy
- Cache-bust assets for precache
- Move asset integrity into url parameter
- Resolve extensive header length
- Cache web app assets
- Delay service worker registration
- Move `image` cache bust
- Fix `page_image` path
- Do not cache service worker
- Use strict mode
- Update `sw-load` cache url
- Switch to hardcoded cache version
- Relax `networkResponse` check

### Documentation

- Fix `image` csp urls

### Features

- Blur `toast` background
- Export `showToast()`
- Use dynamic cache name
- Add `VERSION`

### Performance

- Store updated content only

### Refactor

- Convert service worker into module
- Move notifications cache
- Add `fetchedResponse()`

### Styling

- Reformat service worker

## [0.18.1] - 2024-10-13

### Bug Fixes

- Remove `base_url` from paths
- Use relative paths

### Documentation

- Edit service worker notice

## [0.18.0] - 2024-10-08

### Bug Fixes

- Validate `page.extra.music`

### Features

- [**breaking**] `song` -> `music`

### Miscellaneous tasks

- Bump cache to v11

## [0.17.0] - 2024-10-01

### Bug Fixes

- Move post-install notification

### Documentation

- Set `zero` timezone

### Features

- Implement service worker notifications

## [0.16.1] - 2024-09-19

### Bug Fixes

- Cache footer links
- Cache sitemap
- Fix asset string
- Update cache list

## [0.16.0] - 2024-09-09

### Bug Fixes

- Reset weight for `author`

### Features

- Add posts label option

## [0.15.0] - 2024-09-01

### Bug Fixes

- Remove footer link whitespace
- Change footer separator

### Features

- Add footer links
- Add sitemap link

### Miscellaneous tasks

- Bump zola to 0.19.2
- Update author
- Bump cache to v9

### Refactor

- Move footer links

## [0.14.1] - 2024-08-06

### Miscellaneous tasks

- Oxipng files
- Bump cache to v8

## [0.14.0] - 2024-08-02

### Features

- [**breaking**] Add `extra.footer.author` option
- Add `extra.placeholders` options

### Miscellaneous tasks

- Bump zola to 0.19.1
- Bump cache to v7

### Operations

- Configure dependabot
- Update `build` job

### Refactor

- Drop `page_title`

### Styling

- Fix nerd fonts syntax
- Reformat nerd fonts
- Minify nerd fonts
- Fix nerd fonts unicode range

## [0.13.0] - 2024-07-16

### Bug Fixes

- Set `generate_feeds`
- Update `font-src` directive
- Update social icons set
- Update rss link

### Features

- Loop `config.feed_filenames`

### Miscellaneous tasks

- Bump cache to v6

### Refactor

- Subset nerd fonts
- Move nerd fonts

## [0.12.0] - 2024-06-17

### Bug Fixes

- Set `homepage` media query
- Adjust `homepage` padding
- Build site with CSP disabled
- Allow serving from subdirectory
- Handle detached `HEAD`

### Documentation

- Note pwa cache scope

### Features

- Add Zig color code
- Switch to 65/35 layout
- Add commit hash

### Refactor

- Move `page_image`

## [0.11.0] - 2024-05-01

### Bug Fixes

- Update htb icon
- Cache post list paginator
- Check `posts.pages`
- Drop ToC underlines
- Replace syntax highlight theme
- Drop absolute urls
- Cache search index
- Use relative media paths
- Set `toc-block` margin

### Features

- Add codeberg icon

### Miscellaneous tasks

- Bump cache to v5
- Paginate post list

### Refactor

- Switch to `nerd-fonts`
- Rename `page_count`
- Move style files to cache list

## [0.10.0] - 2024-04-22

### Bug Fixes

- Handle disabled pagination
- Improve `video` whitespace control
- Improve `image` whitespace control
- Allow untagged posts
- Update `posts-list` layout
- Pagination padding
- `post-song` font
- `post-ext-info` font
- Drop `#toc`
- Change pager buttons
- Fix social icons width
- Fix posts index pager
- Adjust social links spacing/transition
- Adjust social links font size
- Always keep two rows of social icons
- Set social icons block width
- Three rows of social icons on small screens
- Use square social icons block on small screens
- Fix mastodon link

### Documentation

- Add pagination
- Add `disable_comments`
- Add `disable_toc`

### Features

- Add hackthebox link
- Add `footer` option
- Indicate archived repositories
- Add `paginator` block
- Add `song` variable
- Add `disable_toc` option
- Add gitlab icon
- Add bitbucket icon

### Miscellaneous tasks

- Update placeholders
- Update `extra.social`

## [0.9.2] - 2024-04-08

### Bug Fixes

- Fix precache string whitespaces
- Filter duplicated cache links
- Update cactus box elements

### Documentation

- Describe updates
- Fix update header
- Update PWA features

## [0.9.1] - 2024-04-06

### Bug Fixes

- Move precache request
- Cache site icons
- Adjust `inner-post`-`li` size
- Fix project tag spacing
- Filter project variables
- Remove read time stray tag
- Remove trailing slashes
- Correct line break tag
- Fix atom link
- Remove tag list whitespaces
- Minimy style strings
- Remove `title` whitespaces
- Improve whitespace control
- Adjust project margins
- Switch to `unstyle.css`
- Update style rulesets
- Adjust pager padding
- Drop `btn` borders
- Update code font
- Add asset checksums

### Documentation

- Add logo

### Miscellaneous tasks

- Disable demo logo
- Minify HTML
- Update cache list

### Refactor

- Add `postMessage()` type
- Move `unstyle`

## [0.9.0] - 2024-04-01

### Bug Fixes

- Fix post info conditionals
- Check if glitch style is needed
- Fix homepage shadows
- Improve post info borders
- Fix post info layout
- Fix ToC layout
- Update cache list
- Fix `ul`/`ol` margins
- Fix service worker handlers
- Fix fallback page
- Fix CSP string filters
- Add cachebust to styles
- Add `safe` filter
- Fix logo tag
- Correct element tags
- Fix `main-info` tags
- Load service worker via manifest string
- Add logo shadow
- Resolve `onactivate` typo
- Fix term links
- Update offline message
- Precache during installation

### Documentation

- Add comments post
- Fix `project` description
- Add PWA
- Add pwa post

### Features

- Add detailed post info
- Add `date` block
- Add `comments` block
- Revalidate current cache
- [**breaking**] Add `manifest` option
- Add browser favicons
- Implement precache
- Precache all content

### Miscellaneous tasks

- Bump cache to v3
- Update offline message
- Add shortcut icon
- Add pwa icons
- Add pwa manifest
- Update icon
- Enable logo
- Use small icon file

### Styling

- Reformat `onfetch`

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



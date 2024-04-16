+++
title = "Information"
date = 2024-01-01
updated = 2024-02-01
[taxonomies]
categories = ["usage"]
tags = ["content", "configuration"]
[extra]
subtitle = "Usage guide"
+++

## Features

[Halve-Z](https://github.com/charlesrocket/halve-z) is a retro two-column theme for [Zola](https://github.com/getzola/zola). It features search, taxonomies, automatic color schemes, media shortcodes, project cards, and a comment system ([Cactus](https://cactus.chat)/[Giscus](https://giscus.app)).

## Front matter

Available (`extra`) options:
* `subtitle`
* `image`
* `csp_img`
* `disable_comments`
* `song`

<p class="notice_info"><code>h1</code> headers are reserved for page title (left/top block) and subtitle (optional, right/bottom block).</p>

In addition to default variables, a page can have an image, a subtitle, a category, a song, CSP strings, and multiple tags.

```
+++
title = "Example"
date = 2009-09-09
[taxonomies]
categories = ["general"]
tags = ["tag"]
[extra]
subtitle = "Example subtitle"
image = "https://example.com/image.png"
csp_img = ["example.com/", "foo.org/example"]
song = ["Michael Pitt", "Death to Birth"]
+++
```

`song` variable takes an array that includes an artist and a track name. If `LASTFM_KEY` environment variable is present, names are autocorrected and linked to the [Last.fm](https://www.last.fm/) website.

## Configuration

Set `theme` to `halve-z` in your project's `config.toml` and adjust options according to the example below:

```toml
{{ data(src="../config.toml" type="plain") }}
```

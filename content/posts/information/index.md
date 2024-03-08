+++
title = "Information"
date = 2024-01-01
[taxonomies]
categories = ["usage"]
tags = ["content", "configuration"]
[extra]
subtitle = "Usage guide"
+++

## Features

[Halve-Z](https://github.com/charlesrocket/halve-z) is a retro two-column theme for [Zola](https://github.com/getzola/zola). It features taxonomies, automatic color schemes, media shortcodes, project cards, and a [Giscus](https://giscus.app) comment system.

## Front matter

Available (`extra`) options:
* `subtitle`
* `image`
* `csp_img`
 
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
+++
```

`h1` headers are reserved for page title (left/top block) and subtitle (optional, right/bottom block).

## Configuration

Set `theme` to `halve-z` in your project's `config.toml` and adjust options according to the example below:

```toml
{{ data(src="../config.toml" type="plain") }}
```

+++
title = "Image"
date = 2023-06-03T15:00:00Z
[taxonomies]
categories = ["media"]
tags = ["content", "csp", "shortcode", "feature"]
[extra]
subtitle = "Shortcodes for images"
csp_img = ["raw.githubusercontent.com/charlesrocket/beastie/",
           "https://halve-z.netlify.app/fireball.gif"]
+++

## Usage

- `src`: the path/URL to the image file (mandatory)
- `link`: destination URL
- `caption`: set the image caption
- `alt`: set alternative text

### Local

Example of a local image with a link and caption.

#### Input

```rs
{{/* image(src="/fireball.gif", link="https://halve-z.netlify.app/", alt="Fireball", caption="8bit fireball") */}}
```

#### Output

```html
{{ image(src="/fireball.gif", link="https://halve-z.netlify.app/", alt="Fireball", caption="8bit fireball") }}
```

{{ image(src="/fireball.gif", link="https://halve-z.netlify.app/", alt="Fireball", caption="8bit fireball") }}

### Image only

Example of an image without any text or links.

#### Input

```rs
{{/* image(src="yawn.gif") */}}
```

#### Output

```html
{{ image(src="yawn.gif") }}
```

{{ image(src="yawn.gif") }}

### External

Example of an external image.

#### Input

```rs
{{/* image(src="https://halve-z.netlify.app/fireball.gif") */}}
```

#### Output

```html
{{ image(src="https://halve-z.netlify.app/fireball.gif") }}
```

{{ image(src="https://halve-z.netlify.app/fireball.gif") }}

## CSP

Add `csp = enable` to the config's `extra` section to enable **Content Security Policy** globally. Use front matter's `csp_img` to add URLs:

### Example

```
+++
title = "Image"
date = 2023-06-03
[taxonomies]
categories = ["media"]
tags = ["content", "csp", "shortcode"]
[extra]
subtitle = "Shortcodes for images"
csp_img = ["raw.githubusercontent.com/charlesrocket/beastie/"]
+++
```

#### Input

```rs
{{/* image(src="https://raw.githubusercontent.com/charlesrocket/beastie/master/doc/screenshot.gif", caption="CSP test image") */}}
```

#### Output

{{ image(src="https://raw.githubusercontent.com/charlesrocket/beastie/master/doc/screenshot.gif", caption="CSP test image") }}

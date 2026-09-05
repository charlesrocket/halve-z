+++
title = "Image"
date = 2023-06-03T15:00:00Z
[taxonomies]
categories = ["media"]
tags = ["content", "csp", "shortcode", "feature"]
[extra]
subtitle = "Shortcodes for images"
series = "Media"
series_order = 1
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
{% raw %}
{{ <image src="/fireball.gif" link="https://halve-z.netlify.app/" alt="Fireball" caption="8bit fireball" page={page} config={config}/> }}
{% endraw %}
```

#### Output

```html
{{ <image src="/fireball.gif" link="https://halve-z.netlify.app/" alt="Fireball" caption="8bit fireball" page={page} config={config}/> }}
```

{{ <image src="/fireball.gif" link="https://halve-z.netlify.app/" alt="Fireball" caption="8bit fireball" page={page} config={config}/> }}

### Image only

Example of an image without any text or links.

#### Input

```rs
{{ <image src="yawn.gif" page={page} config={config}/> }}
```

#### Output

```html
{{ <image src="yawn.gif" page={page} config={config}/> }}
```

{{ <image src="yawn.gif" page={page} config={config}/> }}

### External

Example of an external image.

#### Input

```rs
{{ <image src="https://halve-z.netlify.app/fireball.gif" page={page} config={config}/> }}
```

#### Output

```html
{{ <image src="https://halve-z.netlify.app/fireball.gif" page={page} config={config}/> }}
```

{{ <image src="https://halve-z.netlify.app/fireball.gif" page={page} config={config}/> }}

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
{{ <image src="https://raw.githubusercontent.com/charlesrocket/beastie/master/doc/screenshot.gif" caption="CSP test image" page={page} config={config}/> }}
```

#### Output

{{ <image src="https://raw.githubusercontent.com/charlesrocket/beastie/master/doc/screenshot.gif" caption="CSP test image" page={page} config={config}/> }}

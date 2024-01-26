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

input:

```rs
{{/* image(src="fireball.gif", link="https://halve-z.netlify.app/", alt="Fireball", caption="8bit fireball") */}}
```

- `src`: the path/URL to the image file (mandatory)
- `caption`: set the image caption (optional)
- `alt`: set alternative text (optional)

output:

```html
{{ image(src="fireball.gif", link="https://halve-z.netlify.app/", alt="Fireball", caption="8bit fireball") }}
```

{{ image(src="fireball.gif", link="https://halve-z.netlify.app/", alt="Fireball", caption="8bit fireball") }}

input:

```rs
{{/* image(src="https://halve-z.netlify.app/fireball.gif") */}}
```

output:

```html
{{ image(src="https://halve-z.netlify.app/fireball.gif") }}
```

{{ image(src="https://halve-z.netlify.app/fireball.gif") }}

input:

```rs
{{/* image(src="fireball.gif") */}}
```

output:

```html
{{ image(src="fireball.gif") }}
```

{{ image(src="fireball.gif") }}

## CSP

Add `csp = enable` to the config's `extra` section to enable Content Security Policy globally. Use front matter's `csp_img` to add URLs:

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

input:

```rs
{{/* image(src="https://raw.githubusercontent.com/charlesrocket/beastie/master/doc/screenshot.gif", caption="CSP test image") */}}
```

output:

```html
{{ image(src="https://raw.githubusercontent.com/charlesrocket/beastie/master/doc/screenshot.gif", caption="CSP test image"") }}
```

{{ image(src="https://raw.githubusercontent.com/charlesrocket/beastie/master/doc/screenshot.gif", caption="CSP test image") }}

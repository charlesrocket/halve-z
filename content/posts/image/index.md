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

All variables (except `img`) are optional.

input:

```rs
{{/* image(img="fireball.gif", link="https://halve-z.netlify.app/", alt="Fireball", caption="8bit fireball") */}}
```

output:

```html
{{ image(img="fireball.gif", link="https://halve-z.netlify.app/", alt="Fireball", caption="8bit fireball") }}
```

{{ image(img="fireball.gif", link="https://halve-z.netlify.app/", alt="Fireball", caption="8bit fireball") }}

input:

```rs
{{/* image(img="https://halve-z.netlify.app/fireball.gif") */}}
```

output:

```html
{{ image(img="https://halve-z.netlify.app/fireball.gif") }}
```

{{ image(img="https://halve-z.netlify.app/fireball.gif") }}

input:

```rs
{{/* image(img="fireball.gif") */}}
```

output:

```html
{{ image(img="fireball.gif") }}
```

{{ image(img="fireball.gif") }}

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
{{/* image(img="https://raw.githubusercontent.com/charlesrocket/beastie/master/doc/screenshot.gif", caption="CSP test image") */}}
```

output:

```html
{{ image(img="https://raw.githubusercontent.com/charlesrocket/beastie/master/doc/screenshot.gif", caption="CSP test image"") }}
```

{{ image(img="https://raw.githubusercontent.com/charlesrocket/beastie/master/doc/screenshot.gif", caption="CSP test image") }}

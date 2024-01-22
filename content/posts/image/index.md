+++
title = "Image"
date = 2023-06-03
[taxonomies]
categories = ["media"]
tags = ["image", "shortcode"]
[extra]
subtitle = "Shortcodes for images"
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

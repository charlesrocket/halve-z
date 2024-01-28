+++
title = "Project"
date = 2022-12-31
[taxonomies]
categories = ["usage"]
tags = ["content", "shortcode", "github"]
[extra]
subtitle = "Project cards"
+++

Use `GITHUB_TOKEN` environment variable to authenticate **GitHub** requests (optional).

input:

```rs
{{/* project(link="https://github.com/charlesrocket/halve-z") */}}
```

- `link`: the address of the repository (mandatory)

output:

```html
{{ project(link="https://github.com/charlesrocket/halve-z") }}
```

{{ project(link="https://github.com/charlesrocket/halve-z") }}

+++
title = "Project"
date = 2022-12-31
[taxonomies]
categories = ["usage"]
tags = ["content", "shortcode", "github"]
[extra]
subtitle = "Project cards"
+++

## Usage

Use `GITHUB_TOKEN` environment variable to authenticate **GitHub** requests (optional).

- `link`: the address of the repository (mandatory)

### Example
#### Input

```rs
{{/* project(link="https://github.com/charlesrocket/halve-z") */}}
```

#### Output

```html
{{ project(link="https://github.com/charlesrocket/halve-z") }}
```

{{ project(link="https://github.com/charlesrocket/halve-z") }}

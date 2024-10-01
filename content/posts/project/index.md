+++
title = "Project"
date = 2022-12-31T15:00:00Z
[taxonomies]
categories = ["usage"]
tags = ["content", "shortcode", "feature", "github"]
[extra]
subtitle = "Project cards"
+++

## Usage

Use `GITHUB_TOKEN` environment variable to authenticate **GitHub** requests (optional).

- `link`: the address of the repository

### Example

<p class="notice_info">When building with <code>zola serve</code>, project cards are rendered with placeholder text. Use <code>zola build</code> to preview the actual output.</p>

#### Input

```rs
{{/* project(link="https://github.com/charlesrocket/halve-z") */}}
```

#### Output

```html
{{ project(link="https://github.com/charlesrocket/halve-z") }}
```

{{ project(link="https://github.com/charlesrocket/halve-z") }}

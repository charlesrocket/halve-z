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

Use the `ZOLA_GITHUB_TOKEN`/`ZOLA_CODEBERG_TOKEN` environment variable to authenticate your requests (optional).

- `link`: the address of the repository

### Example

<p class="notice_info">When building with <code>zola serve</code>, project cards are rendered with placeholder text. Use <code>zola build</code> to preview the actual output.</p>

#### Input

```rs
{% raw %}
{{ <project link="https://github.com/charlesrocket/halve-z" config={config}/> }}
{% endraw %}
```

#### Output

```html
{{ <project link="https://github.com/charlesrocket/halve-z" config={config}/> }}
```

{{ <project link="https://github.com/charlesrocket/halve-z" config={config}/> }}

+++
title = "Audio"
date = 2023-06-05T15:00:00Z
[taxonomies]
categories = ["media"]
tags = ["content", "shortcode", "feature"]
[extra]
subtitle = "Working with audio files"
series = "Media"
series_order = 2
+++

## Usage

- `src`: an array of audio file paths (mandatory)

### Example
#### Input

```rs
{% raw %}
{{ <audio src={["over9000.ogg", "over9000.mp3"]} page={page} config={config}/> }}
{% endraw %}
```

#### Output

```html
{{ <audio src={["over9000.ogg", "over9000.mp3"]} page={page} config={config}/> }}
```

{{ <audio src={["over9000.ogg", "over9000.mp3"]} page={page} config={config}/> }}

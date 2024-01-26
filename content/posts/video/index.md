+++
title = "Video"
date = 2023-06-04
[taxonomies]
categories = ["media"]
tags = ["content", "shortcode"]
[extra]
subtitle = "Shortcodes for videos"
+++

## Video

input:

```rs
{{/* video(src=["over9000.mp4", "over9000.webm"]) */}}
```

- `src`: an array of video file paths (mandatory)
- `width`: the width of the video (optional)
- `height`: the height of the video (optional)
- `autoplay`: when set to "true", the video autoplays on load (optional)
- `loop`: when set to "true", the video plays on a loop (optional)
- `muted`: when set to "true", the audio will be initially silenced (optional)


output:

```html
{{ video(src=["over9000.mp4", "over9000.webm"]) }}
```

{{ video(src=["over9000.mp4", "over9000.webm"]) }}

input:

```rs
{{/* video(src=["over9000.mp4"], muted="true") */}}
```

output:

```html
{{ video(src=["over9000.mp4"], muted="true") }}
```

{{ video(src=["over9000.mp4"], muted="true") }}

## Vimeo

input:

```rs
{{/* vimeo(id="4340383") */}}
```

- `id`: the video id (mandatory)
- `autoplay`: when set to "true", the video autoplays on load (optional)
- `loop`: when set to "true", the video plays on a loop (optional)
- `noautopause`: when set to "true", the video will not autopause (optional)
- `title` - set alt title for the iframe (optional, defaults to "Vimeo")
- `cookie` - set to "true" if you want tracking cookies, otherwise it defaults to false.

output:

```html
{{ vimeo(id="4340383") }}
```

{{ vimeo(id="4340383") }}

## YouTube

input:

```rs
{{/* youtube(id="frBzlP6t9Gw") */}}
```

- `id`: the video id (mandatory)
- `playlist`: the playlist id (optional)
- `autoplay`: when set to "true", the video autoplays on load (optional)
- `title` - set alt title for the iframe (optional, defaults to "Youtube")
- `cookie` - set to "true" if you want tracking cookies, otherwise it defaults to false.

output:

```html
{{ youtube(id="frBzlP6t9Gw") }}
```

{{ youtube(id="frBzlP6t9Gw") }}

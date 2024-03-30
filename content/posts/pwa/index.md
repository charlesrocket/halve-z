+++
title = "PWA"
date = 2023-06-07
[taxonomies]
categories = ["usage"]
tags = ["feature", "configuration"]
[extra]
subtitle = "Build a Progressive Web App"
+++

## Setup

To deploy the site as a **PWA**, set the filename in `config.extra.manifest` and configure the manifest in the project's `static` directory:

```json
{{ data(src="../static/manifest.json" type="plain") }}
```

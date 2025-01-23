+++
title = "Data"
date = 2022-10-01T15:00:00Z
[taxonomies]
categories = ["usage"]
tags = ["content", "shortcode", "feature"]
[extra]
subtitle = "Data loader"
music = ["65daysofstatic", "Default This"]
+++

## Usage

- `src`: the address of the data source (mandatory)
- `type`: the file type of the data source ([supported types](https://www.getzola.org/documentation/templates/overview/#load-data))
- `key`: an object in the data to display

### Example
#### Input

```
This theme requires **Zola** version {{/* data(src="../theme.toml" type="toml" key="min_version") */}} or later.
```

#### Output

This theme requires **Zola** version {{ data(src="../theme.toml" type="toml" key="min_version") }} or later.

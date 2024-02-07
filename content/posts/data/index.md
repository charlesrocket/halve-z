+++
title = "Data"
date = 2022-10-01
[taxonomies]
categories = ["usage"]
tags = ["content", "shortcode"]
[extra]
subtitle = "Data loader"
+++

Display data from internal or external sources.

## Example

#### Input

```
This theme requires **Zola** version {{/* data(src="../theme.toml" type="toml" key="min_version") */}} or later.
```

- `src`: the address of the data source (mandatory)
- `type`: the file type of the data source ([supported types](https://www.getzola.org/documentation/templates/overview/#load-data))
- `key`: an object in the data to display

#### Output

This theme requires **Zola** version {{ data(src="../theme.toml" type="toml" key="min_version") }} or later.
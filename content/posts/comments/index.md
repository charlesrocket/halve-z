+++
title = "Comments"
date = 2023-06-09T15:00:00Z
[taxonomies]
categories = ["usage"]
tags = ["content", "feature", "cactus", "giscus"]
[extra]
subtitle = "Enabling the comment system"
+++

 **Halve-Z** supports the [Cactus](https://cactus.chat) and [Giscus](https://giscus.app) comment systems. Set the `extra.comments.system` setting to `cactus` or `giscus` to enable the corresponding system on the post pages.

To disable comments on a specific page, set `disable_comments` to `true` in the page's **front matter**:

```
+++
title = "Information"
date = 2024-01-01
[taxonomies]
categories = ["usage"]
tags = ["content", "configuration"]
[extra]
subtitle = "Usage guide"
disable_comments = true
+++
```

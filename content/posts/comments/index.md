+++
title = "Comments"
date = 2023-06-09T15:00:00Z
[taxonomies]
categories = ["usage"]
tags = ["content", "feature", "mastodon", "cactus", "giscus"]
[extra]
subtitle = "Enabling the comment system"
+++

 **Halve-Z** supports [Mastodon](https://mastodon.social) and [Giscus](https://giscus.app) comment systems. Set the `extra.comments.system` setting to `mastodon` or `giscus` to enable the corresponding system on the post pages.

 <p class="notice_warning"><strong>Mastodon</strong> requires <code>extra.mastodon_id</code> variable to be set to a related status/post ID.</p>

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
mastodon_id = "114633405176781965"
disable_comments = true
+++
```

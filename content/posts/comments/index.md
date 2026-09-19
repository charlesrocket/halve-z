+++
title = "Comments"
date = 2023-06-09T15:00:00Z
[taxonomies]
categories = ["usage"]
tags = ["content", "feature", "mastodon", "giscus"]
[extra]
subtitle = "Enabling the comment system"
+++

 **Halve-Z** uses [Mastodon](https://mastodon.social) as a comment system. Set the `extra.comments.system` setting to `mastodon` to enable the comments on post pages.

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

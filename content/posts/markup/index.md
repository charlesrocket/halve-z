+++
title = "Markup"
date = 2023-06-12T15:00:00Z
[taxonomies]
categories = ["usage"]
tags = ["content", "style", "html"]
[extra]
subtitle = "HTML tags and formatting"
image = "https://raw.githubusercontent.com/bearcott/8bit-art/master/cities/urban.gif"
+++

Use **Markdown** and **HTML** to style the content:

# Header one

*Reserved for post title/subtitle.*

## Header two

### Header three

#### Header four

##### Header five

###### Header six

## Blockquotes

> You could sit at home, and do like absolutely nothing, and your name goes through like 17 computers a day. 1984? Yeah right, man. That's a typo. Orwell is here now. He's livin' large. We have no names, man. No names. We are nameless!

> Hack the planet!<br>
> <cite>Dade Murphy</cite>

## Tables

| OS           | Base        |
| ------------ | ----------- |
| [OpenBSD](#) | NetBSD 1.0  |
| [NetBSD](#)  | 4.3BSD      | 
| [FreeBSD](#) | 4.4BSD-Lite |

### Large tables

Surround large tables with `<figure></figure>` so they can scroll horizontally.
<figure>

| **Company** | Amstrad | Apparat | Be | Calma | Datapoint | Elxsi | Fortune Systems | Gateway | Noval | Jonos | Kaypro | Lap Power | Léanord | NeXT | Norsk Data | Ohio Scientific | Omnidata | OCC | Psystar | Symbolics | Terak | TRW | Wicat Systems |
| ----------  | ---- | ---- | ---- | ---- | ---- | ---- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| **Defunct** | 2010 | 1988 | 2001 | 1988 | 2000 | 1989 | 2011 | 2007 | 1979 | 1992 | 1992 | 2000 | 1989 | 1997 | 1992 | 1980 | 1988 | 1985 | 2012 | 1996 | 1985 | 2002 | 1992 |

</figure>

## Code blocks

```c
#include <stdio.h>

int main() {
  printf("Hello, World!\n");
  return 0;
}
```

## Unordered Lists (Nested)

  * List item one 
      * List item one 
          * List item one
          * List item two
          * List item three
          * List item four
      * List item two
      * List item three
      * List item four
  * List item two
  * List item three
  * List item four

## Ordered List (Nested)

  1. List item one 
      1. List item one 
          1. List item one
          2. List item two
          3. List item three
          4. List item four
      2. List item two
      3. List item three
      4. List item four
  2. List item two
  3. List item three
  4. List item four

## HTML Tags

### Buttons

<a href="#" class="btn">Primary Button</a><a href="#" class="btn btn_info">Info Button</a><a href="#" class="btn btn_warning">Warning Button</a><a href="#" class="btn btn_success">Success Button</a><a href="#" class="btn btn_danger">Danger Button</a>

### Definition Lists

<dl>
  <dt>Nmap</dt>
  <dd>
    Nmap is a tool for network discovery and security scanning.
  </dd>
</dl>

### Notices

<p class="notice"><strong>Attention! <a href="#">Link!</a> </strong>This is <strong>notice</strong>.</p>

<p class="notice_info"><strong>Attention!</strong> This is <code>info</code> <strong>notice</strong>.</p>

<p class="notice_warning"><strong>Attention!</strong> This is <code>warning</code> <strong>notice</strong>.</p>

<p class="notice_success"><strong>Attention!</strong> This is <code>success</code> <strong>notice</strong>.</p>

<p class="notice_danger"><strong>Attention!</strong> This is <code>danger</code> <strong>notice</strong>.</p>

### Address Tag

<address>
  3980 Broadway Street<br /> Boulder, CO 80304<br> United States
</address>

### Anchor Tag (aka. Link)

This is an example of a [link](https://www.getzola.org "Zola").

### Abbreviation Tag

<abbr title="Graphics Interchange Format">GIF</abbr> is a bitmap image format.

### Cite Tag

"Code is poetry." --- <cite>Automattic</cite>

### Code Tag

You will learn later on in these tests that `word-wrap: break-word;` will be your best friend.

### Strike Tag

This tag will let you <strike>strikeout text</strike>.

### Emphasize Tag

The emphasize tag should _italicize_ text.

### Insert Tag

This tag should denote <ins>inserted</ins> text.

### Keyboard Tag

This scarcely known <kbd>tag</kbd> emulates keyboard text.

### Quote Tag

<q>We have just gotten a wake-up call from the Nintendo Generation.</q> &#8211;Cereal Killer

### Strong Tag

This tag shows **bold text**.

### Subscript Tag

Getting our science styling on with H<sub>2</sub>O, which should push the "2" down.

### Superscript Tag

Still sticking with science and Isaac Newton's E = MC<sup>2</sup>, which should lift the "2" up.

### Variable Tag

This allows you to denote <var>variables</var>.

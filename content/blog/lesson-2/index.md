---
title: Lesson 2 - HTML FTW
date: "2019-03-13T08:13:37.121Z"
---

So we know that HTML is represents the content and 'structure' of our webpage
now it's time to look into how we make it.

```html
<p class="welcome">Hello World</p>
```

This is an instance of a HTML 'tag', specifically a 'p', or 'paragraph' tag. The word 'instance' is important because we
can have multiple instances of the same HTML 'tag' for example:

```html
<p class="welcome">Hello World</p>
<p class="exit">Goodbye</p>
```

Here we have two instances of a 'p' tag, but they are different. All tags follow
the same structure and expose three things you as the developer can control

```xml
<type attribute1="value" attribute2="othervalue">Content</type>
```

## Type

The type helps the browser know what it is, and in most cases will change the
behaviour of how it is displayed to the user. Types are predefined, and you have
to stay within the HTML approved [list, which is
huge](https://www.w3schools.com/tags/). Typically you will find you only really
use a dozen or so like:

```html
<p></p>     <!-- Paragraph -->
<h1></h1>   <!-- Biggest heading -->
<h2></h2>
<h3></h3>
<h4></h4>   <!-- Smallest heading -->
<em></em>   <!-- Emphasis - effectively italics -->
<b></b>     <!-- Bold -->
<a></a>     <!-- Anchor - effectively a link to elsewhere -->
<div></div> <!-- Divider -->
<ul></ul>   <!-- Unordered list -->
<ol></ol>   <!-- Orderd list -->
<img />     <!-- Image -->
<input />   <!-- User input -->
```

The definition of type is not optional, you have to state it otherwise your HTML
is invalid.

## Attributes

These are the bit that is inside the `< >` brackets and are other 'variables'
that you can control on the tag itself. Typically these are used for things you
need the browser to know that the user doesn't see. Some common attributes are:

```html
<img src="http://example.com/img.jpg" />
<a href="http://example.com">Link to example.com</a>
```

Here we have `src` on the `img` tag that tells the browser where (the 'source') the image is
that you want to display. And the `href` in the `a` tag tells the browser which
URL to goto if the user clicks that particular link. Again these are all
pre-determined, and it is not always possible to know them all. Thankfully there
is great [documentation](https://www.w3schools.com/tags/tag_img.asp) to help.
Unlike the `type` attributes are all optional, but some tags don't make sense
without them. Like an `img` tag has nothing to display with the `src` and an `a`
tag has nowhere to link to without a `href`.

## Content

This is what goes inside of the tags `> <` and will usually be either text or
more tags or a combination of the two. A tag can either be open or closed for content:

```html
<p>I am open</p>
<div>
  I am also open, and I have other tags inside.
  <img />
</div>
<p /> <!-- this one is closed -->
```

Again like attributes, content is not required for your HTML to be correct, but
a lot of tags don't make sense without it, and some tags ignore it - an `img`
tag for example.
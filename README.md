> ✨ Help support the maintenance of this package by [sponsoring me](https://github.com/sponsors/ryangjchandler).

# Alpine `$parent`

Access parent components using a handy `$parent` magic variable.

![GitHub tag (latest by date)](https://img.shields.io/github/v/tag/ryangjchandler/alpine-parent?label=version&style=flat-square)
![Build size Brotli](https://img.badgesize.io/ryangjchandler/alpine-parent/main/dist/cdn.min.js.svg?compression=gzip&style=flat-square&color=green)
[![Monthly downloads via CDN](https://data.jsdelivr.com/v1/package/npm/@ryangjchandler/alpine-parent/badge)](https://www.jsdelivr.com/package/npm/@ryangjchandler/alpine-parent)

> This package only supports Alpine v3.x.

## About

This plugin provides a new `$parent` magic property that allows you to interact with a parent component's data object directly. This is useful when you have nested components and conflicting property names but would still like to access the parent properties / methods directly.

## Installation

### CDN

Include the following `<script>` tag in the `<head>` of your document, just before Alpine.

```html
<script
    src="https://cdn.jsdelivr.net/npm/@ryangjchandler/alpine-parent@1.x.x/dist/cdn.min.js"
    defer
></script>
```

### NPM

```bash
npm install @ryangjchandler/alpine-parent
```

Add the `$parent` directive to your project by registering the plugin with Alpine.

```js
import Alpine from "alpinejs";
import Parent from "@ryangjchandler/alpine-parent";

Alpine.plugin(Parent);

window.Alpine = Alpine;
window.Alpine.start();
```

## Usage

Access the `$parent` property in your component:

```html
<div x-data="{ value: 'foo }">
    <div x-data="{ value: 'bar' }">
        My value is <span x-text="value"></span> and my parent's value is <span x-text="$parent.value"></span>
    </div>
</div>
```

The `$parent` property returns a `Proxy`, so any updates to the properties should be reactive.

## Versioning

This projects follow the [Semantic Versioning](https://semver.org/) guidelines.

## License

Copyright (c) 2021 Ryan Chandler and contributors

Licensed under the MIT license, see [LICENSE.md](LICENSE.md) for details.

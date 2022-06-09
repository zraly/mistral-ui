# Mistral UI

Tailwind CSS + Alpine.js UI components.

## Installation

```shell
npm i mistral-ui
```

## Usage

Add a `x-data` attribute to your element:

```html
<select multiple x-data="multiselect">
  <optgroup label="Names">
    <option value="John">John</option>
    <option value="Peter">Peter</option>
    <option value="Jane">Jane</option>
  </optgroup>
  <optgroup label="Cities">
    <option value="Prague">Prague</option>
    <option value="New York">New York</option>
    <option value="Berlin">Berlin</option>
  </optgroup>
</select>
```

### via CDN

1. Put this script tag into your head section:

```html
<script defer src="https://unpkg.com/mistral-ui@1.x.x/dist/cdn.min.js"></script>
```

2. Initialize desired component via Alpine's `alpine:init` event:

```javascript
document.addEventListener('alpine:init', () => {
	Alpine.data('multiselect', Mistral.multiselect)
})
```

### via NPM

1. Import component into your man js file:

```javascript
import Alpine from 'alpinejs'
import { multiselect } from 'mistral-ui'

Alpine.data('multiselect', multiselect);
Alpine.start();
```
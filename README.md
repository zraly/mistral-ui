# Mistral UI

Tailwind CSS + Alpine.js UI components.

## Installation

```shell
npm i mistral-ui
```

## Usage

### Static HTML components

Just copy & paste into your HTML.

```html
<span class="text-neutral">badge</span>
```

### Dynamic components using Alpine.js

Import component into your man js file:

```javascript
import Alpine from 'alpinejs'

// If you want to use the Multiselect component:
import { multiselect } from 'mistral-ui'
Alpine.data('multiselect', multiselect);

window.Alpine = Alpine
Alpine.start();
```

Copy & paste the HTML form the [component detail page](https:mistralui.com/component-multiselect):

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
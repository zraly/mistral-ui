# Mistral UI

Tailwind CSS + Alpine.js UI components.

## Installation

```shell
npm i mistral-ui
```

## Usage

### Basic HTML components

Just copy HTML example and modify as you need.

```html
<span class="text-neutral">badge</span>
```

### Alpine.js components

Import component:

```javascript
import Alpine from 'alpinejs'

// If you want to use the Multiselect component:
import { multiselect } from 'mistral-ui'
Alpine.data('multiselect', multiselect);

window.Alpine = Alpine
Alpine.start();
```

Apply `x-data` attribute on the element:

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
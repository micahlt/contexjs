# Contex.js
Super-simple, customizable context menus

## Installing
```bash
npm install contexjs
```

## Importing
```javascript
import * as Contex from './contex.js';
```

## Usage
Contex.js exposes the `Menu` class, which can be used to create up to 100 context menus on one page.  The following code creates the context menu seen below.

```javascript
let myMenu = new Contex.Menu('Title', [
  {
    name: 'Option 1',
    link: 'https://example.com'
  },
  {
    name: 'Option 2',
    link: 'https://example.com'
  }
]);
myMenu.render();
```

![context menu example](https://i.ibb.co/g6L7gfJ/image.png)

Clicking the shade behind the menu will automatically destroy the instance, as well as selecting an option.  However, you can also call the `.destroy()` method to manually destroy the menu.

## Customization
Contex.js uses CSS variables for easy customization.  

| Variable          | Explanation                   |
|-------------------|-------------------------------|
| `--contex-font`   | font families to use          |
| `--contex-text`   | color of text                 |
| `--contex-bg`     | background color of menu      |
| `--contex-option` | background of option `<li>`'s |

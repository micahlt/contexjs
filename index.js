import {html, render} from 'lit-html';
import MatRipple from 'mat-ripple';
let defaultStyles = document.createElement('style');
defaultStyles.innerHTML = `
:root {
  --contex-font: sans-serif;
  --contex-bg: #fff;
  --contex-text: #000;
  --contex-option: #ddd;
}

.contex__shade {
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0,0,0,0.4);
  height: 100%;
  width: 100%;
  transition: 0.3s;
  z-index: 999;
}

.contex__menu {
  user-select: none;
  font-family: var(--contex-font);
  background: var(--contex-bg);
  height: max-content;
  width: 80vw;
  max-width: 400px;
  z-index: 1000;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 1em;
  text-align: center;
  border-radius: 0.2em;
  box-shadow: 0 0.4em 0.7em rgba(0,0,0,0.4);
}

.contex__title {
  color: var(--contex-text);
  font-size: 2em;
  font-weight: bold;
  width: 100%;
}

.contex__opts {
  color: var(--contex-text);
  padding-left: 0;
  margin-left: -1em;
  margin-right: -1em;
  margin-bottom: -0.2em;
}

.contex__li {
  color: var(--contex-text);
  list-style: none;
  background: var(--contex-option);
  padding: 0.75em;
}`;
document.head.appendChild(defaultStyles);
class Menu {
  constructor(title, options) {
    this.title = title;
    this.options = options;
    this.contexId = getRandomInt(100, 1);
    while (true) {
      if (document.getElementById('contex-' + this.contexId) == undefined) {
        break;
      }
    }
    this.destroy = () => {
      document.getElementById('contex-' + this.contexId).remove();
    }
    this.render = () => {
      const toRender = html`
      <div class="contex" id="contex-${this.contexId}">
      <div class="contex__menu">
      <span class="contex__title">${this.title}</span>
      <br>
      <ul class="contex__opts">
        ${this.options.map((item) => html`<li class="contex__li" data-linkto="${item.link}">${item.name}<mat-ripple /></li>`)}
      </ul>
      </div>
      <div class="contex__shade"></div>
      </div>
      `;
      render(toRender, document.body);
      document.querySelector('.contex__opts').childNodes.forEach(el => {
        el.addEventListener('click', (e) => {
          e.preventDefault();
          window.location.replace(el.getAttribute('data-linkto'));
          window.setTimeout(() => {
            this.destroy();
          }, 300);
        })
      })
      document.querySelector('#contex-' + this.contexId + ' .contex__shade').addEventListener('click', (e) => {
        this.destroy();
      });
    }
  }
}

export {Menu};

let getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

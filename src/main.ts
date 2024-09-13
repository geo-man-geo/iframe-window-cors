import './style.css'

import { printText } from './counter.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
    <input id="myinput" type="password" />
  </div>
`
printText(document.querySelector<HTMLInputElement>('#myinput')!)
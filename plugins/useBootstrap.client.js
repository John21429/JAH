import * as bootstrap from 'bootstrap'
import * as popper from '@popperjs/core'

export default defineNuxtPlugin(() => {
  return {
    provide: {
      bootstrap: bootstrap,
      popper: popper,
    }
  }
})
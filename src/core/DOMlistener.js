import {uppercaser} from './utils'

export class DOMlistener {
  constructor($root, listeners = []) {
    if (!$root) {
      throw new Error(`No $root in DOM`)
    }
    this.$root = $root
    this.listeners = listeners
  }
  initDOMListeners() {
    // console.log(this.listeners)
    this.listeners.forEach((listener) => {
      const method = getMethodName(listener)
      if (!this[method]) {
        throw new Error(`Method ${method} undefiend`)
      }
      this[method] = this[method].bind(this)
      this.$root.on(listener, this[method])
    }) 
  }
  removeDOMListeners() {
    this.listeners.forEach((listener) => { 
      const method = getMethodName(listener)
      this.$root.off(listener, this[method])
    })
  }
}
function getMethodName(eventName) {
  return 'on' + uppercaser(eventName)
}

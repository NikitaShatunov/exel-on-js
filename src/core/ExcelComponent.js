import {DOMlistener} from './DOMlistener';

export class ExcelComponent extends DOMlistener {
  constructor($root, options = {}) {
    super($root, options.listeners)
  }
  toHTML() {
    return ''
  }
  init() {
    this.initDOMListeners()
  }
  remove() {
    this.removeDOMListeners()
  }
}

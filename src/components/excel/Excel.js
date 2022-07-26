import {$} from '../../core/dom'

export class Excel {
  constructor(selector, options) {
    this.$el = $(selector)
    this.components = options.components || []
  }

  getRoot() {
    const $root = $.create('div', 'excel')
    
    this.components = this.components.map((Component) => {
      const $el = $.create('div', Component.className)
      const component = new Component($el)
      // Debug
      // if (Component.name) {
      //   window['c' + Component.name] = component
      // }
      $el.html(component.toHTML())
      $root.append($el)
      return component
    });
    return $root
  }
  render() {
    this.$el.append(this.getRoot().$el)
    this.components.forEach((component) => component.init());
  }
}

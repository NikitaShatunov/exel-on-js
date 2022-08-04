import {ExcelComponent} from '../../core/ExcelComponent';
import {createTable} from './table.template';
import {tableResize} from './resize.table';
import {shouldResize} from './table.func';

export class Table extends ExcelComponent {
  static className = 'excel__table'
  constructor($root) {
    super($root, {
      listeners: ['mousedown'],
    })
  }
  toHTML() {
    return createTable()
  }
  onMousedown(event) {
    // console.log(event.target.getAttribute('data-resize'))
    if (shouldResize(event)) {
      tableResize(this.$root, event)
    }
  }
}
// 191 ms  Scripting
// 615 ms  Rendering

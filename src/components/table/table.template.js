const CODES = {
  A: 65,
  Z: 90,
}
function createCell(_, index) {
  return `<div class="cell" contenteditable data-col ="${index}"></div>`
}
function createColumn(col, index) {
  return `<div class="column" data-type='resizable'
  data-col ="${index}">
  ${col}
  <div class="col-resize" data-resize="col" data-type="line">
  </div></div>`
}
function createRow(index, content) {
  const resize = index ? `<div class="row-resize"
   data-resize="row"></div>` : ''
  return `
    <div class = "row" data-type = "resizable">
    <div class = "row-info">
    ${index ? index : ''}${resize}
    </div>
    <div class = "row-data">${content}</div>
    </div>
    `
}
function toChar(_, index) {
  return String.fromCharCode(CODES.A + index)
}

export function createTable(rowsCount = 20) {
  const colsCount = CODES.Z - CODES.A + 1
  const rows = []
  const colums = new Array(colsCount).fill('')
      .map(toChar)
      .map(createColumn)
      .join('')
  rows.push(createRow(null, colums))
  for (let i = 0; i < rowsCount; i++) {
    const cells = new Array(colsCount).fill('')
        .map(createCell)
        .join('')
    rows.push(createRow(i + 1, cells))
  }
  return rows.join('')
}

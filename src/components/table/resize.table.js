import {$} from '@core/dom'
export function tableResize($root, event) {
  const $target = $(event.target)
  // const $parent = $target.$el.parentNode // BAD SOLUTION
  // const $parent = $target.$el.closest('.column') // also bad 
  const $parent = $target.closest('[data-type="resizable"]')
  const coordinates = $parent.coords()
  const type = $target.data.resize
  const site = type === 'col' ? ['bottom', 'width'] : ['right', 'height']
  let delta
  $target.css({
    opacity: 1,
    [site[0]]: '-5000px',
    [site[1]]: '2px',
  })
  document.onmousemove = (e) => {
    if (type === 'col') {
      delta = e.pageX - coordinates.right
      $target.css({right: -delta + 'px'})
    } else {
      delta = e.pageY - coordinates.bottom
      $target.css({bottom: -delta + 'px'})
    }
  }
  document.onmouseup = () => {
    document.onmousemove = null
    document.onmouseup = null
    if (type === 'col') {
      $parent.css({width: coordinates.width + delta + 'px'})
      $root.findAll(`[data-col="${$parent.data.col}"]`).forEach((el) =>
        el.style.width = coordinates.width + delta + 'px')
    } else {
      $parent.$el.style.height = coordinates.height + delta + 'px'
    }
    $target.css({
      opacity: 0,
      bottom: 0,
      right: 0,
      [site[1]]: '4px',
    })
  }
}

/**
 * Created by pc on 2018/1/26.
 */

import Hljs from 'highlight.js'
import 'highlight.js/styles/monokai-sublime.css'
// import 'highlight.js/styles/atelier-seaside-light.css'
// import 'highlight.js/styles/atom-one-light.css'
// import 'highlight.js/styles/tomorrow-night.css'
// import 'highlight.js/styles/default.css'

let Highlight = {}
Highlight.install = function (Vue, options) {
  Vue.directive('highlight', function (el) {
    let blocks = el.querySelectorAll('pre code')
    blocks.forEach((block) => {
      Hljs.highlightBlock(block)
    })
  })
}
export default Highlight

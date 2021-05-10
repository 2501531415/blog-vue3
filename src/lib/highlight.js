//import hljs from 'highlight.js'
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
hljs.registerLanguage('javascript', javascript);


export default (app)=>{
    app.directive('highlight',function (el) {
        let blocks = el.querySelectorAll('pre code');
        blocks.forEach((block)=>{
          hljs.highlightElement(block)
        })
    })
}

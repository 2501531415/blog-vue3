export function debounce(fn, delay) {
    var timer = null
    return function () {
        if (timer) {
            clearInterval(timer)
        }
        var _this = this
        var _arguments = arguments
        timer = setTimeout(() => {
            fn.apply(_this, _arguments)
        }, delay)
    }
}
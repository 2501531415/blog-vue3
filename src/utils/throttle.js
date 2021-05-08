export function throttle(fn,delay){
    var now = null
    return function(){
        var date = new Date().getTime()
        var _this = this
        var _arguments = arguments
        if(date - delay > now){
            fn.apply(_this,_arguments)
            now = date
        }
    }
}
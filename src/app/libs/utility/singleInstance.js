




let creareModalSingleInstace = (function () {
    let instance = null;
    return function (fn,args) {
        if (!instance) {
            instance = fn.call(this,args)
        }
        return instance
    }
})()

export {creareModalSingleInstace}
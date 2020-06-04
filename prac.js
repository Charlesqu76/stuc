let pro = new Promise((resolve, reject) => {
    setTimeout(function () {
        console.log('as')
        resolve({name: 2});
    }, 1000)
});
pro.then(
    (value) => {console.log(value, 'asdad')}
)

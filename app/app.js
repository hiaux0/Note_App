define(['jquery','helper_lib','app_helper','drag_drop','write_anywhere'], function($,helper,ah,dd,wa) {

    dd.listeners.evListener()
    wa.listeners.evListener()
    

    
 



    // let promiseTest = new Promise(function (resolve, reject) {
    //     document.body.addEventListener('click', promiseTest)
        
    //     let bool = false
    //     if (bool) {
    //         resolve("truuue")
    //     } else {
    //         let reason = new Error
    //         reason.message = "Error in promise test"
    //         reject(reason)
    //     }
    // })


    // promiseTest.then(function (fromResolve) {
    //     console.log(fromResolve)
    // })
})





    // let isSomething = function(value) {
    //     return function(name) {
    //         console.log(name + value);
    //     }
    // } 

    // let isDrop = isSomething(3)
    // isDrop("three")
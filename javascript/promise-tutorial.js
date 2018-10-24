// promise

// wraps async code
// one of the following state: 
// 1 pending.
// 2. resolve
// 3. reject

// when resolved or rejected it will call the listeners

// timer promise resolved after 1 sec

// timerPromise: Promise<string>
// const timerPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('hello world from timer promise');

//         //reject(new Error('something happened'));
//     }, 1000);
// });

// // anotherPromise: Promise<TodoTask>
// const anotherPromise = timerPromise.then(
//     function whenResolved(msg) {
//         console.log(msg);

//         // whatever we return here
//         //return msg.length;
//         // Promise<Response>
//         return fetch('https://nztodo.herokuapp.com/api/task/?format=json')
//     }
// )
// .catch(     
//     function whenRejected(error) {
//         console.log(error.message);

//         return error;
//     })
// .then( function(resOrError) {
//     if (resOrError instanceof Error) {
//         //  resOrError: Error
//     } else {
//         //  resOrError: Response
//         // Promise<any>
//         return resOrError.json()
//     }
// })
// .then(function(json) {
//     return new TodoTask(json)
// })
// .catch(     
//     function whenRejected(error) {
//         console.log(error.message);

//         return error;
//     })


// promise chaining
// promise.then().then().then() ... 

// async await functions
// function that returns promise

// Promise<any>
async function somepromises() {
    try {
        const fetch = require('node-fetch');
        const res = await fetch('https://nztodo.herokuapp.com/api/task/?format=json');

        // res.json(): Promise<any>
        const json = await res.json();
        return json;

        // const arrayOfResults = await Promise.all([promise1, promise2])
    }
    catch(err) {
        // this will run if one of the promises in try will be rejected

    }
    
}


somepromises().then((json) => {
    console.log(json);
    return somepromises();
})
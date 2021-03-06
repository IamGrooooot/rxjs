const { observable, of, interval, timer, range, from, fromPromise } = rxjs;
const { take } = rxjs.operators;

function createSubcribe(name) {
    return {
        next(x) {
            console.log(name, ': ', x);
        },
        error(err){
            console.log('Error: ', err);
        },
        complete(){
            console.log(name, ': Completed!')
        }
    }
}

function delay(ms = 1000){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(ms);
        }, ms)
    })
}

// delay(3000).then(()=> {
//     console.log('Promise was resolved!');
// });

const p$ = from(delay(4000));

p$.subscribe(createSubcribe('fromPromise'));
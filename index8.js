const { observable, fromEvent, of, interval, timer, range, from, fromPromise } = rxjs;
const { distinctUntilChanged, distinct, debounceTime, filter, take, map, pluck, first, last, find, findIndex, skip, skipWhile, takeWhile, skipUntil, takeUntil } = rxjs.operators;

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

const cars = [
    {
        name: 'audi',
        price: 500
    },
    {
        name: 'bmw',
        price: 400
    },
    {
        name: 'ford',
        price: 200
    }
    
]

// range(0, 10)
//     .pipe(
//         filter(x => x > 3 && x <= 5 || x === 9)
//     )
//     .subscribe(createSubcribe('filter'));

// fromEvent(document.querySelector('input'), 'keyup')
//     .pipe(
//         map(e => e.target.value)
//     )
//     .subscribe(x => {
//         from(cars)
//             .pipe(
//                 filter(c => c.name === x)
//             )
//             .subscribe(v => {
//                 document.querySelector('div')
//                     .innerHTML = `<h2>${v.name.toUpperCase()}</h2><h4>${v.price}</h4>`;
//             })
//     });

// fromEvent(document.querySelector('input'), 'keyup')
//     .pipe(
//         map(e => e.target.value),
//         debounceTime(1500),
//         distinct()
//     )
//     .subscribe(createSubcribe('debounceTime'));

from([1, 2, 3, 3, 3, 5, 5, 1, 1, 99, 99, 2, 4, 6])
    .pipe(
        distinctUntilChanged()
    )
    .subscribe(createSubcribe('debounceTime'));
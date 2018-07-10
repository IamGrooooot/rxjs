const { observable, of, interval, timer, range } = rxjs;
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

of(5, 'string', [4, 5, 99])
    .subscribe(
        createSubcribe('of')
    );

interval(1000)
    .pipe(
        take(15)
    )
    .subscribe(
        createSubcribe('interval')
    );

timer(4000, 500)
    .pipe(
        take(10)
    )
    .subscribe(
        createSubcribe('timer')
    );

range(5, 10)
    .subscribe(
        createSubcribe('range')
    );



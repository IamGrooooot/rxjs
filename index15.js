const { AsyncSubject, ReplaySubject, BehaviorSubject, Subject, combineLatest, zip, concat, observable, fromEvent, of, interval, timer, range, from, fromPromise } = rxjs;
const { withLatestFrom, concatMap, mergeMap, concatAll, mergeAll, merge, delay, every, defaultIfEmpty, bufferCount, bufferTime, buffer, distinctUntilChanged, distinct, debounceTime, filter, take, map, pluck, first, last, find, findIndex, skip, skipWhile, takeWhile, skipUntil, takeUntil } = rxjs.operators;

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

const subject$ = new Subject();
const int$ = interval(1000);

const BehaviorSubject$ = new BehaviorSubject('VG');

const ReplaySubject$ = new ReplaySubject(2);

const AsyncSubject$ = new AsyncSubject(2);



// subject$
//     .subscribe(createSubcribe('subject'));

// subject$
//     .next(1);

// subject$
//     .next(2);

// setTimeout(() => {
//     subject$.next(3);
//     subject$.complete();
// }, 2000);

// int$
//     .subscribe(subject$);

// subject$ 
//     .subscribe(createSubcribe('subject'));


// BehaviorSubject$
//     .subscribe(createSubcribe('BehaviorSubject'));

// BehaviorSubject$.next('Hello');



// ReplaySubject$.next(1);
// ReplaySubject$.next(2);
// ReplaySubject$.next(3);
// ReplaySubject$.complete();

// ReplaySubject$
//     .subscribe(createSubcribe('ReplaySubject'));


AsyncSubject$.next(1);
AsyncSubject$.next('VG');
AsyncSubject$.complete();

AsyncSubject$
    .subscribe(createSubcribe('AsyncSubject'));
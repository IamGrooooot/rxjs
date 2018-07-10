
var stream$ = rxjs.Observable.create(function(observer){
    observer.next('one');
    observer.next('two');
});

stream$.subscribe(data => {
    console.log(data);
}, error => {
    
});
// EASY: Write a function that would allow you to do this:

// var run = exercise('running');
// console.log(run()); // prints "Today's exercise: running"
// var swim = exercise('swimming');
// console.log(swim()); // prints "Today's exercise: swimming"


function todaysExercise (exercise) {
    if (exercise === 'running') {
        console.log("Today's exercise: running");
    } else if (exercise === 'swimming') {
        console.log("Today's exercise: swimming");
    }
}
todaysExercise("swimming");
todaysExercise("running");





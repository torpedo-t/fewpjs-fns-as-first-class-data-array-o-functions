function wakeDog(dogName, dogBreed) {
    return `Wake ${dogName} the ${dogBreed}`
};

function leashDog(dogName, dogBreed) {
    return `Leash ${dogName} the ${dogBreed}`
};

function walkToPark(dogName, dogBreed) {
    return `Walk to the park with ${dogName} the ${dogBreed}`
};

function throwFrisbee(dogName, dogBreed) {
    return `Throw the frisbee for ${dogName} the ${dogBreed}`
};

function walkHome(dogName, dogBreed) {
    return `Walk home with ${dogName} the ${dogBreed}`
};

function unleashDog(dogName, dogBreed) {
    return `Unleash ${dogName} the ${dogBreed}`
};

const routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog];

// iterate over routine array to get access to each function
// call each function in the array, passing dogName, dogBreed received by exerciseDog function
// store return value of each functions call in a new array
// return the new array
function exerciseDog(dogName, dogBreed) {
    let newArray = []
    for(let i = 0; i < routine.length; i++) {
        let fn = routine[i]
        let exercise = fn(dogName, dogBreed)
        newArray.push(exercise)
    }
    return newArray;
}
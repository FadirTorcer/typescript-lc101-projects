// URL for the instructions: 
// https://education.launchcode.org/intro-to-professional-web-dev/chapters/typescript/exercises.html 


// Part 1: Declare (5) Variables With Type
// let spacecraftName:	string = 'Determination';
// let speedMph: number = 17500;
let kilometersToMars: number = 225000000;
let kilometersToTheMoon: number = 384400;
// let milesPerKilometer: number = 0.621;


// Part 2: Print Days to Mars
/* let milesToMars: number = kilometersToMars * milesPerKilometer;
let hoursToMars: number = milesToMars / speedMph;
let daysToMars: number = hoursToMars / 24; */


// Code an output statement here (use a template literal):



// Part 3: Create a Function ("getDaysToLocation")
/* function getDaysToLocation (kilometersAway: number): number {
    let milesAway: number = kilometersAway * milesPerKilometer;
    let hoursToLocation: number = milesAway / speedMph;
    let daysToLocation: number = hoursToLocation / 24;
    return daysToLocation;
} */


// Move your output statement from part 2 here. Update the template literal to call
// the function and print the outputs for a Mars trip and a moon trip.
/* console.log(`It will take ${spacecraftName} ${getDaysToLocation(kilometersToMars).toFixed(2)} days to reach Mars.`);
console.log(`It will take ${spacecraftName} ${getDaysToLocation(kilometersToTheMoon).toFixed(2)} days to reach the Moon.`); */


// Part 4: Create a Spacecraft Class
class Spacecraft {
    milesPerKilometer: number = 0.621;
    name: string;
    speedMph: number;

    constructor(name: string, speedMph: number) {
        this.name = 'Determination';
        this.speedMph = 17500;
    }

    function getDaysToLocation (kilometersAway: number): number {
        let milesAway: number = kilometersAway * this.milesPerKilometer;
        let hoursToLocation: number = milesAway / this.speedMph;
        let daysToLocation: number = hoursToLocation / 24;
        return daysToLocation;
    }

}


// Create an instance of the class here:
let spaceShuttle = new Spacecraft('Determination', 17500);


// Move your output statements from part 3 here. Update the template literals use the
// instance of the class.
console.log(`It will take ${spaceShuttle.name} ${spaceShuttle.getDaysToLocation(kilometersToMars).toFixed(2)} days to reach Mars.`);
console.log(`It will take ${spaceShuttle.name} ${spaceShuttle.getDaysToLocation(kilometersToTheMoon).toFixed(2)} days to reach the Moon.`);


// Part 5: Export and Import the SpaceLocation Class
// Add the required import statement BEFORE the part 1 concent.


// Add the printDaysToLocation function to the Spacecraft class.

// Paste in the code from step 6 here:
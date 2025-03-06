// website loaded?
console.log("👍 Okay");


// Days Until an Event
const eventDate = "2025-06-24"; // YYYY-MM-DD format

const daysUntilEvent = getDaysUntilEvent( eventDate );
console.log( daysUntilEvent );

// Get HTML element
const elemDaysUntilEvent = document.querySelector('.daysUntilEvent');

// Set to HTML element
elemDaysUntilEvent.textContent = daysUntilEvent;
elemDaysUntilEvent.setAttribute("datetime", eventDate );
// Streak of Days


// Age of Person, Place, or Thing
// Unit Test
const birthDate = "2003-06-24"; // YYYY-MM-DD format

const ageOfPerson = calculateAgeOf( birthDate );
console.log( ageOfPerson );

// Unit test
// Get HTML element
const elemAgeOfPerson = document.querySelector('.ageOfPerson');

// Set to HTML element
elemAgeOfPerson.textContent = ageOfPerson;
elemAgeOfPerson.setAttribute("datetime", ageOfPerson );

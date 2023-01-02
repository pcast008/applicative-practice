import { data } from "../data/data";

// SPACE DATA EXERCISE 16
// Return the year with the greatest number of Asteroids discoveries
// Return example: 1902

export function getGreatestDiscoveryYear(data) {
    // Your code goes here...
    const discoveryYears = data.asteroids.reduce((acc, asteroid) => {
        const currValue = acc[asteroid.discoveryYear] ?? 0
        return {...acc, [asteroid.discoveryYear]: currValue + 1}
    }, {})

    const year = parseInt(Object.entries(discoveryYears).reduce((prevYear, currYear) => currYear[1] > prevYear[1] ? currYear : prevYear)[0])

    return year
}


// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-16"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
import { data } from "../data/data";

// SPACE DATA EXERCISE 16
// Return the year with the greatest number of Asteroids discoveries
// Return example: 1902

export function getGreatestDiscoveryYear(data) {
  // Your code goes here...
  const asteroids = data.asteroids

  return asteroids.reduce((acc, asteroid, index) => {
    return acc.count > asteroids.filter(asteroid => asteroid.discoveryYear === asteroids[index].discoveryYear).length ? acc : 
    { discoveryYear: asteroids[index].discoveryYear, count: asteroids.filter(asteroid => asteroid.discoveryYear === asteroids[index].discoveryYear).length }
  }, { discoveryYear: asteroids[0].discoveryYear, count: asteroids.filter(asteroid => asteroid.discoveryYear === asteroids[0].discoveryYear).length } ).discoveryYear
}




// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-16"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
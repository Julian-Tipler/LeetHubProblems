/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function (asteroids) {
    let stack = []
    let i = 0

    while (i < asteroids.length) {
        if (!stack.length) {
            stack.push(asteroids[i])
            i++
            continue
        }
        // top asteroid in stack
        let topAsteroid = stack[stack.length - 1]
        // try out new asteroid asteroids[i]
        let newAsteroid = asteroids[i]
        // if both positive or both negative add new asteroid 
        // if topAsteroid is negative and new asteroid is positive add it to the stack
        if (topAsteroid * newAsteroid > 0 || (topAsteroid < 0 && newAsteroid > 0)) {
            stack.push(newAsteroid)
            i++
        }
        // if top asteroid is positive and new asteroid is negative 

        // blow up the newAsteroid
        else if (Math.abs(topAsteroid) > Math.abs(newAsteroid)) {
            i++
            // blow up bothAsteroids
        } else if (Math.abs(topAsteroid) === Math.abs(newAsteroid)) {
            stack.pop()
            i++
        }
        // blow up topAsteroid and try the newAsteroid again
        else {
            stack.pop()
        }
    }
    // if same size pop both
    // otherwise bigger one stays and loser is gone
    // i++
    return stack
}


// Collision has to be a positive next to a negative
// Once found start collision
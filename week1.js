// EXAMPLE: O(n) Time Complexity
// const printLoop = (n) => {
// 	for(let i = 1; i <= n; i++) {
// 		console.log(i)
//     }
// }

// EXAMPLE: O(n) + 1 
// const printLoop = (n) => {
//     console.log(`Here are all the number from 1 to ${n}`)
// 	for(let i = 1; i <= n; i++) {
// 		console.log(i)
//     }
// }

const printLoop = (n) => {
    console.log(`Here are all the number from 1 to ${n}`)
	for(let i = 1; i <= n; i++) {
		console.log(i)
    }

    for(let i = 1; i <= n; i++) {
		console.log(i)
    }
}

// printLoop(3)

// O(n) summation formula
// const sumRange = (n) => {
//     total = 0;
//     for(let i = 1; i <= n; i++) {
//         total += i
//     }
//     return total
// }

// O(1) summation formula
const sumRange = (n) => (n * (n + 1)/2)

console.log(sumRange(3))

const printGridCoordinates = (n) => {
    for(let i = 0; i < n; i++) {
        for(let j = 0; j < n; j++) {
            console.log(i, j)
        }
    }
}

printGridCoordinates(4)
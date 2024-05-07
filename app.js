const score = document.querySelector('.score')
const holes = document.querySelectorAll('.hole')
const nose = document.querySelector('.nose')



let result = 0
let hitNose
let gameTime = 60

console.log(result);

// console.log(hitNose)

const randomHole = () => {
    holes.forEach(hole => {
        hole.classList.remove('nose')
    })

    let randomNose = holes[Math.floor(Math.random() * 9)]
    randomNose.classList.add('nose')

    hitNose = randomNose.id

    console.log(randomNose.id);
}

// const handleClick = (event) => {
//     holes.forEach(hole => {
//         hole.addEventListener('click', handleClick)
//     })
// }

holes.forEach(hole => {
    hole.addEventListener('click', () => {
        if (hole.id === hitNose) {
            result++
            score.textContent = result
            hitNose = null
            console.log('i have clicked the nose');
        }
        // console.log(hitNose)
    })
})




const moveNose = () => {
    setInterval(randomHole, 500)
}
// randomHole(moveNose())











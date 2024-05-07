const score = document.querySelector('.score')
const holes = document.querySelectorAll('.hole')
const nose = document.querySelector('.nose')
const time = document.querySelector(".gametime")



let result = 0
let hitNose
let gameTime = 60
let timer = null

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
            score.textContent = `Your Score: ${result}`
            hitNose = null
            console.log('i have clicked the nose');
        }
        // console.log(hitNose)
    })
})




const moveNose = () => {
    setInterval(randomHole, 1000)
}
// randomHole(moveNose())


// gameCountDown = setInterval(countDown, 1000)



const countDown = () => {
    gameTime--
    time.textContent = `Game Timer: ${gameTime}`

    if (gameTime == 0) {
        clearInterval(countDownTimer)
        clearInterval(time)
    }
}

let countDownTimer = setInterval(countDown, 1000)

//  function timer () {
// let seconds = 1000
//     for(gameTime = 60; gameTime <= 0; gameTime--){
//         setTimeout(() => {
//             seconds += 1000;
//             time.textContent = gameTime
//         }, seconds);
        
//     }
// }
    
// window.onload = timer()
const score = document.querySelector('.score')
const holes = document.querySelectorAll('.hole')
const spy = document.querySelector('.spy')
const time = document.querySelector(".gametime")
const startButton = document.querySelector('.gamestart')
const easy = document.querySelector('.easybutton')
const medium = document.querySelector('.mediumbutton')
const hard = document.querySelector('.hardbutton')
const endResult = document.querySelector('.end-game-message')
const cursor = document.querySelector(".cursor img")
const audio = document.querySelector('.background-audio')


window.addEventListener("mousemove", (e) => {
    cursor.style.top = e.pageY + "px"
    cursor.style.left = e.pageX + "px"

})

window.addEventListener("click", () => {
    cursor.style.animation = "hit 0.1s ease"
    setTimeout(() => {
        cursor.style.removeProperty("animation")
    }, 100);
})


let easySpeed = false
let mediumSpeed = false
let hardSpeed = false
let gameSpeed = 1000
let result = 0
let hitSpy
let gameTime = 60
let timer = null
time.textContent = `Game Timer: ${gameTime}`

easy.addEventListener('click', () => {
    gameSpeed = 1000
    hardSpeed = false
    mediumSpeed = false
    easySpeed = true
    console.log("working ", easySpeed, mediumSpeed);

})

medium.addEventListener('click', () => {
    gameSpeed = 500
    mediumSpeed = true
    easySpeed = false
    hardSpeed = false
    console.log("working ", easySpeed, mediumSpeed);

})

hard.addEventListener('click', () => {
    gameSpeed = 300
    hardSpeed = true
})

const randomHole = () => {
    holes.forEach(hole => {
        hole.classList.remove('spy')
    })

    let randomSpy = holes[Math.floor(Math.random() * 9)]
    randomSpy.classList.add('spy')

    hitSpy = randomSpy.id

    console.log(randomSpy.id);
}

holes.forEach(hole => {
    hole.addEventListener('click', () => {
        if (hole.id === hitSpy) {
            result++
            score.textContent = `Your Score: ${result}`
            hitSpy = null
            console.log('i have clicked the spy');
        }
    })
})

const countDown = () => {
    gameTime--
    time.textContent = `Game Timer: ${gameTime}`

    if (gameTime === 0) {
        console.log(result, easySpeed, mediumSpeed);
        if (easySpeed === true) {
            if (result >= 50) {
                endResult.textContent = "WINNER!"
            } else {
                endResult.textContent = 'LOSER!'
            } 
        } else if ( mediumSpeed === true) {
            if (result >= 25) {
                endResult.textContent = "WINNER!"
            } else {
                endResult.textContent = 'LOSER!'
            }
        } else if ( hardSpeed === true) {
            if (result >= 10) {
                endResult.textContent = "WINNER!"
            } else {
                endResult.textContent = "LOSER!"
            }
        }
        // this code resets the game
        clearInterval(timer)
        clearInterval(spyMovement)
        timer = null
        result = 0
    }
}
// let interval = setInterval(countDown, 1000)


const moveSpy = () => {
    spyMovement = setInterval(randomHole, gameSpeed)
}

const startGameButton = () => {
    if (timer) return;

    result = 0;
    score.textContent = `Your Score: ${result}`;

    gameTime = 60;
    time.textContent = `Game Timer: ${gameTime}`;
    timer = setInterval(countDown, 1000);

    moveSpy();
    countDown()
    audio.play()
}


startButton.addEventListener('click', startGameButton);










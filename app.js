const score = document.querySelector('#score')
const holes = document.querySelectorAll('.hole')
const nose = document.querySelector('.nose')



let result = 0


const randomHole = () => {
    holes.forEach(hole => {
       hole.classList.remove('nose') 
    })

    let randomNose = holes[Math.floor(Math.random() * 9)]
        randomNose.classList.add('nose')
}
randomHole()
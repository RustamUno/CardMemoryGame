const levelOne = document.querySelector('.one');
const levelTwo = document.querySelector('.two');
const levelThree = document.querySelector('.three');
const btnStart = document.querySelector('.btn')

levelOne.addEventListener('click', (event) => {
    levelOne.classList.add('change');
    levelTwo.classList.remove('change');
    levelThree.classList.remove('change');
    levelOne.classList.remove('darkening');
    levelTwo.classList.add('darkening');
    levelThree.classList.add('darkening');
});

levelTwo.addEventListener('click', (event) => {
    levelOne.classList.remove('change');
    levelTwo.classList.add('change');
    levelThree.classList.remove('change');
    levelOne.classList.add('darkening');
    levelTwo.classList.remove('darkening');
    levelThree.classList.add('darkening');
});

levelThree.addEventListener('click', (event) => {
    levelOne.classList.remove('change');
    levelTwo.classList.remove('change');
    levelThree.classList.add('change');
    levelOne.classList.add('darkening');
    levelTwo.classList.add('darkening');
    levelThree.classList.remove('darkening');
});

btnStart.addEventListener('click', (event) => {

});

const btnStart = document.querySelector('.btn');
const level = document.querySelectorAll('input[name="level"]');
const levelOne = document.querySelector('.one');
const levelTwo = document.querySelector('.two');
const levelThree = document.querySelector('.three');

btnStart.addEventListener('click', (event) => {
    for (let lev of level) {
        let levelSel = lev.value;
        if (lev.checked) {
            levelSel === '1' ? location.href = "./levelOne.html" : levelSel === '2' ? location.href = "./levelTwo.html" : levelSel === '3' ? location.href = "./levelThree.html" : console.log('no');
        }
    }
})

levelOne.addEventListener('click', (event) => {
    levelOne.classList.add('change');
    levelTwo.classList.remove('change');
    levelThree.classList.remove('change');
    levelOne.classList.remove('darkening');
    levelTwo.classList.add('darkening');
    levelThree.classList.add('darkening');
});

levelTwo.addEventListener('click', (event) => {
    levelTwo.classList.add('change');
    levelOne.classList.remove('change');
    levelThree.classList.remove('change');
    levelTwo.classList.remove('darkening');
    levelOne.classList.add('darkening');
    levelThree.classList.add('darkening');
});

levelThree.addEventListener('click', (event) => {
    levelThree.classList.add('change');
    levelOne.classList.remove('change');
    levelTwo.classList.remove('change');
    levelThree.classList.remove('darkening');
    levelOne.classList.add('darkening');
    levelTwo.classList.add('darkening');
});


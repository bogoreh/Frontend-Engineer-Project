const memojiEl = document.querySelector('.memoji');
const totalMemojis = 15;
let currentMemoji = 1;

const getMemojiUrl = (nr) => `https://www.florin-pop.com/images/memoji-${nr}.png`;

// either 0 or 1 or space
const getRandomNum = () => Math.random() < 0.4 ? '0' : Math.random() < 0.66 ? '1' : ' ';

createBgNumbers();
setInterval(changeMemoji, 400);
setInterval(changeNumbers, 100);

function changeMemoji() {
    currentMemoji++;

    if (currentMemoji > totalMemojis) {
        currentMemoji = 1;
    }

    memojiEl.src = getMemojiUrl(currentMemoji);
}

function createBgNumbers() {
    const size = 30;
    const row = Math.ceil(window.innerWidth / size);
    const col = Math.ceil(window.innerHeight / size);

    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            const num = document.createElement('div');
            num.classList.add('num');
            num.style.left = `${i * size}px`;
            num.style.top = `${j * size}px`;
            num.innerHTML = `<span>${getRandomNum()}</span>`;
            num.style.color = Math.random() < 0.2 ? '#ff4757' : '#2f3542';
            document.body.appendChild(num);
        }
    }
}

function changeNumbers() {
    const nums = document.querySelectorAll('.num');

    nums.forEach(num => {
        num.innerHTML = `<span>${getRandomNum()}</span>`;
        num.style.color = Math.random() < 0.2 ? '#ff4757' : '#2f3542';
    });
}


// SOCIAL PANEL JS
const floating_btn = document.querySelector('.floating-btn');
const close_btn = document.querySelector('.close-btn');
const social_panel_container = document.querySelector('.social-panel-container');

floating_btn.addEventListener('click', () => {
    social_panel_container.classList.toggle('visible')
});

close_btn.addEventListener('click', () => {
    social_panel_container.classList.remove('visible')
});
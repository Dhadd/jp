const buybtn = document.querySelector('.buy-btn');
const okbtn = document.querySelector('.ok-btn');
const popupBox = document.querySelector('.popup-overlay');

buybtn.addEventListener('click',() => {
    popupBox.classList.add('active');
})

okbtn.addEventListener('click',() => {
    popupBox.classList.remove('active');
})

let items = document.querySelectorAll('.item');
let radio = document.querySelectorAll('.radio');
let radioValue = document.querySelector('.radio-value')
let currentItem = 0;
let currentRadio = 0;
let isEnabled = true;

function changeCurrentItem(n) {
    currentItem = (n + items.length) % items.length;
};

function changeCurrentRadio(n) {
    currentRadio = (n + radio.length) % radio.length;
}

function hideItem(direction) {
    isEnabled = false
    items[currentItem].classList.add(direction)
    items[currentItem].addEventListener('animationend', function() {
        this.classList.remove('active', direction)
    })
}

function showItem(direction) {
    items[currentItem].classList.add('next', direction)
    items[currentItem].addEventListener('animationend', function() {
        this.classList.remove('next', direction)
        this.classList.add('active')
        isEnabled = true
    })
}

function check() {
    radio[currentRadio].checked = true
}

function changeIndexValue() {
    radioValue.textContent = +currentRadio + 1
}

function previousItem(n) {
    hideItem('to-right')
    changeCurrentItem(n - 1)
    changeCurrentRadio(n - 1)
    changeIndexValue()
    check()
    showItem('from-left')
}

function nextItem(n) {
    hideItem('to-left')
    changeCurrentItem(n + 1)
    changeCurrentRadio(n + 1)
    changeIndexValue()
    check()
    showItem('from-right')
}

document.querySelector('.control.left').addEventListener('click', function() {
    if(isEnabled) {
        previousItem(currentItem)
    }
});

document.querySelector('.control.right').addEventListener('click', function() {
    if(isEnabled) {
        nextItem(currentItem)
    }
});

radio.forEach(item => item.addEventListener('click', function() {
    if(isEnabled && currentItem != (item.value - 1)) {
        hideItem('to-left')
        currentItem = (item.value - 1)
        currentRadio = currentItem
        changeIndexValue()
        showItem('from-right')
    }
}))
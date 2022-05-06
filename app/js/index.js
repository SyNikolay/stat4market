let historyTitle = document.querySelector('.history__title');

if (window.innerWidth >= 1280) {
    historyTitle.innerHTML = 'Небольшая предыстория о том, почему нам можно доверять'
} else {
    historyTitle.innerHTML = 'Как работает модуль Аналитика по API для Wildberries?'
}


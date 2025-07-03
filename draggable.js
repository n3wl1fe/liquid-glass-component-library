const container = document.querySelector('.button-container');
let isDragging = false;
let offsetX = 0;
let offsetY = 0;

container.addEventListener('mousedown', function (e) {
    isDragging = true;
    offsetX = e.clientX - container.offsetLeft;
    offsetY = e.clientY - container.offsetTop;
    container.style.cursor = 'grabbing';
});

document.addEventListener('mousemove', function (e) {
    if (!isDragging) return;
    let x = e.clientX - offsetX;
    let y = e.clientY - offsetY;
    container.style.left = x + 'px';
    container.style.top = y + 'px';
    container.style.transform = 'none';
});

document.addEventListener('mouseup', function () {
    isDragging = false;
    container.style.cursor = 'grab';
});

(() => {
    const container = document.querySelector('.button-container');
    let isDragging = false;
    let offsetX = 0;
    let offsetY = 0;

    container.addEventListener('mousedown', function (e) {
        if (e.target !== container) return;
        const { left, top } = container.getBoundingClientRect();
        isDragging = true;
        offsetX = e.clientX - (left + window.scrollX);
        offsetY = e.clientY - (top + window.scrollY);
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
})();
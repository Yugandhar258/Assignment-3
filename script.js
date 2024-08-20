
document.addEventListener("DOMContentLoaded", function () {
    const progressBars = document.querySelectorAll('.progress-bar');

    progressBars.forEach(bar => {
        const progress = bar.getAttribute('data-progress');
        bar.style.setProperty('--progress', progress);
        bar.querySelector('::after').style.width = progress;
    });
});

let progressElements = document.querySelectorAll('.progress');

progressElements.forEach(progress => {
    let progress_val = progress.querySelector('.progress_val').innerHTML;
    progress_val = parseInt(progress_val);

    let progressStart = 0,
        progressEnd = progress_val,
        speed = 10;

    let progress_bar = setInterval(() => {
        progressStart++;
        progress.style.background = `conic-gradient(#7069bc ${progressStart * 3.6}deg, #e3d2fd 0deg)`;
        if (progressStart == progressEnd) {
            clearInterval(progress_bar);
        }
    }, speed);
});


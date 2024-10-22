const btnTimeout = document.getElementById('btnTimeout');
const btnClearTimeout = document.getElementById('btnClearTimeout');
const seconds =document.getElementById('s');
const textTimeout = document.getElementById('textTimeout');

// btnTimeout.addEventListener('click', () => {   
//     for (let i = seconds.value; i >= 0; i--) {
//         setTimeout(() => {
//             textTimeout.innerHTML = i;
//         }, (seconds.value - i) * 1000);
//     }
//     setTimeout(() => {
//         alert('finished');
//     }, seconds.value * 1000);
//     });

// btnClearTimeout.addEventListener('click', () => {
//     textTimeout.innerHTML = '';
//     seconds.value = '';
//     alert('finished');
//     clearTimeout();
// });

let timeoutIds = []; // Lưu các ID của setTimeout

btnTimeout.addEventListener('click', () => {
    // Xóa các timeout trước đó
    timeoutIds.forEach(id => clearTimeout(id));
    timeoutIds = [];

    // Đếm ngược
    for (let i = seconds.value; i >= 0; i--) {
        const timeoutId = setTimeout(() => {
            textTimeout.innerHTML = i + 's';
        }, (seconds.value - i) * 1000);

        // Lưu ID của mỗi timeout
        timeoutIds.push(timeoutId);
    }

    // Hiển thị alert khi kết thúc
    const finishTimeoutId = setTimeout(() => {
        alert('finished');
    }, seconds.value * 1000);

    // Lưu ID của alert
    timeoutIds.push(finishTimeoutId);
});

btnClearTimeout.addEventListener('click', () => {
    // Dừng tất cả timeout
    timeoutIds.forEach(id => clearTimeout(id));
    timeoutIds = [];

    // Reset nội dung
    textTimeout.innerHTML = '';
    seconds.value = '';
    alert('Timeout cleared');
});

const text = document.getElementById('textInterval');
const btnInterval = document.getElementById('btnInterval');
const btnClearInterval = document.getElementById('btnClearInterval');

let intervalId = null;

btnInterval.addEventListener('click', () => {
    if (intervalId) {
        return;
    }
    intervalId = setInterval(() => {
        if (text.style.display === 'none') {
            text.style.display = 'block';
        }
        else {
            text.style.display = 'none';
        }
    }
    , 400);
});

btnClearInterval.addEventListener('click', () => {
    clearInterval(intervalId);
    intervalId = null;
    text.style.display = 'block';
    alert('Interval cleared');
});

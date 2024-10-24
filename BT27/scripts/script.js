const btn = document.getElementById('btn');
const output = document.getElementById('output');
let outputText = '';

btn.addEventListener('click', () => {
    outputText = '';
    // Tạo một Promise mới mỗi khi nhấn nút
    new Promise((resolve, reject) => {
        setTimeout(() => {
            let random = Math.floor(Math.random() * 10);
            if (random % 2 === 0) {
                resolve('Number: ' + random + ' Success at step 1');
            } else {
                reject('Number: ' + random + ' Failure at step 1');
            }
        }, 2000);
    })
    .then((message) => {
        console.log(message);
        outputText += `<p class="cardtext text-xl font-bold text-center">${message}</p>`;
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                let random = Math.floor(Math.random() * 10);
                if (random % 2 === 0) {
                    resolve('Number: ' + random + ' Success at step 2');
                } else {
                    reject('Number: ' + random + ' Failure at step 2');
                }
            }, 2000);
        });
    })
    .then((message) => {
        console.log(message);
        outputText += `<p class="cardtext text-xl font-bold text-center">${message}</p>`;
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                let random = Math.floor(Math.random() * 10);
                if (random % 2 === 0) {
                    resolve('Number: ' + random + ' Success at step 3');
                } else {
                    reject('Number: ' + random + ' Failure at step 3');
                }
            }, 2000);
        });
    })
    .then((message) => {
        console.log(message);
        outputText += `<p class="cardtext text-xl font-bold text-center">${message}</p>`;
    })
    .catch((error) => {
        console.error(error);
        outputText += `<p class="cardtext text-xl font-bold text-center">${error}</p>`;
    })
    .finally(() => {
        output.innerHTML = outputText;
         
    });
    
});

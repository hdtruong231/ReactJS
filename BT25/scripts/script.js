try {
    fetch('./scripts/funcfact.json')
    .then(response => response.json()) 
    .then(data => {
        console.log(data); // Kiểm tra dữ liệu nhận được từ file JSON

        let output = '';
        data.forEach(function(funcfact) {
            output += `
            <div class="card bg-white p-8 flex flex-col h-auto">
                <h1 class="cardtitle text-xl font-bold text-center">${funcfact.title}</h1>
                <img src="${funcfact.urlimage}" alt="${funcfact.title}" class="cardimg mx-auto my-4">
                <p class="cardtext text-center">${funcfact.content}</p>
            </div>
            `;
        });

        // Đưa nội dung vào div có id="funcfact"
        document.getElementById('funcfact').innerHTML = output;
    })
} catch (error) {
    console.log(error);
} finally { 
    alert('Đã tải xong dữ liệu');
}
    

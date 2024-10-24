class ValidationErrors extends Error {
    constructor(errors) { // Tạo constructor nhận vào mảng lỗi
        super(); // Gọi constructor của class cha
        this.errors = errors; // Gán mảng lỗi vào thuộc tính errors
    }
} // Tạo class ValidationErrors kế thừa từ class Error để xử lý lỗi validation 
function checkDateOfBirth(str) // str có dạng yyyy/mm/dd 
{
    let year = str.substring(0, 4); // Lấy năm
    let month = str.substring(5, 7); // Lấy tháng
    let day = str.substring(8, 10); // Lấy ngày
    let date = new Date(year, month - 1, day); // Tạo đối tượng Date
    if (date.getFullYear() == year && date.getMonth() == month - 1 && date.getDate() == day) {
        return true; // Trả về true nếu ngày tháng năm hợp lệ
    } else
    {
        throw new ValidationErrors(['Ngày tháng năm không hợp lệ']); // Nếu không hợp lệ, ném lỗi
    }
    
}
// đọc file json
try {   
    fetch('./user.json')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        let output = '';
        data.forEach(function(user) {
            try {
                checkDateOfBirth(user.dateOfBirth);
                output += `
                <div class="card bg-white p-8 flex flex-col h-auto">
                    <h1 class="cardtitle text-xl font-bold text-center">${user.name}</h1>
                    <p class="cardtext text-xl font-bold text-center">${user.dateOfBirth}</p>
                </div>
                `;
            } catch (error) {
                console.log(error);
                output += `
                <div class="card bg-white p-8 flex flex-col h-auto">
                    <p class="cardtext text-xl font-bold text-center">${error.errors}</p>
                </div>
                `;
                return;
            }

        }
        );
        document.getElementById('funcfact').innerHTML = output;
    }
    )
}
catch (error) {
    console.log(error);
}
finally {
    alert('Đã tải xong dữ liệu');
}




// try {
//     fetch('./funcfact.json')
//     .then(response => response.json()) 
//     .then(data => {
//         console.log(data); // Kiểm tra dữ liệu nhận được từ file JSON

//         let output = '';
//         data.forEach(function(funcfact) {
//             output += `
//             <div class="card bg-white p-8 flex flex-col h-auto">
//                 <h1 class="cardtitle text-xl font-bold text-center">${funcfact.title}</h1>
//                 <img src="${funcfact.urlimage}" alt="${funcfact.title}" class="cardimg mx-auto my-4">
//                 <p class="cardtext text-center">${funcfact.content}</p>
//             </div>
//             `;
//         });

//         // Đưa nội dung vào div có id="funcfact"
//         document.getElementById('funcfact').innerHTML = output;
//     })
// } catch (error) {
//     console.log(error);
// } finally { 
//     alert('Đã tải xong dữ liệu');
// }
    

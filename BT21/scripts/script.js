
const formAdd = document.getElementById('formAdd');
const buttonAdd = document.getElementById('addStudent');
const submitButton = document.getElementById('submit');
const text = document.getElementById('textHeading');
let editMSSV = false;
let students = [];
// pagination
const itemsPerPage = 10;
let currentPage = 1;
const listPage = document.getElementById('listPage');
const pages = document.getElementById('pages');

function setdisable() {
    if (currentPage === 1) {
        document.getElementById('prev').setAttribute('disabled', true);
        document.getElementById('prev').classList.remove('bg-blue-500', 'text-white', 'hover:bg-blue-700', 'font-bold');
        document.getElementById('prev').classList.add('bg-gray-300', 'text-gray-500');
    } else {
        document.getElementById('prev').removeAttribute('disabled');
        document.getElementById('prev').classList.add('bg-blue-500', 'text-white', 'hover:bg-blue-700', 'font-bold');
        document.getElementById('prev').classList.remove('bg-gray-300', 'text-gray-500');
    }
    let count = 0;
    if (resultcheck === true) {
        count = Math.ceil(result.length / itemsPerPage);
    } else { count = Math.ceil(students.length / itemsPerPage); }


    if (currentPage === count) {
        document.getElementById('next').setAttribute('disabled', true);
        document.getElementById('next').classList.remove('bg-blue-500', 'text-white', 'hover:bg-blue-700', 'font-bold');
        document.getElementById('next').classList.add('bg-gray-300', 'text-gray-500');
    } else {
        document.getElementById('next').removeAttribute('disabled');
        document.getElementById('next').classList.add('bg-blue-500', 'text-white', 'hover:bg-blue-700', 'font-bold');
        document.getElementById('next').classList.remove('bg-gray-300', 'text-gray-500');
    }
}
document.getElementById('prev').addEventListener('click', function () {
    if (currentPage > 1) {
        currentPage--;
        if (resultcheck === true) {
            renderTable(result, currentPage);
        } else

            renderTable(students, currentPage);
        document.querySelectorAll('.page').forEach(function (button) {
            button.classList.remove('bg-blue-500', 'text-white', 'hover:bg-blue-700');
            button.classList.add('bg-gray-300', 'text-black', 'hover:bg-gray-500');
        });
        document.querySelector(`.page[data-page="${currentPage}"]`).classList.add('bg-blue-500', 'text-white', 'hover:bg-blue-700');
        document.querySelector(`.page[data-page="${currentPage}"]`).classList.remove('bg-gray-300', 'text-black', 'hover:bg-gray-500');
        setdisable();
        if (colHighlight != -1) highlightColumn(colHighlight);
    }
});
document.getElementById('next').addEventListener('click', function () {
    let count = 0;
    if (resultcheck === true) {
        count = Math.ceil(result.length / itemsPerPage);
    } else { count = Math.ceil(students.length / itemsPerPage); }

    if (currentPage < count) {
        currentPage++;
        if (resultcheck === true) {
            renderTable(result, currentPage);
        } else

            renderTable(students, currentPage);
        document.querySelectorAll('.page').forEach(function (button) {
            button.classList.remove('bg-blue-500', 'text-white', 'hover:bg-blue-700');
            button.classList.add('bg-gray-300', 'text-black', 'hover:bg-gray-500');
        });
        document.querySelector(`.page[data-page="${currentPage}"]`).classList.add('bg-blue-500', 'text-white', 'hover:bg-blue-700');
        document.querySelector(`.page[data-page="${currentPage}"]`).classList.remove('bg-gray-300', 'text-black', 'hover:bg-gray-500');
        setdisable();
        if (colHighlight != -1) highlightColumn(colHighlight);

    }
});

pages.addEventListener('click', function (e) {
    if (e.target.classList.contains('page')) {
        currentPage = parseInt(e.target.dataset.page);
        if (resultcheck === true) {
            renderTable(result, currentPage);
        } else

            renderTable(students, currentPage);
        document.querySelectorAll('.page').forEach(function (button) {
            button.classList.remove('bg-blue-500', 'text-white', 'hover:bg-blue-700');
            button.classList.add('bg-gray-300', 'text-black', 'hover:bg-gray-500');
        });

        // Thêm class cho nút hiện tại
        e.target.classList.add('bg-blue-500', 'text-white', 'hover:bg-blue-700');
        e.target.classList.remove('bg-gray-300', 'text-black', 'hover:bg-gray-500');
        setdisable();
        if (colHighlight != -1) highlightColumn(colHighlight);

    }
});
function pagination(array, itemsPerPage, currentPage) {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return array.slice(startIndex, endIndex);
}
function setPages(array, itemsPerPage) {
    const pages = Math.ceil(array.length / itemsPerPage);
    let html = '';
    for (let i = 1; i <= pages; i++) {
        html += `<button class="page ${i === 1 ? 'bg-blue-500 hover:bg-blue-700 nfont-bold text-white' : 'bg-gray-300 hover:bg-gray-500 text-black'}  font-bold py-2 px-4 rounded" data-page="${i}">${i}</button>`;
    }
    listPage.innerHTML = html;
}


function renderTable(x, currentPage = 1) {
    let tbody = document.getElementById('listStudent');
    let html = '';
    let currentlist = pagination(x, itemsPerPage, currentPage);
    currentlist.forEach(function (student) {
        html += '<tr><td class="border border-gray-300 px-4 py-2">' + student.name
            + '</td><td class="border border-gray-300 px-4 py-2">' + student.MSSV
            + '</td><td class="border border-gray-300 px-4 py-2">' + student.email
            + '</td><td class="border border-gray-300 px-4 py-2">' + student.department.text
            + '</td><td class="border border-gray-300 px-4 py-2">' + student.gender.text
            + '</td><td class="border border-gray-300 px-4 py-2">' + student.birthdate
            + '</td><td class="border border-gray-300 px-4 py-2 text-center">' + `<button class="editStudent bg-blue-500 hover:bg-blue-700 active:bg-blue-900 text-white font-bold py-2 px-4 rounded" data-mssv="${student.MSSV}">Sửa</button>`
            + '</td><td class="border border-gray-300 px-4 py-2">' + `<button class="delStudent  bg-red-500 hover:bg-red-700 active:bg-red-900 text-white font-bold py-2 px-4 rounded" data-mssv="${student.MSSV}">Xóa</button>`
            + '</td></tr>';
    });
    tbody.innerHTML = html;
}
buttonAdd.addEventListener('click', function () {
    const form = document.getElementById('themsv');
    form.style.display = 'flex';
    submitButton.textContent = 'Thêm'; // Đổi nút thành "Thêm"
    text.textContent = 'Thêm Sinh Viên'; // Đổi tiêu đề thành "Thêm Sinh Viên"
    // Cho phép nhập MSSV
    document.getElementById('MSSV').removeAttribute('readonly');
});
const deleteModal = document.getElementById('deleteModal');
const deleteBtn = document.getElementById('deleteBtn');
const closeModalConfirm = document.querySelector('.closeModalConfirm');
const huyBtn = document.getElementById('huyBtn');

deleteBtn.addEventListener('click', function () {
    students = students.filter(student => student.MSSV !== deleteModal.dataset.mssv);
    saveData();
    deleteModal.style.display = 'none';
    resultcheck = false;
    result = [];
    formFilter.reset();
    renderTable(students); // Cập nhật lại bảng sau khi xóa
    setPages(students, itemsPerPage);
    setdisable();
    highlightColumn(colHighlight);

});
huyBtn.addEventListener('click', function () {
    deleteModal.style.display = 'none';
});
closeModalConfirm.addEventListener('click', function () {
    deleteModal.style.display = 'none';
});
document.addEventListener('click', function (e) {
    if (e.target.classList.contains('delStudent')) {
        deleteModal.style.display = 'flex';
        deleteModal.dataset.mssv = e.target.dataset.mssv; // Lưu ID sinh viên vào data-mssv
    } else if (e.target.classList.contains('editStudent')) {
        const studentId = e.target.dataset.mssv; // Lấy ID sinh viên từ data-mssv
        const student = students.find(stu => stu.MSSV === studentId); // Tìm sinh viên trong mảng sinh viên
        if (student) {
            const form = document.getElementById('themsv');
            form.style.display = 'flex'; // Hiển thị form
            submitButton.textContent = 'Cập nhật'; // Đổi nút thành "Cập nhật"
            text.textContent = 'Cập nhật Thông tin'; // Đổi tiêu đề thành "Cập nhật Sinh Viên"
            // Điền dữ liệu sinh viên vào form
            document.getElementById('name').value = student.name;
            document.getElementById('MSSV').value = student.MSSV;
            document.getElementById('MSSV').setAttribute('readonly', true);
            document.getElementById('email').value = student.email;
            document.getElementById('department').value = student.department.value;
            document.getElementById('gender').value = student.gender.value;
            document.getElementById('birthdate').value = student.birthdate;
            editMSSV = true; // Đánh dấu đang ở chế độ sửa
        }
    }
});
let currentEditStudent = null;
formAdd.addEventListener('submit', function (e) {
    e.preventDefault();
    let obj = {
        name: formAdd.name.value.trim(),
        MSSV: formAdd.MSSV.value.trim(),
        email: formAdd.email.value.trim(),
        department: {
            value: formAdd.department.value,
            text: formAdd.department.options[formAdd.department.selectedIndex].text
        },
        gender: {
            value: formAdd.gender.value,
            text: formAdd.gender.options[formAdd.gender.selectedIndex].text
        },
        birthdate: formAdd.birthdate.value
    };
    if (editMSSV === false) {
        for (let i = 0; i < students.length; i++) {
            if (students[i].MSSV === obj.MSSV) {
                alert('MSSV đã tồn tại');
                return;
            }
        }
        students.push(obj);
        saveData();
        resultcheck = false;
        result = [];
        // reset form lọc
        formFilter.reset();
        renderTable(students);
        setPages(students, itemsPerPage);
        setdisable();
        formAdd.reset();
    } else {
        currentEditStudent = obj;
        editModal.style.display = 'flex';
        
    }
    //renderTable(students);
    const form = document.getElementById('themsv');
    form.style.display = 'none';
    console.log(obj);
});
const search = document.getElementById('search');
const searchBtn = document.getElementById('searchBtn');
const clearSearch = document.getElementById('clearSearch');
clearSearch.addEventListener('click', function () {
    search.value = '';
    resultcheck = false;
    renderTable(students);
    setPages(students, itemsPerPage);
    setdisable();
});
searchBtn.addEventListener('click', function () {
    const searchValue = search.value;
    if (searchValue === '') {
        resultcheck = false;
        renderTable(students);
        setPages(students, itemsPerPage);
        setdisable();
    } else {
        resultcheck = true;
        result = students.filter(student => student.name.toLowerCase().includes(searchValue.toLowerCase()));
        let tbody = document.getElementById('listStudent');
        renderTable(result);
        setPages(result, itemsPerPage);
        setdisable();
        if (result.length === 0) {
            let html = '<tr><td class="border border-gray-300 px-4 py-2" colspan="8">Không tìm thấy sinh viên</td></tr>';
            tbody.innerHTML = html;
        }

    }
});
function renderSelectYear() {
    let currentYear = new Date().getFullYear();
    let select = document.getElementById('yearFilter');
    for (let i = currentYear; i >= 1980; i--) {
        let option = document.createElement('option');
        option.value = i;
        option.text = i;
        select.appendChild(option);
    }
}
renderSelectYear();
const buttonClose = document.getElementById('closeModal');
buttonClose.addEventListener('click', function () {
    const form = document.getElementById('themsv');
    form.style.display = 'none';
    editMSSV = false;
    formAdd.reset();
});
const buttonCloseFilter = document.getElementById('closefil');
buttonCloseFilter.addEventListener('click', function () {
    const form = document.getElementById('locsv');
    form.style.display = 'none';
});
const filStudent = document.getElementById('filStudent');
filStudent.addEventListener('click', function () {
    clearSearch.click();

    const locsv = document.getElementById('locsv');
    const yearValue = formFilter.yearFilter.value;
    const genderValue = formFilter.gFilter.value;
    const departmentValue = formFilter.dFilter.value;
    if (yearValue !== '' || genderValue !== '' || departmentValue !== '') {
        renderTable(result);
    } else { 
        renderTable(students); 
    }
    locsv.style.display = 'flex';
});
const formFilter = document.getElementById('formFilter');
let resultcheck = false;
let result = [];

formFilter.addEventListener('submit', function (e) {
    e.preventDefault();
    const yearValue = formFilter.yearFilter.value;
    const genderValue = formFilter.gFilter.value;
    const departmentValue = formFilter.dFilter.value;
    result = students;
    resultcheck = true;
    if (yearValue !== '') {
        result = result.filter(student => student.birthdate.includes(yearValue));
    }
    if (genderValue !== '') {
        result = result.filter(student => student.gender.value === genderValue);
    }
    if (departmentValue !== '') {
        result = result.filter(student => student.department.value === departmentValue);
    }
    renderTable(result);
    setPages(result, itemsPerPage);
    currentPage = 1;
    setdisable();
    const locsv = document.getElementById('locsv');
    locsv.style.display = 'none';
});
formFilter.addEventListener('reset', function () {
    resultcheck = false;
    renderTable(students);
    setPages(students, itemsPerPage);
    currentPage = 1;
    setdisable();
    formFilter.reset();
    const locsv = document.getElementById('locsv');
    locsv.style.display = 'none';
});

// function sortTable(table, col, asc = true) {
//     const tbody = table.tBodies[0];
//     const rows = Array.from(tbody.querySelectorAll("tr"));

//     // Sort rows based on the text content of the cell at index 'col'
//     rows.sort((a, b) => {
//         const aText = a.querySelectorAll("td")[col].textContent.trim();
//         const bText = b.querySelectorAll("td")[col].textContent.trim();

//         // Numeric or alphabetic comparison
//         return asc ? aText.localeCompare(bText) : bText.localeCompare(aText);
//     });

//     // Append sorted rows to the tbody
//     rows.forEach(row => tbody.appendChild(row));
// }
// const table = document.getElementById('table');
// // bỏ qua 2 cột cuối cùng
// table.querySelectorAll('.ths').forEach((header, index) => {
//     header.addEventListener('click', () => {
//         table.querySelectorAll('.ths').forEach(otherHeader => {
//             if (otherHeader !== header) {
//                 otherHeader.classList.remove('asc');
//                 const othersvg = otherHeader.querySelector('svg');
//                 othersvg.style.transform = 'rotate(0deg)';
//                 // xóa màu hightlight cột
//             }           
//         });
//         const asc = header.classList.contains('asc');
//         sortTable(table, index, !asc);
//         header.classList.toggle('asc', !asc);
//         // hiển thị thẻ svg tăng giảm đã có sẵn trong thẻ th
//         const svg = header.querySelector('svg');
//         if (asc) {
//             svg.style.transform = 'rotate(180deg)';
//         } else {
//             svg.style.transform = 'rotate(0deg)';
//         }
//     });
// });
function sortData(array, col, asc = true) {
    // Sắp xếp mảng dựa trên cột được chỉ định (col) và hướng (asc)
    array.sort((a, b) => {
        const aText = getColumnText(a, col);
        const bText = getColumnText(b, col);

        return asc ? aText.localeCompare(bText) : bText.localeCompare(aText);
    });
}
const table = document.getElementById('table');
function getColumnText(student, col) {
    switch (col) {
        case 0: return student.name.trim(); // Cột Tên
        case 1: return student.MSSV.trim(); // Cột MSSV
        case 2: return student.email.trim(); // Cột Email
        case 3: return student.department.text.trim(); // Cột Khoa
        case 4: return student.gender.text.trim(); // Cột Giới tính
        case 5: return student.birthdate.trim(); // Cột Ngày sinh
        default: return '';
    }
}
let colHighlight = -1;
function highlightColumn(index) {
    const table = document.getElementById('table');
    const rows = Array.from(table.querySelectorAll('tr'));

    // Loại bỏ highlight trước đó
    table.querySelectorAll('th').forEach(th => {
        th.classList.remove('bg-blue-200');
    });
    rows.forEach(row => {
        row.querySelectorAll('td').forEach(td => {
            td.classList.remove('bg-blue-100');
        });
    });

    // Thêm highlight cho cột hiện tại
    table.querySelectorAll('th')[index].classList.add('bg-blue-200'); // Đổi màu th
    rows.forEach(row => {
        const td = row.querySelectorAll('td')[index];
        if (td) {
            td.classList.add('bg-blue-100'); // Đổi màu td
        }
    });
    colHighlight = index;
}

table.querySelectorAll('.ths').forEach((header, index) => {
    header.addEventListener('click', () => {
        // Thực hiện sắp xếp...

        // Sau khi sắp xếp xong, highlight cột
        highlightColumn(index);
    });
});

table.querySelectorAll('.ths').forEach((header, index) => {
    header.addEventListener('click', () => {
        table.querySelectorAll('.ths').forEach(otherHeader => {
            if (otherHeader !== header) {
                otherHeader.classList.remove('asc');
                const othersvg = otherHeader.querySelector('svg');
                othersvg.style.transform = 'rotate(0deg)';
            }
        });
        const asc = header.classList.contains('asc');

        // Sắp xếp toàn bộ dữ liệu students hoặc result
        if (resultcheck === true) {
            sortData(result, index, !asc);
        } else {
            sortData(students, index, !asc);
        }

        // Cập nhật lại bảng với dữ liệu đã sắp xếp
        renderTable(resultcheck ? result : students, 1);
        setPages(resultcheck ? result : students, itemsPerPage);
        currentPage = 1; // Đặt lại trang đầu tiên sau khi sắp xếp
        setdisable();
        highlightColumn(index);

        header.classList.toggle('asc', !asc);

        // Xử lý hiển thị SVG
        const svg = header.querySelector('svg');
        if (asc) {
            svg.style.transform = 'rotate(180deg)';
        } else {
            svg.style.transform = 'rotate(0deg)';
        }
    });
});



/*
// Lưu dữ liệu sinh viên vào sessionStorage
function saveData() {
    sessionStorage.setItem('students', JSON.stringify(students));
    console.log('Data saved');
}
// Lấy dữ liệu sinh viên từ sessionStorage
function getData() {
    const data = sessionStorage.getItem('students');
    if (data) {
        students = JSON.parse(data);
        renderTable(students);
        setPages(students, itemsPerPage);
        setdisable();
        console.log('Data loaded'); 
    }
}
*/
// Viết hàm savaData lưu localStorage
function saveData() {
    localStorage.setItem('students', JSON.stringify(students));
    console.log('Data saved');
}
// Lấy dữ liệu sinh viên từ localStorage
function getData() {
    const data = localStorage.getItem('students');
    if (data) {
        students = JSON.parse(data);
        renderTable(students);
        setPages(students, itemsPerPage);
        setdisable();
        console.log('Data loaded');
    }
}

window.addEventListener('beforeunload', saveData);
window.addEventListener('load', getData);
const modal = document.getElementById('themsv');
const modal2 = document.getElementById('locsv');
const modal3 = document.getElementById('deleteModal');
const modal4 = document.getElementById('editModal');

modal.addEventListener('click', function (event) {
    if (event.target === this) { // Kiểm tra xem click có phải trên modal không
        editMSSV = false;
        formAdd.reset();
        modal.style.display = 'none';
    }
});
modal2.addEventListener('click', function (event) {
    if (event.target === this) {
        modal2.style.display = 'none';
    }
});
modal3.addEventListener('click', function (event) {
    if (event.target === this) {
        modal3.style.display = 'none';
    }
});
modal4.addEventListener('click', function (event) {
    if (event.target === this) {
        editMSSV = false;
        formAdd.reset();
        modal4.style.display = 'none';
    }
});
// Modal update
const editModal = document.getElementById('editModal');
const editBtn = document.getElementById('editBtn');
const closeModalEdit = document.querySelector('.closeModalUpdate');
const huyBtnEdit = document.getElementById('huyBtnEdit');

huyBtnEdit.addEventListener('click', function () {
    editMSSV = false;
    formAdd.reset();
    editModal.style.display = 'none';
}
);
closeModalEdit.addEventListener('click', function () {
    editMSSV = false;
    formAdd.reset();
    editModal.style.display = 'none';
});
editBtn.addEventListener('click', function () {
    editModal.style.display = 'none';
    if (currentEditStudent) {
        // Tìm và cập nhật đối tượng trong mảng students
        let index = students.findIndex(student => student.MSSV === currentEditStudent.MSSV);
        students[index] = currentEditStudent;
        editMSSV = false;
        console.log('Data updatedsdsdsdsdsdd');
    }
    saveData();
    resultcheck = false;
    result = [];
    // reset form lọc
    formFilter.reset();
    renderTable(students);
    setPages(students, itemsPerPage);
    setdisable();
    formAdd.reset();
    
});
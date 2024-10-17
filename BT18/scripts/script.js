
const formAdd = document.getElementById('formAdd');
const buttonAdd = document.getElementById('addStudent');
const submitButton = document.getElementById('submit');
const text = document.getElementById('textHeading');
let editMSSV = false;
let students = [];
// pagination
const itemsPerPage = 6;
let currentPage = 1;
const listPage = document.getElementById('listPage');
const pages = document.getElementById('pages');

function setdisable() {
    if (currentPage === 1) {
        document.getElementById('prev').setAttribute('disabled', true);
        document.getElementById('prev').classList.remove('bg-blue-500', 'text-white', 'hover:bg-blue-700');
        document.getElementById('prev').classList.add('bg-gray-300', 'text-black');
    } else {
        document.getElementById('prev').removeAttribute('disabled');
        document.getElementById('prev').classList.add('bg-blue-500', 'text-white', 'hover:bg-blue-700');
        document.getElementById('prev').classList.remove('bg-gray-300', 'text-black');
    }
    if (currentPage === Math.ceil(students.length / itemsPerPage)) {
        document.getElementById('next').setAttribute('disabled', true);
        document.getElementById('next').classList.remove('bg-blue-500', 'text-white', 'hover:bg-blue-700');
        document.getElementById('next').classList.add('bg-gray-300', 'text-black');
    } else {
        document.getElementById('next').removeAttribute('disabled');
        document.getElementById('next').classList.add('bg-blue-500', 'text-white', 'hover:bg-blue-700');
        document.getElementById('next').classList.remove('bg-gray-300', 'text-black');
    }
}
document.getElementById('prev').addEventListener('click', function () {
    if (currentPage > 1) {
        currentPage--;
        renderTable(students, currentPage);
        document.querySelectorAll('.page').forEach(function (button) {
            button.classList.remove('bg-blue-500', 'text-white', 'hover:bg-blue-700');
            button.classList.add('bg-gray-300', 'text-black', 'hover:bg-gray-500');
        });
        document.querySelector(`.page[data-page="${currentPage}"]`).classList.add('bg-blue-500', 'text-white', 'hover:bg-blue-700');
        document.querySelector(`.page[data-page="${currentPage}"]`).classList.remove('bg-gray-300', 'text-black', 'hover:bg-gray-500');
        setdisable();
    }
});
document.getElementById('next').addEventListener('click', function () {
    if (currentPage < Math.ceil(students.length / itemsPerPage)) {
        currentPage++;
        renderTable(students, currentPage);
        document.querySelectorAll('.page').forEach(function (button) {
            button.classList.remove('bg-blue-500', 'text-white', 'hover:bg-blue-700');
            button.classList.add('bg-gray-300', 'text-black', 'hover:bg-gray-500');
        });
        document.querySelector(`.page[data-page="${currentPage}"]`).classList.add('bg-blue-500', 'text-white', 'hover:bg-blue-700');
        document.querySelector(`.page[data-page="${currentPage}"]`).classList.remove('bg-gray-300', 'text-black', 'hover:bg-gray-500');
        setdisable();
    }
});

pages.addEventListener('click', function (e) {
    if (e.target.classList.contains('page')) {
        currentPage = parseInt(e.target.dataset.page);
        renderTable(students, currentPage);
        document.querySelectorAll('.page').forEach(function (button) {
            button.classList.remove('bg-blue-500', 'text-white', 'hover:bg-blue-700');
            button.classList.add('bg-gray-300', 'text-black', 'hover:bg-gray-500');
        });

        // Thêm class cho nút hiện tại
        e.target.classList.add('bg-blue-500', 'text-white', 'hover:bg-blue-700');
        e.target.classList.remove('bg-gray-300', 'text-black', 'hover:bg-gray-500');
        setdisable();
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
        html += `<button class="page ${i === 1 ? 'bg-blue-500 hover:bg-blue-700 text-white font-bold text-white' : 'bg-gray-300 hover:bg-gray-500 text-black'}  font-bold py-2 px-4 rounded" data-page="${i}">${i}</button>`;
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
            + '</td><td class="border border-gray-300 px-4 py-2">' + `<button class="editStudent bg-blue-500 hover:bg-blue-700 active:bg-blue-900 text-white font-bold py-2 px-4 rounded" data-mssv="${student.MSSV}">Sửa</button>`
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
document.addEventListener('click', function (e) {
    if (e.target.classList.contains('delStudent')) {
        if (confirm('Bạn có chắc chắn muốn xóa sinh viên này không?')) {
            const studentId = e.target.dataset.mssv;
            students = students.filter(student => student.MSSV !== studentId);
            renderTable(students); // Cập nhật lại bảng sau khi xóa
            setPages(students, itemsPerPage);
            setdisable();
        } else {
            return;
        }
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

formAdd.addEventListener('submit', function (e) {
    let obj = {};
    e.preventDefault();
    obj = {
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
    } else {
        for (let i = 0; i < students.length; i++) {
            if (students[i].MSSV === obj.MSSV) {
                students[i] = obj;
                editMSSV = false;
            }
        }
    }
    //renderTable(students);
    renderTable(students);
    setPages(students, itemsPerPage);
    setdisable();
    formAdd.reset();
    const form = document.getElementById('themsv');
    form.style.display = 'none';
    console.log(obj);
});
const search = document.getElementById('search');
const searchBtn = document.getElementById('searchBtn');
searchBtn.addEventListener('click', function () {
    const searchValue = search.value;
    if (searchValue === '') {
        renderTable(students);
        setPages(students, itemsPerPage);
    } else {
        const result = students.filter(student => student.name.toLowerCase().includes(searchValue.toLowerCase()));
        let tbody = document.getElementById('listStudent');
        let html = '';
        renderTable(result);
        setPages(result, itemsPerPage);
        setdisable();
        if (result.length === 0) {
            html = '<tr><td class="border border-gray-300 px-4 py-2" colspan="8">Không tìm thấy sinh viên</td></tr>';
        }
        tbody.innerHTML = html;
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
    formAdd.reset();
});
const buttonCloseFilter = document.getElementById('closefil');
buttonCloseFilter.addEventListener('click', function () {
    const form = document.getElementById('locsv');
    form.style.display = 'none';
    formAdd.reset();
});
const filStudent = document.getElementById('filStudent');
filStudent.addEventListener('click', function () {
    const locsv = document.getElementById('locsv');
    locsv.style.display = 'flex';
});
const formFilter = document.getElementById('formFilter');
formFilter.addEventListener('submit', function (e) {
    e.preventDefault();
    const yearValue = formFilter.yearFilter.value;
    const genderValue = formFilter.gFilter.value;
    const departmentValue = formFilter.dFilter.value;
    let result = students;
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
    setdisable();
    const locsv = document.getElementById('locsv');
    locsv.style.display = 'none';
});
formFilter.addEventListener('reset', function () {
    renderTable(students);
    setPages(students, itemsPerPage);
    setdisable();
    formFilter.reset();
    const locsv = document.getElementById('locsv');
    locsv.style.display = 'none';
});







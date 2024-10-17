
const formAdd = document.getElementById('formAdd');
const buttonAdd = document.getElementById('addStudent');
const submitButton = document.getElementById('submit');
const text = document.getElementById('textHeading');
let editMSSV = false;
let students = [];
function renderTable(x) {
    let tbody = document.getElementById('listStudent');
    let html = '';
    x.forEach(function (student) {
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
    } else {
        const result = students.filter(student => student.name.toLowerCase().includes(searchValue.toLowerCase())) ;
        let tbody = document.getElementById('listStudent');
        let html = '';
        renderTable(result);
        if (result.length === 0) {
            html = '<tr><td class="border border-gray-300 px-4 py-2" colspan="8">Không tìm thấy sinh viên</td></tr>';
        }
        tbody.innerHTML = html;
    }
});
function renderSelectYear()
{
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
    const locsv = document.getElementById('locsv');
    locsv.style.display = 'none';
});
formFilter.addEventListener('reset', function () {
    renderTable(students);
    formFilter.reset();
    const locsv = document.getElementById('locsv');
    locsv.style.display = 'none';
});







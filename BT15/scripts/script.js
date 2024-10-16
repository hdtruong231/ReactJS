
const formAdd = document.getElementById('formAdd');
const buttonAdd = document.getElementById('addStudent');
const submitButton = document.getElementById('submit');
const text = document.getElementById('textHeading');
let editMSSV = false;
let students = [];
function renderTable() {
    let tbody = document.getElementById('listStudent');
    let html = '';
    students.forEach(function (student) {
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
        renderTable(); // Cập nhật lại bảng sau khi xóa
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
        name: formAdd.name.value,
        MSSV: formAdd.MSSV.value,
        email: formAdd.email.value,
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
    renderTable();
    formAdd.reset();
    const form = document.getElementById('themsv');
    form.style.display = 'none';
    console.log(obj);
});

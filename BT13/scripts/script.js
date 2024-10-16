const formAdd = document.getElementById('formAdd');
let students = [];

function renderTable() {
    let tbody = document.getElementById('listStudent');
    let html = '';
    students.forEach(function (student) {
        html += '<tr class="border border-gray-300 px-4 py-2"><td class="border border-gray-300 px-4 py-2">' + student.name + '</td><td class="border border-gray-300 px-4 py-2">' + student.MSSV + '</td><td class="border border-gray-300 px-4 py-2">' + student.email + '</td><td class="border border-gray-300 px-4 py-2">' + student.department.text + '</td><td class="border border-gray-300 px-4 py-2">' + student.gender.text + '</td><td class="border border-gray-300 px-4 py-2">' + student.birthdate + '</td></tr>';
    });
    tbody.innerHTML = html;
}

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
        gender:{
            value: formAdd.gender.value,
            text: formAdd.gender.options[formAdd.gender.selectedIndex].text
        },
        birthdate: formAdd.birthdate.value
    };
    students.push(obj);
    renderTable();
    console.log(obj);
});

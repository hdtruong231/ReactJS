const formAdd = document.getElementById('formAdd');

formAdd.addEventListener('submit', function (e) {
    let obj = {};
    e.preventDefault();
    obj = {
        name: formAdd.name.value,
        MSSV: formAdd.MSSV.value,
        email: formAdd.email.value,
        department: formAdd.department.value,
        gender: formAdd.gender.value,
        birthdate: formAdd.birthdate.value

    };
    console.log(obj);
    formAdd.reset();
});

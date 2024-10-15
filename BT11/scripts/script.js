const form = document.getElementById('myform');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    console.log('Form submitted');
    let obj = {};
    let checkbox = document.getElementById('checkbox');
     if (checkbox.checked) {
        obj['checkbox'] = checkbox.value;
    } else {
        obj['checkbox'] = 'off';
    }
    
    let radio = document.getElementsByName('radio');
    for (let i = 0; i < radio.length; i++) {
        if (radio[i].checked) {
            obj['radio'] = radio[i].value;
            break;
        }
    }
    let text = document.getElementById('text');
    obj['text'] = text.value;
    let color = document.getElementById('color');
    obj['color'] = color.value;
    let select = document.getElementById('select');
    obj['select'] = select.value;
    let date = document.getElementById('date');
    obj['date'] = date.value;
    let range = document.getElementById('range');
    obj['range'] = range.value;
    console.log(obj);
});

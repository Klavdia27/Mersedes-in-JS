const form = document.querySelector('.form-test-drive');
//https://jsonplaceholder.typicode.com
form.addEventListener('submit', (event) => {
    event.preventDefault() //отмена перезагрузки страницы
    let data = {}; // объект в который будут сохраняться данные введые в формы
    for (let elem of form.elements) {
        if (elem.name) {
            //console.log(elem.value);
            data[elem.name] = elem.value;
        }
    }
    /* это можно деструктуризацию
    for (let {name, value} of form.elements) {
        if (name) {
            console.dir(value);
            data[name] = value
        }
    }*/

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(data)
    })
        .then(response => {
            if (response.status === 200 || response.status === 201) {
                //console.log(response)
                return response.json()
            } else {
                throw new Error(responce.status)
            }
        })
        .then(data => {
            console.log(data);
            alert('Данные успешно сохранены!');
            form.reset() // очищаем форму от прежних данных
        })
        .catch (error => {
            alert('Произошла ошибка, статус' + error.message)
        })

})


function selectgender() {

}


function publishToTable() {
    const name = document.getElementById('name').value;
    const surname = document.getElementById('surname').value;
    const error = document.getElementById('error');
    if (name && email) {
        const tableElement = document.getElementById('table');
        const trElement = document.createElement('tr');
        const tbodyElement = document.createElement('tbody');
        const nameEle = document.createElement('td');
        const surnameEle = document.createElement('td');
        nameEle.innerHTML = name;
        surnameEle.innerHTML = surname;
        trElement.appendChild(nameEle);
        trElement.appendChild(emailEle);
        tbodyElement.appendChild(trElement);
        tableElement.appendChild(tbodyElement);
    }
}
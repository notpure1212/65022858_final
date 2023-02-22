

function selectgender() {

}


function publishtotable(){
    tableelement = document.getElementById('table');
    const name = document.getElementById('name').value;
    const trelement = document.createElement('tr');
    const tbodyelement = document.createElement('tbode');
    const nameele = document.createElement('td')
    nameele.innerHTML=name;
    trelement.appendChild(nameele);
    tbodyelement.appendChild(trelement);
    tableelement.appendChild(tbodyelement);
}
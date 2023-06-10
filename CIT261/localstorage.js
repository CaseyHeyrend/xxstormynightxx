function addToList() {
    var output = document.getElementById("storage");
    var key = document.getElementById("storm_name").value;
    var val = document.getElementById("storm_type").value;

    localStorage.setItem(key, val);
    populateList(localStorage);

    output.innerHTML = JSON.stringify(localStorage);
}

function increaseList(json) {
    var tbody = document.getElementById('storm_list_data');
    tbody.innerHTML = "";
    
    for (var prop in json) {
        var tr = document.createElement('tr');
        var td1 = document.createElement('td');
        var td2 = document.createElement('td');

        td1.appendChild(document.createTextNode(prop));
        td2.appendChild(document.createTextNode(json[prop]));

        tr.appendChild(td1);
        tr.appendChild(td2);

        tbody.appendChild(tr);
    }
}

increaseList(localStorage);
function insertList() {
    var output = document.getElementById("cache");
    var name = document.getElementById("StormName").value;
    var type = document.getElementById("StormType").value;
    
    local-Storage.setItem(name, type);
    increaseList(local-Storage);

    output.innerHTML = JSON.stringify(local-Storage);
}

function increaseList(json) {
    var Tbody = document.getElementById('StormList_data');
    Tbody.innerHTML = "";
    
    for (var prop in json) {
        var tr = document.createElement('tr');
        var td1 = document.createElement('td');
        var td2 = document.createElement('td');

        td1.appendChild(document.createTextNode(prop));
        td2.appendChild(document.createTextNode(json[prop]));

        tr.appendChild(td1);
        tr.appendChild(td2);
        Tbody.appendChild(tr);
    }
}

increaseList(local-Storage);
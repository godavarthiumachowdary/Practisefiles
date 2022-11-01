let user=localStorage.getItem("user");
user=JSON.parse(user);
document.getElementById("output1").innerText=user.firstName;

setTimeout(tablecreation,10);

function tablecreation()
{
    var table = document.getElementById("table_1");

    var tr = document.createElement("tr");

    for(let key1 in user)
    {
        var th = document.createElement('th');
        var text = document.createTextNode(key1);
        th.appendChild(text);
        tr.appendChild(th);
    }

    table.appendChild(tr);

    var tr=document.createElement('tr');

    for(let key2 in user)
    {
        var td1 = document.createElement('td');

        var text1=document.createTextNode(user[key2]);

        td1.appendChild(text1);

        tr.appendChild(td1);
    }

    table.appendChild(tr);

    document.body.appendChild(table);
}


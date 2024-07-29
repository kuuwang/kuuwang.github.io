function generateCraftingInfo(craftData) {
    var box = document.createElement('div');
    box.className = "craftbox";

    var title = document.createElement('header');
    title.className = 'title';
    var circle = document.createElement('div');
    circle.className = 'circle';
    var craftname = document.createElement('span');
    craftname.className = 'craftname';
    craftname.textContent = craftData.result[0]; // Access the result name

    title.appendChild(circle);
    title.appendChild(craftname);
    box.appendChild(title);

    var content = document.createElement('main');
    content.className = 'content';

    var craftinfo = document.createElement('article');
    craftinfo.className = 'craftinfo';

    var table = document.createElement('table');
    var tr = document.createElement('tr');
    var td = document.createElement('td');
    td.colSpan = 3;
    td.className = 'resultimg';

    var span = document.createElement('span');
    span.className = "resultname"
    span.textContent = craftData.result[0];
    td.appendChild(span);

    var span = document.createElement('span');
    span.className = "skillname"
    span.textContent = craftData.skill[0];
    td.appendChild(span);
    
    tr.appendChild(td);
    table.appendChild(tr);

    var tr = document.createElement('tr');
    var td = document.createElement('td');
    td.colSpan = 3;


    var itembox = document.createElement('div');
    itembox.className = "resultbox"


    // Create the image element
    var img = document.createElement('img');
    //img.className = 'resultimg';
    img.src = 'https://static.divine-pride.net/images/items/item/' + craftData.result[1] + '.png';
    img.alt = craftData.result[0];
    
    itembox.appendChild(img);

    td.appendChild(itembox)
    tr.appendChild(td);
    table.appendChild(tr);
    table.className = "craftTable"

    tr.appendChild(td);
    table.appendChild(tr);
    
    craftinfo.appendChild(table);



    var sub = document.createElement('aside');
    sub.className = 'subinfo';

/*
    var tr = document.createElement('tr');
    ['sub1', 'sub2', 'sub3'].forEach(function(sub){
        td = document.createElement('td');
        var itembox = document.createElement('div');
        itembox.className = "itembox";
        if(craftData.materials[sub][0] != ""){
            var img = document.createElement('img');
            img.className = 'item-image';
            img.src = craftData.materials[sub][1] ? 'https://static.divine-pride.net/images/items/item/' + craftData.materials[sub][1] + '.png': 'https://raw.githubusercontent.com/kuuwang/kuuwang.github.io/main/src/img/none.png';
            var span = document.createElement('span');
            span.textContent = craftData.materials[sub][2];
            span.className = "subcnt";
            td.appendChild(span);
            itembox.appendChild(img);
            
        }
        td.appendChild(itembox)
        var div = document.createElement('div');
        div.className = "itembottom"
        td.appendChild(div)
        tr.appendChild(td);
        tr.appendChild(td);
    })
    table.appendChild(tr);

    var tr = document.createElement('tr');
    ['sub4', 'sub5', 'sub6'].forEach(function(sub){
        td = document.createElement('td');
        var itembox = document.createElement('div');
        itembox.className = "itembox";
        if(craftData.materials[sub][0] != ""){
            var img = document.createElement('img');
            img.className = 'item-image';
            img.src = craftData.materials[sub][1] ? 'https://static.divine-pride.net/images/items/item/' + craftData.materials[sub][1] + '.png': 'https://raw.githubusercontent.com/kuuwang/kuuwang.github.io/main/src/img/none.png';
            var span = document.createElement('span');
            span.textContent = craftData.materials[sub][2];
            span.className = "subcnt";
            td.appendChild(span);
            itembox.appendChild(img);
            
        }
        td.appendChild(itembox)
        var div = document.createElement('div');
        div.className = "itembottom"
        td.appendChild(div)
        tr.appendChild(td);
        tr.appendChild(td);
    })
    table.appendChild(tr);
*/


    content.appendChild(craftinfo);
    content.appendChild(sub);

    box.appendChild(content);

    return box;
}

// Assume there is a container element in the DOM with the id 'container'
var container = document.getElementById('container');

data.forEach(function(craftData){
    container.appendChild(generateCraftingInfo(craftData));
});
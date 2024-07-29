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

    var maintable = document.createElement('table');
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
    span.textContent = craftData.skill;
    td.appendChild(span);
    
    tr.appendChild(td);
    maintable.appendChild(tr);

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
    maintable.appendChild(tr);
    maintable.className = "craftTable"

    tr.appendChild(td);
    maintable.appendChild(tr);
    
    craftinfo.appendChild(maintable);



    var sub = document.createElement('aside');
    sub.className = 'subinfo';

    var subtable = document.createElement('table')
    subtable.className = "subTable"

    craftData.materials.forEach(material => {
        if (material[0]) { // Check if the material name is not an empty string
            const row = document.createElement('tr');

            // Add material image
            const imgCell = document.createElement('td');
            const img = document.createElement('img');
            img.src = 'https://static.divine-pride.net/images/items/item/' + material[1] + '.png';
            img.alt = material[0];
            imgCell.appendChild(img);
            var span = document.createElement('span');
            span.className = "itembottom";
            imgCell.appendChild(span)
            row.appendChild(imgCell);

            // Add material name
            const nameCell = document.createElement('td');
            nameCell.textContent = material[0];
            row.appendChild(nameCell);

            // Add material quantity
            const quantityCell = document.createElement('td');
            quantityCell.textContent = material[2] + '개';
            row.appendChild(quantityCell);

            subtable.appendChild(row);
        }
    });

    sub.appendChild(subtable);

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
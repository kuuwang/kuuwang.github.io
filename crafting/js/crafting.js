function generateCraftingInfo(craftData) {
    var box = document.createElement('div');
    box.className = "craftbox";

    var titlebar = document.createElement('header');
    titlebar.className = 'titlebar';
    var circle = document.createElement('div');
    circle.className = 'circle';
    var craftname = document.createElement('span');
    craftname.className = 'craftname';
    craftname.textContent = craftData.result[0];

    titlebar.appendChild(circle);
    titlebar.appendChild(craftname);
    box.appendChild(titlebar);

    var content = document.createElement('main');
    content.className = 'content';

    var craftinfo = document.createElement('article');
    craftinfo.className = 'craftinfo';

    var craftname = document.createElement('div');
    craftname.className = 'craftname'

    var resultname = document.createElement('span');
    resultname.className = "resultname";
    resultname.textContent = craftData.result[0];
    craftname.appendChild(resultname);

    var skillname = document.createElement('span');
    skillname.className = "skillname";
    skillname.textContent = craftData.skill;
    craftname.appendChild(skillname);

    craftinfo.appendChild(craftname);

    var borderbox = document.createElement('div');
    borderbox.className = "borderbox";

    var itembox = document.createElement('div');
    itembox.className = "resultbox";

    var img = document.createElement('img');
    img.src = 'https://static.divine-pride.net/images/items/item/' + craftData.result[1] + '.png';
    img.alt = craftData.result[0];
    img.id = craftData.result[1]; 

    img.addEventListener('mouseover', function(event) {
        item_desc_display(event.target);
    });
    img.addEventListener('mouseout', function() {
        display_reset();
    });

    itembox.appendChild(img);
    borderbox.appendChild(itembox);

    var span = document.createElement('span');
    span.className = "resultqty"
    if(craftData.result[2]){
        span.textContent = craftData.result[2];
    } else {
        span.textContent = ''
    }
    itembox.appendChild(span);

    craftinfo.appendChild(borderbox);

    var sub = document.createElement('aside');
    sub.className = 'subinfo';

    var subtable = document.createElement('table')
    subtable.className = "subTable"

    craftData.materials.forEach(material => {
        if (material[0]) { 
            const row = document.createElement('tr');

            const imgCell = document.createElement('td');
            const img = document.createElement('img');
            img.src = 'https://static.divine-pride.net/images/items/item/' + material[1] + '.png';
            img.alt = material[0];
            img.id = material[1]; 

            img.addEventListener('mouseover', function(event) {
                item_desc_display(event.target);
            });
            img.addEventListener('mouseout', function() {
                display_reset();
            });

            imgCell.appendChild(img);
            var span = document.createElement('span');
            span.className = "itembottom";
            imgCell.appendChild(span)
            row.appendChild(imgCell);

            const nameCell = document.createElement('td');
            nameCell.textContent = material[0];
            row.appendChild(nameCell);

            const quantityCell = document.createElement('td');
            if (material[2]) {
                quantityCell.textContent = material[2] + '개';
            } else {
                quantityCell.textContent = '';
            }
            row.appendChild(quantityCell);

            subtable.appendChild(row);
        }
    });

    sub.appendChild(subtable);

    content.appendChild(craftinfo);
    content.appendChild(sub);

    var split_box = document.createElement('div');
    split_box.className = "split";

    box.appendChild(content);
    box.appendChild(split_box);

    return box;
}


var container = document.getElementById('container');

function generateSkillCheckboxes(data) {
    var checkboxContainer = document.getElementById('checkbox-container');
    var uniqueSkills = [...new Set(data.map(craftData => craftData.skill))];

    var skillCounts = {};
    data.forEach(function(craftData) {
        if (skillCounts[craftData.skill]) {
            skillCounts[craftData.skill]++;
        } else {
            skillCounts[craftData.skill] = 1;
        }
    });

    var table = document.getElementById('chk-table');

    uniqueSkills.forEach(function(skill) {
        var row = document.createElement('tr');
        var cell = document.createElement('td');

        var label = document.createElement('label');
        var checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.value = skill;
        checkbox.addEventListener('change', filterCraftingInfo);
        label.appendChild(checkbox);

        var skillText = document.createTextNode(`${skill} `);
        var countSpan = document.createElement('span');
        countSpan.className = "cntspan";
        countSpan.textContent = `(${skillCounts[skill]})`;

        label.appendChild(skillText);
        label.appendChild(countSpan);

        cell.appendChild(label);
        row.appendChild(cell);
        table.appendChild(row);
    });

    checkboxContainer.appendChild(table);
}

function filterCraftingInfo() {
    var container = document.getElementById('container');
    var selectedSkills = Array.from(document.querySelectorAll('#checkbox-container input[type="checkbox"]:checked')).map(cb => cb.value);
    var searchText = document.getElementById('craftsearch').value.toLowerCase();

    container.innerHTML = '';
    data.forEach(function(craftData) {
        var matchesSkill = selectedSkills.length === 0 || selectedSkills.includes(craftData.skill);
        var matchesSearch = craftData.result[0].toLowerCase().includes(searchText) ||
            craftData.materials.some(material => material[0].toLowerCase().includes(searchText));
        if (matchesSkill && matchesSearch) {
            container.appendChild(generateCraftingInfo(craftData));
        }
    });
}

generateSkillCheckboxes(data);
filterCraftingInfo();
document.getElementById('craftsearch').addEventListener('input', filterCraftingInfo);

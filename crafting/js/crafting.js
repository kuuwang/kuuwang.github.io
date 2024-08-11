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

    var namecontainer = document.createElement('div');
    namecontainer.className = 'namecontainer'

    var resultname = document.createElement('span');
    resultname.className = "resultname";
    resultname.textContent = craftData.result[0];
    namecontainer.appendChild(resultname);

    var skillname = document.createElement('span');
    skillname.className = "skillname";
    skillname.textContent = craftData.skill;
    namecontainer.appendChild(skillname);

    craftinfo.appendChild(namecontainer);

    var borderbox = document.createElement('div');
    borderbox.className = "borderbox";

    var itembox = document.createElement('div');
    itembox.className = "resultbox";

    var img = document.createElement('img');
    img.src = 'https://static.divine-pride.net/images/items/item/' + craftData.result[1] + '.png';
    img.alt = craftData.result[0];
    img.id = craftData.result[1]; // Add id for item description lookup

    // Add event listeners for mouseover and mouseout
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
        if (material[0]) { // Check if the material name is not an empty string
            const row = document.createElement('tr');

            // Add material image
            const imgCell = document.createElement('td');
            const img = document.createElement('img');
            img.src = 'https://static.divine-pride.net/images/items/item/' + material[1] + '.png';
            img.alt = material[0];
            img.id = material[1]; // Add id for item description lookup

            // Add event listeners for mouseover and mouseout
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

            // Add material name
            const nameCell = document.createElement('td');
            nameCell.textContent = material[0];
            row.appendChild(nameCell);

            // Add material quantity
            const quantityCell = document.createElement('td');
            if (material[2]) {
                quantityCell.textContent = material[2] + '개';
            } else {
                quantityCell.textContent = ''; // Blank cell for missing quantity
            }
            row.appendChild(quantityCell);

            subtable.appendChild(row);
        }
    });

    sub.appendChild(subtable);

    content.appendChild(craftinfo);
    content.appendChild(sub);

    var split_box = document.createElement('div');
    split_box.className = "craftsplit";

    box.appendChild(content);
    box.appendChild(split_box);

    return box;
}


// Assume there is a container element in the DOM with the id 'container'
var container = document.getElementById('container');

// Function to generate unique skill checkboxes and filter the crafting info
function generateSkillCheckboxes(data) {
    var checkboxContainer = document.getElementById('checkbox-container');
    var uniqueSkills = [...new Set(data.map(craftData => craftData.skill))];

    // Calculate the count of results for each skill
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

        // Add the count of results for this skill in the label text with gray color
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

// Function to filter crafting info based on selected skills and search text
function filterCraftingInfo() {
    var container = document.getElementById('container');
    var selectedSkills = Array.from(document.querySelectorAll('#checkbox-container input[type="checkbox"]:checked')).map(cb => cb.value);
    var searchText = document.getElementById('craftsearch').value.toLowerCase();

    container.innerHTML = '';
    data.forEach(function(craftData) {
        var matchesSkill = selectedSkills.length === 0 || selectedSkills.includes(craftData.skill);

        // Check if search text matches result name or any material name
        var matchesSearch = craftData.result[0].toLowerCase().includes(searchText) ||
            craftData.materials.some(material => material[0].toLowerCase().includes(searchText));

        if (matchesSkill && matchesSearch) {
            container.appendChild(generateCraftingInfo(craftData));
        }
    });
}
// Generate the skill checkboxes
generateSkillCheckboxes(data);

// Initial call to display all crafting info
filterCraftingInfo();

// Add event listener to the search input
document.getElementById('craftsearch').addEventListener('input', filterCraftingInfo);

function generateCharacterInfo(charData) {
    var box = document.createElement('div');
    box.className = 'charbox';

    var titlebar = document.createElement('header');
    titlebar.className = 'titlebar';
    var circle = document.createElement('div');
    circle.className = 'circle';
    var charname = document.createElement('span');
    charname.className = 'charname';
    charname.textContent = charData.charname;
    titlebar.appendChild(circle);
    titlebar.appendChild(charname);
    box.appendChild(titlebar);

    var charcontent = document.createElement('main');
    charcontent.className = 'charcontent';

    var charinfo = document.createElement('article');
    charinfo.className = 'charinfo';
    var job = document.createElement('span');
    job.className = 'job';
    job.textContent = charData.job;
    var battlestyle = document.createElement('span');
    battlestyle.className = 'battlestyle';
    var charlvl = document.createElement('section');
    charlvl.className = 'charlvl';
    charlvl.innerHTML = '<span class="battlestyle">' + charData.battlestyle + '</span> <br> <span class="lvlname">Lv </span><span class="clvl">' + charData.clvl + '</span> / <span class="lvlname">J.Lv <span class="jlvl">' + charData.jlvl + '</span></span>';
    var charstat = document.createElement('section');
    charstat.className = 'charstat';

    Object.keys(charData.stats).forEach(function(stat) {
        var statbox = document.createElement('span');
        statbox.className = 'statbox';
        var statname = document.createElement('span');
        statname.className = 'statname';
        statname.textContent = stat.charAt(0).toUpperCase() + stat.slice(1);
        var statval = document.createElement('span');
        statval.className = 'statval';
        statval.className += ' var_' + stat;
        statval.textContent = charData.stats[stat];
        statbox.appendChild(statname);
        statbox.appendChild(statval);
        charstat.appendChild(statbox);
    });
    charinfo.appendChild(job);
    charinfo.appendChild(battlestyle);
    charinfo.appendChild(charlvl);
    charinfo.appendChild(charstat);
    charcontent.appendChild(charinfo);

    var iteminfo = document.createElement('aside');
    iteminfo.className = 'iteminfo';

    var table1 = document.createElement('table');
    table1.className = 'frontitem';
    var items = charData.items;

    for (var i = 0; i < Object.keys(items).length; i += 2) {
        var row = document.createElement('tr');

        for (var j = i; j < i + 2 && j < Object.keys(items).length; j++) {
            var itemKey = Object.keys(items)[j];
            var item = items[itemKey];
            var cell = document.createElement('td');
            var itembox = document.createElement('div')
            itembox.className = "itembox"
            var img = document.createElement('img');
            var itembottom = document.createElement('div');
            itembottom.className = "itembottom";
            img.className = "itemimg";
            img.src = item.id ? 'https://www.divine-pride.net/img/items/item/kROM/' + item.id : '../src/img/none.png';
            var itemgradeimg = document.createElement('img')
            itemgradeimg.className = "itemgrade";
            if (item.grade == "D"){
                itemgradeimg.src = '../src/img/grade/grade_icon1.png';
            } else if (item.grade == "C"){
                itemgradeimg.src = '../src/img/grade/grade_icon2.png';
            } else if (item.grade == "B"){
                itemgradeimg.src = '../src/img/grade/grade_icon3.png';
            } else if (item.grade == "A"){
                itemgradeimg.src = '../src/img/grade/grade_icon4.png';
            }
            var itemdesc = document.createElement('div');
            if (Array.isArray(item.desc)) {
                itemdesc.innerHTML = item.name + '<br>' + item.desc.join('<br>');
            } else {
                itemdesc.innerHTML = item.name + '<br>' + item.desc;
            }

            itemdesc.className = "itemdesc";

            itembox.appendChild(img);
            itembox.appendChild(itembottom);
            itembox.appendChild(itemdesc);
            itembox.appendChild(itemgradeimg);
            cell.appendChild(itembox);
            row.appendChild(cell);
        }
        table1.appendChild(row);
    }
    var table2 = document.createElement('table');
    table2.className = 'backitem';
    var itemsb = charData.itemsb;

    for (var i = 0; i < Object.keys(itemsb).length; i += 2) {
        var row = document.createElement('tr');

        for (var j = i; j < i + 2 && j < Object.keys(itemsb).length; j++) {
            var itemKey = Object.keys(itemsb)[j];
            var item = itemsb[itemKey];
            var cell = document.createElement('td');
            var itembox = document.createElement('div')
            itembox.className = "itembox"
            var img = document.createElement('img');
            var itembottom = document.createElement('div');
            itembottom.className = "itembottom";
            img.src = item.id ? 'https://www.divine-pride.net/img/items/item/kROM/' + item.id : '../src/img/none.png';
            img.className = "itemimg";
            var itemdesc = document.createElement('div');
            if (Array.isArray(item.desc)) {
                itemdesc.innerHTML = item.name + '<br>' + item.desc.join('<br>');
            } else {
                itemdesc.innerHTML = item.name + '<br>' + item.desc;
            }

            itemdesc.className = "itemdesc";

            itembox.appendChild(img);
            itembox.appendChild(itembottom);
            itembox.appendChild(itemdesc);
            cell.appendChild(itembox);
            row.appendChild(cell);
        }
        table2.appendChild(row);
    }

    var charimg = document.createElement('img');
    charimg.className = 'charimg';

    iteminfo.appendChild(table1);
    iteminfo.style.backgroundImage = "url('../src/img/char/" + charData.charname + ".gif')";
    iteminfo.appendChild(table2);
    charcontent.appendChild(iteminfo);
    var split_box = document.createElement('div');
    split_box.className = "split";

    box.appendChild(charcontent);
    box.appendChild(split_box);

    var itemImages = box.querySelectorAll('.itemimg');
    itemImages.forEach(function(img) {
        img.addEventListener('mouseover', function() {
            var itemDesc = img.nextElementSibling.nextElementSibling;
            if (itemDesc && itemDesc.classList.contains('itemdesc')) {
                itemDesc.style.display = 'block';
            }
        });

        img.addEventListener('mouseout', function() {
            var itemDesc = img.nextElementSibling.nextElementSibling;
            if (itemDesc && itemDesc.classList.contains('itemdesc')) {
                itemDesc.style.display = 'none';
            }
        });
    });

    return box;
}

var container = document.getElementById('container');
var checkboxContainer = document.getElementById('checkbox-container');
var uniqueJobs = [...new Set(data.map(charData => charData.job))];

var table = document.getElementById('chk-table');

uniqueJobs.forEach(function(job) {
    var row = document.createElement('tr');
    var cell = document.createElement('td');

    var label = document.createElement('label');
    var checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.value = job;
    checkbox.addEventListener('change', filterCharacters);
    label.appendChild(checkbox);
    label.appendChild(document.createTextNode(job));

    cell.appendChild(label);
    row.appendChild(cell);
    table.appendChild(row);
});

checkboxContainer.appendChild(table);
function filterCharacters() {
    var selectedJobs = Array.from(checkboxContainer.querySelectorAll('input[type="checkbox"]:checked')).map(cb => cb.value);
    container.innerHTML = '';
    data.forEach(function(charData) {
        if (selectedJobs.length === 0 || selectedJobs.includes(charData.job)) {
            container.appendChild(generateCharacterInfo(charData));
        }
    });
}

data.forEach(function(charData) {
    container.appendChild(generateCharacterInfo(charData));
});

function getClvlCounts(dataArray) {
    var clvlCounts = {};
    dataArray.forEach(function(item) {
        var clvl = item.clvl;
        if (clvlCounts[clvl]) {
            clvlCounts[clvl]++;
        } else {
            clvlCounts[clvl] = 1;
        }
    });
    return clvlCounts;
}

function calculateAverage(clvlCounts) {
    var total = 0;
    var count = 0;
    for (var clvl in clvlCounts) {
        if(clvl > 99){
            if (clvlCounts.hasOwnProperty(clvl)) {
                total += clvl * clvlCounts[clvl];
                count += clvlCounts[clvl];
            }
        }
    }
    return (total / count).toFixed(2);
}

function displayClvlCounts(clvlCounts) {
    var table = document.querySelector('#chartable table');
    var sortedClvls = Object.keys(clvlCounts).sort(function(a, b) {
        return b - a;
    });``
    sortedClvls.forEach(function(clvl) {
        if(clvl > 99){
            var row = table.insertRow();
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            cell1.innerHTML = clvl;
            cell2.innerHTML = clvlCounts[clvl];
        }
    });
    var average = calculateAverage(clvlCounts);
    var row = table.insertRow();
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell1.innerHTML = '<b>Average</b>';
    cell2.innerHTML = average;
}

var clvlCounts = getClvlCounts(data);
displayClvlCounts(clvlCounts);
function generateCharacterInfo(charData) {
    var box = document.createElement('div');
    box.className = 'box';

    var title = document.createElement('header');
    title.className = 'title';
    var circle = document.createElement('div');
    circle.className = 'circle';
    var charname = document.createElement('span');
    charname.className = 'charname';
    charname.textContent = charData.charname;
    title.appendChild(circle);
    title.appendChild(charname);
    box.appendChild(title);

    var content = document.createElement('main');
    content.className = 'content';

    var charinfo = document.createElement('article');
    charinfo.className = 'charinfo';
    var job = document.createElement('span');
    job.className = 'job';
    job.textContent = charData.job;
    var battlestyle = document.createElement('span'); // 새로 추가된 요소
    battlestyle.className = 'battlestyle';
    var lvltable = document.createElement('section');
    lvltable.className = 'lvltable';
    lvltable.innerHTML = '<span class="battlestyle">' + charData.battlestyle + '</span> <br> <span class="lvlname">Lv </span><span class="clvl">' + charData.clvl + '</span> / <span class="lvlname">J.Lv <span class="jlvl">' + charData.jlvl + '</span></span>';
    var stattable = document.createElement('section');
    stattable.className = 'stattable';

    
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
        stattable.appendChild(statbox);
    });
    charinfo.appendChild(job);
    charinfo.appendChild(battlestyle); // 추가된 요소를 charinfo에 추가
    charinfo.appendChild(lvltable);
    charinfo.appendChild(stattable);
    content.appendChild(charinfo);

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
            img.src = item.id ? 'https://static.divine-pride.net/images/items/item/' + item.id + '.png' : 'https://raw.githubusercontent.com/kuuwang/kuuwang.github.io/main/rag/img/none.png';
            var itemgradeimg = document.createElement('img')
            itemgradeimg.className = "itemgrade";
            if (item.grade == "D"){
                itemgradeimg.src = 'https://github.com/kuuwang/kuuwang.github.io/blob/main/rag/img/grade/grade_icon1.png?raw=true';
            } else if (item.grade == "C"){
                itemgradeimg.src = 'https://github.com/kuuwang/kuuwang.github.io/blob/main/rag/img/grade/grade_icon2.png?raw=true';
            } else if (item.grade == "B"){
                itemgradeimg.src = 'https://github.com/kuuwang/kuuwang.github.io/blob/main/rag/img/grade/grade_icon3.png?raw=true';
            } else if (item.grade == "A"){
                itemgradeimg.src = 'https://github.com/kuuwang/kuuwang.github.io/blob/main/rag/img/grade/grade_icon4.png?raw=true';
            }
            var itemdesc = document.createElement('div');
            if (Array.isArray(item.desc)) {
                itemdesc.innerHTML = item.name + '<br>' + item.desc.join('<br>');
            } else {
                // 배열이 아닌 경우에는 기존의 처리 방식으로 진행
                itemdesc.innerHTML = item.name + '<br>' + item.desc;
            }

            itemdesc.className = "itemdesc";

            itembox.appendChild(img);
            
            itembox.appendChild(itembottom);
            itembox.appendChild(itemdesc);
            itembox.appendChild(itemgradeimg);
            cell.appendChild(itembox);
            row.appendChild(cell);
            row.appendChild(cell);
        }
        table1.appendChild(row);
    }
    var table2 = document.createElement('table');
    table2.className = 'backitem';
    var items = charData.itemsb;

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
            img.src = item.id ? 'https://static.divine-pride.net/images/items/item/' + item.id + '.png' : 'https://raw.githubusercontent.com/kuuwang/kuuwang.github.io/main/rag/img/none.png';
            img.className = "itemimg";
            var itemdesc = document.createElement('div');
            if (Array.isArray(item.desc)) {
                itemdesc.innerHTML = item.name + '<br>' + item.desc.join('<br>');
            } else {
                // 배열이 아닌 경우에는 기존의 처리 방식으로 진행
                itemdesc.innerHTML = item.name + '<br>' + item.desc;
            }

            itemdesc.className = "itemdesc";

            itembox.appendChild(img);
            itembox.appendChild(itembottom);
            itembox.appendChild(itemdesc);
            cell.appendChild(itembox);
            row.appendChild(cell);
            row.appendChild(cell);
        }
        table2.appendChild(row);
    }

    var charimg = document.createElement('img');
    charimg.className = 'charimg';

    iteminfo.appendChild(table1);
    iteminfo.style.backgroundImage = "url('https://raw.githubusercontent.com/kuuwang/kuuwang.github.io/main/rag/img/char/" + charData.charname + ".gif')";
    iteminfo.appendChild(table2);
    content.appendChild(iteminfo);
    var split_box = document.createElement('div');
    split_box.className = "split";


    box.appendChild(content);
    box.appendChild(split_box);


    // 아이템 이미지에 마우스 이벤트를 추가하여 설명 표시/숨기기
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


// 컨테이너에 캐릭터 정보 추가
var container = document.getElementById('container');
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
    });
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
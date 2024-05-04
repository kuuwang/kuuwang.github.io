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
    lvltable.innerHTML = '<span class="battlestyle">' + charData.battlestyle + '</span> / <span class="lvlname">Lv </span><span class="clvl">' + charData.clvl + '</span> / <span class="lvlname">J.Lv <span class="jlvl">' + charData.jlvl + '</span></span>';
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
            var img = document.createElement('img');
            var itembottom = document.createElement('div');
            itembottom.className = "itembottom";
            img.src = item.src;
            cell.appendChild(img);
            cell.appendChild(itembottom);
            row.appendChild(cell);
            //cell = document.createElement('td');
            //cell.textContent = item.name + ': ' + item.desc;
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
            var img = document.createElement('img');
            var itembottom = document.createElement('div');
            itembottom.className = "itembottom";
            img.src = item.src;
            cell.appendChild(img);
            cell.appendChild(itembottom);
            row.appendChild(cell);
            //cell = document.createElement('td');
            //cell.textContent = item.name + ': ' + item.desc;
            row.appendChild(cell);
        }
        table2.appendChild(row);
    }

    var charimg = document.createElement('img');
    charimg.src = charData.charsrc;
    charimg.className = 'charimg';

    iteminfo.appendChild(table1);
    iteminfo.appendChild(charimg);
    iteminfo.appendChild(table2);
    content.appendChild(iteminfo);
    box.appendChild(content);

    return box;
}

// 컨테이너에 캐릭터 정보 추가
var container = document.getElementById('container');
data.forEach(function(charData) {
    container.appendChild(generateCharacterInfo(charData));
});



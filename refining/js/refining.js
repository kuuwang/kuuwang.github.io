let currentLevel = 0;
let totalBlessingUsed = 0;
let totalStoneUsage = 0;
let history = [];
let refineInterval;




function refine() {
    const eventCheckbox = document.querySelector('input[name="refineType"][value="event"]');
    const stoneType = document.querySelector('input[name="stoneType"]:checked').value;
    const equipmentType = document.querySelector('input[name="equipmentType"]:checked').value;
    const isBlessingActive = document.getElementById('blacksmithBlessing').checked;

    let refineType = 'normal'; // Default value if nothing is selected

    if (eventCheckbox.checked) {
        refineType = eventCheckbox.value; // If checked, use the event type
    }

    const probArray = probabilities[refineType][stoneType][equipmentType];

    if (currentLevel >= probArray.length) {
        return;
    }

    const successRate = probArray[currentLevel];

    if (successRate === null) {
        return;
    }

    const randomRoll = Math.random() * 100;
    const success = randomRoll <= successRate;

    let levelBefore = currentLevel;
    let blessingUsed = 0;

    if (isBlessingActive && currentLevel >= 7 && currentLevel <= 13) {
        blessingUsed = blessingUsageMap[currentLevel];
        totalBlessingUsed += blessingUsed;
    }

    if (success) {
        currentLevel++;
    } else {
        if (isBlessingActive && currentLevel >= 7 && currentLevel <= 13) {
            // 대장장이의 축복이 활성화된 경우 실패해도 레벨 유지
        } else if (
            (equipmentType === 'shadow' && currentLevel >= 4) ||
            (equipmentType === 'armor1' && currentLevel >= 4) ||
            (equipmentType === 'weapon4' && currentLevel >= 4) ||
            (equipmentType === 'weapon3' && currentLevel >= 5) ||
            (equipmentType === 'weapon2' && currentLevel >= 6) ||
            (equipmentType === 'weapon1' && currentLevel >= 7) ||
            (equipmentType === 'armor2' && currentLevel >= 10) ||
            (equipmentType === 'weapon5' && currentLevel >= 10)
        ) {
            currentLevel = 0;  // 파괴되어 0제련으로 돌아감
        } else {
            currentLevel = Math.max(0, currentLevel - 1);
        }
    }

    totalStoneUsage++;
    document.getElementById('result').innerText = `현재 제련도: +${currentLevel}`;
    document.getElementById('stoneUsage').innerText = `제련석 소모: ${totalStoneUsage}개`;
    document.getElementById('blessingUsage').innerHTML = `<img src="https://www.divine-pride.net/img/items/item/kROS/6635"> × ${totalBlessingUsed}`;

    const resultText = success 
        ? `<span style="color: blue">성공</span>` 
        : `<span style="color: red">실패</span>`;

    const historyEntry = {
        levelBefore: levelBefore,
        currentLevel: currentLevel,
        result: resultText,
        refineType,
        stoneType,
        equipmentType,
        successRate,
        randomRoll,
        blessingUsed
    };

    history.push(historyEntry);
    updateHistory();
}


function refine100() {
    for (let i = 0; i < 100; i++) {
        

        const refineType = document.querySelector('input[name="refineType"]:checked').value;
        const stoneType = document.querySelector('input[name="stoneType"]:checked').value;
        const equipmentType = document.querySelector('input[name="equipmentType"]:checked').value;
        const isBlessingActive = document.getElementById('blacksmithBlessing').checked;

        const probArray = probabilities[refineType][stoneType][equipmentType];
        
        // If the current level reaches the max level allowed by the probabilities, stop the loop
        if (currentLevel >= probArray.length) {
            break;
        } else {
            refine();
        }
    }
}

function refineUntil() {
    const targetLevel = parseInt(document.getElementById('targetLevel').value, 10);

    if (refineInterval) clearInterval(refineInterval);

    refineInterval = setInterval(() => {
        if (currentLevel >= targetLevel) {
            clearInterval(refineInterval);
            return;
        }

        refine();
        updateHistory();  // Update history every 10ms
        const refineType = document.querySelector('input[name="refineType"]:checked').value;
        const stoneType = document.querySelector('input[name="stoneType"]:checked').value;
        const equipmentType = document.querySelector('input[name="equipmentType"]:checked').value;

        const probArray = probabilities[refineType][stoneType][equipmentType];
        
        if (currentLevel >= probArray.length) {
            clearInterval(refineInterval);
            return;
        }


        
    }, 10);
}

function updateHistory() {
    const tableBody = document.getElementById('historyTableBody');
    
    // Clear the existing rows
    tableBody.innerHTML = '';

    // Add each history entry as a row in the table body
    history.forEach((entry, index) => {
        const historyRow = document.createElement('tr');
        const blessingText = entry.blessingUsed ? `${entry.blessingUsed}` : '';

        historyRow.innerHTML = `
            <td>${index+1}</td>
            <td>+${entry.levelBefore} → +${entry.currentLevel}</td>
            <td>${entry.result}</td>
            <td>${entry.refineType}</td>
            <td>${entry.stoneType}</td>
            <td>${entry.equipmentType}</td>
            <td>${entry.successRate}%</td>
            <td>${entry.randomRoll.toFixed(2)}</td>
            <td>${blessingText}</td>
        `;
        // Prepend the row to the table body so that the latest attempt appears first
        tableBody.prepend(historyRow);
    });
}
function resetRefine() {
    currentLevel = 0;
    totalStoneUsage = 0;
    totalBlessingUsed = 0;
    history = [];
    document.getElementById('result').innerText = `현재 제련도: +${currentLevel}`;
    document.getElementById('stoneUsage').innerText = `제련석 소모: ${totalStoneUsage}개`;
    document.getElementById('blessingUsage').innerHTML = `<img src="https://www.divine-pride.net/img/items/item/kROS/6635"> × ${totalBlessingUsed}`;
    updateHistory();
}

const checkbox = document.getElementById('blacksmithBlessing');
const blessingImage = document.getElementById('blessingImage');

checkbox.addEventListener('change', function() {
    // Change the image based on the checkbox state
    if (checkbox.checked) {
        blessingImage.src = '../src/img/refining/slot_select_red.png'; // Change to selected image
    } else {
        blessingImage.src = '../src/img/refining/slot_unselect_red.png'; // Change to unselected image
    }
});

const evtcheckbox = document.getElementById('eventCheckbox');
const eventImage = document.getElementById('eventImage');

evtcheckbox.addEventListener('change', function() {
    // Change the image based on the checkbox state
    if (evtcheckbox.checked) {
        eventImage.src = '../src/img/refining/slot_select_green.png'; // Change to selected image
    } else {
        eventImage.src = '../src/img/refining/slot_unselect_green.png'; // Change to unselected image
    }
});
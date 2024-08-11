let currentLevel = 0;
let totalBlessingUsed = 0;  // 총 사용된 대장장이의 축복 개수
let history = [];
let refineInterval;

const blessingUsageMap = {
    7: 1,
    8: 2,
    9: 4,
    10: 7,
    11: 11,
    12: 16,
    13: 22
};


function refine() {
    const refineType = document.querySelector('input[name="refineType"]:checked').value;
    const stoneType = document.querySelector('input[name="stoneType"]:checked').value;
    const equipmentType = document.querySelector('input[name="equipmentType"]:checked').value;
    const isBlessingActive = document.getElementById('blacksmithBlessing').checked;

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
            (equipmentType === 'shadow' && currentLevel >= 5) ||
            (equipmentType === 'armor1' && currentLevel >= 5) ||
            (equipmentType === 'weapon4' && currentLevel >= 5) ||
            (equipmentType === 'weapon3' && currentLevel >= 6) ||
            (equipmentType === 'weapon2' && currentLevel >= 7) ||
            (equipmentType === 'weapon1' && currentLevel >= 8) ||
            (equipmentType === 'armor2' && currentLevel >= 11) ||
            (equipmentType === 'weapon5' && currentLevel >= 11)
        ) {
            currentLevel = 0;  // 파괴되어 0제련으로 돌아감
        } else {
            currentLevel = Math.max(0, currentLevel - 1);
        }
    }

    document.getElementById('result').innerText = `Current Refining Level: +${currentLevel}`;
    document.getElementById('blessingUsage').innerText = `대장장이의 축복 사용: ${totalBlessingUsed}개`;

    const resultText = success 
        ? `<span style="color: blue">제련 성공</span>` 
        : `<span style="color: red">제련 실패</span>`;

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
        const isBlessingActive = document.getElementById('blacksmithBlessing').checked;

        const probArray = probabilities[refineType][stoneType][equipmentType];
        
        if (currentLevel >= probArray.length) {
            clearInterval(refineInterval);
            return;
        }

        if (currentLevel === 0) {  // Safety check to prevent infinite loop
            clearInterval(refineInterval);
            return;
        }

        
    }, 10);
}

function updateHistory() {
    const historyContainer = document.getElementById('historyList');
    historyContainer.innerHTML = '';
    history.forEach((entry, index) => {
        const historyItem = document.createElement('div');
        historyItem.innerHTML = `Attempt ${index + 1}: Level ${entry.levelBefore} -> +${entry.currentLevel}  ${entry.result} (Refining Type: ${entry.refineType}, Stone: ${entry.stoneType}, Equipment: ${entry.equipmentType}, Success Rate: ${entry.successRate}%, Roll: ${entry.randomRoll.toFixed(2)}) ${entry.blessingUsed ? ` - Used Blessing: ${entry.blessingUsed}` : ''}`;
        historyContainer.appendChild(historyItem);
    });
}

function resetRefine() {
    currentLevel = 0;
    totalBlessingUsed = 0;
    history = [];
    document.getElementById('result').innerText = `Current Refining Level: +${currentLevel}`;
    document.getElementById('blessingUsage').innerText = `대장장이의 축복 사용: ${totalBlessingUsed}개`;
    updateHistory();
}
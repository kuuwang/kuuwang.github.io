let currentLevel = 0;
let history = [];
let refineInterval;

function refine() {
    const refineType = document.getElementById('refineType').value;
    const stoneType = document.getElementById('stoneType').value;
    const equipmentType = document.getElementById('equipmentType').value;

    const probArray = probabilities[refineType][stoneType][equipmentType];

    if (currentLevel >= probArray.length) {
        alert("Max level reached.");
        return;
    }

    const successRate = probArray[currentLevel];

    if (successRate === null) {
        alert("Refinement not allowed at this level.");
        return;
    }

    const randomRoll = Math.random() * 100;
    const success = randomRoll <= successRate;

    let levelBefore = currentLevel;

    if (success) {
        currentLevel++;
    } else {
        currentLevel = Math.max(0, currentLevel - 1);
    }

    document.getElementById('result').innerText = `Current Refining Level: +${currentLevel}`;

    const resultText = success 
        ? `<span style="color: blue">Success</span>` 
        : `<span style="color: red">Failure</span>`;

    const historyEntry = {
        levelBefore: levelBefore,
        currentLevel: currentLevel,
        result: resultText,
        refineType,
        stoneType,
        equipmentType,
        successRate,
        randomRoll
    };

    history.push(historyEntry);
    updateHistory();
}

function refine100() {
    for (let i = 0; i < 100; i++) {
        

        const refineType = document.getElementById('refineType').value;
        const stoneType = document.getElementById('stoneType').value;
        const equipmentType = document.getElementById('equipmentType').value;

        const probArray = probabilities[refineType][stoneType][equipmentType];
        
        // If the current level reaches the max level allowed by the probabilities, stop the loop
        if (currentLevel >= probArray.length) {
            alert("Max level reached. Stopping refinement.");
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
        const refineType = document.getElementById('refineType').value;
        const stoneType = document.getElementById('stoneType').value;
        const equipmentType = document.getElementById('equipmentType').value;

        const probArray = probabilities[refineType][stoneType][equipmentType];
        
        if (currentLevel >= probArray.length) {
            alert("Max level reached. Stopping refinement.");
            clearInterval(refineInterval);
            return;
        }

        if (currentLevel === 0) {  // Safety check to prevent infinite loop
            clearInterval(refineInterval);
            return;
        }

        
    }, 10);
}

function resetRefine() {
    currentLevel = 0;
    history = [];
    document.getElementById('result').innerText = `Current Refining Level: +${currentLevel}`;
    updateHistory();
}

function updateHistory() {
    const historyList = document.getElementById('historyList');
    historyList.innerHTML = '';

    history.forEach((entry, index) => {
        const li = document.createElement('li');
        li.innerHTML = `Attempt ${index + 1}: Level ${entry.levelBefore} -> ${entry.currentLevel} ${entry.result} (Refining Type: ${entry.refineType}, Stone: ${entry.stoneType}, Equipment: ${entry.equipmentType}, Success Rate: ${entry.successRate}%, Roll: ${entry.randomRoll.toFixed(2)})`;
        historyList.appendChild(li);
    });
}

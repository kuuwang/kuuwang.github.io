let currentLevel = 0;
let history = [];

function refine() {
    const refineType = document.getElementById('refineType').value;
    const stoneType = document.getElementById('stoneType').value;
    const equipmentType = document.getElementById('equipmentType').value;

    const probArray = probabilities[refineType][stoneType][equipmentType];

    if (currentLevel >= probArray.length) {
        alert("최대 레벨입니다.");
        return;
    }

    const successRate = probArray[currentLevel];

    if (successRate === null) {
        alert("최대 레벨입니다.");
        return;
    }

    const randomRoll = Math.random() * 100;
    const success = randomRoll <= successRate;

    if (success) {
        currentLevel++;
        document.getElementById('result').innerText = `현재 제련도: +${currentLevel}`;
    } else {
        currentLevel = Math.max(0, currentLevel - 1);
        document.getElementById('result').innerText = `현재 제련도: +${currentLevel}`;
    }

    // Determine success/failure text with color
    const resultText = success 
        ? `<span style="color: blue">제련 성공</span>` 
        : `<span style="color: red">제련 실패</span>`;

    // Record history
    const historyEntry = {
        levelBefore: success ? currentLevel - 1 : currentLevel + 1,
        currentLevel: currentLevel,  // Store the new level after the attempt
        result: resultText,  // Store the colored text
        refineType,
        stoneType,
        equipmentType,
        successRate,
        randomRoll
    };

    history.push(historyEntry);
    updateHistory();
}

function updateHistory() {
    const historyList = document.getElementById('historyList');
    historyList.innerHTML = ''; // Clear current history

    history.forEach((entry, index) => {
        const li = document.createElement('li');
        li.innerHTML = `${index + 1}번째 시도: 제련도 + ${entry.levelBefore} -> + ${entry.currentLevel} ${entry.result} (Refining Type: ${entry.refineType}, Stone: ${entry.stoneType}, Equipment: ${entry.equipmentType}, Success Rate: ${entry.successRate}%, Roll: ${entry.randomRoll.toFixed(2)})`;
        historyList.appendChild(li);
    });
}
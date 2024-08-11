const probabilities = {
    normal: {
        refinestone: {
            shadow: [100, 100, 100, 100, 60, 40, 40, 20, 20, 9],
            armor1: [100, 100, 100, 100, 60, 40, 40, 20, 20, 9, 8, 8, 8, 8, 7, 7, 7, 7, 5, 5],
            weapon1: [100, 100, 100, 100, 100, 100, 100, 60, 40, 19, 18, 18, 18, 18, 18, 17, 17, 17, 15, 15],
            weapon2: [100, 100, 100, 100, 100, 100, 60, 40, 20, 19, 18, 18, 18, 18, 18, 17, 17, 17, 15, 15],
            weapon3: [100, 100, 100, 100, 100, 60, 50, 20, 20, 19, 18, 18, 18, 18, 18, 17, 17, 17, 15, 15],
            weapon4: [100, 100, 100, 100, 60, 40, 40, 20, 20, 9, 8, 8, 8, 8, 7, 7, 7, 7, 5, 5],
            weapon5: [100, 100, 100, 60, 60, 40, 40, 20, 20, 9, 8, 8, 8, 8, 7, 7, 7, 7, 5, 5],
            armor2: [100, 100, 100, 60, 60, 40, 40, 20, 20, 9, 8, 8, 8, 8, 7, 7, 7, 7, 5, 5],
        },
        refinecash: {
            shadow: [100, 100, 100, 100, 90, 70, 70, 40, 40, 20],
            armor1: [100, 100, 100, 100, 90, 70, 70, 40, 40, 20, 8, 8, 8, 8, 7, 7, 7, 7, 5, 5],
            weapon1: [100, 100, 100, 100, 100, 100, 100, 90, 70, 30, 18, 18, 18, 18, 18, 17, 17, 17, 15, 15],
            weapon2: [100, 100, 100, 100, 100, 100, 90, 70, 40, 30, 18, 18, 18, 18, 18, 17, 17, 17, 15, 15],
            weapon3: [100, 100, 100, 100, 100, 90, 80, 40, 40, 30, 18, 18, 18, 18, 18, 17, 17, 17, 15, 15],
            weapon4: [100, 100, 100, 100, 90, 70, 70, 40, 40, 20, 8, 8, 8, 8, 7, 7, 7, 7, 5, 5],
            weapon5: [100, 100, 100, 90, 70, 60, 60, 40, 40, 20, 15, 15, 15, 15, 10, 10, 10, 10, 7, 7],
            armor2: [100, 100, 100, 90, 70, 60, 60, 40, 40, 20, 15, 15, 15, 15, 10, 10, 10, 10, 7, 7],
        }
    },
    event: {
        refinestone: {
            shadow: [100, 100, 100, 100, 60, 40, 40, 20, 20, 9],
            armor1: [100, 100, 100, 100, 60, 40, 40, 20, 20, 9, 20, 20, 16, 16, 15, 15, 14, 14, 10, 10],
            weapon1: [100, 100, 100, 100, 100, 100, 100, 60, 50, 35, 40, 40, 35, 35, 30, 30, 20, 20, 15, 15],
            weapon2: [100, 100, 100, 100, 100, 100, 85, 60, 60, 45, 40, 40, 35, 35, 30, 30, 20, 20, 15, 15],
            weapon3: [100, 100, 100, 100, 100, 70, 70, 40, 40, 45, 40, 40, 35, 35, 30, 30, 20, 20, 15, 15],
            weapon4: [100, 100, 100, 100, 60, 40, 40, 20, 20, 35, 20, 20, 16, 16, 15, 15, 14, 14, 10, 10],
            weapon5: [100, 100, 100, 80, 80, 60, 60, 40, 40, 18, 16, 16, 16, 16, 14, 14, 14, 14, 10, 10],
            armor2: [100, 100, 100, 80, 80, 60, 60, 40, 40, 18, 16, 16, 16, 16, 14, 14, 14, 14, 10, 10],
        },
        refinecash: {
            shadow: [100, 100, 100, 100, 95, 80, 80, 60, 50, 35],
            armor1: [100, 100, 100, 100, 95, 80, 80, 60, 50, 35, 20, 20, 16, 16, 15, 15, 14, 14, 10, 10],
            weapon1: [100, 100, 100, 100, 100, 100, 100, 95, 85, 55, 40, 40, 35, 35, 30, 30, 20, 20, 15, 15],
            weapon2: [100, 100, 100, 100, 100, 100, 85, 70, 60, 45, 40, 40, 35, 35, 30, 30, 20, 20, 15, 15],
            weapon3: [100, 100, 100, 100, 100, 95, 90, 70, 60, 45, 40, 40, 35, 35, 30, 30, 20, 20, 15, 15],
            weapon4: [100, 100, 100, 100, 95, 80, 80, 60, 50, 35, 20, 20, 16, 16, 15, 15, 14, 14, 10, 10],
            weapon5: [100, 100, 100, 95, 85, 70, 65, 55, 45, 25, 20, 20, 20, 20, 15, 15, 15, 15, 10, 10],
            armor2: [100, 100, 100, 95, 85, 70, 65, 55, 45, 25, 20, 20, 20, 20, 15, 15, 15, 15, 10, 10],
        }
    }
};

// Function to calculate and display the probabilities, total rates, and average used items
function calculateAndDisplayRefineData() {
    const refineType = document.querySelector('input[name="refineType"]:checked').value;
    const stoneType = document.querySelector('input[name="stoneType"]:checked').value;
    const equipmentType = document.querySelector('input[name="equipmentType"]:checked').value;

    const probArray = probabilities[refineType][stoneType][equipmentType];

    if (!probArray) {
        document.getElementById('refine-calculation').innerHTML = 'No data available';
        return;
    }

    let totalRate = 100; // Start with 100% for the first level
    let tableHtml = `<table>
                        <thead>
                            <tr>
                                <th>제련도</th>
                                <th>확률 (%)</th>
                                <th>실 확률 (%)</th>
                                <th>평균 소모량</th>
                            </tr>
                        </thead>
                        <tbody>`;

    probArray.forEach((refineRate, index) => {
        if (refineRate === null) return; // Skip levels that are not refinable
        
        const level = index + 1;  // Refinement level, starting from +1
        totalRate *= (refineRate / 100);

        // Average used item is the inverse of the probability for each level
        const avgUsedItem = (1 / (refineRate / 100)) * (1 / totalRate) * 100;

        tableHtml += `<tr>
                          <td>+${level}</td>
                          <td>${refineRate}%</td>
                          <td>${totalRate.toFixed(2)}%</td>
                          <td>${avgUsedItem.toFixed(2)}</td>
                      </tr>`;
    });

    tableHtml += `</tbody></table>`;
    document.getElementById('refinerate').innerHTML = tableHtml;
}

// Add event listeners to radio buttons to update the table on change
document.querySelectorAll('input[name="refineType"], input[name="stoneType"], input[name="equipmentType"]').forEach((radio) => {
    radio.addEventListener('change', calculateAndDisplayRefineData);
});

// Initial table update
calculateAndDisplayRefineData();

const probabilities = {
    normal: {
        refinestone: {
            shadow: [100, 100, 100, 100, 60, 40, 40, 20, 20, 9],
            shadoww: [100, 100, 100, 100, 60, 40, 40, 20, 20, 9],
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
            shadoww: [100, 100, 100, 100, 90, 70, 70, 40, 40, 20],
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
            shadoww: [100, 100, 100, 100, 60, 40, 40, 20, 20, 9],
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
            shadoww: [100, 100, 100, 100, 95, 80, 80, 60, 50, 35],
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

const refinestone = {
    refinestone : {
        shadow: ['Elunium', 'Elunium', 'Elunium', 'Elunium'],
        shadoww: ['Oridecon', 'Oridecon', 'Oridecon', 'Oridecon', 'Oridecon', 'Oridecon', 'Oridecon', 'Oridecon', 'Oridecon', 'Oridecon'],
        armor1: ['Elunium', 'Elunium', 'Elunium', 'Elunium', 'Elunium', 'Elunium', 'Elunium', 'Elunium', 'Elunium', 'Elunium',
                'Carnium', 'Carnium', 'Carnium', 'Carnium', 'Carnium', 'Carnium', 'Carnium', 'Carnium', 'Carnium', 'Carnium'
                ],
        weapon1: ['Phracon', 'Phracon', 'Phracon', 'Phracon', 'Phracon', 'Phracon', 'Phracon', 'Phracon', 'Phracon', 'Phracon',
                'Bradium', 'Bradium', 'Bradium', 'Bradium', 'Bradium', 'Bradium', 'Bradium', 'Bradium', 'Bradium', 'Bradium'
                ],
        weapon2: ['Emveretarcon', 'Emveretarcon', 'Emveretarcon', 'Emveretarcon', 'Emveretarcon', 'Emveretarcon', 'Emveretarcon', 'Emveretarcon', 'Emveretarcon', 'Emveretarcon',
                'Bradium', 'Bradium', 'Bradium', 'Bradium', 'Bradium', 'Bradium', 'Bradium', 'Bradium', 'Bradium', 'Bradium'
                ],
        weapon3: ['Oridecon', 'Oridecon', 'Oridecon', 'Oridecon', 'Oridecon', 'Oridecon', 'Oridecon', 'Oridecon', 'Oridecon', 'Oridecon',
                'Bradium', 'Bradium', 'Bradium', 'Bradium', 'Bradium', 'Bradium', 'Bradium', 'Bradium', 'Bradium', 'Bradium'
                ],
        weapon4: ['Oridecon', 'Oridecon', 'Oridecon', 'Oridecon', 'Oridecon', 'Oridecon', 'Oridecon', 'Oridecon', 'Oridecon', 'Oridecon',
                'Bradium', 'Bradium', 'Bradium', 'Bradium', 'Bradium', 'Bradium', 'Bradium', 'Bradium', 'Bradium', 'Bradium'
                ],
        weapon5: ['Etherdeocon', 'Etherdeocon', 'Etherdeocon', 'Etherdeocon', 'Etherdeocon', 'Etherdeocon', 'Etherdeocon', 'Etherdeocon', 'Etherdeocon', 'Etherdeocon', 
                'Etel_Bradium', 'Etel_Bradium', 'Etel_Bradium', 'Etel_Bradium', 'Etel_Bradium', 'Etel_Bradium', 'Etel_Bradium', 'Etel_Bradium', 'Etel_Bradium', 'Etel_Bradium' 
                ],
        armor2: ['Ethernium', 'Ethernium', 'Ethernium', 'Ethernium', 'Ethernium', 'Ethernium', 'Ethernium', 'Ethernium', 'Ethernium', 'Ethernium', 
                'HD_Ethernium', 'HD_Ethernium', 'HD_Ethernium', 'HD_Ethernium', 'HD_Ethernium', 'Etel_Carnium', 'Etel_Carnium', 'Etel_Carnium', 'Etel_Carnium', 'Etel_Carnium'
        ],
    },
    refinecash : {
        shadow: ['Enriched_Elunium', 'Enriched_Elunium', 'Enriched_Elunium', 'Enriched_Elunium', 'HD_Elunium', 'HD_Elunium', 'HD_Elunium', 'HD_Elunium', 'HD_Elunium', 'HD_Elunium'],
        shadoww: ['Enriched_Oridecon', 'Enriched_Oridecon', 'Enriched_Oridecon', 'Enriched_Oridecon', 'Enriched_Oridecon', 'Enriched_Oridecon', 'Enriched_Oridecon', 'Enriched_Oridecon', 'Enriched_Oridecon', 'Enriched_Oridecon'],
        armor1: ['Enriched_Elunium', 'Enriched_Elunium', 'Enriched_Elunium', 'Enriched_Elunium', 'Enriched_Elunium', 'Enriched_Elunium', 'Enriched_Elunium', 'Enriched_Elunium', 'Enriched_Elunium', 'Enriched_Elunium', 
                'HD_Carnium', 'HD_Carnium', 'HD_Carnium', 'HD_Carnium', 'HD_Carnium', 'HD_Carnium', 'HD_Carnium', 'HD_Carnium', 'HD_Carnium', 'HD_Carnium'
                ],
        weapon1: ['Enriched_Oridecon', 'Enriched_Oridecon', 'Enriched_Oridecon', 'Enriched_Oridecon', 'Enriched_Oridecon', 'Enriched_Oridecon', 'Enriched_Oridecon', 'Enriched_Oridecon', 'Enriched_Oridecon', 'Enriched_Oridecon', 
                'HD_Bradium', 'HD_Bradium', 'HD_Bradium', 'HD_Bradium', 'HD_Bradium', 'HD_Bradium', 'HD_Bradium', 'HD_Bradium', 'HD_Bradium', 'HD_Bradium'
                ],
        weapon2: ['Enriched_Oridecon', 'Enriched_Oridecon', 'Enriched_Oridecon', 'Enriched_Oridecon', 'Enriched_Oridecon', 'Enriched_Oridecon', 'Enriched_Oridecon', 'Enriched_Oridecon', 'Enriched_Oridecon', 'Enriched_Oridecon', 
                'HD_Bradium', 'HD_Bradium', 'HD_Bradium', 'HD_Bradium', 'HD_Bradium', 'HD_Bradium', 'HD_Bradium', 'HD_Bradium', 'HD_Bradium', 'HD_Bradium'
                ],
        weapon3: ['Enriched_Oridecon', 'Enriched_Oridecon', 'Enriched_Oridecon', 'Enriched_Oridecon', 'Enriched_Oridecon', 'Enriched_Oridecon', 'Enriched_Oridecon', 'Enriched_Oridecon', 'Enriched_Oridecon', 'Enriched_Oridecon', 
                'HD_Bradium', 'HD_Bradium', 'HD_Bradium', 'HD_Bradium', 'HD_Bradium', 'HD_Bradium', 'HD_Bradium', 'HD_Bradium', 'HD_Bradium', 'HD_Bradium'
                ],
        weapon4: ['Enriched_Oridecon', 'Enriched_Oridecon', 'Enriched_Oridecon', 'Enriched_Oridecon', 'Enriched_Oridecon', 'Enriched_Oridecon', 'Enriched_Oridecon', 'Enriched_Oridecon', 'Enriched_Oridecon', 'Enriched_Oridecon', 
                'HD_Bradium', 'HD_Bradium', 'HD_Bradium', 'HD_Bradium', 'HD_Bradium', 'HD_Bradium', 'HD_Bradium', 'HD_Bradium', 'HD_Bradium', 'HD_Bradium'
                ],
        weapon5: ['Enriched_Etherdeocon', 'Enriched_Etherdeocon', 'Enriched_Etherdeocon', 'Enriched_Etherdeocon', 'Enriched_Etherdeocon', 'Enriched_Etherdeocon', 'Enriched_Etherdeocon', 'Enriched_Etherdeocon', 'Enriched_Etherdeocon', 'Enriched_Etherdeocon', 
                'HD_Etherdeocon', 'HD_Etherdeocon', 'HD_Etherdeocon', 'HD_Etherdeocon', 'HD_Etherdeocon', 'HD_Etel_Bradium', 'HD_Etel_Bradium', 'HD_Etel_Bradium', 'HD_Etel_Bradium', 'HD_Etel_Bradium'
        ],
        armor2: ['Enriched_Ethernium', 'Enriched_Ethernium', 'Enriched_Ethernium', 'Enriched_Ethernium', 'Enriched_Ethernium', 'Enriched_Ethernium', 'Enriched_Ethernium', 'Enriched_Ethernium', 'Enriched_Ethernium', 'Enriched_Ethernium', 
                'Etel_Carnium', 'Etel_Carnium', 'Etel_Carnium', 'Etel_Carnium', 'Etel_Carnium', 'HD_Etel_Carnium', 'HD_Etel_Carnium', 'HD_Etel_Carnium', 'HD_Etel_Carnium', 'HD_Etel_Carnium'
        ],
    }
}

const refinecost = {
    normal : {
        shadow: [10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000],
        armor1: [10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 
                100000, 100000, 100000, 100000, 100000, 100000, 100000, 100000, 100000, 100000
                ],
        weapon1: [1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 
                100000, 100000, 100000, 100000, 100000, 100000, 100000, 100000, 100000, 100000
                ],
        weapon2: [2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 
                100000, 100000, 100000, 100000, 100000, 100000, 100000, 100000, 100000, 100000
                ],
        weapon3: [10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 
                100000, 100000, 100000, 100000, 100000, 100000, 100000, 100000, 100000, 100000
                ],
        weapon4: [10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 
                100000, 100000, 100000, 100000, 100000, 100000, 100000, 100000, 100000, 100000
                ],
        weapon5: [],
        armor2: [],
    },
    cash : {
        shadow: [],
        armor1: [],
        weapon1: [],
        weapon2: [],
        weapon3: [],
        weapon4: [],
        weapon5: [],
        armor2: [],
    }
}


const blessingUsageMap = {
    7: 1,
    8: 2,
    9: 4,
    10: 7,
    11: 11,
    12: 16,
    13: 22
};

// Function to calculate and display the probabilities, total rates, and average used items
function calculateAndDisplayRefineData() {
    const eventCheckbox = document.querySelector('input[name="refineType"][value="event"]');
    const stoneType = document.querySelector('input[name="stoneType"]:checked').value;
    const equipmentType = document.querySelector('input[name="equipmentType"]:checked').value;

    let refineType = 'normal'; // Default value if nothing is selected

    if (eventCheckbox.checked) {
        refineType = eventCheckbox.value; // If checked, use the event type
    }

    const probArray = probabilities[refineType][stoneType][equipmentType];

    if (!probArray) {
        document.getElementById('refinerate').innerHTML = '정보 없음';
        return;
    }
    document.getElementById('refinerate').innerHTML = '';

    let totalRate = 100; // Start with 100% for the first level

    // Create table element
    const table = document.createElement('table');
    table.className = 'refinetable';
    
    // Create and append thead element
    const thead = document.createElement('thead');
    const headerRow = document.createElement('tr');
    
    const headers = ['제련도', '확률 (%)', '실 확률 (%)', '평균 소모량'];
    headers.forEach(headerText => {
        const th = document.createElement('th');
        th.textContent = headerText;
        headerRow.appendChild(th);
    });
    
    thead.appendChild(headerRow);
    table.appendChild(thead);
    
    // Create and append tbody element
    const tbody = document.createElement('tbody');
    
    probArray.forEach((refineRate, index) => {
        if (refineRate === null) return; // Skip levels that are not refinable
    
        const level = index + 1; // Refinement level, starting from +1
        totalRate *= (refineRate / 100);
    
        // Average used item is the inverse of the probability for each level
        const avgUsedItem = (1 / (refineRate / 100)) * (1 / totalRate) * 100;
    
        const row = document.createElement('tr');
    
        const levelCell = document.createElement('td');
        levelCell.textContent = `+${level}`;
        row.appendChild(levelCell);
    
        const refineRateCell = document.createElement('td');
        refineRateCell.textContent = `${refineRate}%`;
        row.appendChild(refineRateCell);
    
        const totalRateCell = document.createElement('td');
        totalRateCell.textContent = `${totalRate.toFixed(10)}%`;
        row.appendChild(totalRateCell);
    
        const avgUsedItemCell = document.createElement('td');
        avgUsedItemCell.textContent = `${avgUsedItem.toFixed(2)}`;
        row.appendChild(avgUsedItemCell);
    
        tbody.appendChild(row);
    });
    
    table.appendChild(tbody);
    
    // Append the table to the DOM
    document.getElementById('refinerate').appendChild(table);
}

// Add event listeners to radio buttons to update the table on change
document.querySelectorAll('input[name="refineType"], input[name="stoneType"], input[name="equipmentType"]').forEach((radio) => {
    radio.addEventListener('change', calculateAndDisplayRefineData);
});

// Initial table update
calculateAndDisplayRefineData();

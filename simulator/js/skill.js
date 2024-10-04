function createSkillGrid(JobInherit) {
    const skillContainer = document.getElementById("skillContainer");
    skillContainer.innerHTML = ``; 

    JobInherit.forEach((job) => {
        const cols = 7;
        let rows;
        if (job == 23 || job == 4190) {
            rows = 9;
        } else if (job == 4218) {
            rows = 10;
        } else if (job == 4075 || job == 4076) {
            rows = 7;
        } else {
            rows = 6;
        }
        const jobDiv = document.createElement("div");
        jobDiv.className = "jobContainer";

        const jobNameDiv = document.createElement("div");
        jobNameDiv.className = "jobName";
        jobNameDiv.innerHTML = `
            <div class="circle"></div>
            ${PCJobNameTable[job]} (<span id="totalPoints_${job}">0</span> / <span id="jobMaxlevel_${job}">${JOB_SETTING[job][1] - 1}</span>)
        `;
        jobDiv.appendChild(jobNameDiv);
        const table = document.createElement("table");
        table.classList.add("skillTable", "job_" + job);
        const skillGrid = Array.from({ length: rows }, () => Array(cols).fill(""));
        let skills;
        if (JOBGROUP_NV.includes(job)) { 
            skills = Object.assign({}, SKILL_TREEVIEW_FOR_JOB[0], SKILL_TREEVIEW_FOR_JOB[job]);
        } else if (JOBGROUP_H.includes(job)) {
            skills = Object.assign({}, SKILL_TREEVIEW_FOR_JOB[job - 4001], SKILL_TREEVIEW_FOR_JOB[job]);
        } else {
            skills = SKILL_TREEVIEW_FOR_JOB[job];
        }
        for (const [key, value] of Object.entries(skills)) {
            const skillPosition = parseInt(key);
            const row = Math.floor(skillPosition / cols);
            const col = skillPosition % cols;

            if (row < rows && col < cols) {
                skillGrid[row][col] = value;
            }
        }
        for (let i = 0; i < rows; i++) {
            const row = document.createElement("tr");
            for (let j = 0; j < cols; j++) {
                const skillId = skillGrid[i][j];
                const cell = document.createElement("td");
                const skillInfo = SKILL_INFO_LIST[skillId];
                if (skillInfo) {
                    var skillName = skillInfo.SkillName;
                    if (skillName.substring(0, 4).includes(" ")) {
                        if (skillName.length > 5) {
                            skillName = skillName.substring(0, 4) + "...";
                        }
                    } else {
                        if (skillName.length > 4) {
                            skillName = skillName.substring(0, 3) + "...";
                        }
                    }
                    let skillLv;
                    if (skillInfo.Type == "Soul" || skillInfo.Type == "Quest") {
                        skillLv = '1';
                    } else if (skillInfo.SkillDB == "NV_BASIC") {
                        skillLv = '9';
                    } else {
                        skillLv = `<span id="skill_${skillId}">0</span> / <span>${skillInfo.MaxLv}</span>`;
                    }

                    cell.innerHTML = `
                        <div id="skillDiv_${skillId}" class="skillBlock">
                            <div class="skillName">${skillName}</div>
                            <img src="../src/img/skill/${skillInfo.SkillDB}.png" alt="${skillInfo.SkillName}" onclick="SkillDisplay(${skillId}, ${job})">
                            <div class="skillLevel">${skillLv}</div>
                        </div>
                    `;

                    cell.addEventListener('mouseover', () => {
                        highlightAndCheckSkills(skillId, job); 
                    });

                    cell.addEventListener('mouseout', () => {
                        resetPrerequisiteSkills(); 
                    });
                } else {
                    cell.innerHTML = `<div class="skillBlock"><img src='../src/img/skill/none.png'></div>`;
                }
                row.appendChild(cell);
            }
            table.appendChild(row);
        }
        jobDiv.appendChild(table);
        skillContainer.appendChild(jobDiv);
    });
}

function highlightAndCheckSkills(skillId, job, visitedSkills = new Set()) {
    // Check if we've already visited this skill to prevent infinite recursion
    if (visitedSkills.has(skillId)) return;
    visitedSkills.add(skillId); // Mark this skill as visited

    const skillInfo = SKILL_INFO_LIST[skillId];

    // Highlight and recursively check NeedSkillList for specific job requirements
    if (skillInfo.NeedSkillList) {
        const specificRequirements = skillInfo.NeedSkillList[job];
        if (specificRequirements) {
            for (const [requiredSkillId, requiredLevel] of specificRequirements) {
                
                highlightAndCheckSkills(requiredSkillId, job, visitedSkills); // Recursively highlight prerequisites
                highlightSkill(requiredSkillId); // Highlight the required skill
            }
        }
    }else{
        // Check _NeedSkillList as well (for general prerequisites)
        if (skillInfo._NeedSkillList) {
            for (const [requiredSkillId, requiredLevel] of skillInfo._NeedSkillList) {
                
                highlightAndCheckSkills(requiredSkillId, job, visitedSkills); // Recursively highlight prerequisites
                highlightSkill(requiredSkillId); // Highlight the required skill
            }
        }
    }

}


function highlightSkill(skillId) {
    const skillElementId = "skillDiv_" + skillId;
    const skillDiv = document.getElementById(skillElementId);
    if (skillDiv) {
        skillDiv.style.backgroundColor = "rgba(255, 100, 100, 0.5)"; 
    }
}

function resetPrerequisiteSkills() {
    const skillBlocks = document.querySelectorAll('.skillBlock');
    skillBlocks.forEach(block => {
        block.style.backgroundColor = "";
    });
}

function SkillDisplay(skillId, job) {
    const sk_id = "skill_" + skillId;
    const sk_id_div = document.getElementById(sk_id);
    const skillInfo = SKILL_INFO_LIST[skillId];
    let currentLevel = parseInt(sk_id_div.innerText);

    checkAndIncreaseSkills(skillId, job);
    if (currentLevel < skillInfo.MaxLv) {
        currentLevel++;
        sk_id_div.innerText = currentLevel;
    }
    updateTotalSkillPoints(job);
}

function checkAndIncreaseSkills(skillId, job) {
    const skillInfo = SKILL_INFO_LIST[skillId];

    if (skillInfo.NeedSkillList) {
        const specificRequirements = skillInfo.NeedSkillList[job];
        if (specificRequirements) {
            if (specificRequirements.length === 0) {
                return; 
            }
            for (const [requiredSkillId, requiredLevel] of specificRequirements) {
                const requiredSkillElementId = "skill_" + requiredSkillId;
                const requiredSkillDiv = document.getElementById(requiredSkillElementId);
                const requiredSkillLevel = parseInt(requiredSkillDiv.innerText);

                if (requiredSkillLevel < requiredLevel) {
                    requiredSkillDiv.innerText = requiredLevel;
                    checkAndIncreaseSkills(requiredSkillId, job);
                }
            }
            return;
        }
    }

    if (skillInfo._NeedSkillList) {
        for (const [requiredSkillId, requiredLevel] of skillInfo._NeedSkillList) {
            const requiredSkillElementId = "skill_" + requiredSkillId;
            const requiredSkillDiv = document.getElementById(requiredSkillElementId);
            const requiredSkillLevel = parseInt(requiredSkillDiv.innerText);

            if (requiredSkillLevel < requiredLevel) {
                requiredSkillDiv.innerText = requiredLevel;
                checkAndIncreaseSkills(requiredSkillId, job); 
            }
        }
    }
}
function updateTotalSkillPoints(job) {
    const joblist = getJobInherit(job);
    
    joblist.forEach(element => {
        let totalPoints = 0;
        const skillLevelElements = document.querySelectorAll(`.job_${element} .skillBlock span[id^="skill_"]`);
        
        skillLevelElements.forEach(a => {
            totalPoints += parseInt(a.innerText);
        });
        
        const totalSkillPointsDiv = document.getElementById(`totalPoints_${element}`);
        if (totalSkillPointsDiv) {
            totalSkillPointsDiv.innerText = `${totalPoints}`;
            const maxJobLevel = (JOB_SETTING[element][1] - 1) ? JOB_SETTING[element][1] - 1 : 49;
            if (totalPoints > maxJobLevel) {
                totalSkillPointsDiv.style.color = 'red';
            } else {
                totalSkillPointsDiv.style.color = ''; 
            }
        }
    });
}

function resetAllSkillLevels() {
    const skillLevelElements = document.querySelectorAll('[id^="skill_"]');
    skillLevelElements.forEach(element => {
        element.innerText = '0';
    });
    const totalSkillPointsDiv = document.querySelectorAll('[id^="totalPoints_"]');
    totalSkillPointsDiv.forEach(element => {
        element.innerText = '0';
        element.style.color = '';
    });
}

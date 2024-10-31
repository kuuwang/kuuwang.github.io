function getJobInherit(jobId) {
    const hierarchy = [];
    let currentJob = jobId;

    while (currentJob !== JOBID.JT_NOVICE) {
        hierarchy.push(currentJob);
        if (!(currentJob in JOB_INHERIT_LIST)) {
            break; 
        }
        currentJob = JOB_INHERIT_LIST[currentJob];
    }

    hierarchy.push(JOBID.JT_NOVICE);
    
    return hierarchy.reverse();
}

var selectedJobDB = 'NOVICE';

function updateJob(image) {
    document.querySelectorAll(".classIcon").forEach(img => img.classList.remove("active"))
    image.classList.add("active")

    const jobIdString = image.dataset.db; 
    const jobIds = JOBID[jobIdString]; 
    const JobInherit = getJobInherit(jobIds);

    selectedJobDB = jobIdString.substring(3);
    const APBar = document.getElementById("APBar")
    if(JOBGROUP_AP.includes(selectedJobDB)){
        APBar.style.display= "";
    }else{
        APBar.style.display= "none";
    }

    var charimg_m = document.getElementById("charsource_M")
    var charimg_f = document.getElementById("charsource_F")
    
    if(jobIdString == "JT_BARD" || jobIdString == "JT_BARD_H" || jobIdString == "JT_MINSTREL_H" || jobIdString == "JT_TROUBADOUR" || jobIdString == "JT_KAGEROU" || jobIdString == "JT_SHINKIRO")  {
        charimg_m.src = "../src/img/job/M/" + jobIdString + ".gif"
        charimg_f.src = ""    
    }else if(jobIdString == "JT_DANCER" || jobIdString == "JT_DANCER_H" || jobIdString == "JT_WANDERER_H" || jobIdString == "JT_TROUVERE" || jobIdString == "JT_OBORO" || jobIdString == "JT_SHIRANUI")  {
        charimg_m.src = ""
        charimg_f.src = "../src/img/job/F/" + jobIdString + ".gif" 
    }
    else{
        charimg_m.src = "../src/img/job/M/" + jobIdString + ".gif"
        charimg_f.src = "../src/img/job/F/" + jobIdString + ".gif"    
    }

    JobInherit.splice(0, 1);        
    if (JOBGROUP_H.includes(JobInherit[2])) {
        JobInherit.splice(1, 1); 
    }
    const charClass = document.getElementById("Jobname");
    charClass.innerText = PCJobNameTable[jobIds];
    var charValue = JOB_SETTING[jobIds];
    const charBaseLV = document.getElementById("baseLV");
    charBaseLV.value = charValue[0];
    const charJobLV = document.getElementById("jobLV");
    charJobLV.value = charValue[1];

    const skillIds = [];
    JobInherit.forEach(job => {
      const skills = SKILL_TREEVIEW_FOR_JOB[job];
        if (skills) {
            for (const skillId in skills) {
                skillIds.push(skills[skillId]); 
            }
        }
    });
    createSkillGrid(JobInherit); 
    updateWeaponR(selectedJobDB);
    updateWeaponL(selectedJobDB);
    calstatBonus();
    calstatpoint();
    caltstatpoint();
    toggleReset();
    calStat();
}

document.querySelectorAll(".classIcon").forEach(img => {
    tooltip = document.getElementById('tooltip')
    img.addEventListener("mouseover", event => {
        tooltip.textContent = img.alt;
        tooltip.style.display = "block";
    });

    img.addEventListener("mousemove", event => {
        tooltip.style.left = `${event.pageX}px`;
        tooltip.style.top = `${event.pageY}px`;
    });

    img.addEventListener("mouseout", () => {
        tooltip.style.display = "none";
    });
});

document.querySelectorAll(".statusName").forEach(txt => {
    tooltip = document.getElementById('tooltip')
    txt.addEventListener("mouseover", event => {
        const statusScriptText = txt.querySelector('.statusScript').innerHTML;
        tooltip.innerHTML = statusScriptText;
        tooltip.style.display = "block";
    });

    txt.addEventListener("mousemove", event => {
        tooltip.style.left = `${event.pageX}px`;
        tooltip.style.top = `${event.pageY}px`;
    });

    txt.addEventListener("mouseout", () => {
        tooltip.style.display = "none";
    });
});
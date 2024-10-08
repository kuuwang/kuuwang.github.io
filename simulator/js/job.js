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

function updateJob(image) {
    const jobIdString = image.dataset.db; 
    const jobIds = JOBID[jobIdString]; 
    const JobInherit = getJobInherit(jobIds);

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

    charJobLV.addEventListener("input", calstatBonus.bind(image));

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
    calstatBonus.bind(image)();
    calstatpoint();
    caltstatpoint();
}
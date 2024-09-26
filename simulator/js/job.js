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
    console.log(jobIds)

    const JobInherit = getJobInherit(jobIds);
    JobInherit.splice(0, 1);
        
    if (JOBGROUP_H.includes(JobInherit[2])) {
        JobInherit.splice(1, 1); 
    }

    const charClass = document.getElementById("Jobname");
    charClass.innerText = PCJobNameTable[jobIds];

    const skillIds = [];

    JobInherit.forEach(job => {
        const skills = SKILL_TREEVIEW_FOR_JOB[job];
        if (skills) {
            for (const skillId in skills) {
                skillIds.push(skills[skillId]); 
            }
        }
    });
    // 스킬 트리 표시
    createSkillGrid(JobInherit); 
}
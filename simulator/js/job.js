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
    const jobname = image.alt;
    const jobIdString = image.dataset.db; 
    const jobIds = JOBID[jobIdString]; 
    console.log(jobIds)
    
    // 직업 계층 구조 가져오기
    const JobInherit = getJobInherit(jobIds);
    
    // 직업 이름 업데이트
    const charClass = document.getElementById("Jobname");
    charClass.innerText = jobname;

    // 각 직업의 스킬 트리를 가져오는 로직 추가
    const skillIds = []; // 여기에서 스킬 ID를 저장할 배열

    // 직업 계층에 따라 모든 스킬 ID를 가져오는 로직
    JobInherit.forEach(job => {
        const skills = SKILL_TREEVIEW_FOR_JOB[job];
        console.log(Object.keys(skills))
        if (skills) {
            for (const skillId in skills) {
                skillIds.push(skills[skillId]); // 스킬 ID를 배열에 추가
            }
        }
    });
    // 스킬 트리 표시
    createSkillGrid(JobInherit, skillIds); // 스킬 그리드 생성 함수 호출
}
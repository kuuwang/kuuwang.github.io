function calStat(){
    calstatMHP();
    calstatMSP();

    calstatATK();
    calstatMATK();
    calstatDEF();
    calstatMDEF();
    calstatHIT();
    calstatFLEE();
    calstatPERFECTDODGE();
    calstatCRIT();
    calstatHEAL();
    calstatCasting();
    calstatASPD();

    calstatPATK();
    calstatSMATK();
    calstatRES();
    calstatMRES();
    calstatHPLUS();
    calstatCRATE();
}


function calstatBonus(){
    const jobLV = parseFloat(document.getElementById("jobLV").value);
    const jobName = "JT_" + selectedJobDB;

    const jobData = combinedStatPlusInfo.find(job => job.job === jobName);
    const bonusStats = {
        STR: 0,
        AGI: 0,
        VIT: 0,
        INT: 0,
        DEX: 0,
        LUK: 0,
        POW: 0,
        STA: 0,
        WIS: 0,
        SPL: 0,
        CON: 0,
        CRT: 0
    };

    for (let level = 0; level < jobLV; level++) {
        const levelStats = jobData.stats[level];

        if (levelStats) {
            for (const stat of levelStats) {
                if (bonusStats.hasOwnProperty(stat)) {
                    bonusStats[stat]++;
                }
            }
        }
    }

    for (const stat in bonusStats) {
        document.getElementById(`bonus${stat}`).textContent = bonusStats[stat];
        document.getElementById(`item${stat}`).value = bonusStats[stat];
    }

    calStat();
}
['jobLV'].forEach(id => {
    document.getElementById(id).addEventListener("input", calstatBonus);
});

function calstatMHP(){
    const baseLV = parseFloat(document.getElementById("baseLV").value);
    const statVIT = parseFloat(document.getElementById("statVIT").value);
    const itemVIT = parseFloat(document.getElementById("itemVIT").value);
    var VIT = statVIT + itemVIT;
    const jobMHP = MaxHP[selectedJobDB];

    var baseHP = document.getElementById('baseHP')
    var maxHP = document.getElementById('MaxHP')
    var baseMHP = 0;

    if(selectedJobDB.slice(-2) === "_H"){
        var baseMHP = Math.floor(jobMHP[baseLV - 1] * 1.25);
    }else if(JOBGROUP_4th.includes(selectedJobDB)){
        var baseMHP = Math.floor(jobMHP[baseLV - 1] * 1.25);
    }else{
        var baseMHP = jobMHP[baseLV - 1];
    }
    var statMHP = Math.floor(baseMHP * (1 + (VIT * 0.01)))
    maxHP.innerText = statMHP;
    baseHP.innerText = "(" + baseMHP + ")";
}
['baseLV', 'statVIT', 'itemVIT'].forEach(id => {
    document.getElementById(id).addEventListener("input", calstatMHP);
});

function calstatMSP(){
    const baseLV = parseFloat(document.getElementById("baseLV").value);
    const statINT = parseFloat(document.getElementById("statINT").value);
    const itemINT = parseFloat(document.getElementById("itemINT").value);
    var INT = statINT + itemINT;
    const jobMSP = MaxSP[selectedJobDB];

    var baseSP = document.getElementById('baseSP')
    var maxSP = document.getElementById('MaxSP')
    var baseMSP = 0;

    if(selectedJobDB.slice(-2) === "_H"){
        var baseMSP = Math.floor(jobMSP[baseLV - 1] * 1.25);
    }else if(JOBGROUP_4th.includes(selectedJobDB)){
        var baseMSP = Math.floor(jobMSP[baseLV - 1] * 1.25);
    }else{
        var baseMSP = jobMSP[baseLV - 1];
    }

    var statMSP = Math.floor(baseMSP * (1 + (INT * 0.01)))
    maxSP.innerText = statMSP;
    baseSP.innerText = "(" + baseMSP + ")";
}
['baseLV', 'statINT', 'itemINT'].forEach(id => {
    document.getElementById(id).addEventListener("input", calstatMSP);
});

function calstatATK(){
    const baseLV = parseFloat(document.getElementById("baseLV").value);
    const statSTR = parseFloat(document.getElementById("statSTR").value);
    const itemSTR = parseFloat(document.getElementById("itemSTR").value);
    const statDEX = parseFloat(document.getElementById("statDEX").value);
    const itemDEX = parseFloat(document.getElementById("itemDEX").value);
    const statLUK = parseFloat(document.getElementById("statLUK").value);
    const itemLUK = parseFloat(document.getElementById("itemLUK").value);
    const statPOW = parseFloat(document.getElementById("statPOW").value);
    const itemPOW = parseFloat(document.getElementById("itemPOW").value);
    var STR = statSTR + itemSTR;
    var DEX = statDEX + itemDEX;
    var LUK = statLUK + itemLUK;
    var POW = statPOW + itemPOW;

    var statATK = (baseLV / 4) + (STR) + (DEX/5) + (LUK/3) + (POW * 5)
    document.getElementById('statATK').textContent = Math.floor(statATK)
}

['baseLV', 'statSTR', 'itemSTR', 'statDEX', 'itemDEX', 'statLUK', 'itemLUK', 'statPOW', 'itemPOW'].forEach(id => {
    document.getElementById(id).addEventListener("input", calstatATK);
});

function calstatMATK(){
    const baseLV = parseFloat(document.getElementById("baseLV").value);
    const statINT = parseFloat(document.getElementById("statINT").value);
    const itemINT = parseFloat(document.getElementById("itemINT").value);
    const statDEX = parseFloat(document.getElementById("statDEX").value);
    const itemDEX = parseFloat(document.getElementById("itemDEX").value);
    const statLUK = parseFloat(document.getElementById("statLUK").value);
    const itemLUK = parseFloat(document.getElementById("itemLUK").value);
    const statSPL = parseFloat(document.getElementById("statSPL").value);
    const itemSPL = parseFloat(document.getElementById("itemSPL").value);
    var INT = statINT + itemINT;
    var DEX = statDEX + itemDEX;
    var LUK = statLUK + itemLUK;
    var SPL = statSPL + itemSPL;

    var statMATK = Math.floor(baseLV / 4) + (INT) + Math.floor(INT/2) + Math.floor(DEX/5) + Math.floor(LUK/3) + (SPL * 5)
    document.getElementById('statMATK').textContent = Math.floor(statMATK)
}
['baseLV', 'statINT', 'itemINT', 'statDEX', 'itemDEX', 'statLUK', 'itemLUK', 'statSPL', 'itemSPL'].forEach(id => {
    document.getElementById(id).addEventListener("input", calstatMATK);
});

function calstatDEF(){
    const baseLV = parseFloat(document.getElementById("baseLV").value);
    const statAGI = parseFloat(document.getElementById("statAGI").value);
    const itemAGI = parseFloat(document.getElementById("itemAGI").value);
    const statVIT = parseFloat(document.getElementById("statVIT").value);
    const itemVIT = parseFloat(document.getElementById("itemVIT").value);
    var AGI = statAGI + itemAGI;
    var VIT = statVIT + itemVIT;

    var statDEF = (VIT / 2) + (AGI / 5) + (baseLV / 2)
    document.getElementById('statDEF').textContent = Math.floor(statDEF)
}
['baseLV', 'statAGI', 'itemAGI', 'statVIT', 'itemVIT'].forEach(id => {
    document.getElementById(id).addEventListener("input", calstatDEF);
});

function calstatMDEF(){
    const baseLV = parseFloat(document.getElementById("baseLV").value);
    const statVIT = parseFloat(document.getElementById("statVIT").value);
    const itemVIT = parseFloat(document.getElementById("itemVIT").value);
    const statINT = parseFloat(document.getElementById("statINT").value);
    const itemINT = parseFloat(document.getElementById("itemINT").value);
    const statDEX = parseFloat(document.getElementById("statDEX").value);
    const itemDEX = parseFloat(document.getElementById("itemDEX").value);
    var VIT = statVIT + itemVIT;
    var INT = statINT + itemINT;
    var DEX = statDEX + itemDEX;
    
    var statMDEF = INT + (VIT / 5) + (DEX / 5) + (baseLV / 4)
    document.getElementById('statMDEF').textContent = Math.floor(statMDEF)
}
['baseLV', 'statVIT', 'itemVIT', 'statINT', 'itemINT', 'statDEX', 'itemDEX'].forEach(id => {
    document.getElementById(id).addEventListener("input", calstatMDEF);
});

function calstatHIT(){
    const baseLV = parseFloat(document.getElementById("baseLV").value);
    const statDEX = parseFloat(document.getElementById("statDEX").value);
    const itemDEX = parseFloat(document.getElementById("itemDEX").value);
    const statLUK = parseFloat(document.getElementById("statLUK").value);
    const itemLUK = parseFloat(document.getElementById("itemLUK").value);
    const statCON = parseFloat(document.getElementById("statCON").value);
    const itemCON = parseFloat(document.getElementById("itemCON").value);
    var DEX = statDEX + itemDEX;
    var LUK = statLUK + itemLUK;
    var CON = statCON + itemCON;

    var statHIT = 175 + (baseLV) + (DEX) + Math.floor(LUK / 3) + (CON * 2)
    document.getElementById('statHIT').textContent = Math.floor(statHIT)
}
['baseLV', 'statDEX', 'itemDEX', 'statLUK', 'itemLUK', 'statCON', 'itemCON'].forEach(id => {
    document.getElementById(id).addEventListener("input", calstatHIT);
});

function calstatFLEE(){
    const baseLV = parseFloat(document.getElementById("baseLV").value);
    const statAGI = parseFloat(document.getElementById("statAGI").value);
    const itemAGI = parseFloat(document.getElementById("itemAGI").value);
    const statLUK = parseFloat(document.getElementById("statLUK").value);
    const itemLUK = parseFloat(document.getElementById("itemLUK").value);
    const statCON = parseFloat(document.getElementById("statCON").value);
    const itemCON = parseFloat(document.getElementById("itemCON").value);
    var AGI = statAGI + itemAGI;
    var LUK = statLUK + itemLUK;
    var CON = statCON + itemCON;

    var statFLEE = 100 + (baseLV) + (AGI) + Math.floor(LUK / 3) + (CON * 2)
    document.getElementById('statFLEE').textContent = Math.floor(statFLEE)
}
['baseLV', 'statAGI', 'itemAGI', 'statLUK', 'itemLUK', 'statCON', 'itemCON'].forEach(id => {
    document.getElementById(id).addEventListener("input", calstatFLEE);
});

function calstatPERFECTDODGE(){
    const statLUK = parseFloat(document.getElementById("statLUK").value);
    const itemLUK = parseFloat(document.getElementById("itemLUK").value);
    var LUK = statLUK + itemLUK;

    var statPERFECTDODGE = 1 + Math.floor(LUK / 10)
    document.getElementById('statPERFECTDODGE').textContent = Math.floor(statPERFECTDODGE)
}
['statLUK', 'itemLUK'].forEach(id => {
    document.getElementById(id).addEventListener("input", calstatPERFECTDODGE);
});

function calstatCRIT(){
    const statLUK = parseFloat(document.getElementById("statLUK").value);
    const itemLUK = parseFloat(document.getElementById("itemLUK").value);
    var LUK = statLUK + itemLUK;

    var statCRIT = 1 + Math.floor(LUK * 0.3)
    document.getElementById('statCRIT').textContent = Math.floor(statCRIT)
}
['statLUK', 'itemLUK'].forEach(id => {
    document.getElementById(id).addEventListener("input", calstatCRIT);
});

function calstatHEAL(){
    const baseLV = parseFloat(document.getElementById("baseLV").value);
    const statINT = parseFloat(document.getElementById("statINT").value);
    const itemINT = parseFloat(document.getElementById("itemINT").value);
    const statMATK = parseFloat(document.getElementById("statMATK").innerText);
    var INT = statINT + itemINT;

    var statHEALmin = (Math.floor((INT + baseLV) / 5) * (3)) + statMATK;
    var statHEALmax = (Math.floor((INT + baseLV) / 5) * (3)) + statMATK;
    
    document.getElementById('statHEALmin').textContent = statHEALmin
    document.getElementById('statHEALmax').textContent = statHEALmax

}
['baseLV', 'statINT', 'itemINT', 'statDEX', 'itemDEX', 'statLUK', 'itemLUK', 'statSPL', 'itemSPL'].forEach(id => {
    document.getElementById(id).addEventListener("input", calstatHEAL);
});

function calstatCasting(){
    const statINT = parseFloat(document.getElementById("statINT").value);
    const itemINT = parseFloat(document.getElementById("itemINT").value);
    const statDEX = parseFloat(document.getElementById("statDEX").value);
    const itemDEX = parseFloat(document.getElementById("itemDEX").value);
    var INT = statINT + itemINT;
    var DEX = statDEX + itemDEX;

    casting = (INT/2 + DEX)/265 * 100;
    document.getElementById('statCasting').textContent = casting.toFixed(1)
    if(casting >= 100){
        document.getElementById('statCasting').textContent = '100';
    }
}
['statINT', 'itemINT', 'statDEX', 'itemDEX'].forEach(id => {
    document.getElementById(id).addEventListener("input", calstatCasting);
});

function calstatpoint(){
    const baseLV = parseFloat(document.getElementById("baseLV").value);
    const statSTR = parseFloat(document.getElementById("statSTR").value);
    const statAGI = parseFloat(document.getElementById("statAGI").value);
    const statVIT = parseFloat(document.getElementById("statVIT").value);
    const statINT = parseFloat(document.getElementById("statINT").value);
    const statDEX = parseFloat(document.getElementById("statDEX").value);
    const statLUK = parseFloat(document.getElementById("statLUK").value);

    var job = document.getElementById('Jobname').innerText;
    for(let key in PCJobNameTable){
        if(PCJobNameTable[key] === job){
            if(JOBGROUP_N.includes(Number(key))){
                var stat = (baseLV > 200) ? statPoint[199] : statPoint[baseLV - 1];
            }else{
                var stat = (baseLV > 200) ? statPoint[199] + 52 : statPoint[baseLV - 1] + 52;
            }
        }
    }


    const costSTR = (statSTR > 130) ? stat_cost[129] : stat_cost[statSTR - 1];
    const costAGI = (statAGI > 130) ? stat_cost[129] : stat_cost[statAGI - 1];
    const costVIT = (statVIT > 130) ? stat_cost[129] : stat_cost[statVIT - 1];
    const costINT = (statINT > 130) ? stat_cost[129] : stat_cost[statINT - 1];
    const costDEX = (statDEX > 130) ? stat_cost[129] : stat_cost[statDEX - 1];
    const costLUK = (statLUK > 130) ? stat_cost[129] : stat_cost[statLUK - 1];
    var sumcostSTR = 0;
    var sumcostAGI = 0;
    var sumcostVIT = 0;
    var sumcostINT = 0;
    var sumcostDEX = 0;
    var sumcostLUK = 0;
    for(let i = 0; i < statSTR; i++){
        sumcostSTR = stat_cost.slice(0, statSTR-1).reduce((acc, value) => acc + value, 0);
    }
    for(let i = 0; i < statAGI; i++){
        sumcostAGI = stat_cost.slice(0, statAGI-1).reduce((acc, value) => acc + value, 0); 
    }
    for(let i = 0; i < statVIT; i++){
        sumcostVIT = stat_cost.slice(0, statVIT-1).reduce((acc, value) => acc + value, 0); 
    }
    for(let i = 0; i < statINT; i++){
        sumcostINT = stat_cost.slice(0, statINT-1).reduce((acc, value) => acc + value, 0); 
    }
    for(let i = 0; i < statDEX; i++){
        sumcostDEX = stat_cost.slice(0, statDEX-1).reduce((acc, value) => acc + value, 0); 
    }
    for(let i = 0; i < statLUK; i++){
        sumcostLUK = stat_cost.slice(0, statLUK-1).reduce((acc, value) => acc + value, 0); 
    }
    statResult = stat - sumcostSTR - sumcostAGI - sumcostVIT - sumcostINT - sumcostDEX - sumcostLUK;
    
    document.getElementById('statpoint').textContent = statResult;
    document.getElementById('costSTR').textContent = costSTR;
    document.getElementById('costAGI').textContent = costAGI;
    document.getElementById('costVIT').textContent = costVIT;
    document.getElementById('costINT').textContent = costINT;
    document.getElementById('costDEX').textContent = costDEX;
    document.getElementById('costLUK').textContent = costLUK;
    if(statResult < 0){
        document.getElementById('statpoint').style.color = "red";
    }else{
        document.getElementById('statpoint').style.color = "black";
    }

}
['baseLV', 'statSTR', 'statAGI', 'statVIT', 'statINT', 'statDEX', 'statLUK'].forEach(id => {
    document.getElementById(id).addEventListener("input", calstatpoint);
});



function calstatPATK(){
    const statPOW = parseFloat(document.getElementById("statPOW").value);
    const itemPOW = parseFloat(document.getElementById("itemPOW").value);
    const statCON = parseFloat(document.getElementById("statCON").value);
    const itemCON = parseFloat(document.getElementById("itemCON").value);
    var POW = statPOW + itemPOW;
    var CON = statCON + itemCON;

    var statPATK = Math.floor(POW/3) + Math.floor(CON/5);
    if(CompetentiaActive){
        statPATK += 50;
    }
    if(PronmarchActive){
        statPATK += 15;
    }
    document.getElementById('statPATK').textContent = statPATK;

}
['statPOW', 'itemPOW', 'statCON', 'itemCON'].forEach(id => {
    document.getElementById(id).addEventListener("input", calstatPATK);
});

function calstatSMATK(){
    const statSPL = parseFloat(document.getElementById("statSPL").value);
    const itemSPL = parseFloat(document.getElementById("itemSPL").value);
    const statCON = parseFloat(document.getElementById("statCON").value);
    const itemCON = parseFloat(document.getElementById("itemCON").value);
    var SPL = statSPL + itemSPL;
    var CON = statCON + itemCON;

    var statSMATK = Math.floor(SPL/3) + Math.floor(CON/5);
    if(CompetentiaActive){
        statSMATK += 50;
    }
    if(SpellenchantingActive){
        statSMATK += 20;
    }
    if(JawaiiserenadeActive){
        statSMATK += 15;
    }
    const weaponNameR = document.getElementById("weaponNameR").innerText;
    if(weaponNameR == "양손지팡이" && document.getElementById("skill_5228")) { // Arch Mage : Twohandstaff Mastery
        statSMATK += parseInt(document.getElementById("skill_5228").innerText)*2;
    } 
    document.getElementById('statSMATK').textContent = statSMATK;

}
['statSPL', 'itemSPL', 'statCON', 'itemCON'].forEach(id => {
    document.getElementById(id).addEventListener("input", calstatSMATK);
});

function calstatRES(){
    const statSTA = parseFloat(document.getElementById("statSTA").value);
    const itemSTA = parseFloat(document.getElementById("itemSTA").value);
    var STA = statSTA + itemSTA;

    var statRES = STA + (Math.floor(STA/3) * 5);
    document.getElementById('statRES').textContent = statRES;

}
['statSTA', 'itemSTA'].forEach(id => {
    document.getElementById(id).addEventListener("input", calstatRES);
});

function calstatMRES(){
    const statWIS = parseFloat(document.getElementById("statWIS").value);
    const itemWIS = parseFloat(document.getElementById("itemWIS").value);
    var WIS = statWIS + itemWIS;

    var statMRES = WIS + (Math.floor(WIS/3) * 5);
    document.getElementById('statMRES').textContent = statMRES;

}
['statWIS', 'itemWIS'].forEach(id => {
    document.getElementById(id).addEventListener("input", calstatMRES);
});

function calstatHPLUS(){
    const statCRT = parseFloat(document.getElementById("statCRT").value);
    const itemCRT = parseFloat(document.getElementById("itemCRT").value);
    var CRT = statCRT + itemCRT;

    var statHPLUS = CRT;
    document.getElementById('statHPLUS').textContent = statHPLUS;

}
['statCRT', 'itemCRT'].forEach(id => {
    document.getElementById(id).addEventListener("input", calstatHPLUS);
});

function calstatCRATE(){
    const statCRT = parseFloat(document.getElementById("statCRT").value);
    const itemCRT = parseFloat(document.getElementById("itemCRT").value);
    var CRT = statCRT + itemCRT;

    var statCRATE = Math.floor(CRT/3);
    if(PresensaciesActive){
        statCRATE += 10;
    }
    document.getElementById('statCRATE').textContent = statCRATE;

}
['statCRT', 'itemCRT'].forEach(id => {
    document.getElementById(id).addEventListener("input", calstatCRATE);
});

function caltstatpoint(){
    const baseLV = parseFloat(document.getElementById("baseLV").value);
    const statPOW = parseFloat(document.getElementById("statPOW").value);
    const statSTA = parseFloat(document.getElementById("statSTA").value);
    const statWIS = parseFloat(document.getElementById("statWIS").value);
    const statSPL = parseFloat(document.getElementById("statSPL").value);
    const statCON = parseFloat(document.getElementById("statCON").value);
    const statCRT = parseFloat(document.getElementById("statCRT").value);
    var tstatPoint = (baseLV - 200) * 3 + 7 + Math.floor((baseLV - 200)/5)*4

    var tstatPoint = tstatPoint - statPOW - statSTA - statWIS - statSPL - statCON - statCRT;
    if(baseLV < 200){
        tstatPoint = 0;
    }else{
        if(tstatPoint < 0){
            document.getElementById('tstatpoint').style.color = "red";
        }else{
            document.getElementById('tstatpoint').style.color = "black";
        }
    }
    document.getElementById('tstatpoint').textContent = tstatPoint;

}
['baseLV', 'statPOW', 'statSTA', 'statWIS', 'statSPL', 'statCON', 'statCRT'].forEach(id => {
    document.getElementById(id).addEventListener("input", caltstatpoint);
});

caltstatpoint();


function toggleReset(){
    var attributes = ["itemATK", "itemMATK", "itemDEF", "itemMDEF"];
    attributes.forEach(attributeId=> {
        var element = document.getElementById(attributeId);
        element.innerText = '0';
    })
    const skillNames = [
        "Clementia", "Canto", "Gloria", "Impositio", 
        "Assumptio", "Angelus", "Benedictum", 
        "Religio", "Competentia", "Presensacies", "Almighty",
        "Striking", "Spellenchanting",
        "Jawaiiserenade", "Pronmarch"
    ];
    CompetentiaActive = false;
    AngelusActive = false;
    SpellenchantingActive = false;
    JawaiiserenadeActive = false;
    PronmarchActive = false;
    PresensaciesActive = false;
    skillNames.forEach(skill => {
        window[`${skill}Active`] = false;
        const skillElement = document.getElementById(`q${skill}`);
        skillElement.style.border = "1px solid rgb(198,198,198)";
    });
    calStat(); 
}

function toggleSkill(skillName, attributes, skBonus) {
    const skillElement = document.getElementById(`q${skillName}`);
    const isActive = window[`${skillName}Active`];

    attributes.forEach(attributeId => {
        const element = document.getElementById(attributeId);
        let currentValue = parseInt(element.value || element.innerText) || 0;
        currentValue += isActive ? -skBonus : skBonus;
        
        if (element.tagName === "INPUT") {
            element.value = currentValue;
        } else {
            element.innerText = currentValue;
        }
    });

    skillElement.style.border = isActive ? "1px solid rgb(198,198,198)" : "1px solid rgb(205, 0, 0)";
    window[`${skillName}Active`] = !isActive;
    calStat();    
}

//////////////////////////////////////////////////////////////////////////////////////////

function toggleClementia() { toggleSkill("Clementia", ["itemSTR", "itemINT", "itemDEX"], 17); }
function toggleCanto() { toggleSkill("Canto", ["itemAGI"], 19); }
function toggleGloria() { toggleSkill("Gloria", ["itemLUK"], 30); }
function toggleImpositio() { toggleSkill("Impositio", ["itemATK", "itemMATK"], 25); }
function toggleAssumptio() { toggleSkill("Assumptio", ["itemDEF"], 250); }

function toggleBenedictum() { toggleSkill("Benedictum", ["itemPOW", "itemCRT", "itemCON"], 10); }
function toggleReligio() { toggleSkill("Religio", ["itemSPL", "itemWIS", "itemSTA"], 10); }
function toggleAlmighty() { toggleSkill("Almighty", ["itemSTR", "itemAGI", "itemVIT", "itemINT", "itemDEX", "itemLUK"], 10); }
function toggleStriking() { toggleSkill("Striking", ["itemATK"], 100); }

function toggleActive(skillName, isActive) {
    const skillElement = document.getElementById(`q${skillName}`);
    skillElement.style.border = isActive ? "1px solid rgb(198,198,198)" : "1px solid rgb(205, 0, 0)";
    return !isActive;
}

let CompetentiaActive = false;
function toggleCompetentia() { CompetentiaActive = toggleActive("Competentia", CompetentiaActive); calStat(); }
let SpellenchantingActive = false;
function toggleSpellenchanting() { SpellenchantingActive = toggleActive("Spellenchanting", SpellenchantingActive); calStat(); }
let JawaiiserenadeActive = false;
function toggleJawaiiserenade() { JawaiiserenadeActive = toggleActive("Jawaiiserenade", JawaiiserenadeActive); calStat(); }
let PronmarchActive = false;
function togglePronmarch() { PronmarchActive = toggleActive("Pronmarch", PronmarchActive); calStat(); }
let PresensaciesActive = false;
function togglePresensacies() { PresensaciesActive = toggleActive("Presensacies", PresensaciesActive); calStat(); }


let AngelusActive = false;
let originalStatDef = 0
function toggleAngelus(){
    const qAngelus = document.getElementById("qAngelus");
    const statDEFElement = document.getElementById("statDEF");
    const statVIT = parseFloat(document.getElementById("statVIT").value);
    const itemVIT = parseFloat(document.getElementById("itemVIT").value);
    var VIT = statVIT + itemVIT;

    let currentStatDEF = parseInt(statDEFElement.innerText) || 0;

    if (AngelusActive) {
        calStat();
    } else {
        currentStatDEF += (VIT * 1.5 / 2) - (VIT / 2);
        statDEFElement.innerText = Math.floor(currentStatDEF);
    }
    qAngelus.style.border = AngelusActive ? "1px solid rgb(198,198,198)" : "1px solid rgb(205, 0, 0)";
    AngelusActive = !AngelusActive;
}



const weaponInfo = [
    { name: "맨손", value: "NOW", S: "100%", M: "100%", L: "100%"},
    { name: "단검", value: "DAG", S: "100%", M: "75%", L: "50%"},
    { name: "한손검", value: "SWO", S: "75%", M: "100%", L: "75%"},
    { name: "양손검", value: "SW2", S: "75%", M: "75%", L: "100%"},
    { name: "창", value: "SPE", S: "75%", M: "75%", L: "100%"},
    { name: "양손창", value: "SP2", S: "75%", M: "75%", L: "100%"},
    { name: "도끼", value: "AXE", S: "50%", M: "75%", L: "100%"},
    { name: "양손도끼", value: "AX2", S: "50%", M: "75%", L: "100%"},
    { name: "메이스", value: "MAC", S: "75%", M: "100%", L: "100%"},
    { name: "양손메이스", value: "MA2", S: "75%", M: "100%", L: "100%"},
    { name: "한손지팡이", value: "ROD", S: "100%", M: "100%", L: "100%"},
    { name: "활", value: "BOW", S: "100%", M: "100%", L: "75%"},
    { name: "너클", value: "KNU", S: "100%", M: "100%", L: "75%"},
    { name: "악기", value: "INS", S: "75%", M: "100%", L: "75%"},
    { name: "채찍", value: "WHI", S: "75%", M: "100%", L: "50%"},
    { name: "책", value: "BOK", S: "100%", M: "100%", L: "50%"},
    { name: "카타르", value: "KAT", S: "75%", M: "100%", L: "75%"},
    { name: "권총", value: "HGU", S: "100%", M: "100%", L: "100%"},
    { name: "라이플", value: "RIF", S: "100%", M: "100%", L: "100%"},
    { name: "개틀링", value: "GAT", S: "100%", M: "100%", L: "100%"},
    { name: "샷건", value: "SGU", S: "100%", M: "100%", L: "100%"},
    { name: "그레네이드", value: "GRE", S: "100%", M: "100%", L: "100%"},
    { name: "수리검", value: "HUU", S: "75%", M: "75%", L: "100%"},
    { name: "양손지팡이", value: "RO2", S: "100%", M: "100%", L: "100%"},
    { name: "방패", value: "SHI"},
];



let twohandWeapon = false;
let previousTwohandWeapon = twohandWeapon;

const equipmentBoxR = document.getElementById('rightHand');
const equipmentBoxSelectedR = document.getElementById('equipmentBoxSelectedR');
const rightHandList = document.getElementById('rightHandList');
equipmentBoxSelectedR.addEventListener('click', () => {
    rightHandList.style.display = rightHandList.style.display === 'block' ? 'none' : 'block';
});
function addOptionListenersR() {
    const options = document.querySelectorAll('.equipmentBoxR-option');
    options.forEach(option => {
        option.addEventListener('click', () => {
            const img = option.querySelector('img').src;
            const text = option.querySelector('.weaponName').innerHTML;
            equipmentBoxSelectedR.querySelector('img').src = img;
            equipmentBoxSelectedR.querySelector('span').innerHTML = text;
            equipmentBoxSelectedR.querySelectorAll('span')[0].id = "weaponNameR";
            equipmentBoxSelectedR.querySelectorAll('span')[1].id = "weaponASPDR";
            rightHandList.style.display = 'none';
            const righthand = option.querySelector('img').alt;
            if(["양손검", "양손창", "양손도끼", "활", "카타르", "권총", "라이플", "개틀링", "샷건", "그레네이드", "수리검", "양손지팡이"].includes(righthand)){
                equipmentBoxSelectedL.querySelector('img').src = img;
                equipmentBoxSelectedL.querySelector('span').innerHTML = text;
                equipmentBoxSelectedL.querySelectorAll('span')[0].id = "weaponNameL";
                equipmentBoxSelectedL.querySelectorAll('span')[1].id = "weaponASPDL";
                equipmentBoxSelectedL.querySelectorAll('span')[1].innerHTML = "0";
                twohandWeapon = true;
            }else{
                twohandWeapon = false;
                
            }
            addOptionListenersL();
            previousTwohandWeapon = twohandWeapon;
            calStat();
        });
    });
}

function updateWeaponR(job) {
    const rightHandList = document.getElementById("rightHandList");
    rightHandList.innerHTML = ``; 
    const jobWeapons = weaponData[job].slice(0, -1); 
    
    const equipmentBoxSelectedR = document.getElementById("equipmentBoxSelectedR");

    const firstWeaponValue = jobWeapons[0];
    const selectedWeaponImg = document.createElement("img");
    selectedWeaponImg.src = `../src/img/item/${weaponInfo[0].value}.png`;
    selectedWeaponImg.className = "weaponImg";
    selectedWeaponImg.alt = weaponInfo[0].name;

    const selectedWeaponName = document.createElement("span");
    selectedWeaponName.className = "weaponName";
    selectedWeaponName.textContent = weaponInfo[0].name;

    const weaponASPDR = document.createElement("span");
    weaponASPDR.id = "weaponASPDR";
    weaponASPDR.style.display = "none";
    weaponASPDR.textContent = firstWeaponValue;

    equipmentBoxSelectedR.innerHTML = ``;
    selectedWeaponName.appendChild(weaponASPDR);
    equipmentBoxSelectedR.appendChild(selectedWeaponImg);
    equipmentBoxSelectedR.appendChild(selectedWeaponName);

    jobWeapons.forEach((value, index) => {
        if (value < 200 && weaponInfo[index].name != "양손메이스") {
            const weaponList = document.createElement("div");
            weaponList.className = "equipmentBox-option equipmentBoxR-option";

            const weaponImg = document.createElement("img");
            weaponImg.src = `../src/img/item/${weaponInfo[index].value}.png`;
            weaponImg.className = "weaponImg";
            weaponImg.alt = weaponInfo[index].name;

            const weaponName = document.createElement("span");
            weaponName.id = "weaponNameR";
            weaponName.className = "weaponName";
            weaponName.textContent = weaponInfo[index].name;

            const weaponASPDRValue = document.createElement("span");
            weaponASPDRValue.className = "weaponASPDR"
            weaponASPDRValue.style.display = "none";
            weaponASPDRValue.textContent = value;

            weaponName.appendChild(weaponASPDRValue);
            weaponList.appendChild(weaponImg);
            weaponList.appendChild(weaponName);
            rightHandList.appendChild(weaponList);
        }
    });

    addOptionListenersR();
}

const equipmentBoxL = document.getElementById('leftHand');
const equipmentBoxSelectedL = document.getElementById('equipmentBoxSelectedL');
const leftHandList = document.getElementById('leftHandList');
equipmentBoxSelectedL.addEventListener('click', () => {
    if(twohandWeapon == false){
        leftHandList.style.display = leftHandList.style.display === 'block' ? 'none' : 'block';
    }
    
});

function addOptionListenersL() {
    const options = document.querySelectorAll('.equipmentBoxL-option');
    options.forEach(option => {
        if(previousTwohandWeapon && !twohandWeapon){
            equipmentBoxSelectedL.querySelector('img').src = options[0].querySelector('img').src;
            equipmentBoxSelectedL.querySelector('span').innerHTML = options[0].querySelector('.weaponName').innerHTML;
            equipmentBoxSelectedL.querySelectorAll('span')[0].id = "weaponNameL";
            equipmentBoxSelectedL.querySelectorAll('span')[1].id = "weaponASPDL";
            equipmentBoxSelectedL.querySelectorAll('span')[1].innerHTML = "0";
            calStat();
        }
        option.addEventListener('click', () => {
            const img = option.querySelector('img').src;
            const text = option.querySelector('.weaponName').innerHTML;
            equipmentBoxSelectedL.querySelector('img').src = img;
            equipmentBoxSelectedL.querySelector('span').innerHTML = text;
            equipmentBoxSelectedL.querySelectorAll('span')[0].id = "weaponNameL";
            equipmentBoxSelectedL.querySelectorAll('span')[1].id = "weaponASPDL";
            leftHandList.style.display = 'none';

            calStat();
        });
    });
}



function updateWeaponL(job) {
    const leftHandList = document.getElementById("leftHandList");
    leftHandList.innerHTML = ``; 
    const jobWeapons = weaponData[job]; 

    const equipmentBoxSelectedL = document.getElementById("equipmentBoxSelectedL");

    const firstWeaponValue = jobWeapons[0];
    const selectedWeaponImg = document.createElement("img");
    selectedWeaponImg.src = `../src/img/item/${weaponInfo[0].value}.png`;
    selectedWeaponImg.className = "weaponImg";
    selectedWeaponImg.alt = weaponInfo[0].name;

    const selectedWeaponName = document.createElement("span");
    selectedWeaponName.Id = "weaponNameL";
    selectedWeaponName.className = "weaponName";
    selectedWeaponName.textContent = weaponInfo[0].name;

    const weaponASPDL = document.createElement("span");

    weaponASPDL.id = "weaponASPDL";
    weaponASPDL.style.display = "none";
    weaponASPDL.textContent = '0';

    equipmentBoxSelectedL.innerHTML = ``;
    selectedWeaponName.appendChild(weaponASPDL);
    equipmentBoxSelectedL.appendChild(selectedWeaponImg);
    equipmentBoxSelectedL.appendChild(selectedWeaponName);

    if (["ASSASSIN", "ASSASSIN_H", "GUILLOTINE_CROSS_H", "SHADOW_CROSS", "KAGEROU", "OBORO", "SHINKIRO", "SHIRANUI"].includes(job)) {
        jobWeapons.forEach((value, index) => {
            if (value < 200 && !["양손메이스", "카타르", "수리검"].includes(weaponInfo[index].name)) {
                const weaponList = document.createElement("div");
                weaponList.className = "equipmentBox-option equipmentBoxL-option";

                if(index == 0){
                    value = 0;
                }

                const weaponImg = document.createElement("img");
                weaponImg.src = `../src/img/item/${weaponInfo[index].value}.png`;
                weaponImg.className = "weaponImg";
                weaponImg.alt = weaponInfo[index].name;

                const weaponName = document.createElement("span");
                weaponName.className = "weaponName";
                weaponName.textContent = weaponInfo[index].name;

                const weaponASPDLValue = document.createElement("span");
                weaponASPDLValue.style.display = "none";
                weaponASPDLValue.textContent = value;

                weaponName.appendChild(weaponASPDLValue);
                weaponList.appendChild(weaponImg);
                weaponList.appendChild(weaponName);
                leftHandList.appendChild(weaponList);
            }
        });
    } else {
        [0, 24].forEach((index) => {
            let value = jobWeapons[index];
            const weaponInfoItem = weaponInfo[index];

            if(index == 0){
                value = 0;
            }
            const weaponList = document.createElement("div");
            weaponList.className = "equipmentBox-option equipmentBoxL-option";

            const weaponImg = document.createElement("img");
            weaponImg.src = `../src/img/item/${weaponInfoItem.value}.png`;
            weaponImg.className = "weaponImg";
            weaponImg.alt = weaponInfoItem.name;

            const weaponName = document.createElement("span");
            weaponName.className = "weaponName";
            weaponName.textContent = weaponInfoItem.name;

            const weaponASPDLValue = document.createElement("span");
            weaponASPDLValue.style.display = "none";

            weaponASPDLValue.textContent = value;

            weaponName.appendChild(weaponASPDLValue);
            weaponList.appendChild(weaponImg);
            weaponList.appendChild(weaponName);
            leftHandList.appendChild(weaponList);

        });
    }
    addOptionListenersL();
}

document.addEventListener('click', (event) => {
    if (!equipmentBoxR.contains(event.target)) {
        rightHandList.style.display = 'none';
    }
    if (!equipmentBoxL.contains(event.target)) {
        leftHandList.style.display = 'none';
    }
});


function calstatASPD(){
    const statDEX = parseFloat(document.getElementById("statDEX").value);
    const itemDEX = parseFloat(document.getElementById("itemDEX").value);
    const statAGI = parseFloat(document.getElementById("statAGI").value);
    const itemAGI = parseFloat(document.getElementById("itemAGI").value);
    var weaponASPDR = parseFloat(document.getElementById("weaponASPDR").innerText);
    var weaponASPDL = parseFloat(document.getElementById("weaponASPDL").innerText);

    var AGI = statAGI + itemAGI;
    var DEX = statDEX + itemDEX;

    const weaponTypeRange = ["활", "권총", "라이플", "개틀링", "샷건", "그레네이드"];
    const weaponNameR = document.getElementById("weaponNameR").innerText;
    if(weaponTypeRange.includes(weaponNameR)){
        var statASPD = Math.sqrt(((AGI ** 2) / 2) + ((DEX ** 2) / 7)) / 4;
    }else{
        var statASPD = Math.sqrt(((AGI ** 2) / 2) + ((DEX ** 2) / 5)) / 4;
    }
    const weaponLeftAble = ["단검", "한손검", "도끼"];
    const weaponNameL = document.getElementById("weaponNameR").innerText;
    if(weaponLeftAble.includes(weaponNameL)){
        var baseASPD = 196 - (weaponASPDR + weaponASPDL/4);
    }else{
        var baseASPD = 196 - (weaponASPDR + weaponASPDL);
    }
    
    var totalASPD = Math.ceil(baseASPD) + statASPD;
    document.getElementById('weaponASPD').textContent = baseASPD
    document.getElementById('statASPD').textContent = Math.floor(totalASPD)
}
['statDEX', 'itemDEX', 'statAGI', 'itemAGI'].forEach(id => {
    document.getElementById(id).addEventListener("input", calstatASPD);
});
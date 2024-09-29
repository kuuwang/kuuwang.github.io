
function calstatBonus(){
    const jobLV = parseFloat(document.getElementById("jobLV").value);
    const jobName = this.dataset.db;

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

    calstatPATK();
    calstatSMATK();
    calstatRES();
    calstatMRES();
    calstatHPLUS();
    calstatCRATE();
}


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
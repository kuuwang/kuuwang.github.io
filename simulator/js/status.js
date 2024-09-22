const charClass = document.getElementById('charClass');
//const weaponR = document.getElementById('weaponR');
//const weaponL = document.getElementById('weaponL');

//let validWeapons = []; // validWeapons 변수를 밖에서 선언
//charClass.addEventListener('change', updateDropdowns);
//weaponR.addEventListener('change', updateWeaponL);
//weaponR.addEventListener('change', updateWeaponASPD);
//weaponL.addEventListener('change', updateWeaponASPD);

// statATK
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
document.getElementById("baseLV").addEventListener("input", calstatATK);
document.getElementById("statSTR").addEventListener("input", calstatATK);
document.getElementById("itemSTR").addEventListener("input", calstatATK);
document.getElementById("statDEX").addEventListener("input", calstatATK);
document.getElementById("itemDEX").addEventListener("input", calstatATK);
document.getElementById("statLUK").addEventListener("input", calstatATK);
document.getElementById("itemLUK").addEventListener("input", calstatATK);
document.getElementById("statPOW").addEventListener("input", calstatATK);
document.getElementById("itemPOW").addEventListener("input", calstatATK);
calstatATK();

// statMATK
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
document.getElementById("baseLV").addEventListener("input", calstatMATK);
document.getElementById("statINT").addEventListener("input", calstatMATK);
document.getElementById("itemINT").addEventListener("input", calstatMATK);
document.getElementById("statDEX").addEventListener("input", calstatMATK);
document.getElementById("itemDEX").addEventListener("input", calstatMATK);
document.getElementById("statLUK").addEventListener("input", calstatMATK);
document.getElementById("itemLUK").addEventListener("input", calstatMATK);
document.getElementById("statSPL").addEventListener("input", calstatMATK);
document.getElementById("itemSPL").addEventListener("input", calstatMATK);
calstatMATK();

// statDEF
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
document.getElementById("baseLV").addEventListener("input", calstatDEF);
document.getElementById("statAGI").addEventListener("input", calstatDEF);
document.getElementById("itemAGI").addEventListener("input", calstatDEF);
document.getElementById("statVIT").addEventListener("input", calstatDEF);
document.getElementById("itemVIT").addEventListener("input", calstatDEF);
calstatDEF();

// statMDEF
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
document.getElementById("baseLV").addEventListener("input", calstatMDEF);
document.getElementById("statVIT").addEventListener("input", calstatMDEF);
document.getElementById("itemVIT").addEventListener("input", calstatMDEF);
document.getElementById("statINT").addEventListener("input", calstatMDEF);
document.getElementById("itemINT").addEventListener("input", calstatMDEF);
document.getElementById("statDEX").addEventListener("input", calstatMDEF);
document.getElementById("itemDEX").addEventListener("input", calstatMDEF);
calstatMDEF();

// statHIT
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
document.getElementById("baseLV").addEventListener("input", calstatHIT);
document.getElementById("statDEX").addEventListener("input", calstatHIT);
document.getElementById("itemDEX").addEventListener("input", calstatHIT);
document.getElementById("statLUK").addEventListener("input", calstatHIT);
document.getElementById("itemLUK").addEventListener("input", calstatHIT);
document.getElementById("statCON").addEventListener("input", calstatHIT);
document.getElementById("itemCON").addEventListener("input", calstatHIT);
calstatHIT();

// statFLEE
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
document.getElementById("baseLV").addEventListener("input", calstatFLEE);
document.getElementById("statAGI").addEventListener("input", calstatFLEE);
document.getElementById("itemAGI").addEventListener("input", calstatFLEE);
document.getElementById("statLUK").addEventListener("input", calstatFLEE);
document.getElementById("itemLUK").addEventListener("input", calstatFLEE);
document.getElementById("statCON").addEventListener("input", calstatFLEE);
document.getElementById("itemCON").addEventListener("input", calstatFLEE);
calstatFLEE();

// statPERFECTDODGE
function calstatPERFECTDODGE(){
    const statLUK = parseFloat(document.getElementById("statLUK").value);
    const itemLUK = parseFloat(document.getElementById("itemLUK").value);
    var LUK = statLUK + itemLUK;

    var statPERFECTDODGE = 1 + Math.floor(LUK / 10)
    document.getElementById('statPERFECTDODGE').textContent = Math.floor(statPERFECTDODGE)
}
document.getElementById("statLUK").addEventListener("input", calstatPERFECTDODGE);
document.getElementById("itemLUK").addEventListener("input", calstatPERFECTDODGE);
calstatPERFECTDODGE();

// statCRIT
function calstatCRIT(){
    const statLUK = parseFloat(document.getElementById("statLUK").value);
    const itemLUK = parseFloat(document.getElementById("itemLUK").value);
    var LUK = statLUK + itemLUK;

    var statCRIT = 1 + Math.floor(LUK * 0.3)
    document.getElementById('statCRIT').textContent = Math.floor(statCRIT)
}
document.getElementById("statLUK").addEventListener("input", calstatCRIT);
document.getElementById("itemLUK").addEventListener("input", calstatCRIT);
calstatCRIT();

// statHEAL
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
document.getElementById("baseLV").addEventListener("input", calstatHEAL);
document.getElementById("statINT").addEventListener("input", calstatHEAL);
document.getElementById("itemINT").addEventListener("input", calstatHEAL);
document.getElementById("statDEX").addEventListener("input", calstatHEAL);
document.getElementById("itemDEX").addEventListener("input", calstatHEAL);
document.getElementById("statLUK").addEventListener("input", calstatHEAL);
document.getElementById("itemLUK").addEventListener("input", calstatHEAL);
document.getElementById("statSPL").addEventListener("input", calstatHEAL);
document.getElementById("itemSPL").addEventListener("input", calstatHEAL);
calstatHEAL();

// statCasting
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
document.getElementById("statINT").addEventListener("input", calstatCasting);
document.getElementById("itemINT").addEventListener("input", calstatCasting);
document.getElementById("statDEX").addEventListener("input", calstatCasting);
document.getElementById("itemDEX").addEventListener("input", calstatCasting);
calstatCasting();

//statpoint
function calstatpoint(){
    const baseLV = parseFloat(document.getElementById("baseLV").value);
    const statSTR = parseFloat(document.getElementById("statSTR").value);
    const statAGI = parseFloat(document.getElementById("statAGI").value);
    const statVIT = parseFloat(document.getElementById("statVIT").value);
    const statINT = parseFloat(document.getElementById("statINT").value);
    const statDEX = parseFloat(document.getElementById("statDEX").value);
    const statLUK = parseFloat(document.getElementById("statLUK").value);

    const stat = (baseLV > 200) ? statPoint[199] : statPoint[baseLV - 1]
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
document.getElementById("baseLV").addEventListener("input", calstatpoint);
document.getElementById("statSTR").addEventListener("input", calstatpoint);
document.getElementById("statAGI").addEventListener("input", calstatpoint);
document.getElementById("statVIT").addEventListener("input", calstatpoint);
document.getElementById("statINT").addEventListener("input", calstatpoint);
document.getElementById("statDEX").addEventListener("input", calstatpoint);
document.getElementById("statLUK").addEventListener("input", calstatpoint);
calstatpoint();


//==============4차===================

// statPATK
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
document.getElementById("statPOW").addEventListener("input", calstatPATK);
document.getElementById("itemPOW").addEventListener("input", calstatPATK);
document.getElementById("statCON").addEventListener("input", calstatPATK);
document.getElementById("itemCON").addEventListener("input", calstatPATK);
calstatPATK();

// statSMATK
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
document.getElementById("statSPL").addEventListener("input", calstatSMATK);
document.getElementById("itemSPL").addEventListener("input", calstatSMATK);
document.getElementById("statCON").addEventListener("input", calstatSMATK);
document.getElementById("itemCON").addEventListener("input", calstatSMATK);
calstatSMATK();

// statRES
function calstatRES(){
    const statSTA = parseFloat(document.getElementById("statSTA").value);
    const itemSTA = parseFloat(document.getElementById("itemSTA").value);
    var STA = statSTA + itemSTA;

    var statRES = STA + (Math.floor(STA/3) * 5);
    document.getElementById('statRES').textContent = statRES;

}
document.getElementById("statSTA").addEventListener("input", calstatRES);
document.getElementById("itemSTA").addEventListener("input", calstatRES);
calstatRES();

// statMRES
function calstatMRES(){
    const statWIS = parseFloat(document.getElementById("statWIS").value);
    const itemWIS = parseFloat(document.getElementById("itemWIS").value);
    var WIS = statWIS + itemWIS;

    var statMRES = WIS + (Math.floor(WIS/3) * 5);
    document.getElementById('statMRES').textContent = statMRES;

}
document.getElementById("statWIS").addEventListener("input", calstatMRES);
document.getElementById("itemWIS").addEventListener("input", calstatMRES);
calstatMRES();

// statHPLUS
function calstatHPLUS(){
    const statCRT = parseFloat(document.getElementById("statCRT").value);
    const itemCRT = parseFloat(document.getElementById("itemCRT").value);
    var CRT = statCRT + itemCRT;

    var statHPLUS = CRT;
    document.getElementById('statHPLUS').textContent = statHPLUS;

}
document.getElementById("statCRT").addEventListener("input", calstatHPLUS);
document.getElementById("itemCRT").addEventListener("input", calstatHPLUS);
calstatHPLUS();

// statCRATE
function calstatCRATE(){
    const statCRT = parseFloat(document.getElementById("statCRT").value);
    const itemCRT = parseFloat(document.getElementById("itemCRT").value);
    var CRT = statCRT + itemCRT;

    var statCRATE = Math.floor(CRT/3);
    document.getElementById('statCRATE').textContent = statCRATE;

}
document.getElementById("statCRT").addEventListener("input", calstatCRATE);
document.getElementById("itemCRT").addEventListener("input", calstatCRATE);
calstatCRATE();

//tstatpoint
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
document.getElementById("baseLV").addEventListener("input", caltstatpoint);
document.getElementById("statPOW").addEventListener("input", caltstatpoint);
document.getElementById("statSTA").addEventListener("input", caltstatpoint);
document.getElementById("statWIS").addEventListener("input", caltstatpoint);
document.getElementById("statSPL").addEventListener("input", caltstatpoint);
document.getElementById("statCON").addEventListener("input", caltstatpoint);
document.getElementById("statCRT").addEventListener("input", caltstatpoint);
caltstatpoint();


const SKID =  
{
    NV_BASIC	: 1,
    NV_FIRSTAID	: 142,
	NV_TRICKDEAD	: 143,
}

const SKILL_TREEVIEW_FOR_JOB = 
{
	[JOBID.JT_NOVICE]: 
	{
		[0]: SKID.NV_BASIC,
		[7]: SKID.NV_FIRSTAID,
		[14]: SKID.NV_TRICKDEAD,
	}, 
}

const SKILL_INFO_LIST =
{
	[SKID.NV_BASIC] :
	{
		SkillDB : "NV_BASIC",
		SkillName : "기본기능",
		MaxLv : 9,
		SpAmount : [ 0, 0, 0, 0, 0, 0, 0, 0, 0, ],
		bSeperateLv : false,
		AttackRange : [ 1, 1, 1, 1, 1, 1, 1, 1, 1, ],
	},
	[SKID.NV_FIRSTAID] :
	{
		SkillDB : "NV_FIRSTAID",
		SkillName : "응급 치료",
		MaxLv : 1,
		Type : "Quest",
		SpAmount : [ 3, ],
		bSeperateLv : false,
		AttackRange : [ 1, ],
	},
	[SKID.NV_TRICKDEAD] :
	{
		SkillDB : "NV_TRICKDEAD",
		SkillName : "죽은척하기",
		MaxLv : 1,
		Type : "Quest",
		SpAmount : [ 5, ],
		bSeperateLv : false,
		AttackRange : [ 1, ],
	},
}
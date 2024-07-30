var data = [
    {
        result: ["화살", 1750, 4],
        skill: "화살 만들기",
        materials: [
            ["젤로피", 909, 1],
        ]
    },
    {
        result: ["철", 998],
        skill: "철 제조",
        materials: [
            ["휴대용 용광로", 612, 1],
            ["철광석", 1002, 1],
        ]
    },
    {
        result: ["강철", 999],
        skill: "강철 제조",
        materials: [
            ["휴대용 용광로", 612, 1],
            ["철", 998, 5],
            ["석탄", 1003, 5],
        ]
    },
    {
        result: ["프레임 하트", 994],
        skill: "속성석 제조",
        materials: [
            ["휴대용 용광로", 612, 1],
            ["레드 블러드", 990, 10],
        ]
    },
    {
        result: ["미스틱 프로즌", 995],
        skill: "속성석 제조",
        materials: [
            ["휴대용 용광로", 612, 1],
            ["크리스탈 블루", 991, 10],
        ]
    },
    {
        result: ["러프 윈드", 996],
        skill: "속성석 제조",
        materials: [
            ["휴대용 용광로", 612, 1],
            ["윈드 오브 버듀어", 992, 10],
        ]
    },
    {
        result: ["그레이트 네이쳐", 997],
        skill: "속성석 제조",
        materials: [
            ["휴대용 용광로", 612, 1],
            ["그린 라이브", 993, 10],
        ]
    },
    {
        result: ["별의 조각", 1000],
        skill: "속성석 제조",
        materials: [
            ["휴대용 용광로", 612, 1],
            ["별의 가루", 1001, 10],
        ]
    },
    {
        result: ["나이프", 1203],
        skill: "단검 제작",
        materials: [
            ["강철의 망치", 613, 1],
            ["엠펠리움 모루", 989],
            ["젤로피", 909, 10],
            ["철", 998, 1],
        ]
    },
    {
        result: ["커터", 1206],
        skill: "단검 제작",
        materials: [
            ["강철의 망치", 613, 1],
            ["엠펠리움 모루", 989],
            ["철", 998, 25],
        ]
    },
    {
        result: ["망고슈", 1209],
        skill: "단검 제작",
        materials: [
            ["강철의 망치", 613, 1],
            ["엠펠리움 모루", 989],
            ["철", 998, 50],
        ]
    },
    {
        result: ["더크", 1212],
        skill: "단검 제작",
        materials: [
            ["황금의 망치", 614, 1],
            ["엠펠리움 모루", 989],
            ["강철", 999, 17],
        ]
    },
    {
        result: ["대거", 1215],
        skill: "단검 제작",
        materials: [
            ["황금의 망치", 614, 1],
            ["엠펠리움 모루", 989],
            ["강철", 999, 30],
        ]
    },
    {
        result: ["스틸레토", 1218],
        skill: "단검 제작",
        materials: [
            ["황금의 망치", 614, 1],
            ["엠펠리움 모루", 989],
            ["강철", 999, 40],
        ]
    },
    {
        result: ["그라디우스", 1221],
        skill: "단검 제작",
        materials: [
            ["오리데오콘 망치", 615, 1],
            ["엠펠리움 모루", 989],
            ["사파이어", 726, 1],
            ["오리데오콘", 984, 4],
            ["강철", 999, 40],
        ]
    },
    {
        result: ["다마스커스", 1222],
        skill: "단검 제작",
        materials: [
            ["오리데오콘 망치", 615, 1],
            ["엠펠리움 모루", 989],
            ["질콘", 729, 1],
            ["오리데오콘", 984, 4],
            ["강철", 999, 60],
        ]
    },
    {
        result: ["소드", 1103],
        skill: "검 제작",
        materials: [
            ["강철의 망치", 613, 1],
            ["엠펠리움 모루", 989],
            ["철", 998, 2],
        ]
    },
    {
        result: ["폴쳔", 1106],
        skill: "검 제작",
        materials: [
            ["강철의 망치", 613, 1],
            ["엠펠리움 모루", 989],
            ["철", 998, 30],
        ]
    },
    {
        result: ["블레이드", 1109],
        skill: "검 제작",
        materials: [
            ["강철의 망치", 613, 1],
            ["엠펠리움 모루", 989],
            ["박쥐의 이빨", 913, 25],
            ["철", 998, 45],
        ]
    },
    {
        result: ["레이피어", 1112],
        skill: "검 제작",
        materials: [
            ["황금의 망치", 614, 1],
            ["엠펠리움 모루", 989],
            ["강철", 999, 20],
        ]
    },
    {
        result: ["시미터", 1113],
        skill: "검 제작",
        materials: [
            ["황금의 망치", 614, 1],
            ["엠펠리움 모루", 989],
            ["강철", 999, 35],
        ]
    },
    {
        result: ["환두태도", 1122],
        skill: "검 제작",
        materials: [
            ["황금의 망치", 614, 1],
            ["엠펠리움 모루", 989],
            ["늑대의 발톱", 920, 50],
            ["강철", 999, 40],
        ]
    },
    {
        result: ["츠루기", 1121],
        skill: "검 제작",
        materials: [
            ["오리데오콘 망치", 615, 1],
            ["엠펠리움 모루", 989],
            ["가넷", 718, 1],
            ["오리데오콘", 984, 8],
            ["강철", 999, 15],
        ]
    },
    {
        result: ["해동검", 1123],
        skill: "검 제작",
        materials: [
            ["오리데오콘 망치", 615, 1],
            ["엠펠리움 모루", 989],
            ["토파즈", 728, 1],
            ["오리데오콘", 984, 8],
            ["강철", 999, 10],
        ]
    },
    {
        result: ["세이버", 1126],
        skill: "검 제작",
        materials: [
            ["오리데오콘 망치", 615, 1],
            ["엠펠리움 모루", 989],
            ["오팔", 727, 1],
            ["오리데오콘", 984, 8],
            ["강철", 999, 5],
        ]
    },
    {
        result: ["프람베르그", 1129],
        skill: "검 제작",
        materials: [
            ["오리데오콘 망치", 615, 1],
            ["엠펠리움 모루", 989],
            ["저주받은 루비", 724, 1],
            ["오리데오콘", 984, 16],
        ]
    },
    {
        result: ["카타나", 1118],
        skill: "양손검 제작",
        materials: [
            ["강철의 망치", 613, 1],
            ["엠펠리움 모루", 989],
            ["죽은자의 이빨", 958, 15],
            ["철", 998, 35],
        ]
    },
    {
        result: ["슬레이어", 1153],
        skill: "양손검 제작",
        materials: [
            ["황금의 망치", 614, 1],
            ["엠펠리움 모루", 989],
            ["죽은자의 손톱", 957, 20],
            ["강철", 999, 25],
        ]
    },
    {
        result: ["바스타드소드", 1156],
        skill: "양손검 제작",
        materials: [
            ["황금의 망치", 614, 1],
            ["엠펠리움 모루", 989],
            ["강철", 999, 45],
        ]
    },
    {
        result: ["투핸드소드", 1159],
        skill: "양손검 제작",
        materials: [
            ["오리데오콘 망치", 615, 1],
            ["엠펠리움 모루", 989],
            ["오리데오콘", 984, 12],
            ["강철", 999, 10],
        ]
    },
    {
        result: ["브로드소드", 1160],
        skill: "양손검 제작",
        materials: [
            ["오리데오콘 망치", 615, 1],
            ["엠펠리움 모루", 989],
            ["오리데오콘", 984, 12],
            ["강철", 999, 20],
        ]
    },
    {
        result: ["크레이모어", 1163],
        skill: "양손검 제작",
        materials: [
            ["오리데오콘 망치", 615, 1],
            ["엠펠리움 모루", 989],
            ["손상된 다이아몬드", 733, 1],
            ["오리데오콘", 984, 16],
            ["강철", 999, 20],
        ]
    },
    {
        result: ["액스", 1301],
        skill: "도끼 제작",
        materials: [
            ["강철의 망치", 613, 1],
            ["엠펠리움 모루", 989],
            ["철", 998, 10],
        ]
    },
    {
        result: ["배틀 액스", 1351],
        skill: "도끼 제작",
        materials: [
            ["강철의 망치", 613, 1],
            ["엠펠리움 모루", 989],
            ["철", 998, 110],
        ]
    },
    {
        result: ["해머", 1354],
        skill: "도끼 제작",
        materials: [
            ["황금의 망치", 614, 1],
            ["엠펠리움 모루", 989],
            ["강철", 999, 30],
        ]
    },
    {
        result: ["버스터", 1357],
        skill: "도끼 제작",
        materials: [
            ["오리데오콘 망치", 615, 1],
            ["엠펠리움 모루", 989],
            ["오크의 송곳니", 922, 30],
            ["오리데오콘", 984, 4],
            ["강철", 999, 20],
        ]
    },
    {
        result: ["투핸드액스", 1360],
        skill: "도끼 제작",
        materials: [
            ["오리데오콘 망치", 615, 1],
            ["엠펠리움 모루", 989],
            ["아메디스트", 719, 1],
            ["오리데오콘", 984, 8],
            ["강철", 999, 10],
        ]
    },
    {
        result: ["바그낙", 1801],
        skill: "너클 제작",
        materials: [
            ["강철의 망치", 613, 1],
            ["엠펠리움 모루", 989],
            ["진주", 722, 1],
            ["철", 998, 160],
        ]
    },
    {
        result: ["너클더스터", 1803],
        skill: "너클 제작",
        materials: [
            ["황금의 망치", 614, 1],
            ["엠펠리움 모루", 989],
            ["강철", 999, 50],
        ]
    },
    {
        result: ["호라", 1805],
        skill: "너클 제작",
        materials: [
            ["황금의 망치", 614, 1],
            ["엠펠리움 모루", 989],
            ["강철", 999, 65],
        ]
    },
    {
        result: ["피스트", 1807],
        skill: "너클 제작",
        materials: [
            ["오리데오콘 망치", 615, 1],
            ["엠펠리움 모루", 989],
            ["루비", 723, 10],
            ["오리데오콘", 984, 4],
        ]
    },
    {
        result: ["크로", 1809],
        skill: "너클 제작",
        materials: [
            ["오리데오콘 망치", 615, 1],
            ["엠펠리움 모루", 989],
            ["토파즈", 728, 10],
            ["오리데오콘", 984, 8],
        ]
    },
    {
        result: ["핑거", 1811],
        skill: "너클 제작",
        materials: [
            ["오리데오콘 망치", 615, 1],
            ["엠펠리움 모루", 989],
            ["오팔", 727, 10],
            ["오리데오콘", 984, 4],
        ]
    },
    {
        result: ["클럽", 1501],
        skill: "메이스 제작",
        materials: [
            ["강철의 망치", 613, 1],
            ["엠펠리움 모루", 989],
            ["철", 998, 3],
        ]
    },
    {
        result: ["메이스", 1504],
        skill: "메이스 제작",
        materials: [
            ["강철의 망치", 613, 1],
            ["엠펠리움 모루", 989],
            ["철", 998, 30],
        ]
    },
    {
        result: ["스매셔", 1507],
        skill: "메이스 제작",
        materials: [
            ["황금의 망치", 614, 1],
            ["엠펠리움 모루", 989],
            ["강철", 999, 20],
        ]
    },
    {
        result: ["플레일", 1510],
        skill: "메이스 제작",
        materials: [
            ["황금의 망치", 614, 1],
            ["엠펠리움 모루", 989],
            ["강철", 999, 33],
        ]
    },
    {
        result: ["체인", 1519],
        skill: "메이스 제작",
        materials: [
            ["황금의 망치", 614, 1],
            ["엠펠리움 모루", 989],
            ["강철", 999, 45],
        ]
    },
    {
        result: ["모닝스타", 1513],
        skill: "메이스 제작",
        materials: [
            ["오리데오콘 망치", 615, 1],
            ["엠펠리움 모루", 989],
            ["다이아몬드 1캐럿", 730, 1],
            ["강철", 999, 85],
        ]
    },
    {
        result: ["소드 메이스", 1516],
        skill: "메이스 제작",
        materials: [
            ["오리데오콘 망치", 615, 1],
            ["엠펠리움 모루", 989],
            ["날카로운 비늘", 963, 20],
            ["강철", 999, 100],
        ]
    },
    {
        result: ["스터너", 1522],
        skill: "메이스 제작",
        materials: [
            ["오리데오콘 망치", 615, 1],
            ["엠펠리움 모루", 989],
            ["오크용자의 증표", 968, 1],
            ["강철", 999, 120],
        ]
    },
    {
        result: ["쟈벨린", 1401],
        skill: "창 제작",
        materials: [
            ["강철의 망치", 613, 1],
            ["엠펠리움 모루", 989],
            ["철", 998, 3],
        ]
    },
    {
        result: ["스피어", 1404],
        skill: "창 제작",
        materials: [
            ["강철의 망치", 613, 1],
            ["엠펠리움 모루", 989],
            ["철", 998, 35],
        ]
    },
    {
        result: ["파이크", 1407],
        skill: "창 제작",
        materials: [
            ["강철의 망치", 613, 1],
            ["엠펠리움 모루", 989],
            ["철", 998, 40],
        ]
    },
    {
        result: ["귀삼", 1451],
        skill: "창 제작",
        materials: [
            ["황금의 망치", 614, 1],
            ["엠펠리움 모루", 989],
            ["강철", 999, 25],
        ]
    },
    {
        result: ["글레이브", 1454],
        skill: "창 제작",
        materials: [
            ["황금의 망치", 614, 1],
            ["엠펠리움 모루", 989],
            ["강철", 999, 40],
        ]
    },
    {
        result: ["파티잔", 1457],
        skill: "창 제작",
        materials: [
            ["황금의 망치", 614, 1],
            ["엠펠리움 모루", 989],
            ["강철", 999, 55],
        ]
    },
    {
        result: ["랜스", 1410],
        skill: "창 제작",
        materials: [
            ["오리데오콘 망치", 615, 1],
            ["엠펠리움 모루", 989],
            ["루비", 723, 3],
            ["악마의 뿔", 923, 2],
            ["오리데오콘", 984, 12],
        ]
    },
    {
        result: ["트라이던트", 1460],
        skill: "창 제작",
        materials: [
            ["오리데오콘 망치", 615, 1],
            ["엠펠리움 모루", 989],
            ["아쿠아마린", 720, 5],
            ["오리데오콘", 984, 8],
            ["강철", 999, 10],
        ]
    },
    {
        result: ["핼버드", 1463],
        skill: "창 제작",
        materials: [
            ["오리데오콘 망치", 615, 1],
            ["엠펠리움 모루", 989],
            ["오리데오콘", 984, 12],
            ["강철", 999, 10],
        ]
    },
    {
        result: ["빨간포션", 501],
        skill: "파머시",
        materials: [
            ["일반 포션 제조 메뉴얼", 7144],
            ["약사발", 7134, 1],
            ["빨간허브", 507, 1],
            ["빈 포션병", 1093, 1],
        ]
    },
    {
        result: ["노란포션", 503],
        skill: "파머시",
        materials: [
            ["일반 포션 제조 메뉴얼", 7144],
            ["약사발", 7134, 1],
            ["노란허브", 509, 1],
            ["빈 포션병", 1093, 1],
        ]
    },
    {
        result: ["하얀포션", 504],
        skill: "파머시",
        materials: [
            ["일반 포션 제조 메뉴얼", 7144],
            ["약사발", 7134, 1],
            ["하얀허브", 508, 1],
            ["빈 포션병", 1093, 1],
        ]
    },
    {
        result: ["파란포션", 505],
        skill: "파머시",
        materials: [
            ["일반 포션 제조 메뉴얼", 7144],
            ["약사발", 7134, 1],
            ["파란허브", 510, 1],
            ["빈 포션병", 1093, 1],
            ["셀", 911, 1],
        ]
    },
    {
        result: ["안티 페인멘트", 605],
        skill: "파머시",
        materials: [
            ["일반 포션 제조 메뉴얼", 7144],
            ["약사발", 7134, 1],
            ["알코올", 970, 1],
            ["빈병", 713, 1],
            ["멘트", 708, 1],
        ]
    },
    {
        result: ["알로에베라", 606],
        skill: "파머시",
        materials: [
            ["일반 포션 제조 메뉴얼", 7144],
            ["약사발", 7134, 1],
            ["알로에", 704, 1],
            ["빈병", 713, 1],
            ["꿀", 518, 1],
        ]
    },
    {
        result: ["엠브리오", 7142],
        skill: "파머시",
        materials: [
            ["일반 포션 제조 메뉴얼", 7144],
            ["약사발", 7134, 1],
            ["이그드라실의 이슬", 7141, 1],
            ["생명의 씨앗", 7140, 1],
            ["유리관", 7143, 1],
        ]
    },
    {
        result: ["호문클루스 영양제", 100371],
        skill: "파머시",
        materials: [
            ["일반 포션 제조 메뉴얼", 7144],
            ["약사발", 7134, 1],
            ["생명의 씨앗", 7140, 1],
            ["노란허브", 509, 1],
            ["빈병", 713, 1],
        ]
    },
    {
        result: ["알코올", 970],
        skill: "파머시",
        materials: [
            ["알콜 제조 메뉴얼", 7127],
            ["약사발", 7134, 1],
            ["식물의 줄기", 905, 5],
            ["독버섯포자", 7033, 5],
            ["빈시험관", 1092, 1],
            ["빈병", 713, 1],
        ]
    },
    {
        result: ["화염병", 7135],
        skill: "파머시",
        materials: [
            ["화염병 제조 메뉴얼", 7128],
            ["약사발", 7134, 1],
            ["알코올", 970, 1],
            ["투명한 천조각", 1059, 1],
            ["빈병", 713, 1],
        ]
    },
    {
        result: ["염산병", 7136],
        skill: "파머시",
        materials: [
            ["염산병 제조 메뉴얼", 7129],
            ["약사발", 7134, 1],
            ["멈추지 않는 심장", 929, 1],
            ["빈병", 713, 1],
        ]
    },
    {
        result: ["식인식물병", 7137],
        skill: "파머시",
        materials: [
            ["식물병 제조 메뉴얼", 7130],
            ["약사발", 7134, 1],
            ["식인수의 꽃", 1032, 2],
            ["빈병", 713, 1],
        ]
    },
    {
        result: ["기뢰병", 7138],
        skill: "파머시",
        materials: [
            ["기뢰병 제조 메뉴얼", 7131],
            ["약사발", 7134, 1],
            ["뇌관", 1051, 1],
            ["힘줄", 1050, 1],
            ["빈병", 713, 1],
        ]
    },
    {
        result: ["코팅약", 7139],
        skill: "파머시",
        materials: [
            ["코팅약 제조 메뉴얼", 7132],
            ["약사발", 7134, 1],
            ["알코올", 970, 1],
            ["제노크의 이빨", 1044, 1],
            ["인어의 심장", 950, 1],
            ["빈병", 713, 1],
        ]
    },
    {
        result: ["레지스트 파이어포션", 12118],
        skill: "파머시",
        materials: [
            ["속성 포션 제조 메뉴얼", 7434],
            ["약사발", 7134, 1],
            ["도마뱀의 목덜미", 1012, 2],
            ["레드 젬스톤", 716, 1],
            ["빈 포션병", 1093, 1],
        ]
    },
    {
        result: ["레지스트 콜드포션", 12119],
        skill: "파머시",
        materials: [
            ["속성 포션 제조 메뉴얼", 7434],
            ["약사발", 7134, 1],
            ["인어의 심장", 950, 3],
            ["블루 젬스톤", 717, 1],
            ["빈 포션병", 1093, 1],
        ]
    },
    {
        result: ["레지스트 썬더포션", 12121],
        skill: "파머시",
        materials: [
            ["속성 포션 제조 메뉴얼", 7434],
            ["약사발", 7134, 1],
            ["나방의 날개가루", 1057, 3],
            ["블루 젬스톤", 717, 1],
            ["빈 포션병", 1093, 1],
        ]
    },
    {
        result: ["레지스트 어스포션", 12120],
        skill: "파머시",
        materials: [
            ["속성 포션 제조 메뉴얼", 7434],
            ["약사발", 7134, 1],
            ["라지 젤로피", 7126, 2],
            ["옐로우 젬스톤", 715, 1],
            ["빈 포션병", 1093, 1],
        ]
    },
    {
        result: ["레드 슬림 포션", 545],
        skill: "파머시",
        materials: [
            ["슬림포션 제조 메뉴얼", 7133],
            ["약사발", 7134, 1],
            ["빨간포션", 501, 1],
            ["선인장의 뾰족한 침", 952, 1],
            ["빈 시험관", 1092, 1],
        ]
    },
    {
        result: ["옐로우 슬림 포션", 546],
        skill: "파머시",
        materials: [
            ["슬림포션 제조 메뉴얼", 7133],
            ["약사발", 7134, 1],
            ["노란포션", 503, 1],
            ["두더지의 수염", 1017, 1],
            ["빈 시험관", 1092, 1],
        ]
    },
    {
        result: ["화이트 슬림 포션", 547],
        skill: "파머시",
        materials: [
            ["슬림포션 제조 메뉴얼", 7133],
            ["약사발", 7134, 1],
            ["하얀포션", 504, 1],
            ["마녀의 별모래", 1061, 1],
            ["빈 시험관", 1092, 1],
        ]
    },
    {
        result: ["독약병", 678],
        skill: "치명적인 독 생산",
        materials: [
            ["독 송곳니", 937, 1],
            ["선인장의 뾰족한 침", 952, 1],
            ["벌의 뒷침", 939, 1],
            ["독버섯 포자", 7033, 1],
            ["카르보딜", 972, 1],
            ["버서크 포션", 657, 1],
            ["빈병", 713, 1],
            
        ]
    },
    {
        result: ["튜리서드 룬 스톤", 12731],
        skill: "룬 마스터리",
        materials: [
            ["신비한 룬 원석", 12736, 1],
            ["엘더의 가지", 7939, 1],
            ["코볼트의 털", 1034, 1],
            ["사막 늑대의 발톱", 7030, 1],
        ]
    },
    {
        result: ["아이샤 룬 스톤", 12728],
        skill: "룬 마스터리",
        materials: [
            ["신비한 룬 원석", 12736, 1],
            ["엘더의 가지", 7939, 1],
            ["불타는 심장", 7097, 1],
        ]
    },
    {
        result: ["페르쓰 룬 스톤", 12732],
        skill: "룬 마스터리",
        materials: [
            ["신비한 룬 원석", 12736, 1],
            ["엘더의 가지", 7939, 1],
            ["빛의 알갱이", 7938, 1],
            ["얽힌 사슬", 7221, 1],
            ["드래곤의 이빨", 1035, 1],
        ]
    },
    {
        result: ["하갈라즈 룬 스톤", 12733],
        skill: "룬 마스터리",
        materials: [
            ["신비한 룬 원석", 12736, 1],
            ["엘더의 가지", 7939, 1],
            ["둥근 껍질", 1096, 1],
            ["드래곤의 껍질", 7123, 1],
        ]
    },
    {
        result: ["에이시르 룬 스톤", 12729],
        skill: "룬 마스터리",
        materials: [
            ["신비한 룬 원석", 12736, 1],
            ["엘더의 가지", 7939, 1],
            ["빛의 알갱이", 7938, 1],
            ["오우거의 이빨", 7002, 1],
        ]
    },
    {
        result: ["우르즈 룬 스톤", 12730],
        skill: "룬 마스터리",
        materials: [
            ["신비한 룬 원석", 12736, 1],
            ["엘더의 가지", 7939, 1],
            ["뱀모양의 머리카락", 1048, 1],
            ["꿀", 518, 1],
        ]
    },
    {
        result: ["라이도 룬 스톤", 12726],
        skill: "룬 마스터리",
        materials: [
            ["신비한 룬 원석", 12736, 1],
            ["엘더의 가지", 7939, 1],
            ["빛의 알갱이", 7938, 1],
            ["레드 젬스톤", 716, 1],
        ]
    },
    {
        result: ["노씨즈 룬 스톤", 12725],
        skill: "룬 마스터리",
        materials: [
            ["신비한 룬 원석", 12736, 1],
            ["엘더의 가지", 7939, 1],
            ["빛의 알갱이", 7938, 1],
            ["깨진 갑옷조각", 7069, 1],
            ["낡은 마법진", 7099, 1],
        ]
    },
    {
        result: ["베르카나 룬 스톤", 12727],
        skill: "룬 마스터리",
        materials: [
            ["신비한 룬 원석", 12736, 1],
            ["엘더의 가지", 7939, 1],
            ["듀라한의 갑옷조각", 7210, 1],
        ]
    },
    {
        result: ["럭스아니마 룬 스톤", 22540],
        skill: "룬 마스터리",
        materials: [
            ["신비한 룬 원석", 12736, 1],
            ["엘더의 가지", 7939, 1],
            ["황금", 1093, 3],
            ["빛의 알갱이", 969, 3],
        ]
    },
    {
        result: ["안실라", 12333],
        skill: "안실라",
        materials: [
            ["블루 젬스톤", 717, 1],
            ["SP 10%", 4800],
        ]
    },
    {
        result: ["패럴라이즈", 12717],
        skill: "새로운 독 제조",
        materials: [
            ["독제조키트", 7931, 1],
            ["약사발", 7134, 1],
            ["독두꺼비의 껍질", 7155, 20],
            ["독초 아모에나", 7937, 1],
        ]
    },
    {
        result: ["파이렉시아", 12722],
        skill: "새로운 독 제조",
        materials: [
            ["독제조키트", 7931, 1],
            ["약사발", 7134, 1],
            ["아놀리안의 피부", 7003, 20],
            ["독초 란타나", 7933, 1],
        ]
    },
    {
        result: ["데스 허트", 12720],
        skill: "새로운 독 제조",
        materials: [
            ["독제조키트", 7931, 1],
            ["약사발", 7134, 1],
            ["죽은자의 손톱", 957, 25],
            ["독초 세라툼", 7935, 1],
        ]
    },
    {
        result: ["리치 엔드", 12718],
        skill: "새로운 독 제조",
        materials: [
            ["독제조키트", 7931, 1],
            ["약사발", 7134, 1],
            ["독초 스코폴리아", 7936, 1],
            ["독초 네리움", 7932, 1],
        ]
    },
    {
        result: ["해독제", 6128],
        skill: "새로운 독 제조",
        materials: [
            ["독제조키트", 7931, 1],
            ["약사발", 7134, 1],
            ["초록허브", 511, 2],
            ["파란허브", 510, 1],
            ["하얀허브", 509, 1],
        ]
    },
    {
        result: ["베놈 블리드", 12724],
        skill: "새로운 독 제조",
        materials: [
            ["독제조키트", 7931, 1],
            ["약사발", 7134, 1],
            ["끈적끈적한 독", 7565, 10],
            ["이지도르", 709, 1],
        ]
    },
    {
        result: ["매직 머쉬룸", 12723],
        skill: "새로운 독 제조",
        materials: [
            ["독제조키트", 7931, 1],
            ["약사발", 7134, 1],
            ["독버섯 포자", 7033, 10],
            ["독초 마쿨라타", 7934, 1],
        ]
    },
    {
        result: ["톡신", 12721],
        skill: "새로운 독 제조",
        materials: [
            ["독제조키트", 7931, 1],
            ["약사발", 7134, 1],
            ["끈적끈적한 독", 7565, 10],
            ["독초 네리움", 7934, 1],
        ]
    },
    {
        result: ["오블리비언 커즈", 12719],
        skill: "새로운 독 제조",
        materials: [
            ["독제조키트", 7931, 1],
            ["약사발", 7134, 1],
            ["인어의 심장", 950, 10],
            ["이지도르", 709, 1],
        ]
    },
    {
        result: ["프레임 하트", 994],
        skill: "4 원소 분석",
        materials: [
            ["레드 블러드", 990, 10],
        ]
    },
    {
        result: ["미스틱 프로즌", 995],
        skill: "4 원소 분석",
        materials: [
            ["크리스탈 블루", 991, 10],
        ]
    },
    {
        result: ["러프 윈드", 996],
        skill: "4 원소 분석",
        materials: [
            ["윈드 오브 버듀어", 992, 10],
        ]
    },
    {
        result: ["그레이트 네이쳐", 997],
        skill: "4 원소 분석",
        materials: [
            ["그린 라이브", 993, 10],
        ]
    },
    {
        result: ["레드 블러드", 990],
        skill: "4 원소 분석",
        materials: [
            ["프레임 하트", 994, 1],
        ]
    },
    {
        result: ["크리스탈 블루", 991],
        skill: "4 원소 분석",
        materials: [
            ["미스틱 프로즌", 995, 1],
        ]
    },
    {
        result: ["윈드 오브 버듀어", 992],
        skill: "4 원소 분석",
        materials: [
            ["러프 윈드", 996, 1],
        ]
    },
    {
        result: ["그린 라이브", 993],
        skill: "4 원소 분석",
        materials: [
            ["그레이트 네이쳐", 997, 1],
        ]
    },
    {
        result: ["HP 증가 포션(소)", 12422],
        skill: "스페셜 파머시",
        materials: [
            ["폭발적인 체력 증진 연구서", 11023],
            ["빈병", 713, 10],
            ["괴물의 먹이", 528, 5],
            ["하얀허브", 509, 10],
            ["매운맛 소스", 7455, 1],
        ]
    },
    {
        result: ["HP 증가 포션(중)", 12423],
        skill: "스페셜 파머시",
        materials: [
            ["폭발적인 체력 증진 연구서", 11023],
            ["빈병", 713, 10],
            ["하얀허브", 509, 10],
            ["노란허브", 508, 10],
            ["매운맛 소스", 7455, 1],
        ]
    },
    {
        result: ["HP 증가 포션(대)", 12424],
        skill: "스페셜 파머시",
        materials: [
            ["폭발적인 체력 증진 연구서", 11023],
            ["빈병", 713, 10],
            ["하얀허브", 509, 10],
            ["마스테라의 열매", 522, 3],
            ["성수", 523, 1],
            ["매운맛 소스", 7455, 1],
        ]
    },
    {
        result: ["SP 증가 포션(소)", 12425],
        skill: "스페셜 파머시",
        materials: [
            ["활력 드링크 제조법", 11024],
            ["빈병", 713, 10],
            ["레몬", 568, 10],
            ["포도", 514, 10],
            ["단맛 소스", 7453, 1],
        ]
    },
    {
        result: ["SP 증가 포션(중)", 12426],
        skill: "스페셜 파머시",
        materials: [
            ["활력 드링크 제조법", 11024],
            ["빈병", 713, 10],
            ["꿀", 518, 10],
            ["파란허브", 510, 10],
            ["단맛 소스", 7453, 1],
        ]
    },
    {
        result: ["SP 증가 포션(대)", 12427],
        skill: "스페셜 파머시",
        materials: [
            ["활력 드링크 제조법", 11024],
            ["빈병", 713, 10],
            ["로얄제리", 526, 10],
            ["파란허브", 510, 15],
            ["단맛 소스", 7453, 1],
        ]
    },
    {
        result: ["가시나무 씨앗", 6210],
        skill: "스페셜 파머시",
        materials: [
            ["식물 유전자 재배법", 6284],
            ["가시열매", 576, 10],
        ]
    },
    {
        result: ["흡혈 식물 씨앗", 6211],
        skill: "스페셜 파머시",
        materials: [
            ["식물 유전자 재배법", 6284],
            ["식인수의 뿌리", 1033, 10],
        ]
    },
    {
        result: ["폭발 버섯 포자", 6212],
        skill: "스페셜 파머시",
        materials: [
            ["식물 유전자 재배법", 6284],
            ["버섯 포자", 921, 10],
            ["독버섯 포자", 7033, 5],
            ["건파우더", 6244, 2],
        ]
    },
    {
        result: ["농축 화이트 포션Z", 12428],
        skill: "스페셜 파머시",
        materials: [
            ["상급 포션 제조 매뉴얼", 6285],
            ["빈시험관", 1092, 10],
            ["하얀포션", 504, 20],
            ["하얀허브", 509, 10],
            ["알코올", 970, 1],
        ]
    },
    {
        result: ["비타타500", 12436],
        skill: "스페셜 파머시",
        materials: [
            ["상급 포션 제조 매뉴얼", 6285],
            ["빈시험관", 1092, 10],
            ["포도", 514, 20],
            ["꿀", 518, 10],
            ["파란허브", 510, 1],
        ]
    },
    {
        result: ["농축 샐러마인즙", 12437],
        skill: "스페셜 파머시",
        materials: [
            ["상급 포션 제조 매뉴얼", 6285],
            ["빈시험관", 1092, 10],
            ["각성의 포션", 656, 5],
            ["집중의 포션", 645, 5],
            ["매운맛 소스", 7455, 5],
        ]
    },
    {
        result: ["큐어 프리", 12475],
        skill: "스페셜 파머시",
        materials: [
            ["상급 포션 제조 매뉴얼", 6285],
            ["빈시험관", 1092, 10],
            ["만능약", 525, 5],
            ["초록허브", 511, 20],
            ["마스테라의 열매", 522, 1],
            ["이그드라실의 나뭇잎", 610, 1],
        ]
    },
    {
        result: ["골든 이그제", 100231],
        skill: "스페셜 파머시",
        materials: [
            ["상급 포션 제조 매뉴얼", 6285],
            ["빈시험관", 1092, 10],
            ["이그드라실의 열매", 607, 10],
            ["황금", 969, 5],
        ]
    },
    {
        result: ["레드 허브 액티베이터", 100232],
        skill: "스페셜 파머시",
        materials: [
            ["상급 포션 제조 매뉴얼", 6285],
            ["빈시험관", 1092, 10],
            ["빨간허브", 507, 45],
            ["이그드라실의 씨앗", 608, 5],
        ]
    },
    {
        result: ["블루 허브 액티베이터", 100233],
        skill: "스페셜 파머시",
        materials: [
            ["상급 포션 제조 매뉴얼", 6285],
            ["빈시험관", 1092, 10],
            ["파란허브", 510, 15],
            ["이그드라실의 씨앗", 608, 5],
        ]
    },
    {
        result: ["농축된 빨간 시럽 포션", 1100003],
        skill: "스페셜 파머시",
        materials: [
            ["상급 포션 제조 매뉴얼", 6285],
            ["빈병", 713, 10],
            ["빈 포션병", 1093, 5],
            ["빨간 시럽", 11621, 15],
        ]
    },
    {
        result: ["농축된 파란 시럽 포션", 1100004],
        skill: "스페셜 파머시",
        materials: [
            ["상급 포션 제조 매뉴얼", 6285],
            ["빈병", 713, 10],
            ["빈 포션병", 1093, 5],
            ["파란 시럽", 11624, 15],
        ]
    },
    {
        result: ["농축된 황금 시럽 포션", 1100005],
        skill: "스페셜 파머시",
        materials: [
            ["상급 포션 제조 매뉴얼", 6285],
            ["빈병", 713, 10],
            ["빈 포션병", 1093, 5],
            ["하얀 시럽", 11623, 10],
            ["노란 시럽", 11622, 10],
        ]
    },
]
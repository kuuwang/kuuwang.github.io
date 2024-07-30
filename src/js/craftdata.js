var data = [
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
    {
        result: ["농축된 파란 시럽 포션", 1100004],
        skill: "스페셜 파머시",
        materials: [
            ["상급 포션 제조 매뉴얼", 6285],
            ["빈병", 713, 10],
            ["빈 포션병", 1093, 5],
            ["파란 시럽", 11624, 15],
        ]
    }
]
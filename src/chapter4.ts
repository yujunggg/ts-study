// 타입 별칭

type User  = {
    id? : number;
    name : string;
    nickname : string;
    birth : string;
    bio : string;
    location : string;
};

function func(){ // func 안에서는 아래의 User 타입을 사용
    type User = {};
}

let user1: User = {
    id : 1,
    name : '이유정',
    nickname : 'yujung',
    birth : '2008.08.19',
    bio : '안녕하세요',
    location : '서울'
};

let user2: User = {
    id : 2,
    name : '홍길동',
    nickname : 'yujung',
    birth : '2008.08.19',
    bio : '안녕하세요',
    location : '서울'
};

type CountryCodes = {
    [key : string] : string;
}

// 인덱스 시그니처
let countryCodes : CountryCodes = {
    Korea : 'ko',
    UnitedState : 'us',
    UnitedKingdom : 'uk'
}

type CountryNumberCodes = {
    [key : string] : number;
}

let coundtryNumberAndStringCodes : CountryNumberCodes = {
    Korea : 82,
    UnitedState : 840,
    UnitedKingdom : 826
}
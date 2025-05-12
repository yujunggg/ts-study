// 타입 별칭

type User  = {
    id? : number;
    name : string;
    nickname : string;
    birth : string;
    bio : string;
    location : string;
}

let user1: User = {
    id : 1,
    name : '이유정',
    nickname : 'yujung',
    birth : '2008.08.19',
    bio : '안녕하세요',
    location : '서울'
}

let user2: User = {
    id : 2,
    name : '홍길동',
    nickname : 'yujung',
    birth : '2008.08.19',
    bio : '안녕하세요',
    location : '서울'
}
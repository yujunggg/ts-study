// 배열
let numArr:number[]  = [1,2,3];

let strArr:string[] = ["hello", "im", "winterlood"];

let boolArr:Array<boolean> = [true, false, true];


// 배열에 들어가는 요소들의 타입이 다양할 경우
let multiArr: (string | number)[] = [1,"hello"];

// 다차원 배열의 타입을 정의하는 방법
let doubleArr: number[][] = [
    [1,2,3],
    [4,5]
]

// 튜플
// 튜플 -> 길이와 타입이 정해져 있는 배열
let tup1: [number, number] = [1,2];

let tup2: [number, string, boolean] = [1, "hello", true];

const users : [string, number][]= [
    ["winterlood", 1],
    ["winterlood2", 2],
    ["winterlood3", 3],
    ["winterlood4", 4],
    // [5, "winterlood5"]
]
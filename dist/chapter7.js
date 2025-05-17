// void
// void -> 공허 -> 아무것도 없다.
// void는 아무것도 없다는 뜻이다.
function func1() {
    return "hello";
}
function func2() {
    console.log("hello");
}
// never
// never -> 존재하지 않는
// 불가능한 타입
function func3() {
    while (true) { }
}
function func4() {
    throw new Error();
}
let anyVar;
let a;
export {};
// a = anyVar;
// never 타입은 어떤 타입도 할당할 수 없다.

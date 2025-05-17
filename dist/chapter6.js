// any -> 모든 타입을 허용하는 타입
// 특정 변수의 타입을 우리가 확실히 모를때
// 가급적 사용 X
let anyVar = 10;
anyVar = "hello";
// anyVar = true;
// anyVar = {};
// anyVar = () => {};
// anyVar.toUpperCase(); // any 타입은 모든 메서드를 사용할 수 있다.
// anyVar.toFixed(); // any 타입은 모든 메서드를 사용할 수 있다.
let num = 10;
num = anyVar;
// Unknown
let unknownVar;
unknownVar = "";
unknownVar = 1;
unknownVar = () => { };
export {};

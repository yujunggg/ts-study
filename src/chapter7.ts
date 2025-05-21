// void
// void -> 공허 -> 아무것도 없다.
// void는 아무것도 없다는 뜻이다.

function func1(): string {
    return "hello";
}

function func2(): void {
    console.log("hello");
}


// never
// never -> 존재하지 않는
// 불가능한 타입

function func3() : never{
    while(true){}
}

function func4() : never{
    throw new Error();
}

let anyVar : any;


let a : never;
// a = anyVar;
// never 타입은 어떤 타입도 할당할 수 없다.
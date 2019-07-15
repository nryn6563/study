//변수와 상수
/*
변수 - 값을 변경 할수 있음
    - 같은 변수명 을 사용하면 안된다.(지역변수 제외)
    ex) let a = 1;

상수 - 변경하지 않는 값
    - 같은 상수 명을 사용하면 안된다.
  
    ex) const a = 1;

ex) var = 현재는 권장 하지 않음;
구형 브라우저에서 let or const 호환 되지 않음 , babel 로 호환가능
*/

let a = 1;
const b = 2;

console.log(a);
console.log(b);

// 데이터타입
/*
  문자열, 숫자열
*/

let txt = "문자열",
    num = 123; //숫자열;

console.log(txt);
console.log(num);


// bulean
/*
 true or false

 null & undefined

 null = 없다.
 undefined = 값이 정해지지 않음.
*/

//  연산자
/*
  1. 산술연산자(사칙연산)  = +,-,*,/
*/

let a = 1 + 2;
console.log(a);

let b = 2;
console.log(b++);
console.log(++b);

// 대입연산자
/*
 a += 1;
*/

let c = 5;
c += 4
console.log(c);

/*
 논리 연산자 
*/

// NOT !
// AND &&
// or ||

const a = ! true;
console.log(a);

const b = true && true;
console.log(b);
// 두값이 true 일때만 true
const c = true && false;
console.log(c);

const d = true || false;
console.log(d);
// 둘중 하나라도 true 라면 true;


// ex

const e = !(true && false || true && false || !false);
// not and or 순으로
// !(~)


// 비교연산자
/*
 == 
 ===
 !==
 <=
 >=
 <
 >
*/

const a = 1;
const b = 2;

const equals = a === b;

console.log(equals);

//swich 문
const device = "iphone";

switch (device) {
  case "iphone":
    console.log("아이폰");
    break;
  case "ipad":
    console.log("아이패드");
    break;
  default:
    console.log("없음");
}


// 함수

/*
  function 함수명 (property){
    함수
  }
*/ 

function add(a, b) {
  return a + b;
}

const sum = add(1, 2);
console.log(sum);


function hello(name) {
  console.log('Hello, ' + name + '!');
}

hello('js');

// es6 = ecmascipt 6 === es2015

function why(txt) {
  console.log(`hello ${txt} !`);
  // return `Hello ${txt}!;`
}

why("메롱");


// 함수를 사용하는 다른 방법
// 화살표 함수

const add = (a, b) => {
  return a + b;
}

const sum = add(1, 3);
console.log(sum);



// 객체

const dog = {
  name: '바둑이',
  age: 3
}

const cat = {
  name: '냥투',
  age: 2
}

console.log(dog.name, dog.age);

function print(animal) {
  const text = `${animal.name}(${animal.age}세) 입니다.`
  console.log(text);
}
/*
비구조화 할당

console.log(dog.name, dog.age);

function print({name , age}){
  const text = `${name}(${age}세) 입니다.`
  console.log(text);
}

*/

print(dog);
print(cat);
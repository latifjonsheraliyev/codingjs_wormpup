// 1-masala
//function sleepIn(weekday, vacation){
//     return !weekday || vacation;
//  }

//2-masala
//  function monkeyTrouble(aSmile, bSmile){
//     return aSmile === bSmile
//   }


//3-masala
//   function sumDouble(a, b){
//     return if( a == b) {(a+b)*2}
//    else if(a =! b){ a + b}

//   }

//4-masala
//   function diff21(n) {
//     if (n > 21) {
//       let sum = 0;
//       sum = 21 - n;
//       sum = Math.abs(sum);
//       return sum * 2;
//     }
//     return 21 - n;
//   }

//5-masala
//   function parrotTrouble(talking, hour){
//     if(talking === false && hour <= 6 && hour >= 23){
//        true}
//    return false

//  }


//6-masala
//  function parrotTrouble(talking, hour){
//     if(talking === false && hour <= 6 && hour >= 23){
//        return true
//     }
//    return false

//  }


//7-masala
//  function parrotTrouble(talking, hour){
//     return talking && (hour < 7 || hour > 20);
//   }


//8-masala
//   function makes10(a, b){
//     return (a === 10 || b === 10) || a+b === 10;

//    }


//9-masala
//    function nearHundred(n){
//     return (n > 89 &&  n <= 110)  || (n >189 && n <= 210)
//   }


//10-masala
//   function posNeg(a, b, negative){
//     if (negative) {
//         return a < 0 && b < 0;
//     } else {
//         return (a < 0 && b > 0) || (a > 0 && b < 0);
//     }
// }


//11-masala
// function notString(str){
//     if (str.startsWith("not")) {
//           return str;
//       }
//   return "not " + str;}


//12-masala
//   function missingChar(str, n){
//     return str.slice(0, n) + str.slice(n + 1);

//    }


//13-masala
//    function frontBack(str){
//     if(str.length === 1 ) {return str}
//      return str.slice(str.length -1) + str.slice(1,str.length-1) +str.slice(0,1)

//   }

//14-masla
//   function front3(str){
//     return str.slice(0,3) + str.slice(0,3) + str.slice(0,3)

//   }


//15-masala
//   function backAround(str){
//     return str.slice(str.length -1) + str.slice(str.lenght -2, str.lenght -1 ) + str.slice(0,str.lenght) + str.slice(str.length -1))
//   }

//16-masala
//   function or35(n){
//     if(n % 3== 0 || n % 5 == 0)return true
//    return false

//  }

//17-masala
//  function front22(str){
//     return str.slice(0,2) + str.slice(0,str.lenght) + str.slice(0,2)
//   }

//18-masala
//   function startHi(str){
//     if( str.startsWith("hi") )return true
//     return false

//   }


//19-masala
//   function icyHot(temp1, temp2){
//     if(temp1 < 0 && temp2 > 100)return true
//     else if(temp1 > 100 && temp2 < 0)return true
//     return false
//   }

//20-masala
//   function in1020(a, b){
//     if((a<= 20 && a>= 10) || (b<= 20 && b>= 10) ) return true
//     return false
//   }

//21-masala
//   function hasTeen(a, b, c){
//     if ((a >= 13 && a <= 19) || (b >= 13 && b <= 19) || (c >= 13 && c <= 19)) {
//     return true;
//   }
//   return false;
// }


//22-masala
// function loneTeen(a, b){
//     if ((a >= 13 && a <= 19) && (b >= 13 && b <= 19)) {
//     return false;
//   }
//   if ((a >= 13 && a <= 19) || (b >= 13 && b <= 19)) {
//     return true;
//   }
//   return false;

// }

//23-masala
// function delDel(str){
//     if(str.slice(1,4) === "del"){
//       return str.slice(0,1) + str.slice(4,str.length)
//     }
//       return str
//     }


//24-masala
//     function mixStart(str){
//         if (str.slice(1,3)==='ix')return true
//         return false
//       }


//25-masala
//       function startOz(str){
//         let result = "";
//       if (str[0] === 'o') {
//         result += 'o';
//       }
//       if (str[1] === 'z') {
//         result += 'z';
//       }
//       return result;
//     }


//26-masala
//     function intMax(a, b, c){
//         return Math.max(a,b,c)
//       }


//27-masala
//       function close10(a, b){
//         let qiymat1= 10-a
//       }

//28-masala
//       function close10(a, b){
//         let qiymat1 = 10 - a;
//         let qiymat2 = 10 - b;
//         qiymat1 = Math.abs(qiymat1);
//         qiymat2 = Math.abs(qiymat2);

//         if (qiymat1 === qiymat2) return 0;
//         else if (qiymat1 > qiymat2) return b;
//         else return a;
//       }

//29-masala
//       function in3050(a, b){
//         let inRange30to40 = (a >= 30 && a <= 40) && (b >= 30 && b <= 40);
//         let inRange40to50 = (a >= 40 && a <= 50) && (b >= 40 && b <= 50);
//         return inRange30to40 || inRange40to50;}

//30-masala
//         function max1020(a, b){
//             if (b > a) {
//               let temp = a;
//               a = b;
//               b = temp;
//             }
//             if (a >= 10 && a <= 20) {
//               return a;
//             }
//             if (b >= 10 && b <= 20) {
//               return b;
//             }
//             return 0;

//31-masala
// function stringE(str) {
//   let count = 0;
//   for (let key of str) {
//     if (key == "e") {
//       count++;
//     }
//   }
//   if (count >= 1 && count <= 3) return true;
//   return false;
// }
// console.log(stringE("kjslfdjlajfl"));

//32-masala
// function lastDigit(a, b){
//     return (a % 10) === (b % 10);

//  }

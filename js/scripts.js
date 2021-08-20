


function rangeOfNumbers(start,end) {
  let rangeArray = [];
  for (let i = start; i <= end; i++) {
    rangeArray.push(i + "");
  }
  return rangeArray.map(x => x.includes("2") ? "Boop!" : x.includes("1") ? "Beep" : x);

}
console.log(rangeOfNumbers(0,12).join());

function rangeOfNumbersFour(start,end) {
  let rangeArray = [];
  for (let i = start; i <= end; i++) {
    rangeArray.push(i + "");
  }
  return rangeArray.map(x => x.includes("3") ? "Wont you be my Neighbor?" : x.includes("21") ? "Boop" : x);

}
console.log(rangeOfNumbers(0,12).join());

function rangeOfNumbersFive(start,end) {
  let rangeArray = [];
  for (let i = start; i <= end; i++) {
    rangeArray.push(i + "");
  }
  return rangeArray.map(x => x.includes("13") ? "Won't you be my Neighbor?" : x.includes("32") ? "Won't you be my Neighbor?" : x);

}
console.log(rangeOfNumbers(0,12).join());

const 1 = "Beep!";
const 2 = "Boop!";
const 3 = "Won't you be my neighbor?";
const 13 = "Won't you be my neighbor?";
const 21 = "Boop."
const 32 = "Won't you be my neighbor?";


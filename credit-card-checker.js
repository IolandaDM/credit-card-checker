// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array of all the arrays above
const batch = [
  valid1,
  valid2,
  valid3,
  valid4,
  valid5,
  invalid1,
  invalid2,
  invalid3,
  invalid4,
  invalid5,
  mystery1,
  mystery2,
  mystery3,
  mystery4,
  mystery5,
];

let test1 = [4,1,6,1,0,0,2,1,9,2,0,0,7,3,8,1,7,5];
let test2 = [6,0,1,1,4,2,2,4,9,8,1,6,1,0,7,4];
let test3 = [4,1,7,5,0,0,5,4,0,3,9,8,3,3,9,8];
let batch2 = [test1, test2, test3];

// Add your functions below:
function validateCred(credArr) {
  let toDuplicate = false;
  let result = 0;
  let sum = 0;
  for (let i = credArr.length - 1; i >= 0; i--) {
    let digit = credArr[i];
    if (toDuplicate) {
      result = digit * 2;
      if (result > 9) {
        result = result - 9;
      }
    } else {
      result = digit;
    }
    toDuplicate = !toDuplicate;
    sum = sum + result;
  }
  if (sum % 10 === 0) {
    return true;
  } else {
    return false;
  }
}

/*console.log(validateCred(invalid1));*/
let invalidCards = [];
function findInvalidCards(nestedArr) {
  for (let i = 0; i <= nestedArr.length - 1; i++) {
    if (!validateCred(nestedArr[i])) {
      invalidCards.push(nestedArr[i]);
    }
  }
  return invalidCards;
}
/*console.log(findInvalidCards(batch))*/
let companies = [];
function idInvalidCardCompanies(nestedInvalidNums) {
  for (let i = 0; i <= nestedInvalidNums.length - 1; i++) {
    let provider;
    switch (nestedInvalidNums[i][0]) {
      case 3:
      provider = "Amex (American Express)"
        break;
      case 4:
      provider = "Visa"
        break;
      case 5:
        provider = "Mastercard"
        break;
      case 6:
        provider = "Discover"
        break;
      default:
        console.log("Company not found");
    }

if (provider && companies.indexOf(provider) === -1) {
          companies.push(provider);
        }

  }
  return companies;
}

console.log(idInvalidCardCompanies(batch2));

let cardNumArr = [];
function makeArray(cardNumber){
for (let i=0; i<= cardNumber.length -1; i++){
  cardNumArr.push(parseInt(cardNumber[i]))
}
  return cardNumArr;

}
let testCard1 = '6388955828801443';
console.log(makeArray(testCard1));

function convertCards(invalidNum){
  let total = 0;
  let validNum = 0;
  let checkDigit = invalidNum[array.length - 1];
for (let i = invalidNum.length -1; i >= 0; i--){
let currDig = invalidNum[i];
if((invalidNum.length - 1 - i)%2===1){
  currDig *= 2;
  if (currDig > 9){
    currDig -= 9;
  }
}
total += currDig;
if (total % 10 !== 0){
if (checkDigit < 9){
  checkDigit += total % 10;
  if (checkDigit > 9){
    checkDigit === 9;
    invalidNum[-3] += 10-checkDigit;
  }
}
}
}
}






// ex1

let camelCaseNameUsedHere = 'str'
let UPPER_SNAKE_CASE_USED_HERE = 'str1'
let CapitalCaseUsedHere = new Object;



// ex2

const str1 = 'str1'
const str2 = 'str2'
const str3 = 'str3'

console.log(str1+str2+str3)
console.log(`here we have some text, then we add ${str1}, after it ${str2}, and finally ${str3}`)



// ex3

let num = 27
console.log(num, typeof num)

// number to string/ method1
let convertedNum = String(num)
console.log(convertedNum, typeof convertedNum)

// number to string/ method2
let convertedNum1 = num.toString()
console.log(convertedNum1, typeof convertedNum1)

// number to boolean/ method1
let convertedNum2 = Boolean (num)
console.log(convertedNum2, typeof convertedNum2)

// number to boolean/ method2
let convertedNum4 = !!num
console.log(convertedNum4, typeof convertedNum4)



// ex4

let str = '27'
console.log(str, typeof str)

// string to number/ method1
console.log(+str, typeof +str)

// string to number/ method2
Number(str)

// string to number/ method3
// console.log(str*1)

// string to number/ method4
console.log(~~str)

// string to boolean
let convertedStr = Boolean (str)
console.log(convertedStr, typeof convertedStr)

// string to boolean/ method2
let convertedStr1 = !!str
console.log(convertedStr1, typeof convertedStr1)



// ex5

let falsy1 = ''
let falsy2 = 0
let falsy3 = undefined
let falsy4 = null
let falsy5 = NaN
let falsy6 = false

if (falsy1 && falsy2 ) {
    console.log('pass1')
} else if (!falsy3){
    console.log('pass 2')
} else if (falsy4 || falsy5 || falsy6) {
    console.log('pass 3')
} else {
    console.log('pass 4')
}



// ex6

const valueTernary = 27 || falsy2 ? 'true' : 'false' 
console.log(valueTernary)



// ex7

const menu = 'desert'

switch (menu) {
    case 'starters':
        console.log('Tuna and salmon carpaccio\nBeef tartare\nAssorted cheeses')
        break
    case 'salads':
        console.log('Seasonal salad\nSalad Green Bowl with shrimps\nBaked bell pepper with feta cheese, almond flakes and avocado')
        break
    case 'soups':
        console.log('Seasonal souap\nBouillabaisse soup\nTraditional chicken soup with homemade noodles')
        break
    case 'beef dishes':
        console.log('Tenderloin Steak\nBeef medallion with eggplant and peppercorn souce\nVeal rack with confit potatoes and truffle emulsion')
        break
    case 'poultry dishes':
        console.log('Confit duck leg with apple pure\nTurkey fillet with celery parmantier\nDuck breast and plum with carrot juice')
        break
    case 'fish and seafood dishes':
        console.log('Seafood soute with wine sauce\nWild prawns with wine-garlic sauce\nSalmon fillet with quince gratin and mashed sweet potatoes')
        break
    case 'side dishes':
        console.log('Asparagus\nBroccoli with trufle sauce\nPotato gratin with trufle sauce')
        break
    case 'dessert':
        console.log('Tonka beans creme brulee\nPear with Roquefort cheese\nChoux au craquelin with mascarpone and confit strawberries')
        break
    default:
        console.log('not a menu item')
}
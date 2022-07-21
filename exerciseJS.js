const products = [{
    name: 'Macbook',
    price: 1300,
    quantity: 40,
    colors: ['silver', 'black', 'white']
  },
  {
    name: 'Iphone',
    price: 1000,
    quantity: 50,
    colors: ['silver', 'red', 'white']
  },
  {
    name: 'Pendrive',
    price: 10,
    quantity: 10,
    colors: []
  },
  {
    name: 'Headset',
    price: 50,
    quantity: 0,
    colors: ['black']
  },
  {
    name: 'Mouse',
    price: 20,
    quantity: 5,
    colors: ['white', 'black', 'blue']
  },
  {
    name: 'Tablet',
    price: 500,
    quantity: 20,
    colors: ['white', 'black']
  },
  {
    name: 'USB adaptor',
    price: 5,
    quantity: 0,
    colors: []
  },
  {
    name: 'Keyboard',
    price: 30,
    quantity: 35,
    colors: ['white']
  },
  {
    name: 'Gamepad',
    price: 30,
    quantity: 25,
    colors: ['black', 'silver']
  },
  {
    name: 'Monitor',
    price: 200,
    quantity: 3,
    colors: []
  },
]

const NUMBER_ZERO = 0
const NUMBER_THREE = 3
const NUMBER_NINE_HUNDRED = 900

const STRING_BLACK = 'black'
const STRING_O = 'o'


let idProducts = products.map((element, index) => ({
  ...element,
  id: index + 1
}))

const id3 = idProducts.find((element) => element.id === NUMBER_THREE)

const colorBlack = idProducts.filter((element) => element.colors.includes(STRING_BLACK))

const noColors = idProducts.filter((element) => element.colors.length === NUMBER_ZERO)

let cloneProducts = [...products]

cloneProducts.push({
  name: 'NintendoSwitch',
  price: 2000,
  quantity: 20,
  colors: []
})


let outStockProducts = cloneProducts.filter((element) => element.quantity !== NUMBER_ZERO)


let stockSum = 0
cloneProducts.forEach((element)=> stockSum = stockSum + element.quantity)

let expensivierThan999 = cloneProducts.filter((element) => element.price > NUMBER_NINE_HUNDRED)


let includeLetterO = cloneProducts.filter((element) => element.name.toLowerCase().includes(STRING_O))


console.log(idProducts)
console.log('----------------------')

console.log(id3)
console.log('----------------------')

console.log(colorBlack)
console.log('----------------------')

console.log(noColors)
console.log('----------------------')

console.log(outStockProducts)
console.log('----------------------')

console.log(stockSum)
console.log('----------------------')

console.log(expensivierThan999)
console.log('----------------------')

console.log(includeLetterO)
console.log('----------------------')
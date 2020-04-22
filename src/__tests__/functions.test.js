// there are a lot of matchers, so it is worth your time to go look at them.
// Jest docs: https://jestjs.io/docs/en/expect

const { sum, sayHello } = require('../functions')

test('Adds 1 and 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3)
})

test('Adds 6 and 12 to equal 18', () => {
  expect(sum(6, 12)).toBe(18)
})

test('sayHello says hello', () => {
  expect(sayHello()).toBe('hello')
})

test('test deep equality', () => {
//  ( {name: 'Andrew'} === {name: 'Andrew'} )  // === cant check complex data types i.e. arrays, objects, etc.
const data = { one: 1 }
  data['two'] = 2
  expect(data).toEqual({ one: 1, two: 2 })
})


test('can use toEqual matcher on arrays', () => {
   const data = [1, 2, 3]
   expect(data).toEqual([1, 2, 3])
 })
 
 const names = ['Andrew', 'Becca', 'Scott']

 test('names includes Scott', () => {
    expect(names).toContain('Scott')
 })



 test('names does not include Matias', () => {
   expect(names).not.toContain('Matias')
 })


 test('true is truthy', () => {
   expect(true).toBeTruthy()
 })




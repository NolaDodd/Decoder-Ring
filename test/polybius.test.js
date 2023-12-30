const expect = require("chai").expect
const polybius = require("../src/polybius").polybius

describe("Polybius Tests", () => { 
  describe("Encoding a Message", () => {
    it("should encode a message by translating each letter to number pairs", () => {
      const expected = "3211535345"
      const actual = polybius("happy")
      expect(actual).to.eql(expected)
    })
    it("should translate both 'i' and 'j' to 42",() => {
      const expected = "42423352425134"
      const actual = polybius("jinkies")
      expect(actual).to.eql(expected)
    })
    it("should leave spaces as is", () => {
      const expected = "42 13431551 454354"
      const actual = polybius("I love you")
      expect(actual).to.eql(expected)
    })
    it("ignores capital letters", () => {
      const expected = "245433"
      const actual = polybius("RUN")
      expect(actual).to.eql(expected)
    })
   })
  
 describe("Decoding a Message", () => {
   it("should decode a message by translating each pair of numbers into a letter", () => {
     const expected = "test(i/j)ng"
     const actual = polybius("44513444423322", false)
     expect(actual).to.eql(expected)
   })
   it("should translate 42 to both 'i' and 'j'", () => {
     const expected = "(i/j)(i/j)nx"
     const actual = polybius("42423335", false)
     expect(actual).to.eql(expected)
   })
   it("should leave spaces as is", () => {
     const expected = "blue sky"
     const actual = polybius("21135451 345245", false)
     expect(actual).to.eql(expected)
   })
   it("should return false if the length of all numbers is odd", () => {
     const expected = false
     const actual = polybius("4341411", false)
     expect(actual).to.eql(expected)
   })
 })  
})

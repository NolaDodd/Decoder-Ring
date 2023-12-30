const expect = require("chai").expect
const caesar = require("../src/caesar").caesar

describe("Caesar Shift Tests", () => {
  describe("Error Handling", () => {
    it("should should return false if the shift amount is 0", () => {
    const expected = false
    const actual = caesar("thinkful", 0)
    expect(actual).to.eql(expected) 
    })
  it("should return false if the shift amount is above 25", () => {
    const expected = false
    const actual = caesar("thinkful", 30)
    expect(actual).to.eql(expected)
  })
  it("should return false if the shift amount is less than -25", () => {
    const expected = false
    const actual = caesar("thinkful", -30)
    expect(actual).to.eql(expected)})
   })
  
  describe("Encoding a Message", () => {
    it("should encode a message by shifting the letters", () => {
      const expected = "mfuud"
      const actual = caesar("happy", 5)
      expect(actual).to.eql(expected)
    })
    it("should leaves spaces and other symbols as is",() => {
      const expected = "jk htkgpf!"
      const actual = caesar("hi friend!", 2)
      expect(actual).to.eql(expected)
    })
    it("should ignore capital letters", () => {
      const expected = "bogo"
      const actual = caesar("NASA", -12)
      expect(actual).to.eql(expected)
    })
    it("should appropriately handle letters at the end of the alphabet", () => {
      const expected = "cheud"
      const actual = caesar("zebra", 3)
      expect(actual).to.eql(expected)
    })
    it("should allow for a negative shift that will shift to the left", () => {
      const expected = "vghjiy"
      const actual = caesar("almond", -5)
      expect(actual).to.eql(expected)
    })
   })
  
 describe("Decoding a Message", () => {
   it("should decode a message by shifting the letters in the opposite direction", () => {
     const expected = "testing"
     const actual = caesar("xiwxmrk", 4, false)
     expect(actual).to.eql(expected)
   })
   it("should leaves spaces and other symbols as is", () => {
     const expected = "happy birthday!"
     const actual = caesar("ngvve hoxznjge!", 6, false)
     expect(actual).to.eql(expected)
   })
   it("should ignore capital letters", () => {
     const expected = "fbi"
     const actual = caesar("PLS", 10, false)
     expect(actual).to.eql(expected)
   })
   it("should appropriately handle letters at the end of the alphabet", () => {
     const expected = "whats up doc?"
     const actual = caesar("patml ni whv?", -7, false)
     expect(actual).to.eql(expected)
   })
   it("should allow for a negative shift that will shift to the left", () => {
     const expected = "zebras"
     const actual = caesar("cbyodv", 3, false)  
   })
 })  
})

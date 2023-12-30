const expect = require("chai").expect
const substitution = require("../src/substitution").substitution

describe("Substitution Tests", () => {
  describe("Error Handling", () => {
    it("should return false if the substitution alphabet is missing", () => {
    const expected = false
    const actual = substitution("testing")
    expect(actual).to.eql(expected) 
    })
  it("should return false if the substitution alphabet is not exactly 26 characters", () => {
    const expected = false
    const actual = substitution("hopeful", "qwertyuiopasdfghjklzxcvbn")
    expect(actual).to.eql(expected)
  })
  it("should return false if the substitution alphabet does not contain unique characters", () => {
    const expected = false
    const actual = substitution("alligator", "aaaaabbbbbcccccdddddeeeeee")
    expect(actual).to.eql(expected)})
   })
  
  describe("Encoding a Message", () => {
    it("should encode a message by using the given substitution alphabet", () => {
      const expected = "iqhhn"
      const actual = substitution("happy", "qwertyuiopasdfghjklzxcvbnm")
      expect(actual).to.eql(expected)
    })
    it("should work with any kind of key with unique characters",() => {
      const expected = "io y$otfr!"
      const actual = substitution("hi friend!", ",wertyuiop.sdfghj$lzxcv@nm")
      expect(actual).to.eql(expected)
    })
    it("should preserve spaces", () => {
      const expected = "igv qkt ngx?"
      const actual = substitution("how are you?", "qwertyuiopasdfghjklzxcvbnm")
      expect(actual).to.eql(expected)
    })
     it("ignores capital letters", () => {
      const expected = "ngx vgf!"
      const actual = substitution("YOU WON!", "qwertyuiopasdfghjklzxcvbnm")
      expect(actual).to.eql(expected)
    })
   })
  
 describe("Decoding a Message", () => {
   it("should decode a message by using the given substitution alphabet", () => {
     const expected = "testing"
     const actual = substitution("ztlzofu", "qwertyuiopasdfghjklzxcvbnm", false)
     expect(actual).to.eql(expected)
   })
   it("should work with any kind of key with unique characters", () => {
     const expected = "happy birthday!"
     const actual = substitution("i&hhn wokzi%&n!", "&we%t$uio#asdfgh*klzxc^bnm", false)
     expect(actual).to.eql(expected)
   })
   it("should preserve spaces", () => {
     const expected = "a b c d e"
     const actual = substitution("q w e r t", "qwertyuiopasdfghjklzxcvbnm", false)
     expect(actual).to.eql(expected)
   }) 
 })  
})


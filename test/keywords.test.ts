import Keywords from '../src/keyword/keywords'
import AutoColor from '../src'

for (const keyword of Keywords.getRegistered()) {
  /**
   * Check if a match changes when it gets called.
   */
  for (const match of keyword.shouldMatch) {
    test(`Keyword should change: ${match}`, () => {
      expect(AutoColor.getString(match).trimRight()).not.toBe(match)
    })
  }

  for (const match of keyword.shouldMatch) {
    test(`Keyword should check: ${match}`, () => {
      expect(keyword.check(match)).toBe(true)
    })
  }

  for (const noMatch of keyword.shouldNotMatch) {
    test(`Keyword should not change: ${noMatch}`, () => {
      expect(keyword.getColored(noMatch)).toBe("")
    })
  }

  for (const noMatch of keyword.shouldNotMatch) {
    test(`Keyword should not check: ${noMatch}`, () => {
      expect(keyword.check(noMatch)).toBe(false)
    })
  }

  test(`Keyword should not match on empty string`, () => {
    expect(keyword.check("")).toBe(false)
  })

  test(`Keyword should not change on empty string`, () => {
    expect(keyword.getColored("")).toBe("")
  })
}

test(`Print all matching keywords`, () => {

  let print = ""

  for (const keyword of Keywords.getRegistered()) {
    for (const match of keyword.shouldMatch) {
      print += AutoColor.getString(match) + " "
    }
  }

  console.log(print)
})



import Keywords from '../src/keyword/keywords'
import KwError from '../src/keyword/keywords/KwError'

test('Register and load some keywords', () => {
  const reg = new KwError()
  Keywords.register(reg)
  expect(Keywords.getRegistered()).toContainEqual(reg)
})

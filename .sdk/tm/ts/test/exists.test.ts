
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { TickerLogosSDK } from '..'


describe('exists', async () => {

  test('test-mode', () => {
    const testsdk = TickerLogosSDK.test()
    equal(testsdk instanceof TickerLogosSDK, true,
      'TickerLogosSDK.test() must return a client synchronously')
  })

})

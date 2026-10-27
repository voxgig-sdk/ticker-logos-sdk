

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { TickerLogosSDK, BaseFeature, config, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


loadEnvLocal(__dirname + '/../../../.env.local')


describe('GetLogoEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when TICKER_LOGOS_TEST_LIVE=TRUE.
  afterEach(liveDelay('TICKER_LOGOS_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = TickerLogosSDK.test()
    const ent = testsdk.GetLogo()
    assert(null != ent)
  })


  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = TickerLogosSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.GetLogo().load({"id":1} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.TICKER_LOGOS_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'get_logo.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":0}},"id":{"field":"id","name":"id"},"name":"get_logo","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /{domain}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"apple.com","k":"param","n":"id","or":"domain","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/{domain}","q":{"exist":["id"]},"r":{"param":{"domain":"id"}},"rs":{"binary":true,"kind":"raw","media":"image/png"},"s":[{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"get_logo","name__orig":"get_logo","Name":"GetLogo","name_":"get_logo","name-":"get-logo","NAME":"GET_LOGO","index$":0}, {"active":true,"entity":"get_logo","key$":"BasicGetLogoFlow","kind":"basic","name":"BasicGetLogoFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"get_logo_ref01","srcdatavar":"get_logo_ref01_data","suffix":"_dt0"},"m":{"id":"get_logo01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-get_logo_ref01"}}],"index$":0,"route":"GET /{domain}","record":{}}]}, 'GetLogo', {"GET /{domain}":{"protocol":"http","parameters":[{"name":"domain","in":"path","required":true,"description":"The company's website domain, e.g. `apple.com` (a `www.` prefix also works). Ticker symbols are rejected with 400.","schema":{"type":"string"},"example":"apple.com","index$":0}]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let get_logo_ref01_data = Object.values(setup.data.existing.get_logo)[0] as any

    // LOAD
    const get_logo_ref01_ent = client.GetLogo()
    const get_logo_ref01_match_dt0: any = {}
    get_logo_ref01_match_dt0.id = get_logo_ref01_data.id
    const get_logo_ref01_data_dt0 = (await get_logo_ref01_ent.load(get_logo_ref01_match_dt0)).data()
    assert(get_logo_ref01_data_dt0.id === get_logo_ref01_data.id)


  })
})



// main.kit.test.live.strict is true (the default is true): a live
// request that fails, or a live test missing an input it needs,
// fails the test.
// An account with no record for a test to read skips it either way.
const LIVE_STRICT = true

function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/get_logo/GetLogoTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = TickerLogosSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['get_logo01','get_logo02','get_logo03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'TICKER_LOGOS_TEST_GET_LOGO_ENTID': idmap,
    'TICKER_LOGOS_TEST_LIVE': 'FALSE',
    'TICKER_LOGOS_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['TICKER_LOGOS_TEST_GET_LOGO_ENTID']

  const live = 'TRUE' === env.TICKER_LOGOS_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['TICKER_LOGOS_TEST_GET_LOGO_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new TickerLogosSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
      {
      },
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
      // last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey
      // and server values above and handed the SDK undefined. Harmless
      // while there was nothing in that object; not harmless now.
      extra || {},
      { system: { fetch: transport.fetch } }
    ]))
  }

  const setup = {
    idmap,
    env,
    options,
    client,
    struct,
    data: entityData,
    explain: 'TRUE' === env.TICKER_LOGOS_TEST_EXPLAIN,
    live,
    transport,
    now: Date.now(),
  }

  return setup
}
  

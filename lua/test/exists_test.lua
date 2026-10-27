-- TickerLogos SDK exists test

local sdk = require("ticker-logos_sdk")

describe("TickerLogosSDK", function()
  it("should create test SDK", function()
    local testsdk = sdk.test(nil, nil)
    assert.is_not_nil(testsdk)
  end)
end)

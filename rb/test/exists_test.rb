# TickerLogos SDK exists test

require "minitest/autorun"
require_relative "../TickerLogos_sdk"

class ExistsTest < Minitest::Test
  def test_create_test_sdk
    testsdk = TickerLogosSDK.test(nil, nil)
    assert !testsdk.nil?
  end
end

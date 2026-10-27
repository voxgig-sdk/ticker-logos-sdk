# TickerLogos SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/ratelimit_feature'
require_relative 'feature/retry_feature'
require_relative 'feature/test_feature'
require_relative 'feature/timeout_feature'


module TickerLogosFeatures
  def self.make_feature(name)
    case name
    when "base"
      TickerLogosBaseFeature.new
    when "ratelimit"
      TickerLogosRatelimitFeature.new
    when "retry"
      TickerLogosRetryFeature.new
    when "test"
      TickerLogosTestFeature.new
    when "timeout"
      TickerLogosTimeoutFeature.new
    else
      TickerLogosBaseFeature.new
    end
  end
end

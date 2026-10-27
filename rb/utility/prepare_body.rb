# TickerLogos SDK utility: prepare_body
require_relative 'media'
module TickerLogosUtilities
  PrepareBody = ->(ctx) {
    return nil unless ctx.op.input == "data"
    return TickerLogosUtilities.raw_body(ctx.reqdata) if TickerLogosUtilities.raw_request?(ctx.point)
    ctx.utility.transform_request.call(ctx)
  }
end

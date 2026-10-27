# TickerLogos SDK utility: make_context
require_relative '../core/context'
module TickerLogosUtilities
  MakeContext = ->(ctxmap, basectx) {
    TickerLogosContext.new(ctxmap, basectx)
  }
end

# TickerLogos SDK utility: make_context

from tickerlogos_sdk.core.context import TickerLogosContext


def make_context_util(ctxmap, basectx):
    return TickerLogosContext(ctxmap, basectx)

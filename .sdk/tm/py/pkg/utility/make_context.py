# TickerLogos SDK utility: make_context

from projectname_sdk.core.context import TickerLogosContext


def make_context_util(ctxmap, basectx):
    return TickerLogosContext(ctxmap, basectx)

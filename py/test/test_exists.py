# TickerLogos SDK exists test

import pytest
from tickerlogos_sdk import TickerLogosSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = TickerLogosSDK.test(None, None)
        assert testsdk is not None

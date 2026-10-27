<?php
declare(strict_types=1);

// TickerLogos SDK exists test

require_once __DIR__ . '/../tickerlogos_sdk.php';

use PHPUnit\Framework\TestCase;

class ExistsTest extends TestCase
{
    public function test_create_test_sdk(): void
    {
        $testsdk = TickerLogosSDK::test(null, null);
        $this->assertNotNull($testsdk);
    }
}

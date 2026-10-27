<?php
declare(strict_types=1);

// TickerLogos SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class TickerLogosMakeContext
{
    public static function call(array $ctxmap, ?TickerLogosContext $basectx): TickerLogosContext
    {
        return new TickerLogosContext($ctxmap, $basectx);
    }
}

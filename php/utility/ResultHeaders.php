<?php
declare(strict_types=1);

// TickerLogos SDK utility: result_headers

class TickerLogosResultHeaders
{
    public static function call(TickerLogosContext $ctx): ?TickerLogosResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}

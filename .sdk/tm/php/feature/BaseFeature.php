<?php
declare(strict_types=1);

// TickerLogos SDK base feature

class TickerLogosBaseFeature
{
    public string $version;
    public string $name;
    public bool $active;

    // Positions this feature when added via the client `extend` option:
    // "__before__" / "__after__" / "__replace__" name an already-added
    // feature (mirrors the ts feature `_options`). Declared so setting it
    // on an extension instance avoids the dynamic-property deprecation.
    public ?array $_options = null;

    public function __construct()
    {
        $this->version = '0.0.1';
        $this->name = 'base';
        $this->active = true;
    }

    public function get_version(): string { return $this->version; }
    public function get_name(): string { return $this->name; }
    public function get_active(): bool { return $this->active; }

    public function init(TickerLogosContext $ctx, array $options): void {}
    public function PostConstruct(TickerLogosContext $ctx): void {}
    public function PostConstructEntity(TickerLogosContext $ctx): void {}
    public function SetData(TickerLogosContext $ctx): void {}
    public function GetData(TickerLogosContext $ctx): void {}
    public function GetMatch(TickerLogosContext $ctx): void {}
    public function SetMatch(TickerLogosContext $ctx): void {}
    public function PrePoint(TickerLogosContext $ctx): void {}
    public function PreSpec(TickerLogosContext $ctx): void {}
    public function PreRequest(TickerLogosContext $ctx): void {}
    public function PreResponse(TickerLogosContext $ctx): void {}
    public function PreResult(TickerLogosContext $ctx): void {}
    public function PreDone(TickerLogosContext $ctx): void {}
    public function PreUnexpected(TickerLogosContext $ctx): void {}
}

# frozen_string_literal: true

# Typed models for the TickerLogos SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
# params (op.<name>.points[].g.params[]). Member types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Ruby types are unenforced; these YARD
# annotations document the shapes. Do not edit by hand.

# GetLogo entity data model.
#
# @!attribute [rw] id
#   @return [String, nil]
GetLogo = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for GetLogo#load.
#
# @!attribute [rw] id
#   @return [String]
GetLogoLoadMatch = Struct.new(
  :id,
  keyword_init: true
)


# TickerLogos SDK utility registration
require_relative '../core/utility_type'
require_relative 'clean'
require_relative 'done'
require_relative 'make_error'
require_relative 'feature_add'
require_relative 'feature_hook'
require_relative 'feature_init'
require_relative 'fetcher'
require_relative 'make_fetch_def'
require_relative 'make_context'
require_relative 'make_options'
require_relative 'make_request'
require_relative 'make_response'
require_relative 'make_result'
require_relative 'make_point'
require_relative 'make_spec'
require_relative 'make_url'
require_relative 'param'
require_relative 'prepare_auth'
require_relative 'prepare_body'
require_relative 'prepare_headers'
require_relative 'prepare_method'
require_relative 'prepare_params'
require_relative 'prepare_path'
require_relative 'prepare_query'
require_relative 'graphql'
require_relative 'result_basic'
require_relative 'result_body'
require_relative 'result_headers'
require_relative 'transform_request'
require_relative 'transform_response'

TickerLogosUtility.registrar = ->(u) {
  u.clean = TickerLogosUtilities::Clean
  u.clean_add = TickerLogosUtilities::CleanAdd
  u.clean_explain = TickerLogosUtilities::CleanExplain
  u.done = TickerLogosUtilities::Done
  u.make_error = TickerLogosUtilities::MakeError
  u.feature_add = TickerLogosUtilities::FeatureAdd
  u.feature_hook = TickerLogosUtilities::FeatureHook
  u.feature_init = TickerLogosUtilities::FeatureInit
  u.fetcher = TickerLogosUtilities::Fetcher
  u.make_fetch_def = TickerLogosUtilities::MakeFetchDef
  u.make_context = TickerLogosUtilities::MakeContext
  u.make_options = TickerLogosUtilities::MakeOptions
  u.make_request = TickerLogosUtilities::MakeRequest
  u.make_response = TickerLogosUtilities::MakeResponse
  u.make_result = TickerLogosUtilities::MakeResult
  u.make_point = TickerLogosUtilities::MakePoint
  u.make_spec = TickerLogosUtilities::MakeSpec
  u.make_url = TickerLogosUtilities::MakeUrl
  u.param = TickerLogosUtilities::Param
  u.prepare_auth = TickerLogosUtilities::PrepareAuth
  u.prepare_body = TickerLogosUtilities::PrepareBody
  u.prepare_headers = TickerLogosUtilities::PrepareHeaders
  u.prepare_method = TickerLogosUtilities::PrepareMethod
  u.prepare_params = TickerLogosUtilities::PrepareParams
  u.prepare_path = TickerLogosUtilities::PreparePath
  u.prepare_query = TickerLogosUtilities::PrepareQuery
  u.graphql_body = TickerLogosUtilities::GraphqlBody
  u.graphql_errors = TickerLogosUtilities::GraphqlErrors
  u.result_basic = TickerLogosUtilities::ResultBasic
  u.result_body = TickerLogosUtilities::ResultBody
  u.result_headers = TickerLogosUtilities::ResultHeaders
  u.transform_request = TickerLogosUtilities::TransformRequest
  u.transform_response = TickerLogosUtilities::TransformResponse
}

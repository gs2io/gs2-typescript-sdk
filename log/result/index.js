"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DescribeLabelValuesResult = exports.DescribeMetricsResult = exports.QueryMetricsTimeseriesResult = exports.GetTraceResult = exports.QueryTimeseriesResult = exports.QueryFacetsResult = exports.GetLogResult = exports.QueryLogResult = exports.DeleteDashboardResult = exports.DuplicateDashboardResult = exports.UpdateDashboardResult = exports.GetDashboardResult = exports.CreateDashboardResult = exports.DescribeDashboardsResult = exports.DeleteFacetModelResult = exports.UpdateFacetModelResult = exports.GetFacetModelResult = exports.CreateFacetModelResult = exports.DescribeFacetModelsResult = exports.DeleteInsightResult = exports.GetInsightResult = exports.CreateInsightResult = exports.DescribeInsightsResult = exports.QueryAccessLogWithTelemetryResult = exports.SendInGameLogByUserIdResult = exports.SendInGameLogResult = exports.QueryInGameLogResult = exports.CountExecuteStampTaskLogResult = exports.QueryExecuteStampTaskLogResult = exports.CountExecuteStampSheetLogResult = exports.QueryExecuteStampSheetLogResult = exports.CountIssueStampSheetLogResult = exports.QueryIssueStampSheetLogResult = exports.CountAccessLogResult = exports.QueryAccessLogResult = exports.GetServiceVersionResult = exports.DeleteNamespaceResult = exports.UpdateNamespaceResult = exports.GetNamespaceResult = exports.GetNamespaceStatusResult = exports.CreateNamespaceResult = exports.DescribeNamespacesResult = void 0;
var tslib_1 = require("tslib");
/*
Copyright 2016 Game Server Services, Inc. or its affiliates. All Rights
Reserved.

Licensed under the Apache License, Version 2.0 (the "License").
You may not use this file except in compliance with the License.
A copy of the License is located at

 http://www.apache.org/licenses/LICENSE-2.0

or in the "license" file accompanying this file. This file is distributed
on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
express or implied. See the License for the specific language governing
permissions and limitations under the License.
 */
var DescribeNamespacesResult_1 = tslib_1.__importDefault(require("./DescribeNamespacesResult"));
exports.DescribeNamespacesResult = DescribeNamespacesResult_1.default;
var CreateNamespaceResult_1 = tslib_1.__importDefault(require("./CreateNamespaceResult"));
exports.CreateNamespaceResult = CreateNamespaceResult_1.default;
var GetNamespaceStatusResult_1 = tslib_1.__importDefault(require("./GetNamespaceStatusResult"));
exports.GetNamespaceStatusResult = GetNamespaceStatusResult_1.default;
var GetNamespaceResult_1 = tslib_1.__importDefault(require("./GetNamespaceResult"));
exports.GetNamespaceResult = GetNamespaceResult_1.default;
var UpdateNamespaceResult_1 = tslib_1.__importDefault(require("./UpdateNamespaceResult"));
exports.UpdateNamespaceResult = UpdateNamespaceResult_1.default;
var DeleteNamespaceResult_1 = tslib_1.__importDefault(require("./DeleteNamespaceResult"));
exports.DeleteNamespaceResult = DeleteNamespaceResult_1.default;
var GetServiceVersionResult_1 = tslib_1.__importDefault(require("./GetServiceVersionResult"));
exports.GetServiceVersionResult = GetServiceVersionResult_1.default;
var QueryAccessLogResult_1 = tslib_1.__importDefault(require("./QueryAccessLogResult"));
exports.QueryAccessLogResult = QueryAccessLogResult_1.default;
var CountAccessLogResult_1 = tslib_1.__importDefault(require("./CountAccessLogResult"));
exports.CountAccessLogResult = CountAccessLogResult_1.default;
var QueryIssueStampSheetLogResult_1 = tslib_1.__importDefault(require("./QueryIssueStampSheetLogResult"));
exports.QueryIssueStampSheetLogResult = QueryIssueStampSheetLogResult_1.default;
var CountIssueStampSheetLogResult_1 = tslib_1.__importDefault(require("./CountIssueStampSheetLogResult"));
exports.CountIssueStampSheetLogResult = CountIssueStampSheetLogResult_1.default;
var QueryExecuteStampSheetLogResult_1 = tslib_1.__importDefault(require("./QueryExecuteStampSheetLogResult"));
exports.QueryExecuteStampSheetLogResult = QueryExecuteStampSheetLogResult_1.default;
var CountExecuteStampSheetLogResult_1 = tslib_1.__importDefault(require("./CountExecuteStampSheetLogResult"));
exports.CountExecuteStampSheetLogResult = CountExecuteStampSheetLogResult_1.default;
var QueryExecuteStampTaskLogResult_1 = tslib_1.__importDefault(require("./QueryExecuteStampTaskLogResult"));
exports.QueryExecuteStampTaskLogResult = QueryExecuteStampTaskLogResult_1.default;
var CountExecuteStampTaskLogResult_1 = tslib_1.__importDefault(require("./CountExecuteStampTaskLogResult"));
exports.CountExecuteStampTaskLogResult = CountExecuteStampTaskLogResult_1.default;
var QueryInGameLogResult_1 = tslib_1.__importDefault(require("./QueryInGameLogResult"));
exports.QueryInGameLogResult = QueryInGameLogResult_1.default;
var SendInGameLogResult_1 = tslib_1.__importDefault(require("./SendInGameLogResult"));
exports.SendInGameLogResult = SendInGameLogResult_1.default;
var SendInGameLogByUserIdResult_1 = tslib_1.__importDefault(require("./SendInGameLogByUserIdResult"));
exports.SendInGameLogByUserIdResult = SendInGameLogByUserIdResult_1.default;
var QueryAccessLogWithTelemetryResult_1 = tslib_1.__importDefault(require("./QueryAccessLogWithTelemetryResult"));
exports.QueryAccessLogWithTelemetryResult = QueryAccessLogWithTelemetryResult_1.default;
var DescribeInsightsResult_1 = tslib_1.__importDefault(require("./DescribeInsightsResult"));
exports.DescribeInsightsResult = DescribeInsightsResult_1.default;
var CreateInsightResult_1 = tslib_1.__importDefault(require("./CreateInsightResult"));
exports.CreateInsightResult = CreateInsightResult_1.default;
var GetInsightResult_1 = tslib_1.__importDefault(require("./GetInsightResult"));
exports.GetInsightResult = GetInsightResult_1.default;
var DeleteInsightResult_1 = tslib_1.__importDefault(require("./DeleteInsightResult"));
exports.DeleteInsightResult = DeleteInsightResult_1.default;
var DescribeFacetModelsResult_1 = tslib_1.__importDefault(require("./DescribeFacetModelsResult"));
exports.DescribeFacetModelsResult = DescribeFacetModelsResult_1.default;
var CreateFacetModelResult_1 = tslib_1.__importDefault(require("./CreateFacetModelResult"));
exports.CreateFacetModelResult = CreateFacetModelResult_1.default;
var GetFacetModelResult_1 = tslib_1.__importDefault(require("./GetFacetModelResult"));
exports.GetFacetModelResult = GetFacetModelResult_1.default;
var UpdateFacetModelResult_1 = tslib_1.__importDefault(require("./UpdateFacetModelResult"));
exports.UpdateFacetModelResult = UpdateFacetModelResult_1.default;
var DeleteFacetModelResult_1 = tslib_1.__importDefault(require("./DeleteFacetModelResult"));
exports.DeleteFacetModelResult = DeleteFacetModelResult_1.default;
var DescribeDashboardsResult_1 = tslib_1.__importDefault(require("./DescribeDashboardsResult"));
exports.DescribeDashboardsResult = DescribeDashboardsResult_1.default;
var CreateDashboardResult_1 = tslib_1.__importDefault(require("./CreateDashboardResult"));
exports.CreateDashboardResult = CreateDashboardResult_1.default;
var GetDashboardResult_1 = tslib_1.__importDefault(require("./GetDashboardResult"));
exports.GetDashboardResult = GetDashboardResult_1.default;
var UpdateDashboardResult_1 = tslib_1.__importDefault(require("./UpdateDashboardResult"));
exports.UpdateDashboardResult = UpdateDashboardResult_1.default;
var DuplicateDashboardResult_1 = tslib_1.__importDefault(require("./DuplicateDashboardResult"));
exports.DuplicateDashboardResult = DuplicateDashboardResult_1.default;
var DeleteDashboardResult_1 = tslib_1.__importDefault(require("./DeleteDashboardResult"));
exports.DeleteDashboardResult = DeleteDashboardResult_1.default;
var QueryLogResult_1 = tslib_1.__importDefault(require("./QueryLogResult"));
exports.QueryLogResult = QueryLogResult_1.default;
var GetLogResult_1 = tslib_1.__importDefault(require("./GetLogResult"));
exports.GetLogResult = GetLogResult_1.default;
var QueryFacetsResult_1 = tslib_1.__importDefault(require("./QueryFacetsResult"));
exports.QueryFacetsResult = QueryFacetsResult_1.default;
var QueryTimeseriesResult_1 = tslib_1.__importDefault(require("./QueryTimeseriesResult"));
exports.QueryTimeseriesResult = QueryTimeseriesResult_1.default;
var GetTraceResult_1 = tslib_1.__importDefault(require("./GetTraceResult"));
exports.GetTraceResult = GetTraceResult_1.default;
var QueryMetricsTimeseriesResult_1 = tslib_1.__importDefault(require("./QueryMetricsTimeseriesResult"));
exports.QueryMetricsTimeseriesResult = QueryMetricsTimeseriesResult_1.default;
var DescribeMetricsResult_1 = tslib_1.__importDefault(require("./DescribeMetricsResult"));
exports.DescribeMetricsResult = DescribeMetricsResult_1.default;
var DescribeLabelValuesResult_1 = tslib_1.__importDefault(require("./DescribeLabelValuesResult"));
exports.DescribeLabelValuesResult = DescribeLabelValuesResult_1.default;
//# sourceMappingURL=index.js.map
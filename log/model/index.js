"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InGameLogTag = exports.MetricModel = exports.Trace = exports.TimeseriesValue = exports.TimeseriesPoint = exports.TimeseriesMetadata = exports.NumericRange = exports.LogEntry = exports.Label = exports.FacetValueCount = exports.Facet = exports.AggregationConfig = exports.Dashboard = exports.FacetModel = exports.Insight = exports.AccessLogWithTelemetry = exports.InGameLog = exports.ExecuteStampTaskLogCount = exports.ExecuteStampTaskLog = exports.ExecuteStampSheetLogCount = exports.ExecuteStampSheetLog = exports.IssueStampSheetLogCount = exports.IssueStampSheetLog = exports.AccessLogCount = exports.AccessLog = exports.Namespace = void 0;
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
var Namespace_1 = tslib_1.__importDefault(require("./Namespace"));
exports.Namespace = Namespace_1.default;
var AccessLog_1 = tslib_1.__importDefault(require("./AccessLog"));
exports.AccessLog = AccessLog_1.default;
var AccessLogCount_1 = tslib_1.__importDefault(require("./AccessLogCount"));
exports.AccessLogCount = AccessLogCount_1.default;
var IssueStampSheetLog_1 = tslib_1.__importDefault(require("./IssueStampSheetLog"));
exports.IssueStampSheetLog = IssueStampSheetLog_1.default;
var IssueStampSheetLogCount_1 = tslib_1.__importDefault(require("./IssueStampSheetLogCount"));
exports.IssueStampSheetLogCount = IssueStampSheetLogCount_1.default;
var ExecuteStampSheetLog_1 = tslib_1.__importDefault(require("./ExecuteStampSheetLog"));
exports.ExecuteStampSheetLog = ExecuteStampSheetLog_1.default;
var ExecuteStampSheetLogCount_1 = tslib_1.__importDefault(require("./ExecuteStampSheetLogCount"));
exports.ExecuteStampSheetLogCount = ExecuteStampSheetLogCount_1.default;
var ExecuteStampTaskLog_1 = tslib_1.__importDefault(require("./ExecuteStampTaskLog"));
exports.ExecuteStampTaskLog = ExecuteStampTaskLog_1.default;
var ExecuteStampTaskLogCount_1 = tslib_1.__importDefault(require("./ExecuteStampTaskLogCount"));
exports.ExecuteStampTaskLogCount = ExecuteStampTaskLogCount_1.default;
var InGameLog_1 = tslib_1.__importDefault(require("./InGameLog"));
exports.InGameLog = InGameLog_1.default;
var AccessLogWithTelemetry_1 = tslib_1.__importDefault(require("./AccessLogWithTelemetry"));
exports.AccessLogWithTelemetry = AccessLogWithTelemetry_1.default;
var Insight_1 = tslib_1.__importDefault(require("./Insight"));
exports.Insight = Insight_1.default;
var FacetModel_1 = tslib_1.__importDefault(require("./FacetModel"));
exports.FacetModel = FacetModel_1.default;
var Dashboard_1 = tslib_1.__importDefault(require("./Dashboard"));
exports.Dashboard = Dashboard_1.default;
var AggregationConfig_1 = tslib_1.__importDefault(require("./AggregationConfig"));
exports.AggregationConfig = AggregationConfig_1.default;
var Facet_1 = tslib_1.__importDefault(require("./Facet"));
exports.Facet = Facet_1.default;
var FacetValueCount_1 = tslib_1.__importDefault(require("./FacetValueCount"));
exports.FacetValueCount = FacetValueCount_1.default;
var Label_1 = tslib_1.__importDefault(require("./Label"));
exports.Label = Label_1.default;
var LogEntry_1 = tslib_1.__importDefault(require("./LogEntry"));
exports.LogEntry = LogEntry_1.default;
var NumericRange_1 = tslib_1.__importDefault(require("./NumericRange"));
exports.NumericRange = NumericRange_1.default;
var TimeseriesMetadata_1 = tslib_1.__importDefault(require("./TimeseriesMetadata"));
exports.TimeseriesMetadata = TimeseriesMetadata_1.default;
var TimeseriesPoint_1 = tslib_1.__importDefault(require("./TimeseriesPoint"));
exports.TimeseriesPoint = TimeseriesPoint_1.default;
var TimeseriesValue_1 = tslib_1.__importDefault(require("./TimeseriesValue"));
exports.TimeseriesValue = TimeseriesValue_1.default;
var Trace_1 = tslib_1.__importDefault(require("./Trace"));
exports.Trace = Trace_1.default;
var MetricModel_1 = tslib_1.__importDefault(require("./MetricModel"));
exports.MetricModel = MetricModel_1.default;
var InGameLogTag_1 = tslib_1.__importDefault(require("./InGameLogTag"));
exports.InGameLogTag = InGameLogTag_1.default;
//# sourceMappingURL=index.js.map
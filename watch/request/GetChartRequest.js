"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetChartRequest = void 0;
var GetChartRequest = /** @class */ (function () {
    function GetChartRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.metrics = null;
        this.grn = null;
        this.queries = null;
        this.by = null;
        this.timeframe = null;
        this.size = null;
        this.format = null;
        this.aggregator = null;
        this.style = null;
        this.title = null;
    }
    GetChartRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetChartRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetChartRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetChartRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetChartRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetChartRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetChartRequest.prototype.getMetrics = function () {
        return this.metrics;
    };
    GetChartRequest.prototype.setMetrics = function (metrics) {
        this.metrics = metrics;
        return this;
    };
    GetChartRequest.prototype.withMetrics = function (metrics) {
        this.metrics = metrics;
        return this;
    };
    GetChartRequest.prototype.getGrn = function () {
        return this.grn;
    };
    GetChartRequest.prototype.setGrn = function (grn) {
        this.grn = grn;
        return this;
    };
    GetChartRequest.prototype.withGrn = function (grn) {
        this.grn = grn;
        return this;
    };
    GetChartRequest.prototype.getQueries = function () {
        return this.queries;
    };
    GetChartRequest.prototype.setQueries = function (queries) {
        this.queries = queries;
        return this;
    };
    GetChartRequest.prototype.withQueries = function (queries) {
        this.queries = queries;
        return this;
    };
    GetChartRequest.prototype.getBy = function () {
        return this.by;
    };
    GetChartRequest.prototype.setBy = function (by) {
        this.by = by;
        return this;
    };
    GetChartRequest.prototype.withBy = function (by) {
        this.by = by;
        return this;
    };
    GetChartRequest.prototype.getTimeframe = function () {
        return this.timeframe;
    };
    GetChartRequest.prototype.setTimeframe = function (timeframe) {
        this.timeframe = timeframe;
        return this;
    };
    GetChartRequest.prototype.withTimeframe = function (timeframe) {
        this.timeframe = timeframe;
        return this;
    };
    GetChartRequest.prototype.getSize = function () {
        return this.size;
    };
    GetChartRequest.prototype.setSize = function (size) {
        this.size = size;
        return this;
    };
    GetChartRequest.prototype.withSize = function (size) {
        this.size = size;
        return this;
    };
    GetChartRequest.prototype.getFormat = function () {
        return this.format;
    };
    GetChartRequest.prototype.setFormat = function (format) {
        this.format = format;
        return this;
    };
    GetChartRequest.prototype.withFormat = function (format) {
        this.format = format;
        return this;
    };
    GetChartRequest.prototype.getAggregator = function () {
        return this.aggregator;
    };
    GetChartRequest.prototype.setAggregator = function (aggregator) {
        this.aggregator = aggregator;
        return this;
    };
    GetChartRequest.prototype.withAggregator = function (aggregator) {
        this.aggregator = aggregator;
        return this;
    };
    GetChartRequest.prototype.getStyle = function () {
        return this.style;
    };
    GetChartRequest.prototype.setStyle = function (style) {
        this.style = style;
        return this;
    };
    GetChartRequest.prototype.withStyle = function (style) {
        this.style = style;
        return this;
    };
    GetChartRequest.prototype.getTitle = function () {
        return this.title;
    };
    GetChartRequest.prototype.setTitle = function (title) {
        this.title = title;
        return this;
    };
    GetChartRequest.prototype.withTitle = function (title) {
        this.title = title;
        return this;
    };
    GetChartRequest.fromDict = function (data) {
        return new GetChartRequest()
            .withMetrics(data["metrics"])
            .withGrn(data["grn"])
            .withQueries(data.queries ?
            data.queries.map(function (item) {
                return item;
            }) : [])
            .withBy(data["by"])
            .withTimeframe(data["timeframe"])
            .withSize(data["size"])
            .withFormat(data["format"])
            .withAggregator(data["aggregator"])
            .withStyle(data["style"])
            .withTitle(data["title"]);
    };
    GetChartRequest.prototype.toDict = function () {
        return {
            "metrics": this.getMetrics(),
            "grn": this.getGrn(),
            "queries": this.getQueries() ?
                this.getQueries().map(function (item) {
                    return item;
                }) : [],
            "by": this.getBy(),
            "timeframe": this.getTimeframe(),
            "size": this.getSize(),
            "format": this.getFormat(),
            "aggregator": this.getAggregator(),
            "style": this.getStyle(),
            "title": this.getTitle(),
        };
    };
    return GetChartRequest;
}());
exports.GetChartRequest = GetChartRequest;
//# sourceMappingURL=GetChartRequest.js.map
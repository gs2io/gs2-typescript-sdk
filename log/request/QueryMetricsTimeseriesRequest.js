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
var tslib_1 = require("tslib");
var Gs2Log = tslib_1.__importStar(require("../model"));
var QueryMetricsTimeseriesRequest = /** @class */ (function () {
    function QueryMetricsTimeseriesRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.begin = null;
        this.end = null;
        this.query = null;
        this.groupBy = null;
        this.aggregations = null;
        this.interval = null;
        this.seriesLimit = null;
        this.orderKey = null;
        this.orderBy = null;
    }
    QueryMetricsTimeseriesRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    QueryMetricsTimeseriesRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    QueryMetricsTimeseriesRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    QueryMetricsTimeseriesRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    QueryMetricsTimeseriesRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    QueryMetricsTimeseriesRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    QueryMetricsTimeseriesRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    QueryMetricsTimeseriesRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    QueryMetricsTimeseriesRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    QueryMetricsTimeseriesRequest.prototype.getBegin = function () {
        return this.begin;
    };
    QueryMetricsTimeseriesRequest.prototype.setBegin = function (begin) {
        this.begin = begin;
        return this;
    };
    QueryMetricsTimeseriesRequest.prototype.withBegin = function (begin) {
        this.begin = begin;
        return this;
    };
    QueryMetricsTimeseriesRequest.prototype.getEnd = function () {
        return this.end;
    };
    QueryMetricsTimeseriesRequest.prototype.setEnd = function (end) {
        this.end = end;
        return this;
    };
    QueryMetricsTimeseriesRequest.prototype.withEnd = function (end) {
        this.end = end;
        return this;
    };
    QueryMetricsTimeseriesRequest.prototype.getQuery = function () {
        return this.query;
    };
    QueryMetricsTimeseriesRequest.prototype.setQuery = function (query) {
        this.query = query;
        return this;
    };
    QueryMetricsTimeseriesRequest.prototype.withQuery = function (query) {
        this.query = query;
        return this;
    };
    QueryMetricsTimeseriesRequest.prototype.getGroupBy = function () {
        return this.groupBy;
    };
    QueryMetricsTimeseriesRequest.prototype.setGroupBy = function (groupBy) {
        this.groupBy = groupBy;
        return this;
    };
    QueryMetricsTimeseriesRequest.prototype.withGroupBy = function (groupBy) {
        this.groupBy = groupBy;
        return this;
    };
    QueryMetricsTimeseriesRequest.prototype.getAggregations = function () {
        return this.aggregations;
    };
    QueryMetricsTimeseriesRequest.prototype.setAggregations = function (aggregations) {
        this.aggregations = aggregations;
        return this;
    };
    QueryMetricsTimeseriesRequest.prototype.withAggregations = function (aggregations) {
        this.aggregations = aggregations;
        return this;
    };
    QueryMetricsTimeseriesRequest.prototype.getInterval = function () {
        return this.interval;
    };
    QueryMetricsTimeseriesRequest.prototype.setInterval = function (interval) {
        this.interval = interval;
        return this;
    };
    QueryMetricsTimeseriesRequest.prototype.withInterval = function (interval) {
        this.interval = interval;
        return this;
    };
    QueryMetricsTimeseriesRequest.prototype.getSeriesLimit = function () {
        return this.seriesLimit;
    };
    QueryMetricsTimeseriesRequest.prototype.setSeriesLimit = function (seriesLimit) {
        this.seriesLimit = seriesLimit;
        return this;
    };
    QueryMetricsTimeseriesRequest.prototype.withSeriesLimit = function (seriesLimit) {
        this.seriesLimit = seriesLimit;
        return this;
    };
    QueryMetricsTimeseriesRequest.prototype.getOrderKey = function () {
        return this.orderKey;
    };
    QueryMetricsTimeseriesRequest.prototype.setOrderKey = function (orderKey) {
        this.orderKey = orderKey;
        return this;
    };
    QueryMetricsTimeseriesRequest.prototype.withOrderKey = function (orderKey) {
        this.orderKey = orderKey;
        return this;
    };
    QueryMetricsTimeseriesRequest.prototype.getOrderBy = function () {
        return this.orderBy;
    };
    QueryMetricsTimeseriesRequest.prototype.setOrderBy = function (orderBy) {
        this.orderBy = orderBy;
        return this;
    };
    QueryMetricsTimeseriesRequest.prototype.withOrderBy = function (orderBy) {
        this.orderBy = orderBy;
        return this;
    };
    QueryMetricsTimeseriesRequest.fromDict = function (data) {
        return new QueryMetricsTimeseriesRequest()
            .withNamespaceName(data["namespaceName"])
            .withBegin(data["begin"])
            .withEnd(data["end"])
            .withQuery(data["query"])
            .withGroupBy(data.groupBy ?
            data.groupBy.map(function (item) {
                return item;
            }) : null)
            .withAggregations(data.aggregations ?
            data.aggregations.map(function (item) {
                return Gs2Log.AggregationConfig.fromDict(item);
            }) : null)
            .withInterval(data["interval"])
            .withSeriesLimit(data["seriesLimit"])
            .withOrderKey(data["orderKey"])
            .withOrderBy(data["orderBy"]);
    };
    QueryMetricsTimeseriesRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "begin": this.getBegin(),
            "end": this.getEnd(),
            "query": this.getQuery(),
            "groupBy": this.getGroupBy() ?
                this.getGroupBy().map(function (item) {
                    return item;
                }) : null,
            "aggregations": this.getAggregations() ?
                this.getAggregations().map(function (item) {
                    return item.toDict();
                }) : null,
            "interval": this.getInterval(),
            "seriesLimit": this.getSeriesLimit(),
            "orderKey": this.getOrderKey(),
            "orderBy": this.getOrderBy(),
        };
    };
    return QueryMetricsTimeseriesRequest;
}());
exports.default = QueryMetricsTimeseriesRequest;
//# sourceMappingURL=QueryMetricsTimeseriesRequest.js.map
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
var QueryTimeseriesRequest = /** @class */ (function () {
    function QueryTimeseriesRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.begin = null;
        this.end = null;
        this.query = null;
        this.groupBy = null;
        this.aggregation = null;
        this.interval = null;
        this.seriesLimit = null;
        this.pageToken = null;
        this.limit = null;
    }
    QueryTimeseriesRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    QueryTimeseriesRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    QueryTimeseriesRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    QueryTimeseriesRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    QueryTimeseriesRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    QueryTimeseriesRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    QueryTimeseriesRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    QueryTimeseriesRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    QueryTimeseriesRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    QueryTimeseriesRequest.prototype.getBegin = function () {
        return this.begin;
    };
    QueryTimeseriesRequest.prototype.setBegin = function (begin) {
        this.begin = begin;
        return this;
    };
    QueryTimeseriesRequest.prototype.withBegin = function (begin) {
        this.begin = begin;
        return this;
    };
    QueryTimeseriesRequest.prototype.getEnd = function () {
        return this.end;
    };
    QueryTimeseriesRequest.prototype.setEnd = function (end) {
        this.end = end;
        return this;
    };
    QueryTimeseriesRequest.prototype.withEnd = function (end) {
        this.end = end;
        return this;
    };
    QueryTimeseriesRequest.prototype.getQuery = function () {
        return this.query;
    };
    QueryTimeseriesRequest.prototype.setQuery = function (query) {
        this.query = query;
        return this;
    };
    QueryTimeseriesRequest.prototype.withQuery = function (query) {
        this.query = query;
        return this;
    };
    QueryTimeseriesRequest.prototype.getGroupBy = function () {
        return this.groupBy;
    };
    QueryTimeseriesRequest.prototype.setGroupBy = function (groupBy) {
        this.groupBy = groupBy;
        return this;
    };
    QueryTimeseriesRequest.prototype.withGroupBy = function (groupBy) {
        this.groupBy = groupBy;
        return this;
    };
    QueryTimeseriesRequest.prototype.getAggregation = function () {
        return this.aggregation;
    };
    QueryTimeseriesRequest.prototype.setAggregation = function (aggregation) {
        this.aggregation = aggregation;
        return this;
    };
    QueryTimeseriesRequest.prototype.withAggregation = function (aggregation) {
        this.aggregation = aggregation;
        return this;
    };
    QueryTimeseriesRequest.prototype.getInterval = function () {
        return this.interval;
    };
    QueryTimeseriesRequest.prototype.setInterval = function (interval) {
        this.interval = interval;
        return this;
    };
    QueryTimeseriesRequest.prototype.withInterval = function (interval) {
        this.interval = interval;
        return this;
    };
    QueryTimeseriesRequest.prototype.getSeriesLimit = function () {
        return this.seriesLimit;
    };
    QueryTimeseriesRequest.prototype.setSeriesLimit = function (seriesLimit) {
        this.seriesLimit = seriesLimit;
        return this;
    };
    QueryTimeseriesRequest.prototype.withSeriesLimit = function (seriesLimit) {
        this.seriesLimit = seriesLimit;
        return this;
    };
    QueryTimeseriesRequest.prototype.getPageToken = function () {
        return this.pageToken;
    };
    QueryTimeseriesRequest.prototype.setPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    QueryTimeseriesRequest.prototype.withPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    QueryTimeseriesRequest.prototype.getLimit = function () {
        return this.limit;
    };
    QueryTimeseriesRequest.prototype.setLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    QueryTimeseriesRequest.prototype.withLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    QueryTimeseriesRequest.fromDict = function (data) {
        return new QueryTimeseriesRequest()
            .withNamespaceName(data["namespaceName"])
            .withBegin(data["begin"])
            .withEnd(data["end"])
            .withQuery(data["query"])
            .withGroupBy(data.groupBy ?
            data.groupBy.map(function (item) {
                return item;
            }) : null)
            .withAggregation(Gs2Log.AggregationConfig.fromDict(data["aggregation"]))
            .withInterval(data["interval"])
            .withSeriesLimit(data["seriesLimit"])
            .withPageToken(data["pageToken"])
            .withLimit(data["limit"]);
    };
    QueryTimeseriesRequest.prototype.toDict = function () {
        var _a;
        return {
            "namespaceName": this.getNamespaceName(),
            "begin": this.getBegin(),
            "end": this.getEnd(),
            "query": this.getQuery(),
            "groupBy": this.getGroupBy() ?
                this.getGroupBy().map(function (item) {
                    return item;
                }) : null,
            "aggregation": (_a = this.getAggregation()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "interval": this.getInterval(),
            "seriesLimit": this.getSeriesLimit(),
            "pageToken": this.getPageToken(),
            "limit": this.getLimit(),
        };
    };
    return QueryTimeseriesRequest;
}());
exports.default = QueryTimeseriesRequest;
//# sourceMappingURL=QueryTimeseriesRequest.js.map
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
var Gs2Watch = tslib_1.__importStar(require("../model"));
var GetChartRequest = /** @class */ (function () {
    function GetChartRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.measure = null;
        this.grn = null;
        this.round = null;
        this.filters = null;
        this.groupBys = null;
        this.countBy = null;
        this.begin = null;
        this.end = null;
        this.pageToken = null;
        this.limit = null;
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
    GetChartRequest.prototype.getMeasure = function () {
        return this.measure;
    };
    GetChartRequest.prototype.setMeasure = function (measure) {
        this.measure = measure;
        return this;
    };
    GetChartRequest.prototype.withMeasure = function (measure) {
        this.measure = measure;
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
    GetChartRequest.prototype.getRound = function () {
        return this.round;
    };
    GetChartRequest.prototype.setRound = function (round) {
        this.round = round;
        return this;
    };
    GetChartRequest.prototype.withRound = function (round) {
        this.round = round;
        return this;
    };
    GetChartRequest.prototype.getFilters = function () {
        return this.filters;
    };
    GetChartRequest.prototype.setFilters = function (filters) {
        this.filters = filters;
        return this;
    };
    GetChartRequest.prototype.withFilters = function (filters) {
        this.filters = filters;
        return this;
    };
    GetChartRequest.prototype.getGroupBys = function () {
        return this.groupBys;
    };
    GetChartRequest.prototype.setGroupBys = function (groupBys) {
        this.groupBys = groupBys;
        return this;
    };
    GetChartRequest.prototype.withGroupBys = function (groupBys) {
        this.groupBys = groupBys;
        return this;
    };
    GetChartRequest.prototype.getCountBy = function () {
        return this.countBy;
    };
    GetChartRequest.prototype.setCountBy = function (countBy) {
        this.countBy = countBy;
        return this;
    };
    GetChartRequest.prototype.withCountBy = function (countBy) {
        this.countBy = countBy;
        return this;
    };
    GetChartRequest.prototype.getBegin = function () {
        return this.begin;
    };
    GetChartRequest.prototype.setBegin = function (begin) {
        this.begin = begin;
        return this;
    };
    GetChartRequest.prototype.withBegin = function (begin) {
        this.begin = begin;
        return this;
    };
    GetChartRequest.prototype.getEnd = function () {
        return this.end;
    };
    GetChartRequest.prototype.setEnd = function (end) {
        this.end = end;
        return this;
    };
    GetChartRequest.prototype.withEnd = function (end) {
        this.end = end;
        return this;
    };
    GetChartRequest.prototype.getPageToken = function () {
        return this.pageToken;
    };
    GetChartRequest.prototype.setPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    GetChartRequest.prototype.withPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    GetChartRequest.prototype.getLimit = function () {
        return this.limit;
    };
    GetChartRequest.prototype.setLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    GetChartRequest.prototype.withLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    GetChartRequest.fromDict = function (data) {
        return new GetChartRequest()
            .withMeasure(data["measure"])
            .withGrn(data["grn"])
            .withRound(data["round"])
            .withFilters(data.filters ?
            data.filters.map(function (item) {
                return Gs2Watch.Filter.fromDict(item);
            }) : null)
            .withGroupBys(data.groupBys ?
            data.groupBys.map(function (item) {
                return item;
            }) : null)
            .withCountBy(data["countBy"])
            .withBegin(data["begin"])
            .withEnd(data["end"])
            .withPageToken(data["pageToken"])
            .withLimit(data["limit"]);
    };
    GetChartRequest.prototype.toDict = function () {
        return {
            "measure": this.getMeasure(),
            "grn": this.getGrn(),
            "round": this.getRound(),
            "filters": this.getFilters() ?
                this.getFilters().map(function (item) {
                    return item.toDict();
                }) : null,
            "groupBys": this.getGroupBys() ?
                this.getGroupBys().map(function (item) {
                    return item;
                }) : null,
            "countBy": this.getCountBy(),
            "begin": this.getBegin(),
            "end": this.getEnd(),
            "pageToken": this.getPageToken(),
            "limit": this.getLimit(),
        };
    };
    return GetChartRequest;
}());
exports.default = GetChartRequest;
//# sourceMappingURL=GetChartRequest.js.map
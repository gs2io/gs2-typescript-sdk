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
var GetDistributionRequest = /** @class */ (function () {
    function GetDistributionRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.measure = null;
        this.grn = null;
        this.filters = null;
        this.groupBys = null;
        this.begin = null;
        this.end = null;
        this.pageToken = null;
        this.limit = null;
    }
    GetDistributionRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetDistributionRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetDistributionRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetDistributionRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetDistributionRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetDistributionRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetDistributionRequest.prototype.getMeasure = function () {
        return this.measure;
    };
    GetDistributionRequest.prototype.setMeasure = function (measure) {
        this.measure = measure;
        return this;
    };
    GetDistributionRequest.prototype.withMeasure = function (measure) {
        this.measure = measure;
        return this;
    };
    GetDistributionRequest.prototype.getGrn = function () {
        return this.grn;
    };
    GetDistributionRequest.prototype.setGrn = function (grn) {
        this.grn = grn;
        return this;
    };
    GetDistributionRequest.prototype.withGrn = function (grn) {
        this.grn = grn;
        return this;
    };
    GetDistributionRequest.prototype.getFilters = function () {
        return this.filters;
    };
    GetDistributionRequest.prototype.setFilters = function (filters) {
        this.filters = filters;
        return this;
    };
    GetDistributionRequest.prototype.withFilters = function (filters) {
        this.filters = filters;
        return this;
    };
    GetDistributionRequest.prototype.getGroupBys = function () {
        return this.groupBys;
    };
    GetDistributionRequest.prototype.setGroupBys = function (groupBys) {
        this.groupBys = groupBys;
        return this;
    };
    GetDistributionRequest.prototype.withGroupBys = function (groupBys) {
        this.groupBys = groupBys;
        return this;
    };
    GetDistributionRequest.prototype.getBegin = function () {
        return this.begin;
    };
    GetDistributionRequest.prototype.setBegin = function (begin) {
        this.begin = begin;
        return this;
    };
    GetDistributionRequest.prototype.withBegin = function (begin) {
        this.begin = begin;
        return this;
    };
    GetDistributionRequest.prototype.getEnd = function () {
        return this.end;
    };
    GetDistributionRequest.prototype.setEnd = function (end) {
        this.end = end;
        return this;
    };
    GetDistributionRequest.prototype.withEnd = function (end) {
        this.end = end;
        return this;
    };
    GetDistributionRequest.prototype.getPageToken = function () {
        return this.pageToken;
    };
    GetDistributionRequest.prototype.setPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    GetDistributionRequest.prototype.withPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    GetDistributionRequest.prototype.getLimit = function () {
        return this.limit;
    };
    GetDistributionRequest.prototype.setLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    GetDistributionRequest.prototype.withLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    GetDistributionRequest.fromDict = function (data) {
        return new GetDistributionRequest()
            .withMeasure(data["measure"])
            .withGrn(data["grn"])
            .withFilters(data.filters ?
            data.filters.map(function (item) {
                return Gs2Watch.Filter.fromDict(item);
            }) : null)
            .withGroupBys(data.groupBys ?
            data.groupBys.map(function (item) {
                return item;
            }) : null)
            .withBegin(data["begin"])
            .withEnd(data["end"])
            .withPageToken(data["pageToken"])
            .withLimit(data["limit"]);
    };
    GetDistributionRequest.prototype.toDict = function () {
        return {
            "measure": this.getMeasure(),
            "grn": this.getGrn(),
            "filters": this.getFilters() ?
                this.getFilters().map(function (item) {
                    return item.toDict();
                }) : null,
            "groupBys": this.getGroupBys() ?
                this.getGroupBys().map(function (item) {
                    return item;
                }) : null,
            "begin": this.getBegin(),
            "end": this.getEnd(),
            "pageToken": this.getPageToken(),
            "limit": this.getLimit(),
        };
    };
    return GetDistributionRequest;
}());
exports.default = GetDistributionRequest;
//# sourceMappingURL=GetDistributionRequest.js.map
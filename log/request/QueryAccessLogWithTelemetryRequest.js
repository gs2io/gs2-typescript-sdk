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
var QueryAccessLogWithTelemetryRequest = /** @class */ (function () {
    function QueryAccessLogWithTelemetryRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.userId = null;
        this.begin = null;
        this.end = null;
        this.longTerm = null;
        this.pageToken = null;
        this.limit = null;
        this.timeOffsetToken = null;
    }
    QueryAccessLogWithTelemetryRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    QueryAccessLogWithTelemetryRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    QueryAccessLogWithTelemetryRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    QueryAccessLogWithTelemetryRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    QueryAccessLogWithTelemetryRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    QueryAccessLogWithTelemetryRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    QueryAccessLogWithTelemetryRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    QueryAccessLogWithTelemetryRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    QueryAccessLogWithTelemetryRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    QueryAccessLogWithTelemetryRequest.prototype.getUserId = function () {
        return this.userId;
    };
    QueryAccessLogWithTelemetryRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    QueryAccessLogWithTelemetryRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    QueryAccessLogWithTelemetryRequest.prototype.getBegin = function () {
        return this.begin;
    };
    QueryAccessLogWithTelemetryRequest.prototype.setBegin = function (begin) {
        this.begin = begin;
        return this;
    };
    QueryAccessLogWithTelemetryRequest.prototype.withBegin = function (begin) {
        this.begin = begin;
        return this;
    };
    QueryAccessLogWithTelemetryRequest.prototype.getEnd = function () {
        return this.end;
    };
    QueryAccessLogWithTelemetryRequest.prototype.setEnd = function (end) {
        this.end = end;
        return this;
    };
    QueryAccessLogWithTelemetryRequest.prototype.withEnd = function (end) {
        this.end = end;
        return this;
    };
    QueryAccessLogWithTelemetryRequest.prototype.getLongTerm = function () {
        return this.longTerm;
    };
    QueryAccessLogWithTelemetryRequest.prototype.setLongTerm = function (longTerm) {
        this.longTerm = longTerm;
        return this;
    };
    QueryAccessLogWithTelemetryRequest.prototype.withLongTerm = function (longTerm) {
        this.longTerm = longTerm;
        return this;
    };
    QueryAccessLogWithTelemetryRequest.prototype.getPageToken = function () {
        return this.pageToken;
    };
    QueryAccessLogWithTelemetryRequest.prototype.setPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    QueryAccessLogWithTelemetryRequest.prototype.withPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    QueryAccessLogWithTelemetryRequest.prototype.getLimit = function () {
        return this.limit;
    };
    QueryAccessLogWithTelemetryRequest.prototype.setLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    QueryAccessLogWithTelemetryRequest.prototype.withLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    QueryAccessLogWithTelemetryRequest.prototype.getTimeOffsetToken = function () {
        return this.timeOffsetToken;
    };
    QueryAccessLogWithTelemetryRequest.prototype.setTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    QueryAccessLogWithTelemetryRequest.prototype.withTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    QueryAccessLogWithTelemetryRequest.fromDict = function (data) {
        return new QueryAccessLogWithTelemetryRequest()
            .withNamespaceName(data["namespaceName"])
            .withUserId(data["userId"])
            .withBegin(data["begin"])
            .withEnd(data["end"])
            .withLongTerm(data["longTerm"])
            .withPageToken(data["pageToken"])
            .withLimit(data["limit"])
            .withTimeOffsetToken(data["timeOffsetToken"]);
    };
    QueryAccessLogWithTelemetryRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "userId": this.getUserId(),
            "begin": this.getBegin(),
            "end": this.getEnd(),
            "longTerm": this.getLongTerm(),
            "pageToken": this.getPageToken(),
            "limit": this.getLimit(),
            "timeOffsetToken": this.getTimeOffsetToken(),
        };
    };
    return QueryAccessLogWithTelemetryRequest;
}());
exports.default = QueryAccessLogWithTelemetryRequest;
//# sourceMappingURL=QueryAccessLogWithTelemetryRequest.js.map
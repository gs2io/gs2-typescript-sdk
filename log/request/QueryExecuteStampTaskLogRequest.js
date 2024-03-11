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
var QueryExecuteStampTaskLogRequest = /** @class */ (function () {
    function QueryExecuteStampTaskLogRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.service = null;
        this.method = null;
        this.userId = null;
        this.action = null;
        this.begin = null;
        this.end = null;
        this.longTerm = null;
        this.pageToken = null;
        this.limit = null;
        this.timeOffsetToken = null;
        this.duplicationAvoider = null;
    }
    QueryExecuteStampTaskLogRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    QueryExecuteStampTaskLogRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    QueryExecuteStampTaskLogRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    QueryExecuteStampTaskLogRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    QueryExecuteStampTaskLogRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    QueryExecuteStampTaskLogRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    QueryExecuteStampTaskLogRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    QueryExecuteStampTaskLogRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    QueryExecuteStampTaskLogRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    QueryExecuteStampTaskLogRequest.prototype.getService = function () {
        return this.service;
    };
    QueryExecuteStampTaskLogRequest.prototype.setService = function (service) {
        this.service = service;
        return this;
    };
    QueryExecuteStampTaskLogRequest.prototype.withService = function (service) {
        this.service = service;
        return this;
    };
    QueryExecuteStampTaskLogRequest.prototype.getMethod = function () {
        return this.method;
    };
    QueryExecuteStampTaskLogRequest.prototype.setMethod = function (method) {
        this.method = method;
        return this;
    };
    QueryExecuteStampTaskLogRequest.prototype.withMethod = function (method) {
        this.method = method;
        return this;
    };
    QueryExecuteStampTaskLogRequest.prototype.getUserId = function () {
        return this.userId;
    };
    QueryExecuteStampTaskLogRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    QueryExecuteStampTaskLogRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    QueryExecuteStampTaskLogRequest.prototype.getAction = function () {
        return this.action;
    };
    QueryExecuteStampTaskLogRequest.prototype.setAction = function (action) {
        this.action = action;
        return this;
    };
    QueryExecuteStampTaskLogRequest.prototype.withAction = function (action) {
        this.action = action;
        return this;
    };
    QueryExecuteStampTaskLogRequest.prototype.getBegin = function () {
        return this.begin;
    };
    QueryExecuteStampTaskLogRequest.prototype.setBegin = function (begin) {
        this.begin = begin;
        return this;
    };
    QueryExecuteStampTaskLogRequest.prototype.withBegin = function (begin) {
        this.begin = begin;
        return this;
    };
    QueryExecuteStampTaskLogRequest.prototype.getEnd = function () {
        return this.end;
    };
    QueryExecuteStampTaskLogRequest.prototype.setEnd = function (end) {
        this.end = end;
        return this;
    };
    QueryExecuteStampTaskLogRequest.prototype.withEnd = function (end) {
        this.end = end;
        return this;
    };
    QueryExecuteStampTaskLogRequest.prototype.getLongTerm = function () {
        return this.longTerm;
    };
    QueryExecuteStampTaskLogRequest.prototype.setLongTerm = function (longTerm) {
        this.longTerm = longTerm;
        return this;
    };
    QueryExecuteStampTaskLogRequest.prototype.withLongTerm = function (longTerm) {
        this.longTerm = longTerm;
        return this;
    };
    QueryExecuteStampTaskLogRequest.prototype.getPageToken = function () {
        return this.pageToken;
    };
    QueryExecuteStampTaskLogRequest.prototype.setPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    QueryExecuteStampTaskLogRequest.prototype.withPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    QueryExecuteStampTaskLogRequest.prototype.getLimit = function () {
        return this.limit;
    };
    QueryExecuteStampTaskLogRequest.prototype.setLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    QueryExecuteStampTaskLogRequest.prototype.withLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    QueryExecuteStampTaskLogRequest.prototype.getTimeOffsetToken = function () {
        return this.timeOffsetToken;
    };
    QueryExecuteStampTaskLogRequest.prototype.setTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    QueryExecuteStampTaskLogRequest.prototype.withTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    QueryExecuteStampTaskLogRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    QueryExecuteStampTaskLogRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    QueryExecuteStampTaskLogRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    QueryExecuteStampTaskLogRequest.fromDict = function (data) {
        return new QueryExecuteStampTaskLogRequest()
            .withNamespaceName(data["namespaceName"])
            .withService(data["service"])
            .withMethod(data["method"])
            .withUserId(data["userId"])
            .withAction(data["action"])
            .withBegin(data["begin"])
            .withEnd(data["end"])
            .withLongTerm(data["longTerm"])
            .withPageToken(data["pageToken"])
            .withLimit(data["limit"])
            .withTimeOffsetToken(data["timeOffsetToken"]);
    };
    QueryExecuteStampTaskLogRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "service": this.getService(),
            "method": this.getMethod(),
            "userId": this.getUserId(),
            "action": this.getAction(),
            "begin": this.getBegin(),
            "end": this.getEnd(),
            "longTerm": this.getLongTerm(),
            "pageToken": this.getPageToken(),
            "limit": this.getLimit(),
            "timeOffsetToken": this.getTimeOffsetToken(),
        };
    };
    return QueryExecuteStampTaskLogRequest;
}());
exports.default = QueryExecuteStampTaskLogRequest;
//# sourceMappingURL=QueryExecuteStampTaskLogRequest.js.map
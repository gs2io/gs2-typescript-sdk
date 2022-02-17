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
var QueryExecuteStampSheetLogRequest = /** @class */ (function () {
    function QueryExecuteStampSheetLogRequest() {
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
    }
    QueryExecuteStampSheetLogRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    QueryExecuteStampSheetLogRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    QueryExecuteStampSheetLogRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    QueryExecuteStampSheetLogRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    QueryExecuteStampSheetLogRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    QueryExecuteStampSheetLogRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    QueryExecuteStampSheetLogRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    QueryExecuteStampSheetLogRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    QueryExecuteStampSheetLogRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    QueryExecuteStampSheetLogRequest.prototype.getService = function () {
        return this.service;
    };
    QueryExecuteStampSheetLogRequest.prototype.setService = function (service) {
        this.service = service;
        return this;
    };
    QueryExecuteStampSheetLogRequest.prototype.withService = function (service) {
        this.service = service;
        return this;
    };
    QueryExecuteStampSheetLogRequest.prototype.getMethod = function () {
        return this.method;
    };
    QueryExecuteStampSheetLogRequest.prototype.setMethod = function (method) {
        this.method = method;
        return this;
    };
    QueryExecuteStampSheetLogRequest.prototype.withMethod = function (method) {
        this.method = method;
        return this;
    };
    QueryExecuteStampSheetLogRequest.prototype.getUserId = function () {
        return this.userId;
    };
    QueryExecuteStampSheetLogRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    QueryExecuteStampSheetLogRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    QueryExecuteStampSheetLogRequest.prototype.getAction = function () {
        return this.action;
    };
    QueryExecuteStampSheetLogRequest.prototype.setAction = function (action) {
        this.action = action;
        return this;
    };
    QueryExecuteStampSheetLogRequest.prototype.withAction = function (action) {
        this.action = action;
        return this;
    };
    QueryExecuteStampSheetLogRequest.prototype.getBegin = function () {
        return this.begin;
    };
    QueryExecuteStampSheetLogRequest.prototype.setBegin = function (begin) {
        this.begin = begin;
        return this;
    };
    QueryExecuteStampSheetLogRequest.prototype.withBegin = function (begin) {
        this.begin = begin;
        return this;
    };
    QueryExecuteStampSheetLogRequest.prototype.getEnd = function () {
        return this.end;
    };
    QueryExecuteStampSheetLogRequest.prototype.setEnd = function (end) {
        this.end = end;
        return this;
    };
    QueryExecuteStampSheetLogRequest.prototype.withEnd = function (end) {
        this.end = end;
        return this;
    };
    QueryExecuteStampSheetLogRequest.prototype.getLongTerm = function () {
        return this.longTerm;
    };
    QueryExecuteStampSheetLogRequest.prototype.setLongTerm = function (longTerm) {
        this.longTerm = longTerm;
        return this;
    };
    QueryExecuteStampSheetLogRequest.prototype.withLongTerm = function (longTerm) {
        this.longTerm = longTerm;
        return this;
    };
    QueryExecuteStampSheetLogRequest.prototype.getPageToken = function () {
        return this.pageToken;
    };
    QueryExecuteStampSheetLogRequest.prototype.setPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    QueryExecuteStampSheetLogRequest.prototype.withPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    QueryExecuteStampSheetLogRequest.prototype.getLimit = function () {
        return this.limit;
    };
    QueryExecuteStampSheetLogRequest.prototype.setLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    QueryExecuteStampSheetLogRequest.prototype.withLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    QueryExecuteStampSheetLogRequest.fromDict = function (data) {
        return new QueryExecuteStampSheetLogRequest()
            .withNamespaceName(data["namespaceName"])
            .withService(data["service"])
            .withMethod(data["method"])
            .withUserId(data["userId"])
            .withAction(data["action"])
            .withBegin(data["begin"])
            .withEnd(data["end"])
            .withLongTerm(data["longTerm"])
            .withPageToken(data["pageToken"])
            .withLimit(data["limit"]);
    };
    QueryExecuteStampSheetLogRequest.prototype.toDict = function () {
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
        };
    };
    return QueryExecuteStampSheetLogRequest;
}());
exports.default = QueryExecuteStampSheetLogRequest;
//# sourceMappingURL=QueryExecuteStampSheetLogRequest.js.map
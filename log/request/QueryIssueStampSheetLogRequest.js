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
var QueryIssueStampSheetLogRequest = /** @class */ (function () {
    function QueryIssueStampSheetLogRequest() {
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
    QueryIssueStampSheetLogRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    QueryIssueStampSheetLogRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    QueryIssueStampSheetLogRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    QueryIssueStampSheetLogRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    QueryIssueStampSheetLogRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    QueryIssueStampSheetLogRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    QueryIssueStampSheetLogRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    QueryIssueStampSheetLogRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    QueryIssueStampSheetLogRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    QueryIssueStampSheetLogRequest.prototype.getService = function () {
        return this.service;
    };
    QueryIssueStampSheetLogRequest.prototype.setService = function (service) {
        this.service = service;
        return this;
    };
    QueryIssueStampSheetLogRequest.prototype.withService = function (service) {
        this.service = service;
        return this;
    };
    QueryIssueStampSheetLogRequest.prototype.getMethod = function () {
        return this.method;
    };
    QueryIssueStampSheetLogRequest.prototype.setMethod = function (method) {
        this.method = method;
        return this;
    };
    QueryIssueStampSheetLogRequest.prototype.withMethod = function (method) {
        this.method = method;
        return this;
    };
    QueryIssueStampSheetLogRequest.prototype.getUserId = function () {
        return this.userId;
    };
    QueryIssueStampSheetLogRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    QueryIssueStampSheetLogRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    QueryIssueStampSheetLogRequest.prototype.getAction = function () {
        return this.action;
    };
    QueryIssueStampSheetLogRequest.prototype.setAction = function (action) {
        this.action = action;
        return this;
    };
    QueryIssueStampSheetLogRequest.prototype.withAction = function (action) {
        this.action = action;
        return this;
    };
    QueryIssueStampSheetLogRequest.prototype.getBegin = function () {
        return this.begin;
    };
    QueryIssueStampSheetLogRequest.prototype.setBegin = function (begin) {
        this.begin = begin;
        return this;
    };
    QueryIssueStampSheetLogRequest.prototype.withBegin = function (begin) {
        this.begin = begin;
        return this;
    };
    QueryIssueStampSheetLogRequest.prototype.getEnd = function () {
        return this.end;
    };
    QueryIssueStampSheetLogRequest.prototype.setEnd = function (end) {
        this.end = end;
        return this;
    };
    QueryIssueStampSheetLogRequest.prototype.withEnd = function (end) {
        this.end = end;
        return this;
    };
    QueryIssueStampSheetLogRequest.prototype.getLongTerm = function () {
        return this.longTerm;
    };
    QueryIssueStampSheetLogRequest.prototype.setLongTerm = function (longTerm) {
        this.longTerm = longTerm;
        return this;
    };
    QueryIssueStampSheetLogRequest.prototype.withLongTerm = function (longTerm) {
        this.longTerm = longTerm;
        return this;
    };
    QueryIssueStampSheetLogRequest.prototype.getPageToken = function () {
        return this.pageToken;
    };
    QueryIssueStampSheetLogRequest.prototype.setPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    QueryIssueStampSheetLogRequest.prototype.withPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    QueryIssueStampSheetLogRequest.prototype.getLimit = function () {
        return this.limit;
    };
    QueryIssueStampSheetLogRequest.prototype.setLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    QueryIssueStampSheetLogRequest.prototype.withLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    QueryIssueStampSheetLogRequest.fromDict = function (data) {
        return new QueryIssueStampSheetLogRequest()
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
    QueryIssueStampSheetLogRequest.prototype.toDict = function () {
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
    return QueryIssueStampSheetLogRequest;
}());
exports.default = QueryIssueStampSheetLogRequest;
//# sourceMappingURL=QueryIssueStampSheetLogRequest.js.map
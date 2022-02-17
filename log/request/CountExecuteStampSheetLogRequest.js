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
var CountExecuteStampSheetLogRequest = /** @class */ (function () {
    function CountExecuteStampSheetLogRequest() {
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
    CountExecuteStampSheetLogRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    CountExecuteStampSheetLogRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    CountExecuteStampSheetLogRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    CountExecuteStampSheetLogRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    CountExecuteStampSheetLogRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    CountExecuteStampSheetLogRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    CountExecuteStampSheetLogRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    CountExecuteStampSheetLogRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    CountExecuteStampSheetLogRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    CountExecuteStampSheetLogRequest.prototype.getService = function () {
        return this.service;
    };
    CountExecuteStampSheetLogRequest.prototype.setService = function (service) {
        this.service = service;
        return this;
    };
    CountExecuteStampSheetLogRequest.prototype.withService = function (service) {
        this.service = service;
        return this;
    };
    CountExecuteStampSheetLogRequest.prototype.getMethod = function () {
        return this.method;
    };
    CountExecuteStampSheetLogRequest.prototype.setMethod = function (method) {
        this.method = method;
        return this;
    };
    CountExecuteStampSheetLogRequest.prototype.withMethod = function (method) {
        this.method = method;
        return this;
    };
    CountExecuteStampSheetLogRequest.prototype.getUserId = function () {
        return this.userId;
    };
    CountExecuteStampSheetLogRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    CountExecuteStampSheetLogRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    CountExecuteStampSheetLogRequest.prototype.getAction = function () {
        return this.action;
    };
    CountExecuteStampSheetLogRequest.prototype.setAction = function (action) {
        this.action = action;
        return this;
    };
    CountExecuteStampSheetLogRequest.prototype.withAction = function (action) {
        this.action = action;
        return this;
    };
    CountExecuteStampSheetLogRequest.prototype.getBegin = function () {
        return this.begin;
    };
    CountExecuteStampSheetLogRequest.prototype.setBegin = function (begin) {
        this.begin = begin;
        return this;
    };
    CountExecuteStampSheetLogRequest.prototype.withBegin = function (begin) {
        this.begin = begin;
        return this;
    };
    CountExecuteStampSheetLogRequest.prototype.getEnd = function () {
        return this.end;
    };
    CountExecuteStampSheetLogRequest.prototype.setEnd = function (end) {
        this.end = end;
        return this;
    };
    CountExecuteStampSheetLogRequest.prototype.withEnd = function (end) {
        this.end = end;
        return this;
    };
    CountExecuteStampSheetLogRequest.prototype.getLongTerm = function () {
        return this.longTerm;
    };
    CountExecuteStampSheetLogRequest.prototype.setLongTerm = function (longTerm) {
        this.longTerm = longTerm;
        return this;
    };
    CountExecuteStampSheetLogRequest.prototype.withLongTerm = function (longTerm) {
        this.longTerm = longTerm;
        return this;
    };
    CountExecuteStampSheetLogRequest.prototype.getPageToken = function () {
        return this.pageToken;
    };
    CountExecuteStampSheetLogRequest.prototype.setPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    CountExecuteStampSheetLogRequest.prototype.withPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    CountExecuteStampSheetLogRequest.prototype.getLimit = function () {
        return this.limit;
    };
    CountExecuteStampSheetLogRequest.prototype.setLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    CountExecuteStampSheetLogRequest.prototype.withLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    CountExecuteStampSheetLogRequest.fromDict = function (data) {
        return new CountExecuteStampSheetLogRequest()
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
    CountExecuteStampSheetLogRequest.prototype.toDict = function () {
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
    return CountExecuteStampSheetLogRequest;
}());
exports.default = CountExecuteStampSheetLogRequest;
//# sourceMappingURL=CountExecuteStampSheetLogRequest.js.map
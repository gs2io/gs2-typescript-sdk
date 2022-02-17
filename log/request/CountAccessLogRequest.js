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
var CountAccessLogRequest = /** @class */ (function () {
    function CountAccessLogRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.service = null;
        this.method = null;
        this.userId = null;
        this.begin = null;
        this.end = null;
        this.longTerm = null;
        this.pageToken = null;
        this.limit = null;
    }
    CountAccessLogRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    CountAccessLogRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    CountAccessLogRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    CountAccessLogRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    CountAccessLogRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    CountAccessLogRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    CountAccessLogRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    CountAccessLogRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    CountAccessLogRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    CountAccessLogRequest.prototype.getService = function () {
        return this.service;
    };
    CountAccessLogRequest.prototype.setService = function (service) {
        this.service = service;
        return this;
    };
    CountAccessLogRequest.prototype.withService = function (service) {
        this.service = service;
        return this;
    };
    CountAccessLogRequest.prototype.getMethod = function () {
        return this.method;
    };
    CountAccessLogRequest.prototype.setMethod = function (method) {
        this.method = method;
        return this;
    };
    CountAccessLogRequest.prototype.withMethod = function (method) {
        this.method = method;
        return this;
    };
    CountAccessLogRequest.prototype.getUserId = function () {
        return this.userId;
    };
    CountAccessLogRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    CountAccessLogRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    CountAccessLogRequest.prototype.getBegin = function () {
        return this.begin;
    };
    CountAccessLogRequest.prototype.setBegin = function (begin) {
        this.begin = begin;
        return this;
    };
    CountAccessLogRequest.prototype.withBegin = function (begin) {
        this.begin = begin;
        return this;
    };
    CountAccessLogRequest.prototype.getEnd = function () {
        return this.end;
    };
    CountAccessLogRequest.prototype.setEnd = function (end) {
        this.end = end;
        return this;
    };
    CountAccessLogRequest.prototype.withEnd = function (end) {
        this.end = end;
        return this;
    };
    CountAccessLogRequest.prototype.getLongTerm = function () {
        return this.longTerm;
    };
    CountAccessLogRequest.prototype.setLongTerm = function (longTerm) {
        this.longTerm = longTerm;
        return this;
    };
    CountAccessLogRequest.prototype.withLongTerm = function (longTerm) {
        this.longTerm = longTerm;
        return this;
    };
    CountAccessLogRequest.prototype.getPageToken = function () {
        return this.pageToken;
    };
    CountAccessLogRequest.prototype.setPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    CountAccessLogRequest.prototype.withPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    CountAccessLogRequest.prototype.getLimit = function () {
        return this.limit;
    };
    CountAccessLogRequest.prototype.setLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    CountAccessLogRequest.prototype.withLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    CountAccessLogRequest.fromDict = function (data) {
        return new CountAccessLogRequest()
            .withNamespaceName(data["namespaceName"])
            .withService(data["service"])
            .withMethod(data["method"])
            .withUserId(data["userId"])
            .withBegin(data["begin"])
            .withEnd(data["end"])
            .withLongTerm(data["longTerm"])
            .withPageToken(data["pageToken"])
            .withLimit(data["limit"]);
    };
    CountAccessLogRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "service": this.getService(),
            "method": this.getMethod(),
            "userId": this.getUserId(),
            "begin": this.getBegin(),
            "end": this.getEnd(),
            "longTerm": this.getLongTerm(),
            "pageToken": this.getPageToken(),
            "limit": this.getLimit(),
        };
    };
    return CountAccessLogRequest;
}());
exports.default = CountAccessLogRequest;
//# sourceMappingURL=CountAccessLogRequest.js.map
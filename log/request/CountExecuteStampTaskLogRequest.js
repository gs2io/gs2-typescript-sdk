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
var CountExecuteStampTaskLogRequest = /** @class */ (function () {
    function CountExecuteStampTaskLogRequest() {
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
    CountExecuteStampTaskLogRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    CountExecuteStampTaskLogRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    CountExecuteStampTaskLogRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    CountExecuteStampTaskLogRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    CountExecuteStampTaskLogRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    CountExecuteStampTaskLogRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    CountExecuteStampTaskLogRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    CountExecuteStampTaskLogRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    CountExecuteStampTaskLogRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    CountExecuteStampTaskLogRequest.prototype.getService = function () {
        return this.service;
    };
    CountExecuteStampTaskLogRequest.prototype.setService = function (service) {
        this.service = service;
        return this;
    };
    CountExecuteStampTaskLogRequest.prototype.withService = function (service) {
        this.service = service;
        return this;
    };
    CountExecuteStampTaskLogRequest.prototype.getMethod = function () {
        return this.method;
    };
    CountExecuteStampTaskLogRequest.prototype.setMethod = function (method) {
        this.method = method;
        return this;
    };
    CountExecuteStampTaskLogRequest.prototype.withMethod = function (method) {
        this.method = method;
        return this;
    };
    CountExecuteStampTaskLogRequest.prototype.getUserId = function () {
        return this.userId;
    };
    CountExecuteStampTaskLogRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    CountExecuteStampTaskLogRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    CountExecuteStampTaskLogRequest.prototype.getAction = function () {
        return this.action;
    };
    CountExecuteStampTaskLogRequest.prototype.setAction = function (action) {
        this.action = action;
        return this;
    };
    CountExecuteStampTaskLogRequest.prototype.withAction = function (action) {
        this.action = action;
        return this;
    };
    CountExecuteStampTaskLogRequest.prototype.getBegin = function () {
        return this.begin;
    };
    CountExecuteStampTaskLogRequest.prototype.setBegin = function (begin) {
        this.begin = begin;
        return this;
    };
    CountExecuteStampTaskLogRequest.prototype.withBegin = function (begin) {
        this.begin = begin;
        return this;
    };
    CountExecuteStampTaskLogRequest.prototype.getEnd = function () {
        return this.end;
    };
    CountExecuteStampTaskLogRequest.prototype.setEnd = function (end) {
        this.end = end;
        return this;
    };
    CountExecuteStampTaskLogRequest.prototype.withEnd = function (end) {
        this.end = end;
        return this;
    };
    CountExecuteStampTaskLogRequest.prototype.getLongTerm = function () {
        return this.longTerm;
    };
    CountExecuteStampTaskLogRequest.prototype.setLongTerm = function (longTerm) {
        this.longTerm = longTerm;
        return this;
    };
    CountExecuteStampTaskLogRequest.prototype.withLongTerm = function (longTerm) {
        this.longTerm = longTerm;
        return this;
    };
    CountExecuteStampTaskLogRequest.prototype.getPageToken = function () {
        return this.pageToken;
    };
    CountExecuteStampTaskLogRequest.prototype.setPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    CountExecuteStampTaskLogRequest.prototype.withPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    CountExecuteStampTaskLogRequest.prototype.getLimit = function () {
        return this.limit;
    };
    CountExecuteStampTaskLogRequest.prototype.setLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    CountExecuteStampTaskLogRequest.prototype.withLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    CountExecuteStampTaskLogRequest.fromDict = function (data) {
        return new CountExecuteStampTaskLogRequest()
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
    CountExecuteStampTaskLogRequest.prototype.toDict = function () {
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
    return CountExecuteStampTaskLogRequest;
}());
export default CountExecuteStampTaskLogRequest;
//# sourceMappingURL=CountExecuteStampTaskLogRequest.js.map
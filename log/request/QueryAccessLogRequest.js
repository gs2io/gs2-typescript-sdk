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
var QueryAccessLogRequest = /** @class */ (function () {
    function QueryAccessLogRequest() {
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
    QueryAccessLogRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    QueryAccessLogRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    QueryAccessLogRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    QueryAccessLogRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    QueryAccessLogRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    QueryAccessLogRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    QueryAccessLogRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    QueryAccessLogRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    QueryAccessLogRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    QueryAccessLogRequest.prototype.getService = function () {
        return this.service;
    };
    QueryAccessLogRequest.prototype.setService = function (service) {
        this.service = service;
        return this;
    };
    QueryAccessLogRequest.prototype.withService = function (service) {
        this.service = service;
        return this;
    };
    QueryAccessLogRequest.prototype.getMethod = function () {
        return this.method;
    };
    QueryAccessLogRequest.prototype.setMethod = function (method) {
        this.method = method;
        return this;
    };
    QueryAccessLogRequest.prototype.withMethod = function (method) {
        this.method = method;
        return this;
    };
    QueryAccessLogRequest.prototype.getUserId = function () {
        return this.userId;
    };
    QueryAccessLogRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    QueryAccessLogRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    QueryAccessLogRequest.prototype.getBegin = function () {
        return this.begin;
    };
    QueryAccessLogRequest.prototype.setBegin = function (begin) {
        this.begin = begin;
        return this;
    };
    QueryAccessLogRequest.prototype.withBegin = function (begin) {
        this.begin = begin;
        return this;
    };
    QueryAccessLogRequest.prototype.getEnd = function () {
        return this.end;
    };
    QueryAccessLogRequest.prototype.setEnd = function (end) {
        this.end = end;
        return this;
    };
    QueryAccessLogRequest.prototype.withEnd = function (end) {
        this.end = end;
        return this;
    };
    QueryAccessLogRequest.prototype.getLongTerm = function () {
        return this.longTerm;
    };
    QueryAccessLogRequest.prototype.setLongTerm = function (longTerm) {
        this.longTerm = longTerm;
        return this;
    };
    QueryAccessLogRequest.prototype.withLongTerm = function (longTerm) {
        this.longTerm = longTerm;
        return this;
    };
    QueryAccessLogRequest.prototype.getPageToken = function () {
        return this.pageToken;
    };
    QueryAccessLogRequest.prototype.setPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    QueryAccessLogRequest.prototype.withPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    QueryAccessLogRequest.prototype.getLimit = function () {
        return this.limit;
    };
    QueryAccessLogRequest.prototype.setLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    QueryAccessLogRequest.prototype.withLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    QueryAccessLogRequest.fromDict = function (data) {
        return new QueryAccessLogRequest()
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
    QueryAccessLogRequest.prototype.toDict = function () {
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
    return QueryAccessLogRequest;
}());
export default QueryAccessLogRequest;
//# sourceMappingURL=QueryAccessLogRequest.js.map
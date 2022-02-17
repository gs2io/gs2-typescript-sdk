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
var CountIssueStampSheetLogRequest = /** @class */ (function () {
    function CountIssueStampSheetLogRequest() {
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
    CountIssueStampSheetLogRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    CountIssueStampSheetLogRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    CountIssueStampSheetLogRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    CountIssueStampSheetLogRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    CountIssueStampSheetLogRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    CountIssueStampSheetLogRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    CountIssueStampSheetLogRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    CountIssueStampSheetLogRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    CountIssueStampSheetLogRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    CountIssueStampSheetLogRequest.prototype.getService = function () {
        return this.service;
    };
    CountIssueStampSheetLogRequest.prototype.setService = function (service) {
        this.service = service;
        return this;
    };
    CountIssueStampSheetLogRequest.prototype.withService = function (service) {
        this.service = service;
        return this;
    };
    CountIssueStampSheetLogRequest.prototype.getMethod = function () {
        return this.method;
    };
    CountIssueStampSheetLogRequest.prototype.setMethod = function (method) {
        this.method = method;
        return this;
    };
    CountIssueStampSheetLogRequest.prototype.withMethod = function (method) {
        this.method = method;
        return this;
    };
    CountIssueStampSheetLogRequest.prototype.getUserId = function () {
        return this.userId;
    };
    CountIssueStampSheetLogRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    CountIssueStampSheetLogRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    CountIssueStampSheetLogRequest.prototype.getAction = function () {
        return this.action;
    };
    CountIssueStampSheetLogRequest.prototype.setAction = function (action) {
        this.action = action;
        return this;
    };
    CountIssueStampSheetLogRequest.prototype.withAction = function (action) {
        this.action = action;
        return this;
    };
    CountIssueStampSheetLogRequest.prototype.getBegin = function () {
        return this.begin;
    };
    CountIssueStampSheetLogRequest.prototype.setBegin = function (begin) {
        this.begin = begin;
        return this;
    };
    CountIssueStampSheetLogRequest.prototype.withBegin = function (begin) {
        this.begin = begin;
        return this;
    };
    CountIssueStampSheetLogRequest.prototype.getEnd = function () {
        return this.end;
    };
    CountIssueStampSheetLogRequest.prototype.setEnd = function (end) {
        this.end = end;
        return this;
    };
    CountIssueStampSheetLogRequest.prototype.withEnd = function (end) {
        this.end = end;
        return this;
    };
    CountIssueStampSheetLogRequest.prototype.getLongTerm = function () {
        return this.longTerm;
    };
    CountIssueStampSheetLogRequest.prototype.setLongTerm = function (longTerm) {
        this.longTerm = longTerm;
        return this;
    };
    CountIssueStampSheetLogRequest.prototype.withLongTerm = function (longTerm) {
        this.longTerm = longTerm;
        return this;
    };
    CountIssueStampSheetLogRequest.prototype.getPageToken = function () {
        return this.pageToken;
    };
    CountIssueStampSheetLogRequest.prototype.setPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    CountIssueStampSheetLogRequest.prototype.withPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    CountIssueStampSheetLogRequest.prototype.getLimit = function () {
        return this.limit;
    };
    CountIssueStampSheetLogRequest.prototype.setLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    CountIssueStampSheetLogRequest.prototype.withLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    CountIssueStampSheetLogRequest.fromDict = function (data) {
        return new CountIssueStampSheetLogRequest()
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
    CountIssueStampSheetLogRequest.prototype.toDict = function () {
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
    return CountIssueStampSheetLogRequest;
}());
export default CountIssueStampSheetLogRequest;
//# sourceMappingURL=CountIssueStampSheetLogRequest.js.map
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
var Gs2Log = tslib_1.__importStar(require("../model"));
var QueryInGameLogRequest = /** @class */ (function () {
    function QueryInGameLogRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.userId = null;
        this.tags = null;
        this.begin = null;
        this.end = null;
        this.longTerm = null;
        this.pageToken = null;
        this.limit = null;
        this.timeOffsetToken = null;
        this.duplicationAvoider = null;
    }
    QueryInGameLogRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    QueryInGameLogRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    QueryInGameLogRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    QueryInGameLogRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    QueryInGameLogRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    QueryInGameLogRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    QueryInGameLogRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    QueryInGameLogRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    QueryInGameLogRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    QueryInGameLogRequest.prototype.getUserId = function () {
        return this.userId;
    };
    QueryInGameLogRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    QueryInGameLogRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    QueryInGameLogRequest.prototype.getTags = function () {
        return this.tags;
    };
    QueryInGameLogRequest.prototype.setTags = function (tags) {
        this.tags = tags;
        return this;
    };
    QueryInGameLogRequest.prototype.withTags = function (tags) {
        this.tags = tags;
        return this;
    };
    QueryInGameLogRequest.prototype.getBegin = function () {
        return this.begin;
    };
    QueryInGameLogRequest.prototype.setBegin = function (begin) {
        this.begin = begin;
        return this;
    };
    QueryInGameLogRequest.prototype.withBegin = function (begin) {
        this.begin = begin;
        return this;
    };
    QueryInGameLogRequest.prototype.getEnd = function () {
        return this.end;
    };
    QueryInGameLogRequest.prototype.setEnd = function (end) {
        this.end = end;
        return this;
    };
    QueryInGameLogRequest.prototype.withEnd = function (end) {
        this.end = end;
        return this;
    };
    QueryInGameLogRequest.prototype.getLongTerm = function () {
        return this.longTerm;
    };
    QueryInGameLogRequest.prototype.setLongTerm = function (longTerm) {
        this.longTerm = longTerm;
        return this;
    };
    QueryInGameLogRequest.prototype.withLongTerm = function (longTerm) {
        this.longTerm = longTerm;
        return this;
    };
    QueryInGameLogRequest.prototype.getPageToken = function () {
        return this.pageToken;
    };
    QueryInGameLogRequest.prototype.setPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    QueryInGameLogRequest.prototype.withPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    QueryInGameLogRequest.prototype.getLimit = function () {
        return this.limit;
    };
    QueryInGameLogRequest.prototype.setLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    QueryInGameLogRequest.prototype.withLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    QueryInGameLogRequest.prototype.getTimeOffsetToken = function () {
        return this.timeOffsetToken;
    };
    QueryInGameLogRequest.prototype.setTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    QueryInGameLogRequest.prototype.withTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    QueryInGameLogRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    QueryInGameLogRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    QueryInGameLogRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    QueryInGameLogRequest.fromDict = function (data) {
        return new QueryInGameLogRequest()
            .withNamespaceName(data["namespaceName"])
            .withUserId(data["userId"])
            .withTags(data.tags ?
            data.tags.map(function (item) {
                return Gs2Log.InGameLogTag.fromDict(item);
            }) : null)
            .withBegin(data["begin"])
            .withEnd(data["end"])
            .withLongTerm(data["longTerm"])
            .withPageToken(data["pageToken"])
            .withLimit(data["limit"])
            .withTimeOffsetToken(data["timeOffsetToken"]);
    };
    QueryInGameLogRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "userId": this.getUserId(),
            "tags": this.getTags() ?
                this.getTags().map(function (item) {
                    return item.toDict();
                }) : null,
            "begin": this.getBegin(),
            "end": this.getEnd(),
            "longTerm": this.getLongTerm(),
            "pageToken": this.getPageToken(),
            "limit": this.getLimit(),
            "timeOffsetToken": this.getTimeOffsetToken(),
        };
    };
    return QueryInGameLogRequest;
}());
exports.default = QueryInGameLogRequest;
//# sourceMappingURL=QueryInGameLogRequest.js.map
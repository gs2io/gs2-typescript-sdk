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
var DescribeReceiptsRequest = /** @class */ (function () {
    function DescribeReceiptsRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.userId = null;
        this.slot = null;
        this.begin = null;
        this.end = null;
        this.pageToken = null;
        this.limit = null;
    }
    DescribeReceiptsRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DescribeReceiptsRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeReceiptsRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeReceiptsRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DescribeReceiptsRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeReceiptsRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeReceiptsRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DescribeReceiptsRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeReceiptsRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeReceiptsRequest.prototype.getUserId = function () {
        return this.userId;
    };
    DescribeReceiptsRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    DescribeReceiptsRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    DescribeReceiptsRequest.prototype.getSlot = function () {
        return this.slot;
    };
    DescribeReceiptsRequest.prototype.setSlot = function (slot) {
        this.slot = slot;
        return this;
    };
    DescribeReceiptsRequest.prototype.withSlot = function (slot) {
        this.slot = slot;
        return this;
    };
    DescribeReceiptsRequest.prototype.getBegin = function () {
        return this.begin;
    };
    DescribeReceiptsRequest.prototype.setBegin = function (begin) {
        this.begin = begin;
        return this;
    };
    DescribeReceiptsRequest.prototype.withBegin = function (begin) {
        this.begin = begin;
        return this;
    };
    DescribeReceiptsRequest.prototype.getEnd = function () {
        return this.end;
    };
    DescribeReceiptsRequest.prototype.setEnd = function (end) {
        this.end = end;
        return this;
    };
    DescribeReceiptsRequest.prototype.withEnd = function (end) {
        this.end = end;
        return this;
    };
    DescribeReceiptsRequest.prototype.getPageToken = function () {
        return this.pageToken;
    };
    DescribeReceiptsRequest.prototype.setPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeReceiptsRequest.prototype.withPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeReceiptsRequest.prototype.getLimit = function () {
        return this.limit;
    };
    DescribeReceiptsRequest.prototype.setLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeReceiptsRequest.prototype.withLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeReceiptsRequest.fromDict = function (data) {
        return new DescribeReceiptsRequest()
            .withNamespaceName(data["namespaceName"])
            .withUserId(data["userId"])
            .withSlot(data["slot"])
            .withBegin(data["begin"])
            .withEnd(data["end"])
            .withPageToken(data["pageToken"])
            .withLimit(data["limit"]);
    };
    DescribeReceiptsRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "userId": this.getUserId(),
            "slot": this.getSlot(),
            "begin": this.getBegin(),
            "end": this.getEnd(),
            "pageToken": this.getPageToken(),
            "limit": this.getLimit(),
        };
    };
    return DescribeReceiptsRequest;
}());
exports.default = DescribeReceiptsRequest;
//# sourceMappingURL=DescribeReceiptsRequest.js.map
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
var DescribeRandomShowcaseSalesItemsByUserIdRequest = /** @class */ (function () {
    function DescribeRandomShowcaseSalesItemsByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.showcaseName = null;
        this.userId = null;
    }
    DescribeRandomShowcaseSalesItemsByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DescribeRandomShowcaseSalesItemsByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeRandomShowcaseSalesItemsByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeRandomShowcaseSalesItemsByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DescribeRandomShowcaseSalesItemsByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeRandomShowcaseSalesItemsByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeRandomShowcaseSalesItemsByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DescribeRandomShowcaseSalesItemsByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeRandomShowcaseSalesItemsByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeRandomShowcaseSalesItemsByUserIdRequest.prototype.getShowcaseName = function () {
        return this.showcaseName;
    };
    DescribeRandomShowcaseSalesItemsByUserIdRequest.prototype.setShowcaseName = function (showcaseName) {
        this.showcaseName = showcaseName;
        return this;
    };
    DescribeRandomShowcaseSalesItemsByUserIdRequest.prototype.withShowcaseName = function (showcaseName) {
        this.showcaseName = showcaseName;
        return this;
    };
    DescribeRandomShowcaseSalesItemsByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    DescribeRandomShowcaseSalesItemsByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    DescribeRandomShowcaseSalesItemsByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    DescribeRandomShowcaseSalesItemsByUserIdRequest.fromDict = function (data) {
        return new DescribeRandomShowcaseSalesItemsByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withShowcaseName(data["showcaseName"])
            .withUserId(data["userId"]);
    };
    DescribeRandomShowcaseSalesItemsByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "showcaseName": this.getShowcaseName(),
            "userId": this.getUserId(),
        };
    };
    return DescribeRandomShowcaseSalesItemsByUserIdRequest;
}());
exports.default = DescribeRandomShowcaseSalesItemsByUserIdRequest;
//# sourceMappingURL=DescribeRandomShowcaseSalesItemsByUserIdRequest.js.map
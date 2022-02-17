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
var DescribeSubscribesByCategoryNameAndUserIdRequest = /** @class */ (function () {
    function DescribeSubscribesByCategoryNameAndUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.categoryName = null;
        this.userId = null;
    }
    DescribeSubscribesByCategoryNameAndUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DescribeSubscribesByCategoryNameAndUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeSubscribesByCategoryNameAndUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeSubscribesByCategoryNameAndUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DescribeSubscribesByCategoryNameAndUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeSubscribesByCategoryNameAndUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeSubscribesByCategoryNameAndUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DescribeSubscribesByCategoryNameAndUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeSubscribesByCategoryNameAndUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeSubscribesByCategoryNameAndUserIdRequest.prototype.getCategoryName = function () {
        return this.categoryName;
    };
    DescribeSubscribesByCategoryNameAndUserIdRequest.prototype.setCategoryName = function (categoryName) {
        this.categoryName = categoryName;
        return this;
    };
    DescribeSubscribesByCategoryNameAndUserIdRequest.prototype.withCategoryName = function (categoryName) {
        this.categoryName = categoryName;
        return this;
    };
    DescribeSubscribesByCategoryNameAndUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    DescribeSubscribesByCategoryNameAndUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    DescribeSubscribesByCategoryNameAndUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    DescribeSubscribesByCategoryNameAndUserIdRequest.fromDict = function (data) {
        return new DescribeSubscribesByCategoryNameAndUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withCategoryName(data["categoryName"])
            .withUserId(data["userId"]);
    };
    DescribeSubscribesByCategoryNameAndUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "categoryName": this.getCategoryName(),
            "userId": this.getUserId(),
        };
    };
    return DescribeSubscribesByCategoryNameAndUserIdRequest;
}());
exports.default = DescribeSubscribesByCategoryNameAndUserIdRequest;
//# sourceMappingURL=DescribeSubscribesByCategoryNameAndUserIdRequest.js.map
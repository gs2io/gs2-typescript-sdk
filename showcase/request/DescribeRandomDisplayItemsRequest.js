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
var DescribeRandomDisplayItemsRequest = /** @class */ (function () {
    function DescribeRandomDisplayItemsRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.showcaseName = null;
        this.accessToken = null;
    }
    DescribeRandomDisplayItemsRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DescribeRandomDisplayItemsRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeRandomDisplayItemsRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeRandomDisplayItemsRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DescribeRandomDisplayItemsRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeRandomDisplayItemsRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeRandomDisplayItemsRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DescribeRandomDisplayItemsRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeRandomDisplayItemsRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeRandomDisplayItemsRequest.prototype.getShowcaseName = function () {
        return this.showcaseName;
    };
    DescribeRandomDisplayItemsRequest.prototype.setShowcaseName = function (showcaseName) {
        this.showcaseName = showcaseName;
        return this;
    };
    DescribeRandomDisplayItemsRequest.prototype.withShowcaseName = function (showcaseName) {
        this.showcaseName = showcaseName;
        return this;
    };
    DescribeRandomDisplayItemsRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    DescribeRandomDisplayItemsRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    DescribeRandomDisplayItemsRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    DescribeRandomDisplayItemsRequest.fromDict = function (data) {
        return new DescribeRandomDisplayItemsRequest()
            .withNamespaceName(data["namespaceName"])
            .withShowcaseName(data["showcaseName"])
            .withAccessToken(data["accessToken"]);
    };
    DescribeRandomDisplayItemsRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "showcaseName": this.getShowcaseName(),
            "accessToken": this.getAccessToken(),
        };
    };
    return DescribeRandomDisplayItemsRequest;
}());
exports.default = DescribeRandomDisplayItemsRequest;
//# sourceMappingURL=DescribeRandomDisplayItemsRequest.js.map
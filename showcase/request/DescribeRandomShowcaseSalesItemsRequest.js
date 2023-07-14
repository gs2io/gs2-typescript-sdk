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
var DescribeRandomShowcaseSalesItemsRequest = /** @class */ (function () {
    function DescribeRandomShowcaseSalesItemsRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.showcaseName = null;
        this.accessToken = null;
    }
    DescribeRandomShowcaseSalesItemsRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DescribeRandomShowcaseSalesItemsRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeRandomShowcaseSalesItemsRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeRandomShowcaseSalesItemsRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DescribeRandomShowcaseSalesItemsRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeRandomShowcaseSalesItemsRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeRandomShowcaseSalesItemsRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DescribeRandomShowcaseSalesItemsRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeRandomShowcaseSalesItemsRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeRandomShowcaseSalesItemsRequest.prototype.getShowcaseName = function () {
        return this.showcaseName;
    };
    DescribeRandomShowcaseSalesItemsRequest.prototype.setShowcaseName = function (showcaseName) {
        this.showcaseName = showcaseName;
        return this;
    };
    DescribeRandomShowcaseSalesItemsRequest.prototype.withShowcaseName = function (showcaseName) {
        this.showcaseName = showcaseName;
        return this;
    };
    DescribeRandomShowcaseSalesItemsRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    DescribeRandomShowcaseSalesItemsRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    DescribeRandomShowcaseSalesItemsRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    DescribeRandomShowcaseSalesItemsRequest.fromDict = function (data) {
        return new DescribeRandomShowcaseSalesItemsRequest()
            .withNamespaceName(data["namespaceName"])
            .withShowcaseName(data["showcaseName"])
            .withAccessToken(data["accessToken"]);
    };
    DescribeRandomShowcaseSalesItemsRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "showcaseName": this.getShowcaseName(),
            "accessToken": this.getAccessToken(),
        };
    };
    return DescribeRandomShowcaseSalesItemsRequest;
}());
exports.default = DescribeRandomShowcaseSalesItemsRequest;
//# sourceMappingURL=DescribeRandomShowcaseSalesItemsRequest.js.map
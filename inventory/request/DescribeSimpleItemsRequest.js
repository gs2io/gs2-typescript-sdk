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
var DescribeSimpleItemsRequest = /** @class */ (function () {
    function DescribeSimpleItemsRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.inventoryName = null;
        this.accessToken = null;
        this.pageToken = null;
        this.limit = null;
    }
    DescribeSimpleItemsRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DescribeSimpleItemsRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeSimpleItemsRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeSimpleItemsRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DescribeSimpleItemsRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeSimpleItemsRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeSimpleItemsRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DescribeSimpleItemsRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeSimpleItemsRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeSimpleItemsRequest.prototype.getInventoryName = function () {
        return this.inventoryName;
    };
    DescribeSimpleItemsRequest.prototype.setInventoryName = function (inventoryName) {
        this.inventoryName = inventoryName;
        return this;
    };
    DescribeSimpleItemsRequest.prototype.withInventoryName = function (inventoryName) {
        this.inventoryName = inventoryName;
        return this;
    };
    DescribeSimpleItemsRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    DescribeSimpleItemsRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    DescribeSimpleItemsRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    DescribeSimpleItemsRequest.prototype.getPageToken = function () {
        return this.pageToken;
    };
    DescribeSimpleItemsRequest.prototype.setPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeSimpleItemsRequest.prototype.withPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeSimpleItemsRequest.prototype.getLimit = function () {
        return this.limit;
    };
    DescribeSimpleItemsRequest.prototype.setLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeSimpleItemsRequest.prototype.withLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeSimpleItemsRequest.fromDict = function (data) {
        return new DescribeSimpleItemsRequest()
            .withNamespaceName(data["namespaceName"])
            .withInventoryName(data["inventoryName"])
            .withAccessToken(data["accessToken"])
            .withPageToken(data["pageToken"])
            .withLimit(data["limit"]);
    };
    DescribeSimpleItemsRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "inventoryName": this.getInventoryName(),
            "accessToken": this.getAccessToken(),
            "pageToken": this.getPageToken(),
            "limit": this.getLimit(),
        };
    };
    return DescribeSimpleItemsRequest;
}());
exports.default = DescribeSimpleItemsRequest;
//# sourceMappingURL=DescribeSimpleItemsRequest.js.map
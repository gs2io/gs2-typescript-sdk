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
var DescribeBigItemsRequest = /** @class */ (function () {
    function DescribeBigItemsRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.inventoryName = null;
        this.accessToken = null;
        this.pageToken = null;
        this.limit = null;
    }
    DescribeBigItemsRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DescribeBigItemsRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeBigItemsRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeBigItemsRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DescribeBigItemsRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeBigItemsRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeBigItemsRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DescribeBigItemsRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeBigItemsRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeBigItemsRequest.prototype.getInventoryName = function () {
        return this.inventoryName;
    };
    DescribeBigItemsRequest.prototype.setInventoryName = function (inventoryName) {
        this.inventoryName = inventoryName;
        return this;
    };
    DescribeBigItemsRequest.prototype.withInventoryName = function (inventoryName) {
        this.inventoryName = inventoryName;
        return this;
    };
    DescribeBigItemsRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    DescribeBigItemsRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    DescribeBigItemsRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    DescribeBigItemsRequest.prototype.getPageToken = function () {
        return this.pageToken;
    };
    DescribeBigItemsRequest.prototype.setPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeBigItemsRequest.prototype.withPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeBigItemsRequest.prototype.getLimit = function () {
        return this.limit;
    };
    DescribeBigItemsRequest.prototype.setLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeBigItemsRequest.prototype.withLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeBigItemsRequest.fromDict = function (data) {
        return new DescribeBigItemsRequest()
            .withNamespaceName(data["namespaceName"])
            .withInventoryName(data["inventoryName"])
            .withAccessToken(data["accessToken"])
            .withPageToken(data["pageToken"])
            .withLimit(data["limit"]);
    };
    DescribeBigItemsRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "inventoryName": this.getInventoryName(),
            "accessToken": this.getAccessToken(),
            "pageToken": this.getPageToken(),
            "limit": this.getLimit(),
        };
    };
    return DescribeBigItemsRequest;
}());
exports.default = DescribeBigItemsRequest;
//# sourceMappingURL=DescribeBigItemsRequest.js.map
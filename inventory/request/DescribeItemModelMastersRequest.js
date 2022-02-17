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
var DescribeItemModelMastersRequest = /** @class */ (function () {
    function DescribeItemModelMastersRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.inventoryName = null;
        this.pageToken = null;
        this.limit = null;
    }
    DescribeItemModelMastersRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DescribeItemModelMastersRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeItemModelMastersRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeItemModelMastersRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DescribeItemModelMastersRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeItemModelMastersRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeItemModelMastersRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DescribeItemModelMastersRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeItemModelMastersRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeItemModelMastersRequest.prototype.getInventoryName = function () {
        return this.inventoryName;
    };
    DescribeItemModelMastersRequest.prototype.setInventoryName = function (inventoryName) {
        this.inventoryName = inventoryName;
        return this;
    };
    DescribeItemModelMastersRequest.prototype.withInventoryName = function (inventoryName) {
        this.inventoryName = inventoryName;
        return this;
    };
    DescribeItemModelMastersRequest.prototype.getPageToken = function () {
        return this.pageToken;
    };
    DescribeItemModelMastersRequest.prototype.setPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeItemModelMastersRequest.prototype.withPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeItemModelMastersRequest.prototype.getLimit = function () {
        return this.limit;
    };
    DescribeItemModelMastersRequest.prototype.setLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeItemModelMastersRequest.prototype.withLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeItemModelMastersRequest.fromDict = function (data) {
        return new DescribeItemModelMastersRequest()
            .withNamespaceName(data["namespaceName"])
            .withInventoryName(data["inventoryName"])
            .withPageToken(data["pageToken"])
            .withLimit(data["limit"]);
    };
    DescribeItemModelMastersRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "inventoryName": this.getInventoryName(),
            "pageToken": this.getPageToken(),
            "limit": this.getLimit(),
        };
    };
    return DescribeItemModelMastersRequest;
}());
exports.default = DescribeItemModelMastersRequest;
//# sourceMappingURL=DescribeItemModelMastersRequest.js.map
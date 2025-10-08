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
var DescribeSimpleItemModelMastersRequest = /** @class */ (function () {
    function DescribeSimpleItemModelMastersRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.inventoryName = null;
        this.namePrefix = null;
        this.pageToken = null;
        this.limit = null;
    }
    DescribeSimpleItemModelMastersRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DescribeSimpleItemModelMastersRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeSimpleItemModelMastersRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeSimpleItemModelMastersRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DescribeSimpleItemModelMastersRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeSimpleItemModelMastersRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeSimpleItemModelMastersRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DescribeSimpleItemModelMastersRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeSimpleItemModelMastersRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeSimpleItemModelMastersRequest.prototype.getInventoryName = function () {
        return this.inventoryName;
    };
    DescribeSimpleItemModelMastersRequest.prototype.setInventoryName = function (inventoryName) {
        this.inventoryName = inventoryName;
        return this;
    };
    DescribeSimpleItemModelMastersRequest.prototype.withInventoryName = function (inventoryName) {
        this.inventoryName = inventoryName;
        return this;
    };
    DescribeSimpleItemModelMastersRequest.prototype.getNamePrefix = function () {
        return this.namePrefix;
    };
    DescribeSimpleItemModelMastersRequest.prototype.setNamePrefix = function (namePrefix) {
        this.namePrefix = namePrefix;
        return this;
    };
    DescribeSimpleItemModelMastersRequest.prototype.withNamePrefix = function (namePrefix) {
        this.namePrefix = namePrefix;
        return this;
    };
    DescribeSimpleItemModelMastersRequest.prototype.getPageToken = function () {
        return this.pageToken;
    };
    DescribeSimpleItemModelMastersRequest.prototype.setPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeSimpleItemModelMastersRequest.prototype.withPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeSimpleItemModelMastersRequest.prototype.getLimit = function () {
        return this.limit;
    };
    DescribeSimpleItemModelMastersRequest.prototype.setLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeSimpleItemModelMastersRequest.prototype.withLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeSimpleItemModelMastersRequest.fromDict = function (data) {
        return new DescribeSimpleItemModelMastersRequest()
            .withNamespaceName(data["namespaceName"])
            .withInventoryName(data["inventoryName"])
            .withNamePrefix(data["namePrefix"])
            .withPageToken(data["pageToken"])
            .withLimit(data["limit"]);
    };
    DescribeSimpleItemModelMastersRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "inventoryName": this.getInventoryName(),
            "namePrefix": this.getNamePrefix(),
            "pageToken": this.getPageToken(),
            "limit": this.getLimit(),
        };
    };
    return DescribeSimpleItemModelMastersRequest;
}());
exports.default = DescribeSimpleItemModelMastersRequest;
//# sourceMappingURL=DescribeSimpleItemModelMastersRequest.js.map
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
var DescribeBigItemModelMastersRequest = /** @class */ (function () {
    function DescribeBigItemModelMastersRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.inventoryName = null;
        this.pageToken = null;
        this.limit = null;
    }
    DescribeBigItemModelMastersRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DescribeBigItemModelMastersRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeBigItemModelMastersRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeBigItemModelMastersRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DescribeBigItemModelMastersRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeBigItemModelMastersRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeBigItemModelMastersRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DescribeBigItemModelMastersRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeBigItemModelMastersRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeBigItemModelMastersRequest.prototype.getInventoryName = function () {
        return this.inventoryName;
    };
    DescribeBigItemModelMastersRequest.prototype.setInventoryName = function (inventoryName) {
        this.inventoryName = inventoryName;
        return this;
    };
    DescribeBigItemModelMastersRequest.prototype.withInventoryName = function (inventoryName) {
        this.inventoryName = inventoryName;
        return this;
    };
    DescribeBigItemModelMastersRequest.prototype.getPageToken = function () {
        return this.pageToken;
    };
    DescribeBigItemModelMastersRequest.prototype.setPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeBigItemModelMastersRequest.prototype.withPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeBigItemModelMastersRequest.prototype.getLimit = function () {
        return this.limit;
    };
    DescribeBigItemModelMastersRequest.prototype.setLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeBigItemModelMastersRequest.prototype.withLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeBigItemModelMastersRequest.fromDict = function (data) {
        return new DescribeBigItemModelMastersRequest()
            .withNamespaceName(data["namespaceName"])
            .withInventoryName(data["inventoryName"])
            .withPageToken(data["pageToken"])
            .withLimit(data["limit"]);
    };
    DescribeBigItemModelMastersRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "inventoryName": this.getInventoryName(),
            "pageToken": this.getPageToken(),
            "limit": this.getLimit(),
        };
    };
    return DescribeBigItemModelMastersRequest;
}());
exports.default = DescribeBigItemModelMastersRequest;
//# sourceMappingURL=DescribeBigItemModelMastersRequest.js.map
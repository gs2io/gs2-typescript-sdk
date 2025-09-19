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
var DescribeBigInventoryModelMastersRequest = /** @class */ (function () {
    function DescribeBigInventoryModelMastersRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.namePrefix = null;
        this.pageToken = null;
        this.limit = null;
    }
    DescribeBigInventoryModelMastersRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DescribeBigInventoryModelMastersRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeBigInventoryModelMastersRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeBigInventoryModelMastersRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DescribeBigInventoryModelMastersRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeBigInventoryModelMastersRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeBigInventoryModelMastersRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DescribeBigInventoryModelMastersRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeBigInventoryModelMastersRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeBigInventoryModelMastersRequest.prototype.getNamePrefix = function () {
        return this.namePrefix;
    };
    DescribeBigInventoryModelMastersRequest.prototype.setNamePrefix = function (namePrefix) {
        this.namePrefix = namePrefix;
        return this;
    };
    DescribeBigInventoryModelMastersRequest.prototype.withNamePrefix = function (namePrefix) {
        this.namePrefix = namePrefix;
        return this;
    };
    DescribeBigInventoryModelMastersRequest.prototype.getPageToken = function () {
        return this.pageToken;
    };
    DescribeBigInventoryModelMastersRequest.prototype.setPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeBigInventoryModelMastersRequest.prototype.withPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeBigInventoryModelMastersRequest.prototype.getLimit = function () {
        return this.limit;
    };
    DescribeBigInventoryModelMastersRequest.prototype.setLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeBigInventoryModelMastersRequest.prototype.withLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeBigInventoryModelMastersRequest.fromDict = function (data) {
        return new DescribeBigInventoryModelMastersRequest()
            .withNamespaceName(data["namespaceName"])
            .withNamePrefix(data["namePrefix"])
            .withPageToken(data["pageToken"])
            .withLimit(data["limit"]);
    };
    DescribeBigInventoryModelMastersRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "namePrefix": this.getNamePrefix(),
            "pageToken": this.getPageToken(),
            "limit": this.getLimit(),
        };
    };
    return DescribeBigInventoryModelMastersRequest;
}());
exports.default = DescribeBigInventoryModelMastersRequest;
//# sourceMappingURL=DescribeBigInventoryModelMastersRequest.js.map
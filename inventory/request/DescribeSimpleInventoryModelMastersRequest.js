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
var DescribeSimpleInventoryModelMastersRequest = /** @class */ (function () {
    function DescribeSimpleInventoryModelMastersRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.namePrefix = null;
        this.pageToken = null;
        this.limit = null;
    }
    DescribeSimpleInventoryModelMastersRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DescribeSimpleInventoryModelMastersRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeSimpleInventoryModelMastersRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeSimpleInventoryModelMastersRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DescribeSimpleInventoryModelMastersRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeSimpleInventoryModelMastersRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeSimpleInventoryModelMastersRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DescribeSimpleInventoryModelMastersRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeSimpleInventoryModelMastersRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeSimpleInventoryModelMastersRequest.prototype.getNamePrefix = function () {
        return this.namePrefix;
    };
    DescribeSimpleInventoryModelMastersRequest.prototype.setNamePrefix = function (namePrefix) {
        this.namePrefix = namePrefix;
        return this;
    };
    DescribeSimpleInventoryModelMastersRequest.prototype.withNamePrefix = function (namePrefix) {
        this.namePrefix = namePrefix;
        return this;
    };
    DescribeSimpleInventoryModelMastersRequest.prototype.getPageToken = function () {
        return this.pageToken;
    };
    DescribeSimpleInventoryModelMastersRequest.prototype.setPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeSimpleInventoryModelMastersRequest.prototype.withPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeSimpleInventoryModelMastersRequest.prototype.getLimit = function () {
        return this.limit;
    };
    DescribeSimpleInventoryModelMastersRequest.prototype.setLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeSimpleInventoryModelMastersRequest.prototype.withLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeSimpleInventoryModelMastersRequest.fromDict = function (data) {
        return new DescribeSimpleInventoryModelMastersRequest()
            .withNamespaceName(data["namespaceName"])
            .withNamePrefix(data["namePrefix"])
            .withPageToken(data["pageToken"])
            .withLimit(data["limit"]);
    };
    DescribeSimpleInventoryModelMastersRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "namePrefix": this.getNamePrefix(),
            "pageToken": this.getPageToken(),
            "limit": this.getLimit(),
        };
    };
    return DescribeSimpleInventoryModelMastersRequest;
}());
exports.default = DescribeSimpleInventoryModelMastersRequest;
//# sourceMappingURL=DescribeSimpleInventoryModelMastersRequest.js.map
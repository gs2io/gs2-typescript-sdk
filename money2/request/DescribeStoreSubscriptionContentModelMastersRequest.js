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
var DescribeStoreSubscriptionContentModelMastersRequest = /** @class */ (function () {
    function DescribeStoreSubscriptionContentModelMastersRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.namePrefix = null;
        this.pageToken = null;
        this.limit = null;
    }
    DescribeStoreSubscriptionContentModelMastersRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DescribeStoreSubscriptionContentModelMastersRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeStoreSubscriptionContentModelMastersRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeStoreSubscriptionContentModelMastersRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DescribeStoreSubscriptionContentModelMastersRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeStoreSubscriptionContentModelMastersRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeStoreSubscriptionContentModelMastersRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DescribeStoreSubscriptionContentModelMastersRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeStoreSubscriptionContentModelMastersRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeStoreSubscriptionContentModelMastersRequest.prototype.getNamePrefix = function () {
        return this.namePrefix;
    };
    DescribeStoreSubscriptionContentModelMastersRequest.prototype.setNamePrefix = function (namePrefix) {
        this.namePrefix = namePrefix;
        return this;
    };
    DescribeStoreSubscriptionContentModelMastersRequest.prototype.withNamePrefix = function (namePrefix) {
        this.namePrefix = namePrefix;
        return this;
    };
    DescribeStoreSubscriptionContentModelMastersRequest.prototype.getPageToken = function () {
        return this.pageToken;
    };
    DescribeStoreSubscriptionContentModelMastersRequest.prototype.setPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeStoreSubscriptionContentModelMastersRequest.prototype.withPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeStoreSubscriptionContentModelMastersRequest.prototype.getLimit = function () {
        return this.limit;
    };
    DescribeStoreSubscriptionContentModelMastersRequest.prototype.setLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeStoreSubscriptionContentModelMastersRequest.prototype.withLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeStoreSubscriptionContentModelMastersRequest.fromDict = function (data) {
        return new DescribeStoreSubscriptionContentModelMastersRequest()
            .withNamespaceName(data["namespaceName"])
            .withNamePrefix(data["namePrefix"])
            .withPageToken(data["pageToken"])
            .withLimit(data["limit"]);
    };
    DescribeStoreSubscriptionContentModelMastersRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "namePrefix": this.getNamePrefix(),
            "pageToken": this.getPageToken(),
            "limit": this.getLimit(),
        };
    };
    return DescribeStoreSubscriptionContentModelMastersRequest;
}());
exports.default = DescribeStoreSubscriptionContentModelMastersRequest;
//# sourceMappingURL=DescribeStoreSubscriptionContentModelMastersRequest.js.map
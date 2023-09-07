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
var DescribePropertyFormModelMastersRequest = /** @class */ (function () {
    function DescribePropertyFormModelMastersRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.pageToken = null;
        this.limit = null;
    }
    DescribePropertyFormModelMastersRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DescribePropertyFormModelMastersRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribePropertyFormModelMastersRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribePropertyFormModelMastersRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DescribePropertyFormModelMastersRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribePropertyFormModelMastersRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribePropertyFormModelMastersRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DescribePropertyFormModelMastersRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribePropertyFormModelMastersRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribePropertyFormModelMastersRequest.prototype.getPageToken = function () {
        return this.pageToken;
    };
    DescribePropertyFormModelMastersRequest.prototype.setPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribePropertyFormModelMastersRequest.prototype.withPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribePropertyFormModelMastersRequest.prototype.getLimit = function () {
        return this.limit;
    };
    DescribePropertyFormModelMastersRequest.prototype.setLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribePropertyFormModelMastersRequest.prototype.withLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribePropertyFormModelMastersRequest.fromDict = function (data) {
        return new DescribePropertyFormModelMastersRequest()
            .withNamespaceName(data["namespaceName"])
            .withPageToken(data["pageToken"])
            .withLimit(data["limit"]);
    };
    DescribePropertyFormModelMastersRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "pageToken": this.getPageToken(),
            "limit": this.getLimit(),
        };
    };
    return DescribePropertyFormModelMastersRequest;
}());
exports.default = DescribePropertyFormModelMastersRequest;
//# sourceMappingURL=DescribePropertyFormModelMastersRequest.js.map
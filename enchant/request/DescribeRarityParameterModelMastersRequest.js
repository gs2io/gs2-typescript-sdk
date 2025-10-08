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
var DescribeRarityParameterModelMastersRequest = /** @class */ (function () {
    function DescribeRarityParameterModelMastersRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.pageToken = null;
        this.limit = null;
    }
    DescribeRarityParameterModelMastersRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DescribeRarityParameterModelMastersRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeRarityParameterModelMastersRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeRarityParameterModelMastersRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DescribeRarityParameterModelMastersRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeRarityParameterModelMastersRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeRarityParameterModelMastersRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DescribeRarityParameterModelMastersRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeRarityParameterModelMastersRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeRarityParameterModelMastersRequest.prototype.getPageToken = function () {
        return this.pageToken;
    };
    DescribeRarityParameterModelMastersRequest.prototype.setPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeRarityParameterModelMastersRequest.prototype.withPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeRarityParameterModelMastersRequest.prototype.getLimit = function () {
        return this.limit;
    };
    DescribeRarityParameterModelMastersRequest.prototype.setLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeRarityParameterModelMastersRequest.prototype.withLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeRarityParameterModelMastersRequest.fromDict = function (data) {
        return new DescribeRarityParameterModelMastersRequest()
            .withNamespaceName(data["namespaceName"])
            .withPageToken(data["pageToken"])
            .withLimit(data["limit"]);
    };
    DescribeRarityParameterModelMastersRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "pageToken": this.getPageToken(),
            "limit": this.getLimit(),
        };
    };
    return DescribeRarityParameterModelMastersRequest;
}());
exports.default = DescribeRarityParameterModelMastersRequest;
//# sourceMappingURL=DescribeRarityParameterModelMastersRequest.js.map
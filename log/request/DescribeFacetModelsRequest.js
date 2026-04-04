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
var DescribeFacetModelsRequest = /** @class */ (function () {
    function DescribeFacetModelsRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.namePrefix = null;
        this.pageToken = null;
        this.limit = null;
    }
    DescribeFacetModelsRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DescribeFacetModelsRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeFacetModelsRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeFacetModelsRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DescribeFacetModelsRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeFacetModelsRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeFacetModelsRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DescribeFacetModelsRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeFacetModelsRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeFacetModelsRequest.prototype.getNamePrefix = function () {
        return this.namePrefix;
    };
    DescribeFacetModelsRequest.prototype.setNamePrefix = function (namePrefix) {
        this.namePrefix = namePrefix;
        return this;
    };
    DescribeFacetModelsRequest.prototype.withNamePrefix = function (namePrefix) {
        this.namePrefix = namePrefix;
        return this;
    };
    DescribeFacetModelsRequest.prototype.getPageToken = function () {
        return this.pageToken;
    };
    DescribeFacetModelsRequest.prototype.setPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeFacetModelsRequest.prototype.withPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeFacetModelsRequest.prototype.getLimit = function () {
        return this.limit;
    };
    DescribeFacetModelsRequest.prototype.setLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeFacetModelsRequest.prototype.withLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeFacetModelsRequest.fromDict = function (data) {
        return new DescribeFacetModelsRequest()
            .withNamespaceName(data["namespaceName"])
            .withNamePrefix(data["namePrefix"])
            .withPageToken(data["pageToken"])
            .withLimit(data["limit"]);
    };
    DescribeFacetModelsRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "namePrefix": this.getNamePrefix(),
            "pageToken": this.getPageToken(),
            "limit": this.getLimit(),
        };
    };
    return DescribeFacetModelsRequest;
}());
exports.default = DescribeFacetModelsRequest;
//# sourceMappingURL=DescribeFacetModelsRequest.js.map
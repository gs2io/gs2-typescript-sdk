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
var DescribeTakeOverTypeModelMastersRequest = /** @class */ (function () {
    function DescribeTakeOverTypeModelMastersRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.pageToken = null;
        this.limit = null;
    }
    DescribeTakeOverTypeModelMastersRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DescribeTakeOverTypeModelMastersRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeTakeOverTypeModelMastersRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeTakeOverTypeModelMastersRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DescribeTakeOverTypeModelMastersRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeTakeOverTypeModelMastersRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeTakeOverTypeModelMastersRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DescribeTakeOverTypeModelMastersRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeTakeOverTypeModelMastersRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeTakeOverTypeModelMastersRequest.prototype.getPageToken = function () {
        return this.pageToken;
    };
    DescribeTakeOverTypeModelMastersRequest.prototype.setPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeTakeOverTypeModelMastersRequest.prototype.withPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeTakeOverTypeModelMastersRequest.prototype.getLimit = function () {
        return this.limit;
    };
    DescribeTakeOverTypeModelMastersRequest.prototype.setLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeTakeOverTypeModelMastersRequest.prototype.withLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeTakeOverTypeModelMastersRequest.fromDict = function (data) {
        return new DescribeTakeOverTypeModelMastersRequest()
            .withNamespaceName(data["namespaceName"])
            .withPageToken(data["pageToken"])
            .withLimit(data["limit"]);
    };
    DescribeTakeOverTypeModelMastersRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "pageToken": this.getPageToken(),
            "limit": this.getLimit(),
        };
    };
    return DescribeTakeOverTypeModelMastersRequest;
}());
exports.default = DescribeTakeOverTypeModelMastersRequest;
//# sourceMappingURL=DescribeTakeOverTypeModelMastersRequest.js.map
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
var DescribeSalesItemGroupMastersRequest = /** @class */ (function () {
    function DescribeSalesItemGroupMastersRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.pageToken = null;
        this.limit = null;
    }
    DescribeSalesItemGroupMastersRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DescribeSalesItemGroupMastersRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeSalesItemGroupMastersRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeSalesItemGroupMastersRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DescribeSalesItemGroupMastersRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeSalesItemGroupMastersRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeSalesItemGroupMastersRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DescribeSalesItemGroupMastersRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeSalesItemGroupMastersRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeSalesItemGroupMastersRequest.prototype.getPageToken = function () {
        return this.pageToken;
    };
    DescribeSalesItemGroupMastersRequest.prototype.setPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeSalesItemGroupMastersRequest.prototype.withPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeSalesItemGroupMastersRequest.prototype.getLimit = function () {
        return this.limit;
    };
    DescribeSalesItemGroupMastersRequest.prototype.setLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeSalesItemGroupMastersRequest.prototype.withLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeSalesItemGroupMastersRequest.fromDict = function (data) {
        return new DescribeSalesItemGroupMastersRequest()
            .withNamespaceName(data["namespaceName"])
            .withPageToken(data["pageToken"])
            .withLimit(data["limit"]);
    };
    DescribeSalesItemGroupMastersRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "pageToken": this.getPageToken(),
            "limit": this.getLimit(),
        };
    };
    return DescribeSalesItemGroupMastersRequest;
}());
exports.default = DescribeSalesItemGroupMastersRequest;
//# sourceMappingURL=DescribeSalesItemGroupMastersRequest.js.map
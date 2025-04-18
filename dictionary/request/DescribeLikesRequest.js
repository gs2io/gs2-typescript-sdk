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
var DescribeLikesRequest = /** @class */ (function () {
    function DescribeLikesRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.accessToken = null;
        this.pageToken = null;
        this.limit = null;
    }
    DescribeLikesRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DescribeLikesRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeLikesRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeLikesRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DescribeLikesRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeLikesRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeLikesRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DescribeLikesRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeLikesRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeLikesRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    DescribeLikesRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    DescribeLikesRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    DescribeLikesRequest.prototype.getPageToken = function () {
        return this.pageToken;
    };
    DescribeLikesRequest.prototype.setPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeLikesRequest.prototype.withPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeLikesRequest.prototype.getLimit = function () {
        return this.limit;
    };
    DescribeLikesRequest.prototype.setLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeLikesRequest.prototype.withLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeLikesRequest.fromDict = function (data) {
        return new DescribeLikesRequest()
            .withNamespaceName(data["namespaceName"])
            .withAccessToken(data["accessToken"])
            .withPageToken(data["pageToken"])
            .withLimit(data["limit"]);
    };
    DescribeLikesRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "accessToken": this.getAccessToken(),
            "pageToken": this.getPageToken(),
            "limit": this.getLimit(),
        };
    };
    return DescribeLikesRequest;
}());
exports.default = DescribeLikesRequest;
//# sourceMappingURL=DescribeLikesRequest.js.map
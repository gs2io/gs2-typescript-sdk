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
var DescribeSendRequestsRequest = /** @class */ (function () {
    function DescribeSendRequestsRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.accessToken = null;
        this.withProfile = null;
        this.pageToken = null;
        this.limit = null;
    }
    DescribeSendRequestsRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DescribeSendRequestsRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeSendRequestsRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeSendRequestsRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DescribeSendRequestsRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeSendRequestsRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeSendRequestsRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DescribeSendRequestsRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeSendRequestsRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeSendRequestsRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    DescribeSendRequestsRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    DescribeSendRequestsRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    DescribeSendRequestsRequest.prototype.getWithProfile = function () {
        return this.withProfile;
    };
    DescribeSendRequestsRequest.prototype.setWithProfile = function (withProfile) {
        this.withProfile = withProfile;
        return this;
    };
    DescribeSendRequestsRequest.prototype.withWithProfile = function (withProfile) {
        this.withProfile = withProfile;
        return this;
    };
    DescribeSendRequestsRequest.prototype.getPageToken = function () {
        return this.pageToken;
    };
    DescribeSendRequestsRequest.prototype.setPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeSendRequestsRequest.prototype.withPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeSendRequestsRequest.prototype.getLimit = function () {
        return this.limit;
    };
    DescribeSendRequestsRequest.prototype.setLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeSendRequestsRequest.prototype.withLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeSendRequestsRequest.fromDict = function (data) {
        return new DescribeSendRequestsRequest()
            .withNamespaceName(data["namespaceName"])
            .withAccessToken(data["accessToken"])
            .withWithProfile(data["withProfile"])
            .withPageToken(data["pageToken"])
            .withLimit(data["limit"]);
    };
    DescribeSendRequestsRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "accessToken": this.getAccessToken(),
            "withProfile": this.getWithProfile(),
            "pageToken": this.getPageToken(),
            "limit": this.getLimit(),
        };
    };
    return DescribeSendRequestsRequest;
}());
exports.default = DescribeSendRequestsRequest;
//# sourceMappingURL=DescribeSendRequestsRequest.js.map
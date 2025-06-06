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
var DescribeSubscriptionStatusesRequest = /** @class */ (function () {
    function DescribeSubscriptionStatusesRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.accessToken = null;
    }
    DescribeSubscriptionStatusesRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DescribeSubscriptionStatusesRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeSubscriptionStatusesRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeSubscriptionStatusesRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DescribeSubscriptionStatusesRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeSubscriptionStatusesRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeSubscriptionStatusesRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DescribeSubscriptionStatusesRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeSubscriptionStatusesRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeSubscriptionStatusesRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    DescribeSubscriptionStatusesRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    DescribeSubscriptionStatusesRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    DescribeSubscriptionStatusesRequest.fromDict = function (data) {
        return new DescribeSubscriptionStatusesRequest()
            .withNamespaceName(data["namespaceName"])
            .withAccessToken(data["accessToken"]);
    };
    DescribeSubscriptionStatusesRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "accessToken": this.getAccessToken(),
        };
    };
    return DescribeSubscriptionStatusesRequest;
}());
exports.default = DescribeSubscriptionStatusesRequest;
//# sourceMappingURL=DescribeSubscriptionStatusesRequest.js.map
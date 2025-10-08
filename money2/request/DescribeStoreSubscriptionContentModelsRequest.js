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
var DescribeStoreSubscriptionContentModelsRequest = /** @class */ (function () {
    function DescribeStoreSubscriptionContentModelsRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
    }
    DescribeStoreSubscriptionContentModelsRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DescribeStoreSubscriptionContentModelsRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeStoreSubscriptionContentModelsRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeStoreSubscriptionContentModelsRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DescribeStoreSubscriptionContentModelsRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeStoreSubscriptionContentModelsRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeStoreSubscriptionContentModelsRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DescribeStoreSubscriptionContentModelsRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeStoreSubscriptionContentModelsRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeStoreSubscriptionContentModelsRequest.fromDict = function (data) {
        return new DescribeStoreSubscriptionContentModelsRequest()
            .withNamespaceName(data["namespaceName"]);
    };
    DescribeStoreSubscriptionContentModelsRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
        };
    };
    return DescribeStoreSubscriptionContentModelsRequest;
}());
exports.default = DescribeStoreSubscriptionContentModelsRequest;
//# sourceMappingURL=DescribeStoreSubscriptionContentModelsRequest.js.map
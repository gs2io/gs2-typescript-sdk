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
var DescribeDistributorModelsRequest = /** @class */ (function () {
    function DescribeDistributorModelsRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
    }
    DescribeDistributorModelsRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DescribeDistributorModelsRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeDistributorModelsRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeDistributorModelsRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DescribeDistributorModelsRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeDistributorModelsRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeDistributorModelsRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DescribeDistributorModelsRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeDistributorModelsRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeDistributorModelsRequest.fromDict = function (data) {
        return new DescribeDistributorModelsRequest()
            .withNamespaceName(data["namespaceName"]);
    };
    DescribeDistributorModelsRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
        };
    };
    return DescribeDistributorModelsRequest;
}());
exports.default = DescribeDistributorModelsRequest;
//# sourceMappingURL=DescribeDistributorModelsRequest.js.map
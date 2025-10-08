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
var DescribeStatusModelsRequest = /** @class */ (function () {
    function DescribeStatusModelsRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
    }
    DescribeStatusModelsRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DescribeStatusModelsRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeStatusModelsRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeStatusModelsRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DescribeStatusModelsRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeStatusModelsRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeStatusModelsRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DescribeStatusModelsRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeStatusModelsRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeStatusModelsRequest.fromDict = function (data) {
        return new DescribeStatusModelsRequest()
            .withNamespaceName(data["namespaceName"]);
    };
    DescribeStatusModelsRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
        };
    };
    return DescribeStatusModelsRequest;
}());
exports.default = DescribeStatusModelsRequest;
//# sourceMappingURL=DescribeStatusModelsRequest.js.map
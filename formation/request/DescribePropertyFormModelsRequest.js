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
var DescribePropertyFormModelsRequest = /** @class */ (function () {
    function DescribePropertyFormModelsRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
    }
    DescribePropertyFormModelsRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DescribePropertyFormModelsRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribePropertyFormModelsRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribePropertyFormModelsRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DescribePropertyFormModelsRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribePropertyFormModelsRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribePropertyFormModelsRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DescribePropertyFormModelsRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribePropertyFormModelsRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribePropertyFormModelsRequest.fromDict = function (data) {
        return new DescribePropertyFormModelsRequest()
            .withNamespaceName(data["namespaceName"]);
    };
    DescribePropertyFormModelsRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
        };
    };
    return DescribePropertyFormModelsRequest;
}());
exports.default = DescribePropertyFormModelsRequest;
//# sourceMappingURL=DescribePropertyFormModelsRequest.js.map
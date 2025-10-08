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
var DescribeStoreContentModelsRequest = /** @class */ (function () {
    function DescribeStoreContentModelsRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
    }
    DescribeStoreContentModelsRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DescribeStoreContentModelsRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeStoreContentModelsRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeStoreContentModelsRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DescribeStoreContentModelsRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeStoreContentModelsRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeStoreContentModelsRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DescribeStoreContentModelsRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeStoreContentModelsRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeStoreContentModelsRequest.fromDict = function (data) {
        return new DescribeStoreContentModelsRequest()
            .withNamespaceName(data["namespaceName"]);
    };
    DescribeStoreContentModelsRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
        };
    };
    return DescribeStoreContentModelsRequest;
}());
exports.default = DescribeStoreContentModelsRequest;
//# sourceMappingURL=DescribeStoreContentModelsRequest.js.map
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
var DescribeBuffEntryModelsRequest = /** @class */ (function () {
    function DescribeBuffEntryModelsRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
    }
    DescribeBuffEntryModelsRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DescribeBuffEntryModelsRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeBuffEntryModelsRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeBuffEntryModelsRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DescribeBuffEntryModelsRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeBuffEntryModelsRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeBuffEntryModelsRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DescribeBuffEntryModelsRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeBuffEntryModelsRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeBuffEntryModelsRequest.fromDict = function (data) {
        return new DescribeBuffEntryModelsRequest()
            .withNamespaceName(data["namespaceName"]);
    };
    DescribeBuffEntryModelsRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
        };
    };
    return DescribeBuffEntryModelsRequest;
}());
exports.default = DescribeBuffEntryModelsRequest;
//# sourceMappingURL=DescribeBuffEntryModelsRequest.js.map
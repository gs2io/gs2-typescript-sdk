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
var DescribeIncrementalRateModelsRequest = /** @class */ (function () {
    function DescribeIncrementalRateModelsRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
    }
    DescribeIncrementalRateModelsRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DescribeIncrementalRateModelsRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeIncrementalRateModelsRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeIncrementalRateModelsRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DescribeIncrementalRateModelsRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeIncrementalRateModelsRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeIncrementalRateModelsRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DescribeIncrementalRateModelsRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeIncrementalRateModelsRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeIncrementalRateModelsRequest.fromDict = function (data) {
        return new DescribeIncrementalRateModelsRequest()
            .withNamespaceName(data["namespaceName"]);
    };
    DescribeIncrementalRateModelsRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
        };
    };
    return DescribeIncrementalRateModelsRequest;
}());
exports.default = DescribeIncrementalRateModelsRequest;
//# sourceMappingURL=DescribeIncrementalRateModelsRequest.js.map
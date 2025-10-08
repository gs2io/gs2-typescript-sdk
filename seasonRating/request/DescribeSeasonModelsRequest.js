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
var DescribeSeasonModelsRequest = /** @class */ (function () {
    function DescribeSeasonModelsRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
    }
    DescribeSeasonModelsRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DescribeSeasonModelsRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeSeasonModelsRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeSeasonModelsRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DescribeSeasonModelsRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeSeasonModelsRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeSeasonModelsRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DescribeSeasonModelsRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeSeasonModelsRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeSeasonModelsRequest.fromDict = function (data) {
        return new DescribeSeasonModelsRequest()
            .withNamespaceName(data["namespaceName"]);
    };
    DescribeSeasonModelsRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
        };
    };
    return DescribeSeasonModelsRequest;
}());
exports.default = DescribeSeasonModelsRequest;
//# sourceMappingURL=DescribeSeasonModelsRequest.js.map
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
var DescribeLimitModelsRequest = /** @class */ (function () {
    function DescribeLimitModelsRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
    }
    DescribeLimitModelsRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DescribeLimitModelsRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeLimitModelsRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeLimitModelsRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DescribeLimitModelsRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeLimitModelsRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeLimitModelsRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DescribeLimitModelsRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeLimitModelsRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeLimitModelsRequest.fromDict = function (data) {
        return new DescribeLimitModelsRequest()
            .withNamespaceName(data["namespaceName"]);
    };
    DescribeLimitModelsRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
        };
    };
    return DescribeLimitModelsRequest;
}());
exports.default = DescribeLimitModelsRequest;
//# sourceMappingURL=DescribeLimitModelsRequest.js.map
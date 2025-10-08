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
var DescribeLotteryModelsRequest = /** @class */ (function () {
    function DescribeLotteryModelsRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
    }
    DescribeLotteryModelsRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DescribeLotteryModelsRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeLotteryModelsRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeLotteryModelsRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DescribeLotteryModelsRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeLotteryModelsRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeLotteryModelsRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DescribeLotteryModelsRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeLotteryModelsRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeLotteryModelsRequest.fromDict = function (data) {
        return new DescribeLotteryModelsRequest()
            .withNamespaceName(data["namespaceName"]);
    };
    DescribeLotteryModelsRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
        };
    };
    return DescribeLotteryModelsRequest;
}());
exports.default = DescribeLotteryModelsRequest;
//# sourceMappingURL=DescribeLotteryModelsRequest.js.map
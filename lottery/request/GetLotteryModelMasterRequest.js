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
var GetLotteryModelMasterRequest = /** @class */ (function () {
    function GetLotteryModelMasterRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.lotteryName = null;
    }
    GetLotteryModelMasterRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetLotteryModelMasterRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetLotteryModelMasterRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetLotteryModelMasterRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetLotteryModelMasterRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetLotteryModelMasterRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetLotteryModelMasterRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    GetLotteryModelMasterRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetLotteryModelMasterRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetLotteryModelMasterRequest.prototype.getLotteryName = function () {
        return this.lotteryName;
    };
    GetLotteryModelMasterRequest.prototype.setLotteryName = function (lotteryName) {
        this.lotteryName = lotteryName;
        return this;
    };
    GetLotteryModelMasterRequest.prototype.withLotteryName = function (lotteryName) {
        this.lotteryName = lotteryName;
        return this;
    };
    GetLotteryModelMasterRequest.fromDict = function (data) {
        return new GetLotteryModelMasterRequest()
            .withNamespaceName(data["namespaceName"])
            .withLotteryName(data["lotteryName"]);
    };
    GetLotteryModelMasterRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "lotteryName": this.getLotteryName(),
        };
    };
    return GetLotteryModelMasterRequest;
}());
exports.default = GetLotteryModelMasterRequest;
//# sourceMappingURL=GetLotteryModelMasterRequest.js.map
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
var PreUpdateCurrentLotteryMasterRequest = /** @class */ (function () {
    function PreUpdateCurrentLotteryMasterRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
    }
    PreUpdateCurrentLotteryMasterRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    PreUpdateCurrentLotteryMasterRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    PreUpdateCurrentLotteryMasterRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    PreUpdateCurrentLotteryMasterRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    PreUpdateCurrentLotteryMasterRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    PreUpdateCurrentLotteryMasterRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    PreUpdateCurrentLotteryMasterRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    PreUpdateCurrentLotteryMasterRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    PreUpdateCurrentLotteryMasterRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    PreUpdateCurrentLotteryMasterRequest.fromDict = function (data) {
        return new PreUpdateCurrentLotteryMasterRequest()
            .withNamespaceName(data["namespaceName"]);
    };
    PreUpdateCurrentLotteryMasterRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
        };
    };
    return PreUpdateCurrentLotteryMasterRequest;
}());
exports.default = PreUpdateCurrentLotteryMasterRequest;
//# sourceMappingURL=PreUpdateCurrentLotteryMasterRequest.js.map
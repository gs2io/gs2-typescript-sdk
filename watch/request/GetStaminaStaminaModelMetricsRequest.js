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
var GetStaminaStaminaModelMetricsRequest = /** @class */ (function () {
    function GetStaminaStaminaModelMetricsRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.staminaName = null;
    }
    GetStaminaStaminaModelMetricsRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetStaminaStaminaModelMetricsRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetStaminaStaminaModelMetricsRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetStaminaStaminaModelMetricsRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetStaminaStaminaModelMetricsRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetStaminaStaminaModelMetricsRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetStaminaStaminaModelMetricsRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    GetStaminaStaminaModelMetricsRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetStaminaStaminaModelMetricsRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetStaminaStaminaModelMetricsRequest.prototype.getStaminaName = function () {
        return this.staminaName;
    };
    GetStaminaStaminaModelMetricsRequest.prototype.setStaminaName = function (staminaName) {
        this.staminaName = staminaName;
        return this;
    };
    GetStaminaStaminaModelMetricsRequest.prototype.withStaminaName = function (staminaName) {
        this.staminaName = staminaName;
        return this;
    };
    GetStaminaStaminaModelMetricsRequest.fromDict = function (data) {
        return new GetStaminaStaminaModelMetricsRequest()
            .withNamespaceName(data["namespaceName"])
            .withStaminaName(data["staminaName"]);
    };
    GetStaminaStaminaModelMetricsRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "staminaName": this.getStaminaName(),
        };
    };
    return GetStaminaStaminaModelMetricsRequest;
}());
exports.default = GetStaminaStaminaModelMetricsRequest;
//# sourceMappingURL=GetStaminaStaminaModelMetricsRequest.js.map
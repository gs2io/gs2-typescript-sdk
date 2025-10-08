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
var GetUnleashRateModelRequest = /** @class */ (function () {
    function GetUnleashRateModelRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.rateName = null;
    }
    GetUnleashRateModelRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetUnleashRateModelRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetUnleashRateModelRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetUnleashRateModelRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetUnleashRateModelRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetUnleashRateModelRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetUnleashRateModelRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    GetUnleashRateModelRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetUnleashRateModelRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetUnleashRateModelRequest.prototype.getRateName = function () {
        return this.rateName;
    };
    GetUnleashRateModelRequest.prototype.setRateName = function (rateName) {
        this.rateName = rateName;
        return this;
    };
    GetUnleashRateModelRequest.prototype.withRateName = function (rateName) {
        this.rateName = rateName;
        return this;
    };
    GetUnleashRateModelRequest.fromDict = function (data) {
        return new GetUnleashRateModelRequest()
            .withNamespaceName(data["namespaceName"])
            .withRateName(data["rateName"]);
    };
    GetUnleashRateModelRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "rateName": this.getRateName(),
        };
    };
    return GetUnleashRateModelRequest;
}());
exports.default = GetUnleashRateModelRequest;
//# sourceMappingURL=GetUnleashRateModelRequest.js.map
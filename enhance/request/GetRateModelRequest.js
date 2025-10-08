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
var GetRateModelRequest = /** @class */ (function () {
    function GetRateModelRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.rateName = null;
    }
    GetRateModelRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetRateModelRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetRateModelRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetRateModelRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetRateModelRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetRateModelRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetRateModelRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    GetRateModelRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetRateModelRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetRateModelRequest.prototype.getRateName = function () {
        return this.rateName;
    };
    GetRateModelRequest.prototype.setRateName = function (rateName) {
        this.rateName = rateName;
        return this;
    };
    GetRateModelRequest.prototype.withRateName = function (rateName) {
        this.rateName = rateName;
        return this;
    };
    GetRateModelRequest.fromDict = function (data) {
        return new GetRateModelRequest()
            .withNamespaceName(data["namespaceName"])
            .withRateName(data["rateName"]);
    };
    GetRateModelRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "rateName": this.getRateName(),
        };
    };
    return GetRateModelRequest;
}());
exports.default = GetRateModelRequest;
//# sourceMappingURL=GetRateModelRequest.js.map
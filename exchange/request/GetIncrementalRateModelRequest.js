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
var GetIncrementalRateModelRequest = /** @class */ (function () {
    function GetIncrementalRateModelRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.rateName = null;
    }
    GetIncrementalRateModelRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetIncrementalRateModelRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetIncrementalRateModelRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetIncrementalRateModelRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetIncrementalRateModelRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetIncrementalRateModelRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetIncrementalRateModelRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    GetIncrementalRateModelRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetIncrementalRateModelRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetIncrementalRateModelRequest.prototype.getRateName = function () {
        return this.rateName;
    };
    GetIncrementalRateModelRequest.prototype.setRateName = function (rateName) {
        this.rateName = rateName;
        return this;
    };
    GetIncrementalRateModelRequest.prototype.withRateName = function (rateName) {
        this.rateName = rateName;
        return this;
    };
    GetIncrementalRateModelRequest.fromDict = function (data) {
        return new GetIncrementalRateModelRequest()
            .withNamespaceName(data["namespaceName"])
            .withRateName(data["rateName"]);
    };
    GetIncrementalRateModelRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "rateName": this.getRateName(),
        };
    };
    return GetIncrementalRateModelRequest;
}());
exports.default = GetIncrementalRateModelRequest;
//# sourceMappingURL=GetIncrementalRateModelRequest.js.map
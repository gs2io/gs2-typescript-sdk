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
var GetIncrementalRateModelMasterRequest = /** @class */ (function () {
    function GetIncrementalRateModelMasterRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.rateName = null;
    }
    GetIncrementalRateModelMasterRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetIncrementalRateModelMasterRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetIncrementalRateModelMasterRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetIncrementalRateModelMasterRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetIncrementalRateModelMasterRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetIncrementalRateModelMasterRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetIncrementalRateModelMasterRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    GetIncrementalRateModelMasterRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetIncrementalRateModelMasterRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetIncrementalRateModelMasterRequest.prototype.getRateName = function () {
        return this.rateName;
    };
    GetIncrementalRateModelMasterRequest.prototype.setRateName = function (rateName) {
        this.rateName = rateName;
        return this;
    };
    GetIncrementalRateModelMasterRequest.prototype.withRateName = function (rateName) {
        this.rateName = rateName;
        return this;
    };
    GetIncrementalRateModelMasterRequest.fromDict = function (data) {
        return new GetIncrementalRateModelMasterRequest()
            .withNamespaceName(data["namespaceName"])
            .withRateName(data["rateName"]);
    };
    GetIncrementalRateModelMasterRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "rateName": this.getRateName(),
        };
    };
    return GetIncrementalRateModelMasterRequest;
}());
exports.default = GetIncrementalRateModelMasterRequest;
//# sourceMappingURL=GetIncrementalRateModelMasterRequest.js.map
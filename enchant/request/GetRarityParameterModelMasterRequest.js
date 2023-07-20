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
var GetRarityParameterModelMasterRequest = /** @class */ (function () {
    function GetRarityParameterModelMasterRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.parameterName = null;
    }
    GetRarityParameterModelMasterRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetRarityParameterModelMasterRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetRarityParameterModelMasterRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetRarityParameterModelMasterRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetRarityParameterModelMasterRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetRarityParameterModelMasterRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetRarityParameterModelMasterRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    GetRarityParameterModelMasterRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetRarityParameterModelMasterRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetRarityParameterModelMasterRequest.prototype.getParameterName = function () {
        return this.parameterName;
    };
    GetRarityParameterModelMasterRequest.prototype.setParameterName = function (parameterName) {
        this.parameterName = parameterName;
        return this;
    };
    GetRarityParameterModelMasterRequest.prototype.withParameterName = function (parameterName) {
        this.parameterName = parameterName;
        return this;
    };
    GetRarityParameterModelMasterRequest.fromDict = function (data) {
        return new GetRarityParameterModelMasterRequest()
            .withNamespaceName(data["namespaceName"])
            .withParameterName(data["parameterName"]);
    };
    GetRarityParameterModelMasterRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "parameterName": this.getParameterName(),
        };
    };
    return GetRarityParameterModelMasterRequest;
}());
exports.default = GetRarityParameterModelMasterRequest;
//# sourceMappingURL=GetRarityParameterModelMasterRequest.js.map
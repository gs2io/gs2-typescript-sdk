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
var GetRarityParameterModelRequest = /** @class */ (function () {
    function GetRarityParameterModelRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.parameterName = null;
    }
    GetRarityParameterModelRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetRarityParameterModelRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetRarityParameterModelRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetRarityParameterModelRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetRarityParameterModelRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetRarityParameterModelRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetRarityParameterModelRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    GetRarityParameterModelRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetRarityParameterModelRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetRarityParameterModelRequest.prototype.getParameterName = function () {
        return this.parameterName;
    };
    GetRarityParameterModelRequest.prototype.setParameterName = function (parameterName) {
        this.parameterName = parameterName;
        return this;
    };
    GetRarityParameterModelRequest.prototype.withParameterName = function (parameterName) {
        this.parameterName = parameterName;
        return this;
    };
    GetRarityParameterModelRequest.fromDict = function (data) {
        return new GetRarityParameterModelRequest()
            .withNamespaceName(data["namespaceName"])
            .withParameterName(data["parameterName"]);
    };
    GetRarityParameterModelRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "parameterName": this.getParameterName(),
        };
    };
    return GetRarityParameterModelRequest;
}());
exports.default = GetRarityParameterModelRequest;
//# sourceMappingURL=GetRarityParameterModelRequest.js.map
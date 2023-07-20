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
var GetBalanceParameterModelRequest = /** @class */ (function () {
    function GetBalanceParameterModelRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.parameterName = null;
    }
    GetBalanceParameterModelRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetBalanceParameterModelRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetBalanceParameterModelRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetBalanceParameterModelRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetBalanceParameterModelRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetBalanceParameterModelRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetBalanceParameterModelRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    GetBalanceParameterModelRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetBalanceParameterModelRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetBalanceParameterModelRequest.prototype.getParameterName = function () {
        return this.parameterName;
    };
    GetBalanceParameterModelRequest.prototype.setParameterName = function (parameterName) {
        this.parameterName = parameterName;
        return this;
    };
    GetBalanceParameterModelRequest.prototype.withParameterName = function (parameterName) {
        this.parameterName = parameterName;
        return this;
    };
    GetBalanceParameterModelRequest.fromDict = function (data) {
        return new GetBalanceParameterModelRequest()
            .withNamespaceName(data["namespaceName"])
            .withParameterName(data["parameterName"]);
    };
    GetBalanceParameterModelRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "parameterName": this.getParameterName(),
        };
    };
    return GetBalanceParameterModelRequest;
}());
exports.default = GetBalanceParameterModelRequest;
//# sourceMappingURL=GetBalanceParameterModelRequest.js.map
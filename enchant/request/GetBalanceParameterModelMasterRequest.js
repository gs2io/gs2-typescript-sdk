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
var GetBalanceParameterModelMasterRequest = /** @class */ (function () {
    function GetBalanceParameterModelMasterRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.parameterName = null;
    }
    GetBalanceParameterModelMasterRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetBalanceParameterModelMasterRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetBalanceParameterModelMasterRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetBalanceParameterModelMasterRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetBalanceParameterModelMasterRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetBalanceParameterModelMasterRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetBalanceParameterModelMasterRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    GetBalanceParameterModelMasterRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetBalanceParameterModelMasterRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetBalanceParameterModelMasterRequest.prototype.getParameterName = function () {
        return this.parameterName;
    };
    GetBalanceParameterModelMasterRequest.prototype.setParameterName = function (parameterName) {
        this.parameterName = parameterName;
        return this;
    };
    GetBalanceParameterModelMasterRequest.prototype.withParameterName = function (parameterName) {
        this.parameterName = parameterName;
        return this;
    };
    GetBalanceParameterModelMasterRequest.fromDict = function (data) {
        return new GetBalanceParameterModelMasterRequest()
            .withNamespaceName(data["namespaceName"])
            .withParameterName(data["parameterName"]);
    };
    GetBalanceParameterModelMasterRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "parameterName": this.getParameterName(),
        };
    };
    return GetBalanceParameterModelMasterRequest;
}());
exports.default = GetBalanceParameterModelMasterRequest;
//# sourceMappingURL=GetBalanceParameterModelMasterRequest.js.map
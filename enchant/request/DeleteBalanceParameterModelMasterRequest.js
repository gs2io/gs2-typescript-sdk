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
var DeleteBalanceParameterModelMasterRequest = /** @class */ (function () {
    function DeleteBalanceParameterModelMasterRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.parameterName = null;
    }
    DeleteBalanceParameterModelMasterRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DeleteBalanceParameterModelMasterRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DeleteBalanceParameterModelMasterRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DeleteBalanceParameterModelMasterRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DeleteBalanceParameterModelMasterRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DeleteBalanceParameterModelMasterRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DeleteBalanceParameterModelMasterRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DeleteBalanceParameterModelMasterRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DeleteBalanceParameterModelMasterRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DeleteBalanceParameterModelMasterRequest.prototype.getParameterName = function () {
        return this.parameterName;
    };
    DeleteBalanceParameterModelMasterRequest.prototype.setParameterName = function (parameterName) {
        this.parameterName = parameterName;
        return this;
    };
    DeleteBalanceParameterModelMasterRequest.prototype.withParameterName = function (parameterName) {
        this.parameterName = parameterName;
        return this;
    };
    DeleteBalanceParameterModelMasterRequest.fromDict = function (data) {
        return new DeleteBalanceParameterModelMasterRequest()
            .withNamespaceName(data["namespaceName"])
            .withParameterName(data["parameterName"]);
    };
    DeleteBalanceParameterModelMasterRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "parameterName": this.getParameterName(),
        };
    };
    return DeleteBalanceParameterModelMasterRequest;
}());
exports.default = DeleteBalanceParameterModelMasterRequest;
//# sourceMappingURL=DeleteBalanceParameterModelMasterRequest.js.map
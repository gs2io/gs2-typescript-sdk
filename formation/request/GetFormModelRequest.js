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
var GetFormModelRequest = /** @class */ (function () {
    function GetFormModelRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.formModelName = null;
    }
    GetFormModelRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetFormModelRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetFormModelRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetFormModelRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetFormModelRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetFormModelRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetFormModelRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    GetFormModelRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetFormModelRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetFormModelRequest.prototype.getFormModelName = function () {
        return this.formModelName;
    };
    GetFormModelRequest.prototype.setFormModelName = function (formModelName) {
        this.formModelName = formModelName;
        return this;
    };
    GetFormModelRequest.prototype.withFormModelName = function (formModelName) {
        this.formModelName = formModelName;
        return this;
    };
    GetFormModelRequest.fromDict = function (data) {
        return new GetFormModelRequest()
            .withNamespaceName(data["namespaceName"])
            .withFormModelName(data["formModelName"]);
    };
    GetFormModelRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "formModelName": this.getFormModelName(),
        };
    };
    return GetFormModelRequest;
}());
exports.default = GetFormModelRequest;
//# sourceMappingURL=GetFormModelRequest.js.map
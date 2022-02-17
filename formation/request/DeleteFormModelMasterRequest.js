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
var DeleteFormModelMasterRequest = /** @class */ (function () {
    function DeleteFormModelMasterRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.formModelName = null;
    }
    DeleteFormModelMasterRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DeleteFormModelMasterRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DeleteFormModelMasterRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DeleteFormModelMasterRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DeleteFormModelMasterRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DeleteFormModelMasterRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DeleteFormModelMasterRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DeleteFormModelMasterRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DeleteFormModelMasterRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DeleteFormModelMasterRequest.prototype.getFormModelName = function () {
        return this.formModelName;
    };
    DeleteFormModelMasterRequest.prototype.setFormModelName = function (formModelName) {
        this.formModelName = formModelName;
        return this;
    };
    DeleteFormModelMasterRequest.prototype.withFormModelName = function (formModelName) {
        this.formModelName = formModelName;
        return this;
    };
    DeleteFormModelMasterRequest.fromDict = function (data) {
        return new DeleteFormModelMasterRequest()
            .withNamespaceName(data["namespaceName"])
            .withFormModelName(data["formModelName"]);
    };
    DeleteFormModelMasterRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "formModelName": this.getFormModelName(),
        };
    };
    return DeleteFormModelMasterRequest;
}());
exports.default = DeleteFormModelMasterRequest;
//# sourceMappingURL=DeleteFormModelMasterRequest.js.map
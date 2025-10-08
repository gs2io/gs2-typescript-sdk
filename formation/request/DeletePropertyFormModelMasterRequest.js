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
var DeletePropertyFormModelMasterRequest = /** @class */ (function () {
    function DeletePropertyFormModelMasterRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.propertyFormModelName = null;
    }
    DeletePropertyFormModelMasterRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DeletePropertyFormModelMasterRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DeletePropertyFormModelMasterRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DeletePropertyFormModelMasterRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DeletePropertyFormModelMasterRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DeletePropertyFormModelMasterRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DeletePropertyFormModelMasterRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DeletePropertyFormModelMasterRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DeletePropertyFormModelMasterRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DeletePropertyFormModelMasterRequest.prototype.getPropertyFormModelName = function () {
        return this.propertyFormModelName;
    };
    DeletePropertyFormModelMasterRequest.prototype.setPropertyFormModelName = function (propertyFormModelName) {
        this.propertyFormModelName = propertyFormModelName;
        return this;
    };
    DeletePropertyFormModelMasterRequest.prototype.withPropertyFormModelName = function (propertyFormModelName) {
        this.propertyFormModelName = propertyFormModelName;
        return this;
    };
    DeletePropertyFormModelMasterRequest.fromDict = function (data) {
        return new DeletePropertyFormModelMasterRequest()
            .withNamespaceName(data["namespaceName"])
            .withPropertyFormModelName(data["propertyFormModelName"]);
    };
    DeletePropertyFormModelMasterRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "propertyFormModelName": this.getPropertyFormModelName(),
        };
    };
    return DeletePropertyFormModelMasterRequest;
}());
exports.default = DeletePropertyFormModelMasterRequest;
//# sourceMappingURL=DeletePropertyFormModelMasterRequest.js.map
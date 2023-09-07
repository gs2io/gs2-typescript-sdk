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
var GetPropertyFormModelMasterRequest = /** @class */ (function () {
    function GetPropertyFormModelMasterRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.propertyFormModelName = null;
    }
    GetPropertyFormModelMasterRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetPropertyFormModelMasterRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetPropertyFormModelMasterRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetPropertyFormModelMasterRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetPropertyFormModelMasterRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetPropertyFormModelMasterRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetPropertyFormModelMasterRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    GetPropertyFormModelMasterRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetPropertyFormModelMasterRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetPropertyFormModelMasterRequest.prototype.getPropertyFormModelName = function () {
        return this.propertyFormModelName;
    };
    GetPropertyFormModelMasterRequest.prototype.setPropertyFormModelName = function (propertyFormModelName) {
        this.propertyFormModelName = propertyFormModelName;
        return this;
    };
    GetPropertyFormModelMasterRequest.prototype.withPropertyFormModelName = function (propertyFormModelName) {
        this.propertyFormModelName = propertyFormModelName;
        return this;
    };
    GetPropertyFormModelMasterRequest.fromDict = function (data) {
        return new GetPropertyFormModelMasterRequest()
            .withNamespaceName(data["namespaceName"])
            .withPropertyFormModelName(data["propertyFormModelName"]);
    };
    GetPropertyFormModelMasterRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "propertyFormModelName": this.getPropertyFormModelName(),
        };
    };
    return GetPropertyFormModelMasterRequest;
}());
exports.default = GetPropertyFormModelMasterRequest;
//# sourceMappingURL=GetPropertyFormModelMasterRequest.js.map
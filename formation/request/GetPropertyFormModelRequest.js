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
var GetPropertyFormModelRequest = /** @class */ (function () {
    function GetPropertyFormModelRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.propertyFormModelName = null;
    }
    GetPropertyFormModelRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetPropertyFormModelRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetPropertyFormModelRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetPropertyFormModelRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetPropertyFormModelRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetPropertyFormModelRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetPropertyFormModelRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    GetPropertyFormModelRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetPropertyFormModelRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetPropertyFormModelRequest.prototype.getPropertyFormModelName = function () {
        return this.propertyFormModelName;
    };
    GetPropertyFormModelRequest.prototype.setPropertyFormModelName = function (propertyFormModelName) {
        this.propertyFormModelName = propertyFormModelName;
        return this;
    };
    GetPropertyFormModelRequest.prototype.withPropertyFormModelName = function (propertyFormModelName) {
        this.propertyFormModelName = propertyFormModelName;
        return this;
    };
    GetPropertyFormModelRequest.fromDict = function (data) {
        return new GetPropertyFormModelRequest()
            .withNamespaceName(data["namespaceName"])
            .withPropertyFormModelName(data["propertyFormModelName"]);
    };
    GetPropertyFormModelRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "propertyFormModelName": this.getPropertyFormModelName(),
        };
    };
    return GetPropertyFormModelRequest;
}());
exports.default = GetPropertyFormModelRequest;
//# sourceMappingURL=GetPropertyFormModelRequest.js.map
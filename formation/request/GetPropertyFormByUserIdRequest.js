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
var GetPropertyFormByUserIdRequest = /** @class */ (function () {
    function GetPropertyFormByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.userId = null;
        this.formModelName = null;
        this.propertyId = null;
    }
    GetPropertyFormByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetPropertyFormByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetPropertyFormByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetPropertyFormByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetPropertyFormByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetPropertyFormByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetPropertyFormByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    GetPropertyFormByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetPropertyFormByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetPropertyFormByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    GetPropertyFormByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    GetPropertyFormByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    GetPropertyFormByUserIdRequest.prototype.getFormModelName = function () {
        return this.formModelName;
    };
    GetPropertyFormByUserIdRequest.prototype.setFormModelName = function (formModelName) {
        this.formModelName = formModelName;
        return this;
    };
    GetPropertyFormByUserIdRequest.prototype.withFormModelName = function (formModelName) {
        this.formModelName = formModelName;
        return this;
    };
    GetPropertyFormByUserIdRequest.prototype.getPropertyId = function () {
        return this.propertyId;
    };
    GetPropertyFormByUserIdRequest.prototype.setPropertyId = function (propertyId) {
        this.propertyId = propertyId;
        return this;
    };
    GetPropertyFormByUserIdRequest.prototype.withPropertyId = function (propertyId) {
        this.propertyId = propertyId;
        return this;
    };
    GetPropertyFormByUserIdRequest.fromDict = function (data) {
        return new GetPropertyFormByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withUserId(data["userId"])
            .withFormModelName(data["formModelName"])
            .withPropertyId(data["propertyId"]);
    };
    GetPropertyFormByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "userId": this.getUserId(),
            "formModelName": this.getFormModelName(),
            "propertyId": this.getPropertyId(),
        };
    };
    return GetPropertyFormByUserIdRequest;
}());
exports.default = GetPropertyFormByUserIdRequest;
//# sourceMappingURL=GetPropertyFormByUserIdRequest.js.map
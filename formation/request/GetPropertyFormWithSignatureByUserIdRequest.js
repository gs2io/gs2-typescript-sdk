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
var GetPropertyFormWithSignatureByUserIdRequest = /** @class */ (function () {
    function GetPropertyFormWithSignatureByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.userId = null;
        this.formModelName = null;
        this.propertyId = null;
        this.keyId = null;
    }
    GetPropertyFormWithSignatureByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetPropertyFormWithSignatureByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetPropertyFormWithSignatureByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetPropertyFormWithSignatureByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetPropertyFormWithSignatureByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetPropertyFormWithSignatureByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetPropertyFormWithSignatureByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    GetPropertyFormWithSignatureByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetPropertyFormWithSignatureByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetPropertyFormWithSignatureByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    GetPropertyFormWithSignatureByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    GetPropertyFormWithSignatureByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    GetPropertyFormWithSignatureByUserIdRequest.prototype.getFormModelName = function () {
        return this.formModelName;
    };
    GetPropertyFormWithSignatureByUserIdRequest.prototype.setFormModelName = function (formModelName) {
        this.formModelName = formModelName;
        return this;
    };
    GetPropertyFormWithSignatureByUserIdRequest.prototype.withFormModelName = function (formModelName) {
        this.formModelName = formModelName;
        return this;
    };
    GetPropertyFormWithSignatureByUserIdRequest.prototype.getPropertyId = function () {
        return this.propertyId;
    };
    GetPropertyFormWithSignatureByUserIdRequest.prototype.setPropertyId = function (propertyId) {
        this.propertyId = propertyId;
        return this;
    };
    GetPropertyFormWithSignatureByUserIdRequest.prototype.withPropertyId = function (propertyId) {
        this.propertyId = propertyId;
        return this;
    };
    GetPropertyFormWithSignatureByUserIdRequest.prototype.getKeyId = function () {
        return this.keyId;
    };
    GetPropertyFormWithSignatureByUserIdRequest.prototype.setKeyId = function (keyId) {
        this.keyId = keyId;
        return this;
    };
    GetPropertyFormWithSignatureByUserIdRequest.prototype.withKeyId = function (keyId) {
        this.keyId = keyId;
        return this;
    };
    GetPropertyFormWithSignatureByUserIdRequest.fromDict = function (data) {
        return new GetPropertyFormWithSignatureByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withUserId(data["userId"])
            .withFormModelName(data["formModelName"])
            .withPropertyId(data["propertyId"])
            .withKeyId(data["keyId"]);
    };
    GetPropertyFormWithSignatureByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "userId": this.getUserId(),
            "formModelName": this.getFormModelName(),
            "propertyId": this.getPropertyId(),
            "keyId": this.getKeyId(),
        };
    };
    return GetPropertyFormWithSignatureByUserIdRequest;
}());
exports.default = GetPropertyFormWithSignatureByUserIdRequest;
//# sourceMappingURL=GetPropertyFormWithSignatureByUserIdRequest.js.map
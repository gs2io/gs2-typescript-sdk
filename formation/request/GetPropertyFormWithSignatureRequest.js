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
var GetPropertyFormWithSignatureRequest = /** @class */ (function () {
    function GetPropertyFormWithSignatureRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.accessToken = null;
        this.formModelName = null;
        this.propertyId = null;
        this.keyId = null;
    }
    GetPropertyFormWithSignatureRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetPropertyFormWithSignatureRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetPropertyFormWithSignatureRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetPropertyFormWithSignatureRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetPropertyFormWithSignatureRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetPropertyFormWithSignatureRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetPropertyFormWithSignatureRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    GetPropertyFormWithSignatureRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetPropertyFormWithSignatureRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetPropertyFormWithSignatureRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    GetPropertyFormWithSignatureRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    GetPropertyFormWithSignatureRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    GetPropertyFormWithSignatureRequest.prototype.getFormModelName = function () {
        return this.formModelName;
    };
    GetPropertyFormWithSignatureRequest.prototype.setFormModelName = function (formModelName) {
        this.formModelName = formModelName;
        return this;
    };
    GetPropertyFormWithSignatureRequest.prototype.withFormModelName = function (formModelName) {
        this.formModelName = formModelName;
        return this;
    };
    GetPropertyFormWithSignatureRequest.prototype.getPropertyId = function () {
        return this.propertyId;
    };
    GetPropertyFormWithSignatureRequest.prototype.setPropertyId = function (propertyId) {
        this.propertyId = propertyId;
        return this;
    };
    GetPropertyFormWithSignatureRequest.prototype.withPropertyId = function (propertyId) {
        this.propertyId = propertyId;
        return this;
    };
    GetPropertyFormWithSignatureRequest.prototype.getKeyId = function () {
        return this.keyId;
    };
    GetPropertyFormWithSignatureRequest.prototype.setKeyId = function (keyId) {
        this.keyId = keyId;
        return this;
    };
    GetPropertyFormWithSignatureRequest.prototype.withKeyId = function (keyId) {
        this.keyId = keyId;
        return this;
    };
    GetPropertyFormWithSignatureRequest.fromDict = function (data) {
        return new GetPropertyFormWithSignatureRequest()
            .withNamespaceName(data["namespaceName"])
            .withAccessToken(data["accessToken"])
            .withFormModelName(data["formModelName"])
            .withPropertyId(data["propertyId"])
            .withKeyId(data["keyId"]);
    };
    GetPropertyFormWithSignatureRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "accessToken": this.getAccessToken(),
            "formModelName": this.getFormModelName(),
            "propertyId": this.getPropertyId(),
            "keyId": this.getKeyId(),
        };
    };
    return GetPropertyFormWithSignatureRequest;
}());
exports.default = GetPropertyFormWithSignatureRequest;
//# sourceMappingURL=GetPropertyFormWithSignatureRequest.js.map
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
var GetPropertyFormRequest = /** @class */ (function () {
    function GetPropertyFormRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.accessToken = null;
        this.formModelName = null;
        this.propertyId = null;
    }
    GetPropertyFormRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetPropertyFormRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetPropertyFormRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetPropertyFormRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetPropertyFormRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetPropertyFormRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetPropertyFormRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    GetPropertyFormRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetPropertyFormRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetPropertyFormRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    GetPropertyFormRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    GetPropertyFormRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    GetPropertyFormRequest.prototype.getFormModelName = function () {
        return this.formModelName;
    };
    GetPropertyFormRequest.prototype.setFormModelName = function (formModelName) {
        this.formModelName = formModelName;
        return this;
    };
    GetPropertyFormRequest.prototype.withFormModelName = function (formModelName) {
        this.formModelName = formModelName;
        return this;
    };
    GetPropertyFormRequest.prototype.getPropertyId = function () {
        return this.propertyId;
    };
    GetPropertyFormRequest.prototype.setPropertyId = function (propertyId) {
        this.propertyId = propertyId;
        return this;
    };
    GetPropertyFormRequest.prototype.withPropertyId = function (propertyId) {
        this.propertyId = propertyId;
        return this;
    };
    GetPropertyFormRequest.fromDict = function (data) {
        return new GetPropertyFormRequest()
            .withNamespaceName(data["namespaceName"])
            .withAccessToken(data["accessToken"])
            .withFormModelName(data["formModelName"])
            .withPropertyId(data["propertyId"]);
    };
    GetPropertyFormRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "accessToken": this.getAccessToken(),
            "formModelName": this.getFormModelName(),
            "propertyId": this.getPropertyId(),
        };
    };
    return GetPropertyFormRequest;
}());
exports.default = GetPropertyFormRequest;
//# sourceMappingURL=GetPropertyFormRequest.js.map
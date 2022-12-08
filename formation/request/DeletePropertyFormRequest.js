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
var DeletePropertyFormRequest = /** @class */ (function () {
    function DeletePropertyFormRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.accessToken = null;
        this.formModelName = null;
        this.propertyId = null;
        this.duplicationAvoider = null;
    }
    DeletePropertyFormRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DeletePropertyFormRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DeletePropertyFormRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DeletePropertyFormRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DeletePropertyFormRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DeletePropertyFormRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DeletePropertyFormRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DeletePropertyFormRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DeletePropertyFormRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DeletePropertyFormRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    DeletePropertyFormRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    DeletePropertyFormRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    DeletePropertyFormRequest.prototype.getFormModelName = function () {
        return this.formModelName;
    };
    DeletePropertyFormRequest.prototype.setFormModelName = function (formModelName) {
        this.formModelName = formModelName;
        return this;
    };
    DeletePropertyFormRequest.prototype.withFormModelName = function (formModelName) {
        this.formModelName = formModelName;
        return this;
    };
    DeletePropertyFormRequest.prototype.getPropertyId = function () {
        return this.propertyId;
    };
    DeletePropertyFormRequest.prototype.setPropertyId = function (propertyId) {
        this.propertyId = propertyId;
        return this;
    };
    DeletePropertyFormRequest.prototype.withPropertyId = function (propertyId) {
        this.propertyId = propertyId;
        return this;
    };
    DeletePropertyFormRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    DeletePropertyFormRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    DeletePropertyFormRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    DeletePropertyFormRequest.fromDict = function (data) {
        return new DeletePropertyFormRequest()
            .withNamespaceName(data["namespaceName"])
            .withAccessToken(data["accessToken"])
            .withFormModelName(data["formModelName"])
            .withPropertyId(data["propertyId"]);
    };
    DeletePropertyFormRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "accessToken": this.getAccessToken(),
            "formModelName": this.getFormModelName(),
            "propertyId": this.getPropertyId(),
        };
    };
    return DeletePropertyFormRequest;
}());
exports.default = DeletePropertyFormRequest;
//# sourceMappingURL=DeletePropertyFormRequest.js.map
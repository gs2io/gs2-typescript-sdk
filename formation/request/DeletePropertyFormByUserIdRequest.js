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
var DeletePropertyFormByUserIdRequest = /** @class */ (function () {
    function DeletePropertyFormByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.userId = null;
        this.formModelName = null;
        this.propertyId = null;
        this.duplicationAvoider = null;
    }
    DeletePropertyFormByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DeletePropertyFormByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DeletePropertyFormByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DeletePropertyFormByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DeletePropertyFormByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DeletePropertyFormByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DeletePropertyFormByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DeletePropertyFormByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DeletePropertyFormByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DeletePropertyFormByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    DeletePropertyFormByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    DeletePropertyFormByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    DeletePropertyFormByUserIdRequest.prototype.getFormModelName = function () {
        return this.formModelName;
    };
    DeletePropertyFormByUserIdRequest.prototype.setFormModelName = function (formModelName) {
        this.formModelName = formModelName;
        return this;
    };
    DeletePropertyFormByUserIdRequest.prototype.withFormModelName = function (formModelName) {
        this.formModelName = formModelName;
        return this;
    };
    DeletePropertyFormByUserIdRequest.prototype.getPropertyId = function () {
        return this.propertyId;
    };
    DeletePropertyFormByUserIdRequest.prototype.setPropertyId = function (propertyId) {
        this.propertyId = propertyId;
        return this;
    };
    DeletePropertyFormByUserIdRequest.prototype.withPropertyId = function (propertyId) {
        this.propertyId = propertyId;
        return this;
    };
    DeletePropertyFormByUserIdRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    DeletePropertyFormByUserIdRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    DeletePropertyFormByUserIdRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    DeletePropertyFormByUserIdRequest.fromDict = function (data) {
        return new DeletePropertyFormByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withUserId(data["userId"])
            .withFormModelName(data["formModelName"])
            .withPropertyId(data["propertyId"]);
    };
    DeletePropertyFormByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "userId": this.getUserId(),
            "formModelName": this.getFormModelName(),
            "propertyId": this.getPropertyId(),
        };
    };
    return DeletePropertyFormByUserIdRequest;
}());
exports.default = DeletePropertyFormByUserIdRequest;
//# sourceMappingURL=DeletePropertyFormByUserIdRequest.js.map
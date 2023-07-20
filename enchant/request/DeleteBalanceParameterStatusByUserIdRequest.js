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
var DeleteBalanceParameterStatusByUserIdRequest = /** @class */ (function () {
    function DeleteBalanceParameterStatusByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.userId = null;
        this.parameterName = null;
        this.propertyId = null;
        this.duplicationAvoider = null;
    }
    DeleteBalanceParameterStatusByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DeleteBalanceParameterStatusByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DeleteBalanceParameterStatusByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DeleteBalanceParameterStatusByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DeleteBalanceParameterStatusByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DeleteBalanceParameterStatusByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DeleteBalanceParameterStatusByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DeleteBalanceParameterStatusByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DeleteBalanceParameterStatusByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DeleteBalanceParameterStatusByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    DeleteBalanceParameterStatusByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    DeleteBalanceParameterStatusByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    DeleteBalanceParameterStatusByUserIdRequest.prototype.getParameterName = function () {
        return this.parameterName;
    };
    DeleteBalanceParameterStatusByUserIdRequest.prototype.setParameterName = function (parameterName) {
        this.parameterName = parameterName;
        return this;
    };
    DeleteBalanceParameterStatusByUserIdRequest.prototype.withParameterName = function (parameterName) {
        this.parameterName = parameterName;
        return this;
    };
    DeleteBalanceParameterStatusByUserIdRequest.prototype.getPropertyId = function () {
        return this.propertyId;
    };
    DeleteBalanceParameterStatusByUserIdRequest.prototype.setPropertyId = function (propertyId) {
        this.propertyId = propertyId;
        return this;
    };
    DeleteBalanceParameterStatusByUserIdRequest.prototype.withPropertyId = function (propertyId) {
        this.propertyId = propertyId;
        return this;
    };
    DeleteBalanceParameterStatusByUserIdRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    DeleteBalanceParameterStatusByUserIdRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    DeleteBalanceParameterStatusByUserIdRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    DeleteBalanceParameterStatusByUserIdRequest.fromDict = function (data) {
        return new DeleteBalanceParameterStatusByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withUserId(data["userId"])
            .withParameterName(data["parameterName"])
            .withPropertyId(data["propertyId"]);
    };
    DeleteBalanceParameterStatusByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "userId": this.getUserId(),
            "parameterName": this.getParameterName(),
            "propertyId": this.getPropertyId(),
        };
    };
    return DeleteBalanceParameterStatusByUserIdRequest;
}());
exports.default = DeleteBalanceParameterStatusByUserIdRequest;
//# sourceMappingURL=DeleteBalanceParameterStatusByUserIdRequest.js.map
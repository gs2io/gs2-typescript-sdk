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
var GetMutexByUserIdRequest = /** @class */ (function () {
    function GetMutexByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.userId = null;
        this.propertyId = null;
    }
    GetMutexByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetMutexByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetMutexByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetMutexByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetMutexByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetMutexByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetMutexByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    GetMutexByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetMutexByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetMutexByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    GetMutexByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    GetMutexByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    GetMutexByUserIdRequest.prototype.getPropertyId = function () {
        return this.propertyId;
    };
    GetMutexByUserIdRequest.prototype.setPropertyId = function (propertyId) {
        this.propertyId = propertyId;
        return this;
    };
    GetMutexByUserIdRequest.prototype.withPropertyId = function (propertyId) {
        this.propertyId = propertyId;
        return this;
    };
    GetMutexByUserIdRequest.fromDict = function (data) {
        return new GetMutexByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withUserId(data["userId"])
            .withPropertyId(data["propertyId"]);
    };
    GetMutexByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "userId": this.getUserId(),
            "propertyId": this.getPropertyId(),
        };
    };
    return GetMutexByUserIdRequest;
}());
exports.default = GetMutexByUserIdRequest;
//# sourceMappingURL=GetMutexByUserIdRequest.js.map
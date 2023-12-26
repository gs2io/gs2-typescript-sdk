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
var GetStatusByUserIdRequest = /** @class */ (function () {
    function GetStatusByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.userId = null;
        this.gradeName = null;
        this.propertyId = null;
    }
    GetStatusByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetStatusByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetStatusByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetStatusByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetStatusByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetStatusByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetStatusByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    GetStatusByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetStatusByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetStatusByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    GetStatusByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    GetStatusByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    GetStatusByUserIdRequest.prototype.getGradeName = function () {
        return this.gradeName;
    };
    GetStatusByUserIdRequest.prototype.setGradeName = function (gradeName) {
        this.gradeName = gradeName;
        return this;
    };
    GetStatusByUserIdRequest.prototype.withGradeName = function (gradeName) {
        this.gradeName = gradeName;
        return this;
    };
    GetStatusByUserIdRequest.prototype.getPropertyId = function () {
        return this.propertyId;
    };
    GetStatusByUserIdRequest.prototype.setPropertyId = function (propertyId) {
        this.propertyId = propertyId;
        return this;
    };
    GetStatusByUserIdRequest.prototype.withPropertyId = function (propertyId) {
        this.propertyId = propertyId;
        return this;
    };
    GetStatusByUserIdRequest.fromDict = function (data) {
        return new GetStatusByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withUserId(data["userId"])
            .withGradeName(data["gradeName"])
            .withPropertyId(data["propertyId"]);
    };
    GetStatusByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "userId": this.getUserId(),
            "gradeName": this.getGradeName(),
            "propertyId": this.getPropertyId(),
        };
    };
    return GetStatusByUserIdRequest;
}());
exports.default = GetStatusByUserIdRequest;
//# sourceMappingURL=GetStatusByUserIdRequest.js.map
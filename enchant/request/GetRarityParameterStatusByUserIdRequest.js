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
var GetRarityParameterStatusByUserIdRequest = /** @class */ (function () {
    function GetRarityParameterStatusByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.userId = null;
        this.parameterName = null;
        this.propertyId = null;
    }
    GetRarityParameterStatusByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetRarityParameterStatusByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetRarityParameterStatusByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetRarityParameterStatusByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetRarityParameterStatusByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetRarityParameterStatusByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetRarityParameterStatusByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    GetRarityParameterStatusByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetRarityParameterStatusByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetRarityParameterStatusByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    GetRarityParameterStatusByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    GetRarityParameterStatusByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    GetRarityParameterStatusByUserIdRequest.prototype.getParameterName = function () {
        return this.parameterName;
    };
    GetRarityParameterStatusByUserIdRequest.prototype.setParameterName = function (parameterName) {
        this.parameterName = parameterName;
        return this;
    };
    GetRarityParameterStatusByUserIdRequest.prototype.withParameterName = function (parameterName) {
        this.parameterName = parameterName;
        return this;
    };
    GetRarityParameterStatusByUserIdRequest.prototype.getPropertyId = function () {
        return this.propertyId;
    };
    GetRarityParameterStatusByUserIdRequest.prototype.setPropertyId = function (propertyId) {
        this.propertyId = propertyId;
        return this;
    };
    GetRarityParameterStatusByUserIdRequest.prototype.withPropertyId = function (propertyId) {
        this.propertyId = propertyId;
        return this;
    };
    GetRarityParameterStatusByUserIdRequest.fromDict = function (data) {
        return new GetRarityParameterStatusByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withUserId(data["userId"])
            .withParameterName(data["parameterName"])
            .withPropertyId(data["propertyId"]);
    };
    GetRarityParameterStatusByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "userId": this.getUserId(),
            "parameterName": this.getParameterName(),
            "propertyId": this.getPropertyId(),
        };
    };
    return GetRarityParameterStatusByUserIdRequest;
}());
exports.default = GetRarityParameterStatusByUserIdRequest;
//# sourceMappingURL=GetRarityParameterStatusByUserIdRequest.js.map
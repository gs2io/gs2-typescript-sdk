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
var ReDrawBalanceParameterStatusByUserIdRequest = /** @class */ (function () {
    function ReDrawBalanceParameterStatusByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.userId = null;
        this.parameterName = null;
        this.propertyId = null;
        this.fixedParameterNames = null;
        this.duplicationAvoider = null;
    }
    ReDrawBalanceParameterStatusByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    ReDrawBalanceParameterStatusByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    ReDrawBalanceParameterStatusByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    ReDrawBalanceParameterStatusByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    ReDrawBalanceParameterStatusByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    ReDrawBalanceParameterStatusByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    ReDrawBalanceParameterStatusByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    ReDrawBalanceParameterStatusByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    ReDrawBalanceParameterStatusByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    ReDrawBalanceParameterStatusByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    ReDrawBalanceParameterStatusByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    ReDrawBalanceParameterStatusByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    ReDrawBalanceParameterStatusByUserIdRequest.prototype.getParameterName = function () {
        return this.parameterName;
    };
    ReDrawBalanceParameterStatusByUserIdRequest.prototype.setParameterName = function (parameterName) {
        this.parameterName = parameterName;
        return this;
    };
    ReDrawBalanceParameterStatusByUserIdRequest.prototype.withParameterName = function (parameterName) {
        this.parameterName = parameterName;
        return this;
    };
    ReDrawBalanceParameterStatusByUserIdRequest.prototype.getPropertyId = function () {
        return this.propertyId;
    };
    ReDrawBalanceParameterStatusByUserIdRequest.prototype.setPropertyId = function (propertyId) {
        this.propertyId = propertyId;
        return this;
    };
    ReDrawBalanceParameterStatusByUserIdRequest.prototype.withPropertyId = function (propertyId) {
        this.propertyId = propertyId;
        return this;
    };
    ReDrawBalanceParameterStatusByUserIdRequest.prototype.getFixedParameterNames = function () {
        return this.fixedParameterNames;
    };
    ReDrawBalanceParameterStatusByUserIdRequest.prototype.setFixedParameterNames = function (fixedParameterNames) {
        this.fixedParameterNames = fixedParameterNames;
        return this;
    };
    ReDrawBalanceParameterStatusByUserIdRequest.prototype.withFixedParameterNames = function (fixedParameterNames) {
        this.fixedParameterNames = fixedParameterNames;
        return this;
    };
    ReDrawBalanceParameterStatusByUserIdRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    ReDrawBalanceParameterStatusByUserIdRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    ReDrawBalanceParameterStatusByUserIdRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    ReDrawBalanceParameterStatusByUserIdRequest.fromDict = function (data) {
        return new ReDrawBalanceParameterStatusByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withUserId(data["userId"])
            .withParameterName(data["parameterName"])
            .withPropertyId(data["propertyId"])
            .withFixedParameterNames(data.fixedParameterNames ?
            data.fixedParameterNames.map(function (item) {
                return item;
            }) : []);
    };
    ReDrawBalanceParameterStatusByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "userId": this.getUserId(),
            "parameterName": this.getParameterName(),
            "propertyId": this.getPropertyId(),
            "fixedParameterNames": this.getFixedParameterNames() ?
                this.getFixedParameterNames().map(function (item) {
                    return item;
                }) : [],
        };
    };
    return ReDrawBalanceParameterStatusByUserIdRequest;
}());
exports.default = ReDrawBalanceParameterStatusByUserIdRequest;
//# sourceMappingURL=ReDrawBalanceParameterStatusByUserIdRequest.js.map
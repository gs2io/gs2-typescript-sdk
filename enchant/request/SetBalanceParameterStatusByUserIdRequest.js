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
var tslib_1 = require("tslib");
var Gs2Enchant = tslib_1.__importStar(require("../model"));
var SetBalanceParameterStatusByUserIdRequest = /** @class */ (function () {
    function SetBalanceParameterStatusByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.userId = null;
        this.parameterName = null;
        this.propertyId = null;
        this.parameterValues = null;
        this.duplicationAvoider = null;
    }
    SetBalanceParameterStatusByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    SetBalanceParameterStatusByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    SetBalanceParameterStatusByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    SetBalanceParameterStatusByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    SetBalanceParameterStatusByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    SetBalanceParameterStatusByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    SetBalanceParameterStatusByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    SetBalanceParameterStatusByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    SetBalanceParameterStatusByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    SetBalanceParameterStatusByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    SetBalanceParameterStatusByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    SetBalanceParameterStatusByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    SetBalanceParameterStatusByUserIdRequest.prototype.getParameterName = function () {
        return this.parameterName;
    };
    SetBalanceParameterStatusByUserIdRequest.prototype.setParameterName = function (parameterName) {
        this.parameterName = parameterName;
        return this;
    };
    SetBalanceParameterStatusByUserIdRequest.prototype.withParameterName = function (parameterName) {
        this.parameterName = parameterName;
        return this;
    };
    SetBalanceParameterStatusByUserIdRequest.prototype.getPropertyId = function () {
        return this.propertyId;
    };
    SetBalanceParameterStatusByUserIdRequest.prototype.setPropertyId = function (propertyId) {
        this.propertyId = propertyId;
        return this;
    };
    SetBalanceParameterStatusByUserIdRequest.prototype.withPropertyId = function (propertyId) {
        this.propertyId = propertyId;
        return this;
    };
    SetBalanceParameterStatusByUserIdRequest.prototype.getParameterValues = function () {
        return this.parameterValues;
    };
    SetBalanceParameterStatusByUserIdRequest.prototype.setParameterValues = function (parameterValues) {
        this.parameterValues = parameterValues;
        return this;
    };
    SetBalanceParameterStatusByUserIdRequest.prototype.withParameterValues = function (parameterValues) {
        this.parameterValues = parameterValues;
        return this;
    };
    SetBalanceParameterStatusByUserIdRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    SetBalanceParameterStatusByUserIdRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    SetBalanceParameterStatusByUserIdRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    SetBalanceParameterStatusByUserIdRequest.fromDict = function (data) {
        return new SetBalanceParameterStatusByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withUserId(data["userId"])
            .withParameterName(data["parameterName"])
            .withPropertyId(data["propertyId"])
            .withParameterValues(data.parameterValues ?
            data.parameterValues.map(function (item) {
                return Gs2Enchant.BalanceParameterValue.fromDict(item);
            }) : []);
    };
    SetBalanceParameterStatusByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "userId": this.getUserId(),
            "parameterName": this.getParameterName(),
            "propertyId": this.getPropertyId(),
            "parameterValues": this.getParameterValues() ?
                this.getParameterValues().map(function (item) {
                    return item.toDict();
                }) : [],
        };
    };
    return SetBalanceParameterStatusByUserIdRequest;
}());
exports.default = SetBalanceParameterStatusByUserIdRequest;
//# sourceMappingURL=SetBalanceParameterStatusByUserIdRequest.js.map
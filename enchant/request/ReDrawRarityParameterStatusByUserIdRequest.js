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
var ReDrawRarityParameterStatusByUserIdRequest = /** @class */ (function () {
    function ReDrawRarityParameterStatusByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.userId = null;
        this.parameterName = null;
        this.propertyId = null;
        this.fixedParameterNames = null;
        this.timeOffsetToken = null;
        this.duplicationAvoider = null;
    }
    ReDrawRarityParameterStatusByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    ReDrawRarityParameterStatusByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    ReDrawRarityParameterStatusByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    ReDrawRarityParameterStatusByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    ReDrawRarityParameterStatusByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    ReDrawRarityParameterStatusByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    ReDrawRarityParameterStatusByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    ReDrawRarityParameterStatusByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    ReDrawRarityParameterStatusByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    ReDrawRarityParameterStatusByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    ReDrawRarityParameterStatusByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    ReDrawRarityParameterStatusByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    ReDrawRarityParameterStatusByUserIdRequest.prototype.getParameterName = function () {
        return this.parameterName;
    };
    ReDrawRarityParameterStatusByUserIdRequest.prototype.setParameterName = function (parameterName) {
        this.parameterName = parameterName;
        return this;
    };
    ReDrawRarityParameterStatusByUserIdRequest.prototype.withParameterName = function (parameterName) {
        this.parameterName = parameterName;
        return this;
    };
    ReDrawRarityParameterStatusByUserIdRequest.prototype.getPropertyId = function () {
        return this.propertyId;
    };
    ReDrawRarityParameterStatusByUserIdRequest.prototype.setPropertyId = function (propertyId) {
        this.propertyId = propertyId;
        return this;
    };
    ReDrawRarityParameterStatusByUserIdRequest.prototype.withPropertyId = function (propertyId) {
        this.propertyId = propertyId;
        return this;
    };
    ReDrawRarityParameterStatusByUserIdRequest.prototype.getFixedParameterNames = function () {
        return this.fixedParameterNames;
    };
    ReDrawRarityParameterStatusByUserIdRequest.prototype.setFixedParameterNames = function (fixedParameterNames) {
        this.fixedParameterNames = fixedParameterNames;
        return this;
    };
    ReDrawRarityParameterStatusByUserIdRequest.prototype.withFixedParameterNames = function (fixedParameterNames) {
        this.fixedParameterNames = fixedParameterNames;
        return this;
    };
    ReDrawRarityParameterStatusByUserIdRequest.prototype.getTimeOffsetToken = function () {
        return this.timeOffsetToken;
    };
    ReDrawRarityParameterStatusByUserIdRequest.prototype.setTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    ReDrawRarityParameterStatusByUserIdRequest.prototype.withTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    ReDrawRarityParameterStatusByUserIdRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    ReDrawRarityParameterStatusByUserIdRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    ReDrawRarityParameterStatusByUserIdRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    ReDrawRarityParameterStatusByUserIdRequest.fromDict = function (data) {
        return new ReDrawRarityParameterStatusByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withUserId(data["userId"])
            .withParameterName(data["parameterName"])
            .withPropertyId(data["propertyId"])
            .withFixedParameterNames(data.fixedParameterNames ?
            data.fixedParameterNames.map(function (item) {
                return item;
            }) : null)
            .withTimeOffsetToken(data["timeOffsetToken"]);
    };
    ReDrawRarityParameterStatusByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "userId": this.getUserId(),
            "parameterName": this.getParameterName(),
            "propertyId": this.getPropertyId(),
            "fixedParameterNames": this.getFixedParameterNames() ?
                this.getFixedParameterNames().map(function (item) {
                    return item;
                }) : null,
            "timeOffsetToken": this.getTimeOffsetToken(),
        };
    };
    return ReDrawRarityParameterStatusByUserIdRequest;
}());
exports.default = ReDrawRarityParameterStatusByUserIdRequest;
//# sourceMappingURL=ReDrawRarityParameterStatusByUserIdRequest.js.map
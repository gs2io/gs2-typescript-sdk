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
var VerifyStatusByUserIdRequest = /** @class */ (function () {
    function VerifyStatusByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.userId = null;
        this.propertyId = null;
        this.nodeModelName = null;
        this.verifyType = null;
        this.timeOffsetToken = null;
        this.duplicationAvoider = null;
    }
    VerifyStatusByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    VerifyStatusByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    VerifyStatusByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    VerifyStatusByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    VerifyStatusByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    VerifyStatusByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    VerifyStatusByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    VerifyStatusByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    VerifyStatusByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    VerifyStatusByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    VerifyStatusByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    VerifyStatusByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    VerifyStatusByUserIdRequest.prototype.getPropertyId = function () {
        return this.propertyId;
    };
    VerifyStatusByUserIdRequest.prototype.setPropertyId = function (propertyId) {
        this.propertyId = propertyId;
        return this;
    };
    VerifyStatusByUserIdRequest.prototype.withPropertyId = function (propertyId) {
        this.propertyId = propertyId;
        return this;
    };
    VerifyStatusByUserIdRequest.prototype.getNodeModelName = function () {
        return this.nodeModelName;
    };
    VerifyStatusByUserIdRequest.prototype.setNodeModelName = function (nodeModelName) {
        this.nodeModelName = nodeModelName;
        return this;
    };
    VerifyStatusByUserIdRequest.prototype.withNodeModelName = function (nodeModelName) {
        this.nodeModelName = nodeModelName;
        return this;
    };
    VerifyStatusByUserIdRequest.prototype.getVerifyType = function () {
        return this.verifyType;
    };
    VerifyStatusByUserIdRequest.prototype.setVerifyType = function (verifyType) {
        this.verifyType = verifyType;
        return this;
    };
    VerifyStatusByUserIdRequest.prototype.withVerifyType = function (verifyType) {
        this.verifyType = verifyType;
        return this;
    };
    VerifyStatusByUserIdRequest.prototype.getTimeOffsetToken = function () {
        return this.timeOffsetToken;
    };
    VerifyStatusByUserIdRequest.prototype.setTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    VerifyStatusByUserIdRequest.prototype.withTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    VerifyStatusByUserIdRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    VerifyStatusByUserIdRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    VerifyStatusByUserIdRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    VerifyStatusByUserIdRequest.fromDict = function (data) {
        return new VerifyStatusByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withUserId(data["userId"])
            .withPropertyId(data["propertyId"])
            .withNodeModelName(data["nodeModelName"])
            .withVerifyType(data["verifyType"])
            .withTimeOffsetToken(data["timeOffsetToken"]);
    };
    VerifyStatusByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "userId": this.getUserId(),
            "propertyId": this.getPropertyId(),
            "nodeModelName": this.getNodeModelName(),
            "verifyType": this.getVerifyType(),
            "timeOffsetToken": this.getTimeOffsetToken(),
        };
    };
    return VerifyStatusByUserIdRequest;
}());
exports.default = VerifyStatusByUserIdRequest;
//# sourceMappingURL=VerifyStatusByUserIdRequest.js.map
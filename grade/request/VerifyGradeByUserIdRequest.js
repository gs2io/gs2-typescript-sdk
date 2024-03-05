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
var VerifyGradeByUserIdRequest = /** @class */ (function () {
    function VerifyGradeByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.userId = null;
        this.gradeName = null;
        this.verifyType = null;
        this.propertyId = null;
        this.gradeValue = null;
        this.multiplyValueSpecifyingQuantity = null;
        this.duplicationAvoider = null;
    }
    VerifyGradeByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    VerifyGradeByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    VerifyGradeByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    VerifyGradeByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    VerifyGradeByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    VerifyGradeByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    VerifyGradeByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    VerifyGradeByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    VerifyGradeByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    VerifyGradeByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    VerifyGradeByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    VerifyGradeByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    VerifyGradeByUserIdRequest.prototype.getGradeName = function () {
        return this.gradeName;
    };
    VerifyGradeByUserIdRequest.prototype.setGradeName = function (gradeName) {
        this.gradeName = gradeName;
        return this;
    };
    VerifyGradeByUserIdRequest.prototype.withGradeName = function (gradeName) {
        this.gradeName = gradeName;
        return this;
    };
    VerifyGradeByUserIdRequest.prototype.getVerifyType = function () {
        return this.verifyType;
    };
    VerifyGradeByUserIdRequest.prototype.setVerifyType = function (verifyType) {
        this.verifyType = verifyType;
        return this;
    };
    VerifyGradeByUserIdRequest.prototype.withVerifyType = function (verifyType) {
        this.verifyType = verifyType;
        return this;
    };
    VerifyGradeByUserIdRequest.prototype.getPropertyId = function () {
        return this.propertyId;
    };
    VerifyGradeByUserIdRequest.prototype.setPropertyId = function (propertyId) {
        this.propertyId = propertyId;
        return this;
    };
    VerifyGradeByUserIdRequest.prototype.withPropertyId = function (propertyId) {
        this.propertyId = propertyId;
        return this;
    };
    VerifyGradeByUserIdRequest.prototype.getGradeValue = function () {
        return this.gradeValue;
    };
    VerifyGradeByUserIdRequest.prototype.setGradeValue = function (gradeValue) {
        this.gradeValue = gradeValue;
        return this;
    };
    VerifyGradeByUserIdRequest.prototype.withGradeValue = function (gradeValue) {
        this.gradeValue = gradeValue;
        return this;
    };
    VerifyGradeByUserIdRequest.prototype.getMultiplyValueSpecifyingQuantity = function () {
        return this.multiplyValueSpecifyingQuantity;
    };
    VerifyGradeByUserIdRequest.prototype.setMultiplyValueSpecifyingQuantity = function (multiplyValueSpecifyingQuantity) {
        this.multiplyValueSpecifyingQuantity = multiplyValueSpecifyingQuantity;
        return this;
    };
    VerifyGradeByUserIdRequest.prototype.withMultiplyValueSpecifyingQuantity = function (multiplyValueSpecifyingQuantity) {
        this.multiplyValueSpecifyingQuantity = multiplyValueSpecifyingQuantity;
        return this;
    };
    VerifyGradeByUserIdRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    VerifyGradeByUserIdRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    VerifyGradeByUserIdRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    VerifyGradeByUserIdRequest.fromDict = function (data) {
        return new VerifyGradeByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withUserId(data["userId"])
            .withGradeName(data["gradeName"])
            .withVerifyType(data["verifyType"])
            .withPropertyId(data["propertyId"])
            .withGradeValue(data["gradeValue"])
            .withMultiplyValueSpecifyingQuantity(data["multiplyValueSpecifyingQuantity"]);
    };
    VerifyGradeByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "userId": this.getUserId(),
            "gradeName": this.getGradeName(),
            "verifyType": this.getVerifyType(),
            "propertyId": this.getPropertyId(),
            "gradeValue": this.getGradeValue(),
            "multiplyValueSpecifyingQuantity": this.getMultiplyValueSpecifyingQuantity(),
        };
    };
    return VerifyGradeByUserIdRequest;
}());
exports.default = VerifyGradeByUserIdRequest;
//# sourceMappingURL=VerifyGradeByUserIdRequest.js.map
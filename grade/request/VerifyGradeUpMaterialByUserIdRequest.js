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
var VerifyGradeUpMaterialByUserIdRequest = /** @class */ (function () {
    function VerifyGradeUpMaterialByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.userId = null;
        this.gradeName = null;
        this.verifyType = null;
        this.propertyId = null;
        this.materialPropertyId = null;
        this.timeOffsetToken = null;
        this.duplicationAvoider = null;
    }
    VerifyGradeUpMaterialByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    VerifyGradeUpMaterialByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    VerifyGradeUpMaterialByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    VerifyGradeUpMaterialByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    VerifyGradeUpMaterialByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    VerifyGradeUpMaterialByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    VerifyGradeUpMaterialByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    VerifyGradeUpMaterialByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    VerifyGradeUpMaterialByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    VerifyGradeUpMaterialByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    VerifyGradeUpMaterialByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    VerifyGradeUpMaterialByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    VerifyGradeUpMaterialByUserIdRequest.prototype.getGradeName = function () {
        return this.gradeName;
    };
    VerifyGradeUpMaterialByUserIdRequest.prototype.setGradeName = function (gradeName) {
        this.gradeName = gradeName;
        return this;
    };
    VerifyGradeUpMaterialByUserIdRequest.prototype.withGradeName = function (gradeName) {
        this.gradeName = gradeName;
        return this;
    };
    VerifyGradeUpMaterialByUserIdRequest.prototype.getVerifyType = function () {
        return this.verifyType;
    };
    VerifyGradeUpMaterialByUserIdRequest.prototype.setVerifyType = function (verifyType) {
        this.verifyType = verifyType;
        return this;
    };
    VerifyGradeUpMaterialByUserIdRequest.prototype.withVerifyType = function (verifyType) {
        this.verifyType = verifyType;
        return this;
    };
    VerifyGradeUpMaterialByUserIdRequest.prototype.getPropertyId = function () {
        return this.propertyId;
    };
    VerifyGradeUpMaterialByUserIdRequest.prototype.setPropertyId = function (propertyId) {
        this.propertyId = propertyId;
        return this;
    };
    VerifyGradeUpMaterialByUserIdRequest.prototype.withPropertyId = function (propertyId) {
        this.propertyId = propertyId;
        return this;
    };
    VerifyGradeUpMaterialByUserIdRequest.prototype.getMaterialPropertyId = function () {
        return this.materialPropertyId;
    };
    VerifyGradeUpMaterialByUserIdRequest.prototype.setMaterialPropertyId = function (materialPropertyId) {
        this.materialPropertyId = materialPropertyId;
        return this;
    };
    VerifyGradeUpMaterialByUserIdRequest.prototype.withMaterialPropertyId = function (materialPropertyId) {
        this.materialPropertyId = materialPropertyId;
        return this;
    };
    VerifyGradeUpMaterialByUserIdRequest.prototype.getTimeOffsetToken = function () {
        return this.timeOffsetToken;
    };
    VerifyGradeUpMaterialByUserIdRequest.prototype.setTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    VerifyGradeUpMaterialByUserIdRequest.prototype.withTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    VerifyGradeUpMaterialByUserIdRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    VerifyGradeUpMaterialByUserIdRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    VerifyGradeUpMaterialByUserIdRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    VerifyGradeUpMaterialByUserIdRequest.fromDict = function (data) {
        return new VerifyGradeUpMaterialByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withUserId(data["userId"])
            .withGradeName(data["gradeName"])
            .withVerifyType(data["verifyType"])
            .withPropertyId(data["propertyId"])
            .withMaterialPropertyId(data["materialPropertyId"])
            .withTimeOffsetToken(data["timeOffsetToken"]);
    };
    VerifyGradeUpMaterialByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "userId": this.getUserId(),
            "gradeName": this.getGradeName(),
            "verifyType": this.getVerifyType(),
            "propertyId": this.getPropertyId(),
            "materialPropertyId": this.getMaterialPropertyId(),
            "timeOffsetToken": this.getTimeOffsetToken(),
        };
    };
    return VerifyGradeUpMaterialByUserIdRequest;
}());
exports.default = VerifyGradeUpMaterialByUserIdRequest;
//# sourceMappingURL=VerifyGradeUpMaterialByUserIdRequest.js.map
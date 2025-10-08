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
var VerifyGradeUpMaterialRequest = /** @class */ (function () {
    function VerifyGradeUpMaterialRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.accessToken = null;
        this.gradeName = null;
        this.verifyType = null;
        this.propertyId = null;
        this.materialPropertyId = null;
        this.duplicationAvoider = null;
    }
    VerifyGradeUpMaterialRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    VerifyGradeUpMaterialRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    VerifyGradeUpMaterialRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    VerifyGradeUpMaterialRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    VerifyGradeUpMaterialRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    VerifyGradeUpMaterialRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    VerifyGradeUpMaterialRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    VerifyGradeUpMaterialRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    VerifyGradeUpMaterialRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    VerifyGradeUpMaterialRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    VerifyGradeUpMaterialRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    VerifyGradeUpMaterialRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    VerifyGradeUpMaterialRequest.prototype.getGradeName = function () {
        return this.gradeName;
    };
    VerifyGradeUpMaterialRequest.prototype.setGradeName = function (gradeName) {
        this.gradeName = gradeName;
        return this;
    };
    VerifyGradeUpMaterialRequest.prototype.withGradeName = function (gradeName) {
        this.gradeName = gradeName;
        return this;
    };
    VerifyGradeUpMaterialRequest.prototype.getVerifyType = function () {
        return this.verifyType;
    };
    VerifyGradeUpMaterialRequest.prototype.setVerifyType = function (verifyType) {
        this.verifyType = verifyType;
        return this;
    };
    VerifyGradeUpMaterialRequest.prototype.withVerifyType = function (verifyType) {
        this.verifyType = verifyType;
        return this;
    };
    VerifyGradeUpMaterialRequest.prototype.getPropertyId = function () {
        return this.propertyId;
    };
    VerifyGradeUpMaterialRequest.prototype.setPropertyId = function (propertyId) {
        this.propertyId = propertyId;
        return this;
    };
    VerifyGradeUpMaterialRequest.prototype.withPropertyId = function (propertyId) {
        this.propertyId = propertyId;
        return this;
    };
    VerifyGradeUpMaterialRequest.prototype.getMaterialPropertyId = function () {
        return this.materialPropertyId;
    };
    VerifyGradeUpMaterialRequest.prototype.setMaterialPropertyId = function (materialPropertyId) {
        this.materialPropertyId = materialPropertyId;
        return this;
    };
    VerifyGradeUpMaterialRequest.prototype.withMaterialPropertyId = function (materialPropertyId) {
        this.materialPropertyId = materialPropertyId;
        return this;
    };
    VerifyGradeUpMaterialRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    VerifyGradeUpMaterialRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    VerifyGradeUpMaterialRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    VerifyGradeUpMaterialRequest.fromDict = function (data) {
        return new VerifyGradeUpMaterialRequest()
            .withNamespaceName(data["namespaceName"])
            .withAccessToken(data["accessToken"])
            .withGradeName(data["gradeName"])
            .withVerifyType(data["verifyType"])
            .withPropertyId(data["propertyId"])
            .withMaterialPropertyId(data["materialPropertyId"]);
    };
    VerifyGradeUpMaterialRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "accessToken": this.getAccessToken(),
            "gradeName": this.getGradeName(),
            "verifyType": this.getVerifyType(),
            "propertyId": this.getPropertyId(),
            "materialPropertyId": this.getMaterialPropertyId(),
        };
    };
    return VerifyGradeUpMaterialRequest;
}());
exports.default = VerifyGradeUpMaterialRequest;
//# sourceMappingURL=VerifyGradeUpMaterialRequest.js.map
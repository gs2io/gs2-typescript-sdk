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
var VerifyGradeRequest = /** @class */ (function () {
    function VerifyGradeRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.accessToken = null;
        this.gradeName = null;
        this.verifyType = null;
        this.propertyId = null;
        this.gradeValue = null;
        this.duplicationAvoider = null;
    }
    VerifyGradeRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    VerifyGradeRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    VerifyGradeRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    VerifyGradeRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    VerifyGradeRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    VerifyGradeRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    VerifyGradeRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    VerifyGradeRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    VerifyGradeRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    VerifyGradeRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    VerifyGradeRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    VerifyGradeRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    VerifyGradeRequest.prototype.getGradeName = function () {
        return this.gradeName;
    };
    VerifyGradeRequest.prototype.setGradeName = function (gradeName) {
        this.gradeName = gradeName;
        return this;
    };
    VerifyGradeRequest.prototype.withGradeName = function (gradeName) {
        this.gradeName = gradeName;
        return this;
    };
    VerifyGradeRequest.prototype.getVerifyType = function () {
        return this.verifyType;
    };
    VerifyGradeRequest.prototype.setVerifyType = function (verifyType) {
        this.verifyType = verifyType;
        return this;
    };
    VerifyGradeRequest.prototype.withVerifyType = function (verifyType) {
        this.verifyType = verifyType;
        return this;
    };
    VerifyGradeRequest.prototype.getPropertyId = function () {
        return this.propertyId;
    };
    VerifyGradeRequest.prototype.setPropertyId = function (propertyId) {
        this.propertyId = propertyId;
        return this;
    };
    VerifyGradeRequest.prototype.withPropertyId = function (propertyId) {
        this.propertyId = propertyId;
        return this;
    };
    VerifyGradeRequest.prototype.getGradeValue = function () {
        return this.gradeValue;
    };
    VerifyGradeRequest.prototype.setGradeValue = function (gradeValue) {
        this.gradeValue = gradeValue;
        return this;
    };
    VerifyGradeRequest.prototype.withGradeValue = function (gradeValue) {
        this.gradeValue = gradeValue;
        return this;
    };
    VerifyGradeRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    VerifyGradeRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    VerifyGradeRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    VerifyGradeRequest.fromDict = function (data) {
        return new VerifyGradeRequest()
            .withNamespaceName(data["namespaceName"])
            .withAccessToken(data["accessToken"])
            .withGradeName(data["gradeName"])
            .withVerifyType(data["verifyType"])
            .withPropertyId(data["propertyId"])
            .withGradeValue(data["gradeValue"]);
    };
    VerifyGradeRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "accessToken": this.getAccessToken(),
            "gradeName": this.getGradeName(),
            "verifyType": this.getVerifyType(),
            "propertyId": this.getPropertyId(),
            "gradeValue": this.getGradeValue(),
        };
    };
    return VerifyGradeRequest;
}());
exports.default = VerifyGradeRequest;
//# sourceMappingURL=VerifyGradeRequest.js.map
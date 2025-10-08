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
var SetGradeByUserIdRequest = /** @class */ (function () {
    function SetGradeByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.userId = null;
        this.gradeName = null;
        this.propertyId = null;
        this.gradeValue = null;
        this.timeOffsetToken = null;
        this.duplicationAvoider = null;
    }
    SetGradeByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    SetGradeByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    SetGradeByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    SetGradeByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    SetGradeByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    SetGradeByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    SetGradeByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    SetGradeByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    SetGradeByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    SetGradeByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    SetGradeByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    SetGradeByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    SetGradeByUserIdRequest.prototype.getGradeName = function () {
        return this.gradeName;
    };
    SetGradeByUserIdRequest.prototype.setGradeName = function (gradeName) {
        this.gradeName = gradeName;
        return this;
    };
    SetGradeByUserIdRequest.prototype.withGradeName = function (gradeName) {
        this.gradeName = gradeName;
        return this;
    };
    SetGradeByUserIdRequest.prototype.getPropertyId = function () {
        return this.propertyId;
    };
    SetGradeByUserIdRequest.prototype.setPropertyId = function (propertyId) {
        this.propertyId = propertyId;
        return this;
    };
    SetGradeByUserIdRequest.prototype.withPropertyId = function (propertyId) {
        this.propertyId = propertyId;
        return this;
    };
    SetGradeByUserIdRequest.prototype.getGradeValue = function () {
        return this.gradeValue;
    };
    SetGradeByUserIdRequest.prototype.setGradeValue = function (gradeValue) {
        this.gradeValue = gradeValue;
        return this;
    };
    SetGradeByUserIdRequest.prototype.withGradeValue = function (gradeValue) {
        this.gradeValue = gradeValue;
        return this;
    };
    SetGradeByUserIdRequest.prototype.getTimeOffsetToken = function () {
        return this.timeOffsetToken;
    };
    SetGradeByUserIdRequest.prototype.setTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    SetGradeByUserIdRequest.prototype.withTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    SetGradeByUserIdRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    SetGradeByUserIdRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    SetGradeByUserIdRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    SetGradeByUserIdRequest.fromDict = function (data) {
        return new SetGradeByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withUserId(data["userId"])
            .withGradeName(data["gradeName"])
            .withPropertyId(data["propertyId"])
            .withGradeValue(data["gradeValue"])
            .withTimeOffsetToken(data["timeOffsetToken"]);
    };
    SetGradeByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "userId": this.getUserId(),
            "gradeName": this.getGradeName(),
            "propertyId": this.getPropertyId(),
            "gradeValue": this.getGradeValue(),
            "timeOffsetToken": this.getTimeOffsetToken(),
        };
    };
    return SetGradeByUserIdRequest;
}());
exports.default = SetGradeByUserIdRequest;
//# sourceMappingURL=SetGradeByUserIdRequest.js.map
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
var AddGradeByUserIdRequest = /** @class */ (function () {
    function AddGradeByUserIdRequest() {
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
    AddGradeByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    AddGradeByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    AddGradeByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    AddGradeByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    AddGradeByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    AddGradeByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    AddGradeByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    AddGradeByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    AddGradeByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    AddGradeByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    AddGradeByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    AddGradeByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    AddGradeByUserIdRequest.prototype.getGradeName = function () {
        return this.gradeName;
    };
    AddGradeByUserIdRequest.prototype.setGradeName = function (gradeName) {
        this.gradeName = gradeName;
        return this;
    };
    AddGradeByUserIdRequest.prototype.withGradeName = function (gradeName) {
        this.gradeName = gradeName;
        return this;
    };
    AddGradeByUserIdRequest.prototype.getPropertyId = function () {
        return this.propertyId;
    };
    AddGradeByUserIdRequest.prototype.setPropertyId = function (propertyId) {
        this.propertyId = propertyId;
        return this;
    };
    AddGradeByUserIdRequest.prototype.withPropertyId = function (propertyId) {
        this.propertyId = propertyId;
        return this;
    };
    AddGradeByUserIdRequest.prototype.getGradeValue = function () {
        return this.gradeValue;
    };
    AddGradeByUserIdRequest.prototype.setGradeValue = function (gradeValue) {
        this.gradeValue = gradeValue;
        return this;
    };
    AddGradeByUserIdRequest.prototype.withGradeValue = function (gradeValue) {
        this.gradeValue = gradeValue;
        return this;
    };
    AddGradeByUserIdRequest.prototype.getTimeOffsetToken = function () {
        return this.timeOffsetToken;
    };
    AddGradeByUserIdRequest.prototype.setTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    AddGradeByUserIdRequest.prototype.withTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    AddGradeByUserIdRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    AddGradeByUserIdRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    AddGradeByUserIdRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    AddGradeByUserIdRequest.fromDict = function (data) {
        return new AddGradeByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withUserId(data["userId"])
            .withGradeName(data["gradeName"])
            .withPropertyId(data["propertyId"])
            .withGradeValue(data["gradeValue"])
            .withTimeOffsetToken(data["timeOffsetToken"]);
    };
    AddGradeByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "userId": this.getUserId(),
            "gradeName": this.getGradeName(),
            "propertyId": this.getPropertyId(),
            "gradeValue": this.getGradeValue(),
            "timeOffsetToken": this.getTimeOffsetToken(),
        };
    };
    return AddGradeByUserIdRequest;
}());
exports.default = AddGradeByUserIdRequest;
//# sourceMappingURL=AddGradeByUserIdRequest.js.map
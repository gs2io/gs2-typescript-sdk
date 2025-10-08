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
var SubGradeRequest = /** @class */ (function () {
    function SubGradeRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.accessToken = null;
        this.gradeName = null;
        this.propertyId = null;
        this.gradeValue = null;
        this.duplicationAvoider = null;
    }
    SubGradeRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    SubGradeRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    SubGradeRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    SubGradeRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    SubGradeRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    SubGradeRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    SubGradeRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    SubGradeRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    SubGradeRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    SubGradeRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    SubGradeRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    SubGradeRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    SubGradeRequest.prototype.getGradeName = function () {
        return this.gradeName;
    };
    SubGradeRequest.prototype.setGradeName = function (gradeName) {
        this.gradeName = gradeName;
        return this;
    };
    SubGradeRequest.prototype.withGradeName = function (gradeName) {
        this.gradeName = gradeName;
        return this;
    };
    SubGradeRequest.prototype.getPropertyId = function () {
        return this.propertyId;
    };
    SubGradeRequest.prototype.setPropertyId = function (propertyId) {
        this.propertyId = propertyId;
        return this;
    };
    SubGradeRequest.prototype.withPropertyId = function (propertyId) {
        this.propertyId = propertyId;
        return this;
    };
    SubGradeRequest.prototype.getGradeValue = function () {
        return this.gradeValue;
    };
    SubGradeRequest.prototype.setGradeValue = function (gradeValue) {
        this.gradeValue = gradeValue;
        return this;
    };
    SubGradeRequest.prototype.withGradeValue = function (gradeValue) {
        this.gradeValue = gradeValue;
        return this;
    };
    SubGradeRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    SubGradeRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    SubGradeRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    SubGradeRequest.fromDict = function (data) {
        return new SubGradeRequest()
            .withNamespaceName(data["namespaceName"])
            .withAccessToken(data["accessToken"])
            .withGradeName(data["gradeName"])
            .withPropertyId(data["propertyId"])
            .withGradeValue(data["gradeValue"]);
    };
    SubGradeRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "accessToken": this.getAccessToken(),
            "gradeName": this.getGradeName(),
            "propertyId": this.getPropertyId(),
            "gradeValue": this.getGradeValue(),
        };
    };
    return SubGradeRequest;
}());
exports.default = SubGradeRequest;
//# sourceMappingURL=SubGradeRequest.js.map
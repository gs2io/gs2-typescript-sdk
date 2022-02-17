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
var UpdateLimitModelMasterRequest = /** @class */ (function () {
    function UpdateLimitModelMasterRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.limitName = null;
        this.description = null;
        this.metadata = null;
        this.resetType = null;
        this.resetDayOfMonth = null;
        this.resetDayOfWeek = null;
        this.resetHour = null;
    }
    UpdateLimitModelMasterRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    UpdateLimitModelMasterRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    UpdateLimitModelMasterRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    UpdateLimitModelMasterRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    UpdateLimitModelMasterRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    UpdateLimitModelMasterRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    UpdateLimitModelMasterRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    UpdateLimitModelMasterRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    UpdateLimitModelMasterRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    UpdateLimitModelMasterRequest.prototype.getLimitName = function () {
        return this.limitName;
    };
    UpdateLimitModelMasterRequest.prototype.setLimitName = function (limitName) {
        this.limitName = limitName;
        return this;
    };
    UpdateLimitModelMasterRequest.prototype.withLimitName = function (limitName) {
        this.limitName = limitName;
        return this;
    };
    UpdateLimitModelMasterRequest.prototype.getDescription = function () {
        return this.description;
    };
    UpdateLimitModelMasterRequest.prototype.setDescription = function (description) {
        this.description = description;
        return this;
    };
    UpdateLimitModelMasterRequest.prototype.withDescription = function (description) {
        this.description = description;
        return this;
    };
    UpdateLimitModelMasterRequest.prototype.getMetadata = function () {
        return this.metadata;
    };
    UpdateLimitModelMasterRequest.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    UpdateLimitModelMasterRequest.prototype.withMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    UpdateLimitModelMasterRequest.prototype.getResetType = function () {
        return this.resetType;
    };
    UpdateLimitModelMasterRequest.prototype.setResetType = function (resetType) {
        this.resetType = resetType;
        return this;
    };
    UpdateLimitModelMasterRequest.prototype.withResetType = function (resetType) {
        this.resetType = resetType;
        return this;
    };
    UpdateLimitModelMasterRequest.prototype.getResetDayOfMonth = function () {
        return this.resetDayOfMonth;
    };
    UpdateLimitModelMasterRequest.prototype.setResetDayOfMonth = function (resetDayOfMonth) {
        this.resetDayOfMonth = resetDayOfMonth;
        return this;
    };
    UpdateLimitModelMasterRequest.prototype.withResetDayOfMonth = function (resetDayOfMonth) {
        this.resetDayOfMonth = resetDayOfMonth;
        return this;
    };
    UpdateLimitModelMasterRequest.prototype.getResetDayOfWeek = function () {
        return this.resetDayOfWeek;
    };
    UpdateLimitModelMasterRequest.prototype.setResetDayOfWeek = function (resetDayOfWeek) {
        this.resetDayOfWeek = resetDayOfWeek;
        return this;
    };
    UpdateLimitModelMasterRequest.prototype.withResetDayOfWeek = function (resetDayOfWeek) {
        this.resetDayOfWeek = resetDayOfWeek;
        return this;
    };
    UpdateLimitModelMasterRequest.prototype.getResetHour = function () {
        return this.resetHour;
    };
    UpdateLimitModelMasterRequest.prototype.setResetHour = function (resetHour) {
        this.resetHour = resetHour;
        return this;
    };
    UpdateLimitModelMasterRequest.prototype.withResetHour = function (resetHour) {
        this.resetHour = resetHour;
        return this;
    };
    UpdateLimitModelMasterRequest.fromDict = function (data) {
        return new UpdateLimitModelMasterRequest()
            .withNamespaceName(data["namespaceName"])
            .withLimitName(data["limitName"])
            .withDescription(data["description"])
            .withMetadata(data["metadata"])
            .withResetType(data["resetType"])
            .withResetDayOfMonth(data["resetDayOfMonth"])
            .withResetDayOfWeek(data["resetDayOfWeek"])
            .withResetHour(data["resetHour"]);
    };
    UpdateLimitModelMasterRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "limitName": this.getLimitName(),
            "description": this.getDescription(),
            "metadata": this.getMetadata(),
            "resetType": this.getResetType(),
            "resetDayOfMonth": this.getResetDayOfMonth(),
            "resetDayOfWeek": this.getResetDayOfWeek(),
            "resetHour": this.getResetHour(),
        };
    };
    return UpdateLimitModelMasterRequest;
}());
exports.default = UpdateLimitModelMasterRequest;
//# sourceMappingURL=UpdateLimitModelMasterRequest.js.map
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
var CreateLimitModelMasterRequest = /** @class */ (function () {
    function CreateLimitModelMasterRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.name = null;
        this.description = null;
        this.metadata = null;
        this.resetType = null;
        this.resetDayOfMonth = null;
        this.resetDayOfWeek = null;
        this.resetHour = null;
    }
    CreateLimitModelMasterRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    CreateLimitModelMasterRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    CreateLimitModelMasterRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    CreateLimitModelMasterRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    CreateLimitModelMasterRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    CreateLimitModelMasterRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    CreateLimitModelMasterRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    CreateLimitModelMasterRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    CreateLimitModelMasterRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    CreateLimitModelMasterRequest.prototype.getName = function () {
        return this.name;
    };
    CreateLimitModelMasterRequest.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    CreateLimitModelMasterRequest.prototype.withName = function (name) {
        this.name = name;
        return this;
    };
    CreateLimitModelMasterRequest.prototype.getDescription = function () {
        return this.description;
    };
    CreateLimitModelMasterRequest.prototype.setDescription = function (description) {
        this.description = description;
        return this;
    };
    CreateLimitModelMasterRequest.prototype.withDescription = function (description) {
        this.description = description;
        return this;
    };
    CreateLimitModelMasterRequest.prototype.getMetadata = function () {
        return this.metadata;
    };
    CreateLimitModelMasterRequest.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    CreateLimitModelMasterRequest.prototype.withMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    CreateLimitModelMasterRequest.prototype.getResetType = function () {
        return this.resetType;
    };
    CreateLimitModelMasterRequest.prototype.setResetType = function (resetType) {
        this.resetType = resetType;
        return this;
    };
    CreateLimitModelMasterRequest.prototype.withResetType = function (resetType) {
        this.resetType = resetType;
        return this;
    };
    CreateLimitModelMasterRequest.prototype.getResetDayOfMonth = function () {
        return this.resetDayOfMonth;
    };
    CreateLimitModelMasterRequest.prototype.setResetDayOfMonth = function (resetDayOfMonth) {
        this.resetDayOfMonth = resetDayOfMonth;
        return this;
    };
    CreateLimitModelMasterRequest.prototype.withResetDayOfMonth = function (resetDayOfMonth) {
        this.resetDayOfMonth = resetDayOfMonth;
        return this;
    };
    CreateLimitModelMasterRequest.prototype.getResetDayOfWeek = function () {
        return this.resetDayOfWeek;
    };
    CreateLimitModelMasterRequest.prototype.setResetDayOfWeek = function (resetDayOfWeek) {
        this.resetDayOfWeek = resetDayOfWeek;
        return this;
    };
    CreateLimitModelMasterRequest.prototype.withResetDayOfWeek = function (resetDayOfWeek) {
        this.resetDayOfWeek = resetDayOfWeek;
        return this;
    };
    CreateLimitModelMasterRequest.prototype.getResetHour = function () {
        return this.resetHour;
    };
    CreateLimitModelMasterRequest.prototype.setResetHour = function (resetHour) {
        this.resetHour = resetHour;
        return this;
    };
    CreateLimitModelMasterRequest.prototype.withResetHour = function (resetHour) {
        this.resetHour = resetHour;
        return this;
    };
    CreateLimitModelMasterRequest.fromDict = function (data) {
        return new CreateLimitModelMasterRequest()
            .withNamespaceName(data["namespaceName"])
            .withName(data["name"])
            .withDescription(data["description"])
            .withMetadata(data["metadata"])
            .withResetType(data["resetType"])
            .withResetDayOfMonth(data["resetDayOfMonth"])
            .withResetDayOfWeek(data["resetDayOfWeek"])
            .withResetHour(data["resetHour"]);
    };
    CreateLimitModelMasterRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "name": this.getName(),
            "description": this.getDescription(),
            "metadata": this.getMetadata(),
            "resetType": this.getResetType(),
            "resetDayOfMonth": this.getResetDayOfMonth(),
            "resetDayOfWeek": this.getResetDayOfWeek(),
            "resetHour": this.getResetHour(),
        };
    };
    return CreateLimitModelMasterRequest;
}());
exports.default = CreateLimitModelMasterRequest;
//# sourceMappingURL=CreateLimitModelMasterRequest.js.map
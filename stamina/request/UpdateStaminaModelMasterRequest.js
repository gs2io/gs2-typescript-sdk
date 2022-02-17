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
var UpdateStaminaModelMasterRequest = /** @class */ (function () {
    function UpdateStaminaModelMasterRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.staminaName = null;
        this.description = null;
        this.metadata = null;
        this.recoverIntervalMinutes = null;
        this.recoverValue = null;
        this.initialCapacity = null;
        this.isOverflow = null;
        this.maxCapacity = null;
        this.maxStaminaTableName = null;
        this.recoverIntervalTableName = null;
        this.recoverValueTableName = null;
    }
    UpdateStaminaModelMasterRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    UpdateStaminaModelMasterRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    UpdateStaminaModelMasterRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    UpdateStaminaModelMasterRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    UpdateStaminaModelMasterRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    UpdateStaminaModelMasterRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    UpdateStaminaModelMasterRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    UpdateStaminaModelMasterRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    UpdateStaminaModelMasterRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    UpdateStaminaModelMasterRequest.prototype.getStaminaName = function () {
        return this.staminaName;
    };
    UpdateStaminaModelMasterRequest.prototype.setStaminaName = function (staminaName) {
        this.staminaName = staminaName;
        return this;
    };
    UpdateStaminaModelMasterRequest.prototype.withStaminaName = function (staminaName) {
        this.staminaName = staminaName;
        return this;
    };
    UpdateStaminaModelMasterRequest.prototype.getDescription = function () {
        return this.description;
    };
    UpdateStaminaModelMasterRequest.prototype.setDescription = function (description) {
        this.description = description;
        return this;
    };
    UpdateStaminaModelMasterRequest.prototype.withDescription = function (description) {
        this.description = description;
        return this;
    };
    UpdateStaminaModelMasterRequest.prototype.getMetadata = function () {
        return this.metadata;
    };
    UpdateStaminaModelMasterRequest.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    UpdateStaminaModelMasterRequest.prototype.withMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    UpdateStaminaModelMasterRequest.prototype.getRecoverIntervalMinutes = function () {
        return this.recoverIntervalMinutes;
    };
    UpdateStaminaModelMasterRequest.prototype.setRecoverIntervalMinutes = function (recoverIntervalMinutes) {
        this.recoverIntervalMinutes = recoverIntervalMinutes;
        return this;
    };
    UpdateStaminaModelMasterRequest.prototype.withRecoverIntervalMinutes = function (recoverIntervalMinutes) {
        this.recoverIntervalMinutes = recoverIntervalMinutes;
        return this;
    };
    UpdateStaminaModelMasterRequest.prototype.getRecoverValue = function () {
        return this.recoverValue;
    };
    UpdateStaminaModelMasterRequest.prototype.setRecoverValue = function (recoverValue) {
        this.recoverValue = recoverValue;
        return this;
    };
    UpdateStaminaModelMasterRequest.prototype.withRecoverValue = function (recoverValue) {
        this.recoverValue = recoverValue;
        return this;
    };
    UpdateStaminaModelMasterRequest.prototype.getInitialCapacity = function () {
        return this.initialCapacity;
    };
    UpdateStaminaModelMasterRequest.prototype.setInitialCapacity = function (initialCapacity) {
        this.initialCapacity = initialCapacity;
        return this;
    };
    UpdateStaminaModelMasterRequest.prototype.withInitialCapacity = function (initialCapacity) {
        this.initialCapacity = initialCapacity;
        return this;
    };
    UpdateStaminaModelMasterRequest.prototype.getIsOverflow = function () {
        return this.isOverflow;
    };
    UpdateStaminaModelMasterRequest.prototype.setIsOverflow = function (isOverflow) {
        this.isOverflow = isOverflow;
        return this;
    };
    UpdateStaminaModelMasterRequest.prototype.withIsOverflow = function (isOverflow) {
        this.isOverflow = isOverflow;
        return this;
    };
    UpdateStaminaModelMasterRequest.prototype.getMaxCapacity = function () {
        return this.maxCapacity;
    };
    UpdateStaminaModelMasterRequest.prototype.setMaxCapacity = function (maxCapacity) {
        this.maxCapacity = maxCapacity;
        return this;
    };
    UpdateStaminaModelMasterRequest.prototype.withMaxCapacity = function (maxCapacity) {
        this.maxCapacity = maxCapacity;
        return this;
    };
    UpdateStaminaModelMasterRequest.prototype.getMaxStaminaTableName = function () {
        return this.maxStaminaTableName;
    };
    UpdateStaminaModelMasterRequest.prototype.setMaxStaminaTableName = function (maxStaminaTableName) {
        this.maxStaminaTableName = maxStaminaTableName;
        return this;
    };
    UpdateStaminaModelMasterRequest.prototype.withMaxStaminaTableName = function (maxStaminaTableName) {
        this.maxStaminaTableName = maxStaminaTableName;
        return this;
    };
    UpdateStaminaModelMasterRequest.prototype.getRecoverIntervalTableName = function () {
        return this.recoverIntervalTableName;
    };
    UpdateStaminaModelMasterRequest.prototype.setRecoverIntervalTableName = function (recoverIntervalTableName) {
        this.recoverIntervalTableName = recoverIntervalTableName;
        return this;
    };
    UpdateStaminaModelMasterRequest.prototype.withRecoverIntervalTableName = function (recoverIntervalTableName) {
        this.recoverIntervalTableName = recoverIntervalTableName;
        return this;
    };
    UpdateStaminaModelMasterRequest.prototype.getRecoverValueTableName = function () {
        return this.recoverValueTableName;
    };
    UpdateStaminaModelMasterRequest.prototype.setRecoverValueTableName = function (recoverValueTableName) {
        this.recoverValueTableName = recoverValueTableName;
        return this;
    };
    UpdateStaminaModelMasterRequest.prototype.withRecoverValueTableName = function (recoverValueTableName) {
        this.recoverValueTableName = recoverValueTableName;
        return this;
    };
    UpdateStaminaModelMasterRequest.fromDict = function (data) {
        return new UpdateStaminaModelMasterRequest()
            .withNamespaceName(data["namespaceName"])
            .withStaminaName(data["staminaName"])
            .withDescription(data["description"])
            .withMetadata(data["metadata"])
            .withRecoverIntervalMinutes(data["recoverIntervalMinutes"])
            .withRecoverValue(data["recoverValue"])
            .withInitialCapacity(data["initialCapacity"])
            .withIsOverflow(data["isOverflow"])
            .withMaxCapacity(data["maxCapacity"])
            .withMaxStaminaTableName(data["maxStaminaTableName"])
            .withRecoverIntervalTableName(data["recoverIntervalTableName"])
            .withRecoverValueTableName(data["recoverValueTableName"]);
    };
    UpdateStaminaModelMasterRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "staminaName": this.getStaminaName(),
            "description": this.getDescription(),
            "metadata": this.getMetadata(),
            "recoverIntervalMinutes": this.getRecoverIntervalMinutes(),
            "recoverValue": this.getRecoverValue(),
            "initialCapacity": this.getInitialCapacity(),
            "isOverflow": this.getIsOverflow(),
            "maxCapacity": this.getMaxCapacity(),
            "maxStaminaTableName": this.getMaxStaminaTableName(),
            "recoverIntervalTableName": this.getRecoverIntervalTableName(),
            "recoverValueTableName": this.getRecoverValueTableName(),
        };
    };
    return UpdateStaminaModelMasterRequest;
}());
exports.default = UpdateStaminaModelMasterRequest;
//# sourceMappingURL=UpdateStaminaModelMasterRequest.js.map
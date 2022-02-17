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
var CreateStaminaModelMasterRequest = /** @class */ (function () {
    function CreateStaminaModelMasterRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.name = null;
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
    CreateStaminaModelMasterRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    CreateStaminaModelMasterRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    CreateStaminaModelMasterRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    CreateStaminaModelMasterRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    CreateStaminaModelMasterRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    CreateStaminaModelMasterRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    CreateStaminaModelMasterRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    CreateStaminaModelMasterRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    CreateStaminaModelMasterRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    CreateStaminaModelMasterRequest.prototype.getName = function () {
        return this.name;
    };
    CreateStaminaModelMasterRequest.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    CreateStaminaModelMasterRequest.prototype.withName = function (name) {
        this.name = name;
        return this;
    };
    CreateStaminaModelMasterRequest.prototype.getDescription = function () {
        return this.description;
    };
    CreateStaminaModelMasterRequest.prototype.setDescription = function (description) {
        this.description = description;
        return this;
    };
    CreateStaminaModelMasterRequest.prototype.withDescription = function (description) {
        this.description = description;
        return this;
    };
    CreateStaminaModelMasterRequest.prototype.getMetadata = function () {
        return this.metadata;
    };
    CreateStaminaModelMasterRequest.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    CreateStaminaModelMasterRequest.prototype.withMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    CreateStaminaModelMasterRequest.prototype.getRecoverIntervalMinutes = function () {
        return this.recoverIntervalMinutes;
    };
    CreateStaminaModelMasterRequest.prototype.setRecoverIntervalMinutes = function (recoverIntervalMinutes) {
        this.recoverIntervalMinutes = recoverIntervalMinutes;
        return this;
    };
    CreateStaminaModelMasterRequest.prototype.withRecoverIntervalMinutes = function (recoverIntervalMinutes) {
        this.recoverIntervalMinutes = recoverIntervalMinutes;
        return this;
    };
    CreateStaminaModelMasterRequest.prototype.getRecoverValue = function () {
        return this.recoverValue;
    };
    CreateStaminaModelMasterRequest.prototype.setRecoverValue = function (recoverValue) {
        this.recoverValue = recoverValue;
        return this;
    };
    CreateStaminaModelMasterRequest.prototype.withRecoverValue = function (recoverValue) {
        this.recoverValue = recoverValue;
        return this;
    };
    CreateStaminaModelMasterRequest.prototype.getInitialCapacity = function () {
        return this.initialCapacity;
    };
    CreateStaminaModelMasterRequest.prototype.setInitialCapacity = function (initialCapacity) {
        this.initialCapacity = initialCapacity;
        return this;
    };
    CreateStaminaModelMasterRequest.prototype.withInitialCapacity = function (initialCapacity) {
        this.initialCapacity = initialCapacity;
        return this;
    };
    CreateStaminaModelMasterRequest.prototype.getIsOverflow = function () {
        return this.isOverflow;
    };
    CreateStaminaModelMasterRequest.prototype.setIsOverflow = function (isOverflow) {
        this.isOverflow = isOverflow;
        return this;
    };
    CreateStaminaModelMasterRequest.prototype.withIsOverflow = function (isOverflow) {
        this.isOverflow = isOverflow;
        return this;
    };
    CreateStaminaModelMasterRequest.prototype.getMaxCapacity = function () {
        return this.maxCapacity;
    };
    CreateStaminaModelMasterRequest.prototype.setMaxCapacity = function (maxCapacity) {
        this.maxCapacity = maxCapacity;
        return this;
    };
    CreateStaminaModelMasterRequest.prototype.withMaxCapacity = function (maxCapacity) {
        this.maxCapacity = maxCapacity;
        return this;
    };
    CreateStaminaModelMasterRequest.prototype.getMaxStaminaTableName = function () {
        return this.maxStaminaTableName;
    };
    CreateStaminaModelMasterRequest.prototype.setMaxStaminaTableName = function (maxStaminaTableName) {
        this.maxStaminaTableName = maxStaminaTableName;
        return this;
    };
    CreateStaminaModelMasterRequest.prototype.withMaxStaminaTableName = function (maxStaminaTableName) {
        this.maxStaminaTableName = maxStaminaTableName;
        return this;
    };
    CreateStaminaModelMasterRequest.prototype.getRecoverIntervalTableName = function () {
        return this.recoverIntervalTableName;
    };
    CreateStaminaModelMasterRequest.prototype.setRecoverIntervalTableName = function (recoverIntervalTableName) {
        this.recoverIntervalTableName = recoverIntervalTableName;
        return this;
    };
    CreateStaminaModelMasterRequest.prototype.withRecoverIntervalTableName = function (recoverIntervalTableName) {
        this.recoverIntervalTableName = recoverIntervalTableName;
        return this;
    };
    CreateStaminaModelMasterRequest.prototype.getRecoverValueTableName = function () {
        return this.recoverValueTableName;
    };
    CreateStaminaModelMasterRequest.prototype.setRecoverValueTableName = function (recoverValueTableName) {
        this.recoverValueTableName = recoverValueTableName;
        return this;
    };
    CreateStaminaModelMasterRequest.prototype.withRecoverValueTableName = function (recoverValueTableName) {
        this.recoverValueTableName = recoverValueTableName;
        return this;
    };
    CreateStaminaModelMasterRequest.fromDict = function (data) {
        return new CreateStaminaModelMasterRequest()
            .withNamespaceName(data["namespaceName"])
            .withName(data["name"])
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
    CreateStaminaModelMasterRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "name": this.getName(),
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
    return CreateStaminaModelMasterRequest;
}());
export default CreateStaminaModelMasterRequest;
//# sourceMappingURL=CreateStaminaModelMasterRequest.js.map
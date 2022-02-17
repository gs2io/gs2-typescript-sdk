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
var MaxStaminaTableMaster = /** @class */ (function () {
    function MaxStaminaTableMaster() {
        this.maxStaminaTableId = null;
        this.name = null;
        this.metadata = null;
        this.description = null;
        this.experienceModelId = null;
        this.values = null;
        this.createdAt = null;
        this.updatedAt = null;
    }
    MaxStaminaTableMaster.prototype.getMaxStaminaTableId = function () {
        return this.maxStaminaTableId;
    };
    MaxStaminaTableMaster.prototype.setMaxStaminaTableId = function (maxStaminaTableId) {
        this.maxStaminaTableId = maxStaminaTableId;
        return this;
    };
    MaxStaminaTableMaster.prototype.withMaxStaminaTableId = function (maxStaminaTableId) {
        this.maxStaminaTableId = maxStaminaTableId;
        return this;
    };
    MaxStaminaTableMaster.prototype.getName = function () {
        return this.name;
    };
    MaxStaminaTableMaster.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    MaxStaminaTableMaster.prototype.withName = function (name) {
        this.name = name;
        return this;
    };
    MaxStaminaTableMaster.prototype.getMetadata = function () {
        return this.metadata;
    };
    MaxStaminaTableMaster.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    MaxStaminaTableMaster.prototype.withMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    MaxStaminaTableMaster.prototype.getDescription = function () {
        return this.description;
    };
    MaxStaminaTableMaster.prototype.setDescription = function (description) {
        this.description = description;
        return this;
    };
    MaxStaminaTableMaster.prototype.withDescription = function (description) {
        this.description = description;
        return this;
    };
    MaxStaminaTableMaster.prototype.getExperienceModelId = function () {
        return this.experienceModelId;
    };
    MaxStaminaTableMaster.prototype.setExperienceModelId = function (experienceModelId) {
        this.experienceModelId = experienceModelId;
        return this;
    };
    MaxStaminaTableMaster.prototype.withExperienceModelId = function (experienceModelId) {
        this.experienceModelId = experienceModelId;
        return this;
    };
    MaxStaminaTableMaster.prototype.getValues = function () {
        return this.values;
    };
    MaxStaminaTableMaster.prototype.setValues = function (values) {
        this.values = values;
        return this;
    };
    MaxStaminaTableMaster.prototype.withValues = function (values) {
        this.values = values;
        return this;
    };
    MaxStaminaTableMaster.prototype.getCreatedAt = function () {
        return this.createdAt;
    };
    MaxStaminaTableMaster.prototype.setCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    MaxStaminaTableMaster.prototype.withCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    MaxStaminaTableMaster.prototype.getUpdatedAt = function () {
        return this.updatedAt;
    };
    MaxStaminaTableMaster.prototype.setUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    MaxStaminaTableMaster.prototype.withUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    MaxStaminaTableMaster.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new MaxStaminaTableMaster()
            .withMaxStaminaTableId(data["maxStaminaTableId"])
            .withName(data["name"])
            .withMetadata(data["metadata"])
            .withDescription(data["description"])
            .withExperienceModelId(data["experienceModelId"])
            .withValues(data.values ?
            data.values.map(function (item) {
                return item;
            }) : [])
            .withCreatedAt(data["createdAt"])
            .withUpdatedAt(data["updatedAt"]);
    };
    MaxStaminaTableMaster.prototype.toDict = function () {
        return {
            "maxStaminaTableId": this.getMaxStaminaTableId(),
            "name": this.getName(),
            "metadata": this.getMetadata(),
            "description": this.getDescription(),
            "experienceModelId": this.getExperienceModelId(),
            "values": this.getValues() ?
                this.getValues().map(function (item) {
                    return item;
                }) : [],
            "createdAt": this.getCreatedAt(),
            "updatedAt": this.getUpdatedAt(),
        };
    };
    return MaxStaminaTableMaster;
}());
export default MaxStaminaTableMaster;
//# sourceMappingURL=MaxStaminaTableMaster.js.map
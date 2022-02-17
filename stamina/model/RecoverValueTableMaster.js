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
var RecoverValueTableMaster = /** @class */ (function () {
    function RecoverValueTableMaster() {
        this.recoverValueTableId = null;
        this.name = null;
        this.metadata = null;
        this.description = null;
        this.experienceModelId = null;
        this.values = null;
        this.createdAt = null;
        this.updatedAt = null;
    }
    RecoverValueTableMaster.prototype.getRecoverValueTableId = function () {
        return this.recoverValueTableId;
    };
    RecoverValueTableMaster.prototype.setRecoverValueTableId = function (recoverValueTableId) {
        this.recoverValueTableId = recoverValueTableId;
        return this;
    };
    RecoverValueTableMaster.prototype.withRecoverValueTableId = function (recoverValueTableId) {
        this.recoverValueTableId = recoverValueTableId;
        return this;
    };
    RecoverValueTableMaster.prototype.getName = function () {
        return this.name;
    };
    RecoverValueTableMaster.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    RecoverValueTableMaster.prototype.withName = function (name) {
        this.name = name;
        return this;
    };
    RecoverValueTableMaster.prototype.getMetadata = function () {
        return this.metadata;
    };
    RecoverValueTableMaster.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    RecoverValueTableMaster.prototype.withMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    RecoverValueTableMaster.prototype.getDescription = function () {
        return this.description;
    };
    RecoverValueTableMaster.prototype.setDescription = function (description) {
        this.description = description;
        return this;
    };
    RecoverValueTableMaster.prototype.withDescription = function (description) {
        this.description = description;
        return this;
    };
    RecoverValueTableMaster.prototype.getExperienceModelId = function () {
        return this.experienceModelId;
    };
    RecoverValueTableMaster.prototype.setExperienceModelId = function (experienceModelId) {
        this.experienceModelId = experienceModelId;
        return this;
    };
    RecoverValueTableMaster.prototype.withExperienceModelId = function (experienceModelId) {
        this.experienceModelId = experienceModelId;
        return this;
    };
    RecoverValueTableMaster.prototype.getValues = function () {
        return this.values;
    };
    RecoverValueTableMaster.prototype.setValues = function (values) {
        this.values = values;
        return this;
    };
    RecoverValueTableMaster.prototype.withValues = function (values) {
        this.values = values;
        return this;
    };
    RecoverValueTableMaster.prototype.getCreatedAt = function () {
        return this.createdAt;
    };
    RecoverValueTableMaster.prototype.setCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    RecoverValueTableMaster.prototype.withCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    RecoverValueTableMaster.prototype.getUpdatedAt = function () {
        return this.updatedAt;
    };
    RecoverValueTableMaster.prototype.setUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    RecoverValueTableMaster.prototype.withUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    RecoverValueTableMaster.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new RecoverValueTableMaster()
            .withRecoverValueTableId(data["recoverValueTableId"])
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
    RecoverValueTableMaster.prototype.toDict = function () {
        return {
            "recoverValueTableId": this.getRecoverValueTableId(),
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
    return RecoverValueTableMaster;
}());
exports.default = RecoverValueTableMaster;
//# sourceMappingURL=RecoverValueTableMaster.js.map
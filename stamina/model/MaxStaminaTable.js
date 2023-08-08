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
var MaxStaminaTable = /** @class */ (function () {
    function MaxStaminaTable() {
        this.name = null;
        this.metadata = null;
        this.experienceModelId = null;
        this.values = null;
    }
    MaxStaminaTable.prototype.getName = function () {
        return this.name;
    };
    MaxStaminaTable.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    MaxStaminaTable.prototype.withName = function (name) {
        this.name = name;
        return this;
    };
    MaxStaminaTable.prototype.getMetadata = function () {
        return this.metadata;
    };
    MaxStaminaTable.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    MaxStaminaTable.prototype.withMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    MaxStaminaTable.prototype.getExperienceModelId = function () {
        return this.experienceModelId;
    };
    MaxStaminaTable.prototype.setExperienceModelId = function (experienceModelId) {
        this.experienceModelId = experienceModelId;
        return this;
    };
    MaxStaminaTable.prototype.withExperienceModelId = function (experienceModelId) {
        this.experienceModelId = experienceModelId;
        return this;
    };
    MaxStaminaTable.prototype.getValues = function () {
        return this.values;
    };
    MaxStaminaTable.prototype.setValues = function (values) {
        this.values = values;
        return this;
    };
    MaxStaminaTable.prototype.withValues = function (values) {
        this.values = values;
        return this;
    };
    MaxStaminaTable.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new MaxStaminaTable()
            .withName(data["name"])
            .withMetadata(data["metadata"])
            .withExperienceModelId(data["experienceModelId"])
            .withValues(data.values ?
            data.values.map(function (item) {
                return item;
            }) : []);
    };
    MaxStaminaTable.prototype.toDict = function () {
        return {
            "name": this.getName(),
            "metadata": this.getMetadata(),
            "experienceModelId": this.getExperienceModelId(),
            "values": this.getValues() ?
                this.getValues().map(function (item) {
                    return item;
                }) : [],
        };
    };
    return MaxStaminaTable;
}());
exports.default = MaxStaminaTable;
//# sourceMappingURL=MaxStaminaTable.js.map
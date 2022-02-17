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
var tslib_1 = require("tslib");
var SlotModel_1 = (0, tslib_1.__importDefault)(require("./SlotModel"));
var FormModelMaster = /** @class */ (function () {
    function FormModelMaster() {
        this.formModelId = null;
        this.name = null;
        this.description = null;
        this.metadata = null;
        this.slots = null;
        this.createdAt = null;
        this.updatedAt = null;
    }
    FormModelMaster.prototype.getFormModelId = function () {
        return this.formModelId;
    };
    FormModelMaster.prototype.setFormModelId = function (formModelId) {
        this.formModelId = formModelId;
        return this;
    };
    FormModelMaster.prototype.withFormModelId = function (formModelId) {
        this.formModelId = formModelId;
        return this;
    };
    FormModelMaster.prototype.getName = function () {
        return this.name;
    };
    FormModelMaster.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    FormModelMaster.prototype.withName = function (name) {
        this.name = name;
        return this;
    };
    FormModelMaster.prototype.getDescription = function () {
        return this.description;
    };
    FormModelMaster.prototype.setDescription = function (description) {
        this.description = description;
        return this;
    };
    FormModelMaster.prototype.withDescription = function (description) {
        this.description = description;
        return this;
    };
    FormModelMaster.prototype.getMetadata = function () {
        return this.metadata;
    };
    FormModelMaster.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    FormModelMaster.prototype.withMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    FormModelMaster.prototype.getSlots = function () {
        return this.slots;
    };
    FormModelMaster.prototype.setSlots = function (slots) {
        this.slots = slots;
        return this;
    };
    FormModelMaster.prototype.withSlots = function (slots) {
        this.slots = slots;
        return this;
    };
    FormModelMaster.prototype.getCreatedAt = function () {
        return this.createdAt;
    };
    FormModelMaster.prototype.setCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    FormModelMaster.prototype.withCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    FormModelMaster.prototype.getUpdatedAt = function () {
        return this.updatedAt;
    };
    FormModelMaster.prototype.setUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    FormModelMaster.prototype.withUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    FormModelMaster.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new FormModelMaster()
            .withFormModelId(data["formModelId"])
            .withName(data["name"])
            .withDescription(data["description"])
            .withMetadata(data["metadata"])
            .withSlots(data.slots ?
            data.slots.map(function (item) {
                return SlotModel_1.default.fromDict(item);
            }) : [])
            .withCreatedAt(data["createdAt"])
            .withUpdatedAt(data["updatedAt"]);
    };
    FormModelMaster.prototype.toDict = function () {
        return {
            "formModelId": this.getFormModelId(),
            "name": this.getName(),
            "description": this.getDescription(),
            "metadata": this.getMetadata(),
            "slots": this.getSlots() ?
                this.getSlots().map(function (item) {
                    return item.toDict();
                }) : [],
            "createdAt": this.getCreatedAt(),
            "updatedAt": this.getUpdatedAt(),
        };
    };
    return FormModelMaster;
}());
exports.default = FormModelMaster;
//# sourceMappingURL=FormModelMaster.js.map
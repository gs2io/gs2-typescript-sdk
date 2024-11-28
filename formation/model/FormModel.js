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
var Gs2Formation = tslib_1.__importStar(require("../../formation/model"));
var grnFormat = "grn:gs2:{region}:{ownerId}:formation:{namespaceName}:model:mold:{moldModelName}:form";
var FormModel = /** @class */ (function () {
    function FormModel() {
        this.formModelId = null;
        this.name = null;
        this.metadata = null;
        this.slots = null;
    }
    FormModel.getRegion = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '(.*)')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{moldModelName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    FormModel.getOwnerId = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '(.*)')
            .replace('{namespaceName}', '.*')
            .replace('{moldModelName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    FormModel.getNamespaceName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '(.*)')
            .replace('{moldModelName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    FormModel.getMoldModelName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{moldModelName}', '(.*)'));
        if (match) {
            return match[1];
        }
        return null;
    };
    FormModel.isValid = function (grn) {
        if (this.getRegion(grn) == null || this.getRegion(grn) === '') {
            return false;
        }
        if (this.getOwnerId(grn) == null || this.getOwnerId(grn) === '') {
            return false;
        }
        if (this.getNamespaceName(grn) == null || this.getNamespaceName(grn) === '') {
            return false;
        }
        if (this.getMoldModelName(grn) == null || this.getMoldModelName(grn) === '') {
            return false;
        }
        return true;
    };
    FormModel.createGrn = function (region, ownerId, namespaceName, moldModelName) {
        return grnFormat
            .replace('{region}', region !== null && region !== void 0 ? region : '')
            .replace('{ownerId}', ownerId !== null && ownerId !== void 0 ? ownerId : '')
            .replace('{namespaceName}', namespaceName !== null && namespaceName !== void 0 ? namespaceName : '')
            .replace('{moldModelName}', moldModelName !== null && moldModelName !== void 0 ? moldModelName : '');
    };
    FormModel.prototype.getFormModelId = function () {
        return this.formModelId;
    };
    FormModel.prototype.setFormModelId = function (formModelId) {
        this.formModelId = formModelId;
        return this;
    };
    FormModel.prototype.withFormModelId = function (formModelId) {
        this.formModelId = formModelId;
        return this;
    };
    FormModel.prototype.getName = function () {
        return this.name;
    };
    FormModel.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    FormModel.prototype.withName = function (name) {
        this.name = name;
        return this;
    };
    FormModel.prototype.getMetadata = function () {
        return this.metadata;
    };
    FormModel.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    FormModel.prototype.withMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    FormModel.prototype.getSlots = function () {
        return this.slots;
    };
    FormModel.prototype.setSlots = function (slots) {
        this.slots = slots;
        return this;
    };
    FormModel.prototype.withSlots = function (slots) {
        this.slots = slots;
        return this;
    };
    FormModel.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new FormModel()
            .withFormModelId(data["formModelId"])
            .withName(data["name"])
            .withMetadata(data["metadata"])
            .withSlots(data.slots ?
            data.slots.map(function (item) {
                return Gs2Formation.SlotModel.fromDict(item);
            }) : null);
    };
    FormModel.prototype.toDict = function () {
        return {
            "formModelId": this.getFormModelId(),
            "name": this.getName(),
            "metadata": this.getMetadata(),
            "slots": this.getSlots() ?
                this.getSlots().map(function (item) {
                    return item.toDict();
                }) : null,
        };
    };
    return FormModel;
}());
exports.default = FormModel;
//# sourceMappingURL=FormModel.js.map
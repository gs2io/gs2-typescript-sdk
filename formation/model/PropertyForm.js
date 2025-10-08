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
var grnFormat = "grn:gs2:{region}:{ownerId}:formation:{namespaceName}:user:{userId}:propertyForm:{propertyFormModelName}:{propertyId}";
var PropertyForm = /** @class */ (function () {
    function PropertyForm() {
        this.formId = null;
        this.userId = null;
        this.name = null;
        this.propertyId = null;
        this.slots = null;
        this.createdAt = null;
        this.updatedAt = null;
        this.revision = null;
    }
    PropertyForm.getRegion = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '(.*)')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{userId}', '.*')
            .replace('{propertyFormModelName}', '.*')
            .replace('{propertyId}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    PropertyForm.getOwnerId = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '(.*)')
            .replace('{namespaceName}', '.*')
            .replace('{userId}', '.*')
            .replace('{propertyFormModelName}', '.*')
            .replace('{propertyId}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    PropertyForm.getNamespaceName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '(.*)')
            .replace('{userId}', '.*')
            .replace('{propertyFormModelName}', '.*')
            .replace('{propertyId}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    PropertyForm.getUserId = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{userId}', '(.*)')
            .replace('{propertyFormModelName}', '.*')
            .replace('{propertyId}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    PropertyForm.getPropertyFormModelName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{userId}', '.*')
            .replace('{propertyFormModelName}', '(.*)')
            .replace('{propertyId}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    PropertyForm.getPropertyId = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{userId}', '.*')
            .replace('{propertyFormModelName}', '.*')
            .replace('{propertyId}', '(.*)'));
        if (match) {
            return match[1];
        }
        return null;
    };
    PropertyForm.isValid = function (grn) {
        if (this.getRegion(grn) == null || this.getRegion(grn) === '') {
            return false;
        }
        if (this.getOwnerId(grn) == null || this.getOwnerId(grn) === '') {
            return false;
        }
        if (this.getNamespaceName(grn) == null || this.getNamespaceName(grn) === '') {
            return false;
        }
        if (this.getUserId(grn) == null || this.getUserId(grn) === '') {
            return false;
        }
        if (this.getPropertyFormModelName(grn) == null || this.getPropertyFormModelName(grn) === '') {
            return false;
        }
        if (this.getPropertyId(grn) == null || this.getPropertyId(grn) === '') {
            return false;
        }
        return true;
    };
    PropertyForm.createGrn = function (region, ownerId, namespaceName, userId, propertyFormModelName, propertyId) {
        return grnFormat
            .replace('{region}', region !== null && region !== void 0 ? region : '')
            .replace('{ownerId}', ownerId !== null && ownerId !== void 0 ? ownerId : '')
            .replace('{namespaceName}', namespaceName !== null && namespaceName !== void 0 ? namespaceName : '')
            .replace('{userId}', userId !== null && userId !== void 0 ? userId : '')
            .replace('{propertyFormModelName}', propertyFormModelName !== null && propertyFormModelName !== void 0 ? propertyFormModelName : '')
            .replace('{propertyId}', propertyId !== null && propertyId !== void 0 ? propertyId : '');
    };
    PropertyForm.prototype.getFormId = function () {
        return this.formId;
    };
    PropertyForm.prototype.setFormId = function (formId) {
        this.formId = formId;
        return this;
    };
    PropertyForm.prototype.withFormId = function (formId) {
        this.formId = formId;
        return this;
    };
    PropertyForm.prototype.getUserId = function () {
        return this.userId;
    };
    PropertyForm.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    PropertyForm.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    PropertyForm.prototype.getName = function () {
        return this.name;
    };
    PropertyForm.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    PropertyForm.prototype.withName = function (name) {
        this.name = name;
        return this;
    };
    PropertyForm.prototype.getPropertyId = function () {
        return this.propertyId;
    };
    PropertyForm.prototype.setPropertyId = function (propertyId) {
        this.propertyId = propertyId;
        return this;
    };
    PropertyForm.prototype.withPropertyId = function (propertyId) {
        this.propertyId = propertyId;
        return this;
    };
    PropertyForm.prototype.getSlots = function () {
        return this.slots;
    };
    PropertyForm.prototype.setSlots = function (slots) {
        this.slots = slots;
        return this;
    };
    PropertyForm.prototype.withSlots = function (slots) {
        this.slots = slots;
        return this;
    };
    PropertyForm.prototype.getCreatedAt = function () {
        return this.createdAt;
    };
    PropertyForm.prototype.setCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    PropertyForm.prototype.withCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    PropertyForm.prototype.getUpdatedAt = function () {
        return this.updatedAt;
    };
    PropertyForm.prototype.setUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    PropertyForm.prototype.withUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    PropertyForm.prototype.getRevision = function () {
        return this.revision;
    };
    PropertyForm.prototype.setRevision = function (revision) {
        this.revision = revision;
        return this;
    };
    PropertyForm.prototype.withRevision = function (revision) {
        this.revision = revision;
        return this;
    };
    PropertyForm.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new PropertyForm()
            .withFormId(data["formId"])
            .withUserId(data["userId"])
            .withName(data["name"])
            .withPropertyId(data["propertyId"])
            .withSlots(data.slots ?
            data.slots.map(function (item) {
                return Gs2Formation.Slot.fromDict(item);
            }) : null)
            .withCreatedAt(data["createdAt"])
            .withUpdatedAt(data["updatedAt"])
            .withRevision(data["revision"]);
    };
    PropertyForm.prototype.toDict = function () {
        return {
            "formId": this.getFormId(),
            "userId": this.getUserId(),
            "name": this.getName(),
            "propertyId": this.getPropertyId(),
            "slots": this.getSlots() ?
                this.getSlots().map(function (item) {
                    return item.toDict();
                }) : null,
            "createdAt": this.getCreatedAt(),
            "updatedAt": this.getUpdatedAt(),
            "revision": this.getRevision(),
        };
    };
    return PropertyForm;
}());
exports.default = PropertyForm;
//# sourceMappingURL=PropertyForm.js.map
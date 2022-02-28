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
var Slot_1 = (0, tslib_1.__importDefault)(require("./Slot"));
var grnFormat = "grn:gs2:{region}:{ownerId}:formation:{namespaceName}:user:{userId}:mold:{moldName}:form:{index}";
var Form = /** @class */ (function () {
    function Form() {
        this.formId = null;
        this.name = null;
        this.index = null;
        this.slots = null;
        this.createdAt = null;
        this.updatedAt = null;
    }
    Form.getRegion = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '(.*)')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{userId}', '.*')
            .replace('{moldName}', '.*')
            .replace('{index}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    Form.getOwnerId = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '(.*)')
            .replace('{namespaceName}', '.*')
            .replace('{userId}', '.*')
            .replace('{moldName}', '.*')
            .replace('{index}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    Form.getNamespaceName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '(.*)')
            .replace('{userId}', '.*')
            .replace('{moldName}', '.*')
            .replace('{index}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    Form.getUserId = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{userId}', '(.*)')
            .replace('{moldName}', '.*')
            .replace('{index}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    Form.getMoldName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{userId}', '.*')
            .replace('{moldName}', '(.*)')
            .replace('{index}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    Form.getIndex = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{userId}', '.*')
            .replace('{moldName}', '.*')
            .replace('{index}', '(.*)'));
        if (match) {
            return match[1];
        }
        return null;
    };
    Form.isValid = function (grn) {
        if (this.getRegion(grn) == null) {
            return false;
        }
        if (this.getOwnerId(grn) == null) {
            return false;
        }
        if (this.getNamespaceName(grn) == null) {
            return false;
        }
        if (this.getUserId(grn) == null) {
            return false;
        }
        if (this.getMoldName(grn) == null) {
            return false;
        }
        if (this.getIndex(grn) == null) {
            return false;
        }
        return true;
    };
    Form.createGrn = function (region, ownerId, namespaceName, userId, moldName, index) {
        if (region == null || region === '') {
            return null;
        }
        if (ownerId == null || ownerId === '') {
            return null;
        }
        if (namespaceName == null || namespaceName === '') {
            return null;
        }
        if (userId == null || userId === '') {
            return null;
        }
        if (moldName == null || moldName === '') {
            return null;
        }
        if (index == null || index === '') {
            return null;
        }
        return grnFormat
            .replace('{region}', region)
            .replace('{ownerId}', ownerId)
            .replace('{namespaceName}', namespaceName)
            .replace('{userId}', userId)
            .replace('{moldName}', moldName)
            .replace('{index}', index);
    };
    Form.prototype.getFormId = function () {
        return this.formId;
    };
    Form.prototype.setFormId = function (formId) {
        this.formId = formId;
        return this;
    };
    Form.prototype.withFormId = function (formId) {
        this.formId = formId;
        return this;
    };
    Form.prototype.getName = function () {
        return this.name;
    };
    Form.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    Form.prototype.withName = function (name) {
        this.name = name;
        return this;
    };
    Form.prototype.getIndex = function () {
        return this.index;
    };
    Form.prototype.setIndex = function (index) {
        this.index = index;
        return this;
    };
    Form.prototype.withIndex = function (index) {
        this.index = index;
        return this;
    };
    Form.prototype.getSlots = function () {
        return this.slots;
    };
    Form.prototype.setSlots = function (slots) {
        this.slots = slots;
        return this;
    };
    Form.prototype.withSlots = function (slots) {
        this.slots = slots;
        return this;
    };
    Form.prototype.getCreatedAt = function () {
        return this.createdAt;
    };
    Form.prototype.setCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    Form.prototype.withCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    Form.prototype.getUpdatedAt = function () {
        return this.updatedAt;
    };
    Form.prototype.setUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    Form.prototype.withUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    Form.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new Form()
            .withFormId(data["formId"])
            .withName(data["name"])
            .withIndex(data["index"])
            .withSlots(data.slots ?
            data.slots.map(function (item) {
                return Slot_1.default.fromDict(item);
            }) : [])
            .withCreatedAt(data["createdAt"])
            .withUpdatedAt(data["updatedAt"]);
    };
    Form.prototype.toDict = function () {
        return {
            "formId": this.getFormId(),
            "name": this.getName(),
            "index": this.getIndex(),
            "slots": this.getSlots() ?
                this.getSlots().map(function (item) {
                    return item.toDict();
                }) : [],
            "createdAt": this.getCreatedAt(),
            "updatedAt": this.getUpdatedAt(),
        };
    };
    return Form;
}());
exports.default = Form;
//# sourceMappingURL=Form.js.map
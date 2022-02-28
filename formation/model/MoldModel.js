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
var FormModel_1 = (0, tslib_1.__importDefault)(require("./FormModel"));
var grnFormat = "grn:gs2:{region}:{ownerId}:formation:{namespaceName}:model:mold:{moldName}";
var MoldModel = /** @class */ (function () {
    function MoldModel() {
        this.moldModelId = null;
        this.name = null;
        this.metadata = null;
        this.initialMaxCapacity = null;
        this.maxCapacity = null;
        this.formModel = null;
    }
    MoldModel.getRegion = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '(.*)')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{moldName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    MoldModel.getOwnerId = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '(.*)')
            .replace('{namespaceName}', '.*')
            .replace('{moldName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    MoldModel.getNamespaceName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '(.*)')
            .replace('{moldName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    MoldModel.getMoldName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{moldName}', '(.*)'));
        if (match) {
            return match[1];
        }
        return null;
    };
    MoldModel.isValid = function (grn) {
        if (this.getRegion(grn) == null || this.getRegion(grn) === '') {
            return false;
        }
        if (this.getOwnerId(grn) == null || this.getOwnerId(grn) === '') {
            return false;
        }
        if (this.getNamespaceName(grn) == null || this.getNamespaceName(grn) === '') {
            return false;
        }
        if (this.getMoldName(grn) == null || this.getMoldName(grn) === '') {
            return false;
        }
        return true;
    };
    MoldModel.createGrn = function (region, ownerId, namespaceName, moldName) {
        return grnFormat
            .replace('{region}', region !== null && region !== void 0 ? region : '')
            .replace('{ownerId}', ownerId !== null && ownerId !== void 0 ? ownerId : '')
            .replace('{namespaceName}', namespaceName !== null && namespaceName !== void 0 ? namespaceName : '')
            .replace('{moldName}', moldName !== null && moldName !== void 0 ? moldName : '');
    };
    MoldModel.prototype.getMoldModelId = function () {
        return this.moldModelId;
    };
    MoldModel.prototype.setMoldModelId = function (moldModelId) {
        this.moldModelId = moldModelId;
        return this;
    };
    MoldModel.prototype.withMoldModelId = function (moldModelId) {
        this.moldModelId = moldModelId;
        return this;
    };
    MoldModel.prototype.getName = function () {
        return this.name;
    };
    MoldModel.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    MoldModel.prototype.withName = function (name) {
        this.name = name;
        return this;
    };
    MoldModel.prototype.getMetadata = function () {
        return this.metadata;
    };
    MoldModel.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    MoldModel.prototype.withMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    MoldModel.prototype.getInitialMaxCapacity = function () {
        return this.initialMaxCapacity;
    };
    MoldModel.prototype.setInitialMaxCapacity = function (initialMaxCapacity) {
        this.initialMaxCapacity = initialMaxCapacity;
        return this;
    };
    MoldModel.prototype.withInitialMaxCapacity = function (initialMaxCapacity) {
        this.initialMaxCapacity = initialMaxCapacity;
        return this;
    };
    MoldModel.prototype.getMaxCapacity = function () {
        return this.maxCapacity;
    };
    MoldModel.prototype.setMaxCapacity = function (maxCapacity) {
        this.maxCapacity = maxCapacity;
        return this;
    };
    MoldModel.prototype.withMaxCapacity = function (maxCapacity) {
        this.maxCapacity = maxCapacity;
        return this;
    };
    MoldModel.prototype.getFormModel = function () {
        return this.formModel;
    };
    MoldModel.prototype.setFormModel = function (formModel) {
        this.formModel = formModel;
        return this;
    };
    MoldModel.prototype.withFormModel = function (formModel) {
        this.formModel = formModel;
        return this;
    };
    MoldModel.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new MoldModel()
            .withMoldModelId(data["moldModelId"])
            .withName(data["name"])
            .withMetadata(data["metadata"])
            .withInitialMaxCapacity(data["initialMaxCapacity"])
            .withMaxCapacity(data["maxCapacity"])
            .withFormModel(FormModel_1.default.fromDict(data["formModel"]));
    };
    MoldModel.prototype.toDict = function () {
        var _a;
        return {
            "moldModelId": this.getMoldModelId(),
            "name": this.getName(),
            "metadata": this.getMetadata(),
            "initialMaxCapacity": this.getInitialMaxCapacity(),
            "maxCapacity": this.getMaxCapacity(),
            "formModel": (_a = this.getFormModel()) === null || _a === void 0 ? void 0 : _a.toDict(),
        };
    };
    return MoldModel;
}());
exports.default = MoldModel;
//# sourceMappingURL=MoldModel.js.map
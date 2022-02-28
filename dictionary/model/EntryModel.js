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
var grnFormat = "grn:gs2:{region}:{ownerId}:dictionary:{namespaceName}:model:{entryName}";
var EntryModel = /** @class */ (function () {
    function EntryModel() {
        this.entryModelId = null;
        this.name = null;
        this.metadata = null;
    }
    EntryModel.getRegion = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '(.*)')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{entryName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    EntryModel.getOwnerId = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '(.*)')
            .replace('{namespaceName}', '.*')
            .replace('{entryName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    EntryModel.getNamespaceName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '(.*)')
            .replace('{entryName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    EntryModel.getEntryName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{entryName}', '(.*)'));
        if (match) {
            return match[1];
        }
        return null;
    };
    EntryModel.isValid = function (grn) {
        if (this.getRegion(grn) == null) {
            return false;
        }
        if (this.getOwnerId(grn) == null) {
            return false;
        }
        if (this.getNamespaceName(grn) == null) {
            return false;
        }
        if (this.getEntryName(grn) == null) {
            return false;
        }
        return true;
    };
    EntryModel.createGrn = function (region, ownerId, namespaceName, entryName) {
        return grnFormat
            .replace('{region}', region !== null && region !== void 0 ? region : '')
            .replace('{ownerId}', ownerId !== null && ownerId !== void 0 ? ownerId : '')
            .replace('{namespaceName}', namespaceName !== null && namespaceName !== void 0 ? namespaceName : '')
            .replace('{entryName}', entryName !== null && entryName !== void 0 ? entryName : '');
    };
    EntryModel.prototype.getEntryModelId = function () {
        return this.entryModelId;
    };
    EntryModel.prototype.setEntryModelId = function (entryModelId) {
        this.entryModelId = entryModelId;
        return this;
    };
    EntryModel.prototype.withEntryModelId = function (entryModelId) {
        this.entryModelId = entryModelId;
        return this;
    };
    EntryModel.prototype.getName = function () {
        return this.name;
    };
    EntryModel.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    EntryModel.prototype.withName = function (name) {
        this.name = name;
        return this;
    };
    EntryModel.prototype.getMetadata = function () {
        return this.metadata;
    };
    EntryModel.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    EntryModel.prototype.withMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    EntryModel.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new EntryModel()
            .withEntryModelId(data["entryModelId"])
            .withName(data["name"])
            .withMetadata(data["metadata"]);
    };
    EntryModel.prototype.toDict = function () {
        return {
            "entryModelId": this.getEntryModelId(),
            "name": this.getName(),
            "metadata": this.getMetadata(),
        };
    };
    return EntryModel;
}());
exports.default = EntryModel;
//# sourceMappingURL=EntryModel.js.map
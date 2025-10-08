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
var grnFormat = "grn:gs2:{region}:{ownerId}:watch:metrics:{year}:{month}:{day}:dictionary:namespace:{namespaceName}:entryModel:{entryModelName}";
var DictionaryEntryModel = /** @class */ (function () {
    function DictionaryEntryModel() {
        this.entryModelModelId = null;
        this.entryName = null;
    }
    DictionaryEntryModel.getRegion = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '(.*)')
            .replace('{ownerId}', '.*')
            .replace('{year}', '.*')
            .replace('{month}', '.*')
            .replace('{day}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{entryModelName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    DictionaryEntryModel.getOwnerId = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '(.*)')
            .replace('{year}', '.*')
            .replace('{month}', '.*')
            .replace('{day}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{entryModelName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    DictionaryEntryModel.getYear = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{year}', '(.*)')
            .replace('{month}', '.*')
            .replace('{day}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{entryModelName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    DictionaryEntryModel.getMonth = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{year}', '.*')
            .replace('{month}', '(.*)')
            .replace('{day}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{entryModelName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    DictionaryEntryModel.getDay = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{year}', '.*')
            .replace('{month}', '.*')
            .replace('{day}', '(.*)')
            .replace('{namespaceName}', '.*')
            .replace('{entryModelName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    DictionaryEntryModel.getNamespaceName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{year}', '.*')
            .replace('{month}', '.*')
            .replace('{day}', '.*')
            .replace('{namespaceName}', '(.*)')
            .replace('{entryModelName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    DictionaryEntryModel.getEntryModelName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{year}', '.*')
            .replace('{month}', '.*')
            .replace('{day}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{entryModelName}', '(.*)'));
        if (match) {
            return match[1];
        }
        return null;
    };
    DictionaryEntryModel.isValid = function (grn) {
        if (this.getRegion(grn) == null || this.getRegion(grn) === '') {
            return false;
        }
        if (this.getOwnerId(grn) == null || this.getOwnerId(grn) === '') {
            return false;
        }
        if (this.getYear(grn) == null || this.getYear(grn) === '') {
            return false;
        }
        if (this.getMonth(grn) == null || this.getMonth(grn) === '') {
            return false;
        }
        if (this.getDay(grn) == null || this.getDay(grn) === '') {
            return false;
        }
        if (this.getNamespaceName(grn) == null || this.getNamespaceName(grn) === '') {
            return false;
        }
        if (this.getEntryModelName(grn) == null || this.getEntryModelName(grn) === '') {
            return false;
        }
        return true;
    };
    DictionaryEntryModel.createGrn = function (region, ownerId, year, month, day, namespaceName, entryModelName) {
        return grnFormat
            .replace('{region}', region !== null && region !== void 0 ? region : '')
            .replace('{ownerId}', ownerId !== null && ownerId !== void 0 ? ownerId : '')
            .replace('{year}', year !== null && year !== void 0 ? year : '')
            .replace('{month}', month !== null && month !== void 0 ? month : '')
            .replace('{day}', day !== null && day !== void 0 ? day : '')
            .replace('{namespaceName}', namespaceName !== null && namespaceName !== void 0 ? namespaceName : '')
            .replace('{entryModelName}', entryModelName !== null && entryModelName !== void 0 ? entryModelName : '');
    };
    DictionaryEntryModel.prototype.getEntryModelModelId = function () {
        return this.entryModelModelId;
    };
    DictionaryEntryModel.prototype.setEntryModelModelId = function (entryModelModelId) {
        this.entryModelModelId = entryModelModelId;
        return this;
    };
    DictionaryEntryModel.prototype.withEntryModelModelId = function (entryModelModelId) {
        this.entryModelModelId = entryModelModelId;
        return this;
    };
    DictionaryEntryModel.prototype.getEntryName = function () {
        return this.entryName;
    };
    DictionaryEntryModel.prototype.setEntryName = function (entryName) {
        this.entryName = entryName;
        return this;
    };
    DictionaryEntryModel.prototype.withEntryName = function (entryName) {
        this.entryName = entryName;
        return this;
    };
    DictionaryEntryModel.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new DictionaryEntryModel()
            .withEntryModelModelId(data["entryModelModelId"])
            .withEntryName(data["entryName"]);
    };
    DictionaryEntryModel.prototype.toDict = function () {
        return {
            "entryModelModelId": this.getEntryModelModelId(),
            "entryName": this.getEntryName(),
        };
    };
    return DictionaryEntryModel;
}());
exports.default = DictionaryEntryModel;
//# sourceMappingURL=DictionaryEntryModel.js.map
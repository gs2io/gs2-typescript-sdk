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
var grnFormat = "grn:gs2:{region}:{ownerId}:dictionary:{namespaceName}";
var CurrentEntryMaster = /** @class */ (function () {
    function CurrentEntryMaster() {
        this.namespaceId = null;
        this.settings = null;
    }
    CurrentEntryMaster.getRegion = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '(.*)')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    CurrentEntryMaster.getOwnerId = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '(.*)')
            .replace('{namespaceName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    CurrentEntryMaster.getNamespaceName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '(.*)'));
        if (match) {
            return match[1];
        }
        return null;
    };
    CurrentEntryMaster.isValid = function (grn) {
        if (this.getRegion(grn) == null) {
            return false;
        }
        if (this.getOwnerId(grn) == null) {
            return false;
        }
        if (this.getNamespaceName(grn) == null) {
            return false;
        }
        return true;
    };
    CurrentEntryMaster.createGrn = function (region, ownerId, namespaceName) {
        return grnFormat
            .replace('{region}', region !== null && region !== void 0 ? region : '')
            .replace('{ownerId}', ownerId !== null && ownerId !== void 0 ? ownerId : '')
            .replace('{namespaceName}', namespaceName !== null && namespaceName !== void 0 ? namespaceName : '');
    };
    CurrentEntryMaster.prototype.getNamespaceId = function () {
        return this.namespaceId;
    };
    CurrentEntryMaster.prototype.setNamespaceId = function (namespaceId) {
        this.namespaceId = namespaceId;
        return this;
    };
    CurrentEntryMaster.prototype.withNamespaceId = function (namespaceId) {
        this.namespaceId = namespaceId;
        return this;
    };
    CurrentEntryMaster.prototype.getSettings = function () {
        return this.settings;
    };
    CurrentEntryMaster.prototype.setSettings = function (settings) {
        this.settings = settings;
        return this;
    };
    CurrentEntryMaster.prototype.withSettings = function (settings) {
        this.settings = settings;
        return this;
    };
    CurrentEntryMaster.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new CurrentEntryMaster()
            .withNamespaceId(data["namespaceId"])
            .withSettings(data["settings"]);
    };
    CurrentEntryMaster.prototype.toDict = function () {
        return {
            "namespaceId": this.getNamespaceId(),
            "settings": this.getSettings(),
        };
    };
    return CurrentEntryMaster;
}());
exports.default = CurrentEntryMaster;
//# sourceMappingURL=CurrentEntryMaster.js.map
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
var grnFormat = "grn:gs2:{region}:{ownerId}:enchant:{namespaceName}";
var CurrentParameterMaster = /** @class */ (function () {
    function CurrentParameterMaster() {
        this.namespaceId = null;
        this.settings = null;
    }
    CurrentParameterMaster.getRegion = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '(.*)')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    CurrentParameterMaster.getOwnerId = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '(.*)')
            .replace('{namespaceName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    CurrentParameterMaster.getNamespaceName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '(.*)'));
        if (match) {
            return match[1];
        }
        return null;
    };
    CurrentParameterMaster.isValid = function (grn) {
        if (this.getRegion(grn) == null || this.getRegion(grn) === '') {
            return false;
        }
        if (this.getOwnerId(grn) == null || this.getOwnerId(grn) === '') {
            return false;
        }
        if (this.getNamespaceName(grn) == null || this.getNamespaceName(grn) === '') {
            return false;
        }
        return true;
    };
    CurrentParameterMaster.createGrn = function (region, ownerId, namespaceName) {
        return grnFormat
            .replace('{region}', region !== null && region !== void 0 ? region : '')
            .replace('{ownerId}', ownerId !== null && ownerId !== void 0 ? ownerId : '')
            .replace('{namespaceName}', namespaceName !== null && namespaceName !== void 0 ? namespaceName : '');
    };
    CurrentParameterMaster.prototype.getNamespaceId = function () {
        return this.namespaceId;
    };
    CurrentParameterMaster.prototype.setNamespaceId = function (namespaceId) {
        this.namespaceId = namespaceId;
        return this;
    };
    CurrentParameterMaster.prototype.withNamespaceId = function (namespaceId) {
        this.namespaceId = namespaceId;
        return this;
    };
    CurrentParameterMaster.prototype.getSettings = function () {
        return this.settings;
    };
    CurrentParameterMaster.prototype.setSettings = function (settings) {
        this.settings = settings;
        return this;
    };
    CurrentParameterMaster.prototype.withSettings = function (settings) {
        this.settings = settings;
        return this;
    };
    CurrentParameterMaster.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new CurrentParameterMaster()
            .withNamespaceId(data["namespaceId"])
            .withSettings(data["settings"]);
    };
    CurrentParameterMaster.prototype.toDict = function () {
        return {
            "namespaceId": this.getNamespaceId(),
            "settings": this.getSettings(),
        };
    };
    return CurrentParameterMaster;
}());
exports.default = CurrentParameterMaster;
//# sourceMappingURL=CurrentParameterMaster.js.map
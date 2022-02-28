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
var grnFormat = "grn:gs2:{region}:{ownerId}:ranking:{namespaceName}";
var CurrentRankingMaster = /** @class */ (function () {
    function CurrentRankingMaster() {
        this.namespaceId = null;
        this.settings = null;
    }
    CurrentRankingMaster.getRegion = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '(.*)')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    CurrentRankingMaster.getOwnerId = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '(.*)')
            .replace('{namespaceName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    CurrentRankingMaster.getNamespaceName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '(.*)'));
        if (match) {
            return match[1];
        }
        return null;
    };
    CurrentRankingMaster.isValid = function (grn) {
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
    CurrentRankingMaster.createGrn = function (region, ownerId, namespaceName) {
        return grnFormat
            .replace('{region}', region !== null && region !== void 0 ? region : '')
            .replace('{ownerId}', ownerId !== null && ownerId !== void 0 ? ownerId : '')
            .replace('{namespaceName}', namespaceName !== null && namespaceName !== void 0 ? namespaceName : '');
    };
    CurrentRankingMaster.prototype.getNamespaceId = function () {
        return this.namespaceId;
    };
    CurrentRankingMaster.prototype.setNamespaceId = function (namespaceId) {
        this.namespaceId = namespaceId;
        return this;
    };
    CurrentRankingMaster.prototype.withNamespaceId = function (namespaceId) {
        this.namespaceId = namespaceId;
        return this;
    };
    CurrentRankingMaster.prototype.getSettings = function () {
        return this.settings;
    };
    CurrentRankingMaster.prototype.setSettings = function (settings) {
        this.settings = settings;
        return this;
    };
    CurrentRankingMaster.prototype.withSettings = function (settings) {
        this.settings = settings;
        return this;
    };
    CurrentRankingMaster.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new CurrentRankingMaster()
            .withNamespaceId(data["namespaceId"])
            .withSettings(data["settings"]);
    };
    CurrentRankingMaster.prototype.toDict = function () {
        return {
            "namespaceId": this.getNamespaceId(),
            "settings": this.getSettings(),
        };
    };
    return CurrentRankingMaster;
}());
exports.default = CurrentRankingMaster;
//# sourceMappingURL=CurrentRankingMaster.js.map
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
var OpenIdConnectSetting_1 = tslib_1.__importDefault(require("./OpenIdConnectSetting"));
var grnFormat = "grn:gs2:{region}:{ownerId}:account:{namespaceName}:model:takeOver:{type}";
var TakeOverTypeModel = /** @class */ (function () {
    function TakeOverTypeModel() {
        this.takeOverTypeModelId = null;
        this.type = null;
        this.metadata = null;
        this.openIdConnectSetting = null;
    }
    TakeOverTypeModel.getRegion = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '(.*)')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{type}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    TakeOverTypeModel.getOwnerId = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '(.*)')
            .replace('{namespaceName}', '.*')
            .replace('{type}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    TakeOverTypeModel.getNamespaceName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '(.*)')
            .replace('{type}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    TakeOverTypeModel.getType = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{type}', '(.*)'));
        if (match) {
            return match[1];
        }
        return null;
    };
    TakeOverTypeModel.isValid = function (grn) {
        if (this.getRegion(grn) == null || this.getRegion(grn) === '') {
            return false;
        }
        if (this.getOwnerId(grn) == null || this.getOwnerId(grn) === '') {
            return false;
        }
        if (this.getNamespaceName(grn) == null || this.getNamespaceName(grn) === '') {
            return false;
        }
        if (this.getType(grn) == null || this.getType(grn) === '') {
            return false;
        }
        return true;
    };
    TakeOverTypeModel.createGrn = function (region, ownerId, namespaceName, type) {
        return grnFormat
            .replace('{region}', region !== null && region !== void 0 ? region : '')
            .replace('{ownerId}', ownerId !== null && ownerId !== void 0 ? ownerId : '')
            .replace('{namespaceName}', namespaceName !== null && namespaceName !== void 0 ? namespaceName : '')
            .replace('{type}', type !== null && type !== void 0 ? type : '');
    };
    TakeOverTypeModel.prototype.getTakeOverTypeModelId = function () {
        return this.takeOverTypeModelId;
    };
    TakeOverTypeModel.prototype.setTakeOverTypeModelId = function (takeOverTypeModelId) {
        this.takeOverTypeModelId = takeOverTypeModelId;
        return this;
    };
    TakeOverTypeModel.prototype.withTakeOverTypeModelId = function (takeOverTypeModelId) {
        this.takeOverTypeModelId = takeOverTypeModelId;
        return this;
    };
    TakeOverTypeModel.prototype.getType = function () {
        return this.type;
    };
    TakeOverTypeModel.prototype.setType = function (type) {
        this.type = type;
        return this;
    };
    TakeOverTypeModel.prototype.withType = function (type) {
        this.type = type;
        return this;
    };
    TakeOverTypeModel.prototype.getMetadata = function () {
        return this.metadata;
    };
    TakeOverTypeModel.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    TakeOverTypeModel.prototype.withMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    TakeOverTypeModel.prototype.getOpenIdConnectSetting = function () {
        return this.openIdConnectSetting;
    };
    TakeOverTypeModel.prototype.setOpenIdConnectSetting = function (openIdConnectSetting) {
        this.openIdConnectSetting = openIdConnectSetting;
        return this;
    };
    TakeOverTypeModel.prototype.withOpenIdConnectSetting = function (openIdConnectSetting) {
        this.openIdConnectSetting = openIdConnectSetting;
        return this;
    };
    TakeOverTypeModel.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new TakeOverTypeModel()
            .withTakeOverTypeModelId(data["takeOverTypeModelId"])
            .withType(data["type"])
            .withMetadata(data["metadata"])
            .withOpenIdConnectSetting(OpenIdConnectSetting_1.default.fromDict(data["openIdConnectSetting"]));
    };
    TakeOverTypeModel.prototype.toDict = function () {
        var _a;
        return {
            "takeOverTypeModelId": this.getTakeOverTypeModelId(),
            "type": this.getType(),
            "metadata": this.getMetadata(),
            "openIdConnectSetting": (_a = this.getOpenIdConnectSetting()) === null || _a === void 0 ? void 0 : _a.toDict(),
        };
    };
    return TakeOverTypeModel;
}());
exports.default = TakeOverTypeModel;
//# sourceMappingURL=TakeOverTypeModel.js.map
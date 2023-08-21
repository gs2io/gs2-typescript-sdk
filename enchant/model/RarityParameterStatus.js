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
var RarityParameterValue_1 = tslib_1.__importDefault(require("./RarityParameterValue"));
var grnFormat = "grn:gs2:{region}:{ownerId}:enchant:{namespaceName}:user:{userId}:rarity:{parameterName}:{propertyId}";
var RarityParameterStatus = /** @class */ (function () {
    function RarityParameterStatus() {
        this.rarityParameterStatusId = null;
        this.userId = null;
        this.parameterName = null;
        this.propertyId = null;
        this.parameterValues = null;
        this.createdAt = null;
        this.updatedAt = null;
        this.revision = null;
    }
    RarityParameterStatus.getRegion = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '(.*)')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{userId}', '.*')
            .replace('{parameterName}', '.*')
            .replace('{propertyId}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    RarityParameterStatus.getOwnerId = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '(.*)')
            .replace('{namespaceName}', '.*')
            .replace('{userId}', '.*')
            .replace('{parameterName}', '.*')
            .replace('{propertyId}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    RarityParameterStatus.getNamespaceName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '(.*)')
            .replace('{userId}', '.*')
            .replace('{parameterName}', '.*')
            .replace('{propertyId}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    RarityParameterStatus.getUserId = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{userId}', '(.*)')
            .replace('{parameterName}', '.*')
            .replace('{propertyId}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    RarityParameterStatus.getParameterName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{userId}', '.*')
            .replace('{parameterName}', '(.*)')
            .replace('{propertyId}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    RarityParameterStatus.getPropertyId = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{userId}', '.*')
            .replace('{parameterName}', '.*')
            .replace('{propertyId}', '(.*)'));
        if (match) {
            return match[1];
        }
        return null;
    };
    RarityParameterStatus.isValid = function (grn) {
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
        if (this.getParameterName(grn) == null || this.getParameterName(grn) === '') {
            return false;
        }
        if (this.getPropertyId(grn) == null || this.getPropertyId(grn) === '') {
            return false;
        }
        return true;
    };
    RarityParameterStatus.createGrn = function (region, ownerId, namespaceName, userId, parameterName, propertyId) {
        return grnFormat
            .replace('{region}', region !== null && region !== void 0 ? region : '')
            .replace('{ownerId}', ownerId !== null && ownerId !== void 0 ? ownerId : '')
            .replace('{namespaceName}', namespaceName !== null && namespaceName !== void 0 ? namespaceName : '')
            .replace('{userId}', userId !== null && userId !== void 0 ? userId : '')
            .replace('{parameterName}', parameterName !== null && parameterName !== void 0 ? parameterName : '')
            .replace('{propertyId}', propertyId !== null && propertyId !== void 0 ? propertyId : '');
    };
    RarityParameterStatus.prototype.getRarityParameterStatusId = function () {
        return this.rarityParameterStatusId;
    };
    RarityParameterStatus.prototype.setRarityParameterStatusId = function (rarityParameterStatusId) {
        this.rarityParameterStatusId = rarityParameterStatusId;
        return this;
    };
    RarityParameterStatus.prototype.withRarityParameterStatusId = function (rarityParameterStatusId) {
        this.rarityParameterStatusId = rarityParameterStatusId;
        return this;
    };
    RarityParameterStatus.prototype.getUserId = function () {
        return this.userId;
    };
    RarityParameterStatus.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    RarityParameterStatus.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    RarityParameterStatus.prototype.getParameterName = function () {
        return this.parameterName;
    };
    RarityParameterStatus.prototype.setParameterName = function (parameterName) {
        this.parameterName = parameterName;
        return this;
    };
    RarityParameterStatus.prototype.withParameterName = function (parameterName) {
        this.parameterName = parameterName;
        return this;
    };
    RarityParameterStatus.prototype.getPropertyId = function () {
        return this.propertyId;
    };
    RarityParameterStatus.prototype.setPropertyId = function (propertyId) {
        this.propertyId = propertyId;
        return this;
    };
    RarityParameterStatus.prototype.withPropertyId = function (propertyId) {
        this.propertyId = propertyId;
        return this;
    };
    RarityParameterStatus.prototype.getParameterValues = function () {
        return this.parameterValues;
    };
    RarityParameterStatus.prototype.setParameterValues = function (parameterValues) {
        this.parameterValues = parameterValues;
        return this;
    };
    RarityParameterStatus.prototype.withParameterValues = function (parameterValues) {
        this.parameterValues = parameterValues;
        return this;
    };
    RarityParameterStatus.prototype.getCreatedAt = function () {
        return this.createdAt;
    };
    RarityParameterStatus.prototype.setCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    RarityParameterStatus.prototype.withCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    RarityParameterStatus.prototype.getUpdatedAt = function () {
        return this.updatedAt;
    };
    RarityParameterStatus.prototype.setUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    RarityParameterStatus.prototype.withUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    RarityParameterStatus.prototype.getRevision = function () {
        return this.revision;
    };
    RarityParameterStatus.prototype.setRevision = function (revision) {
        this.revision = revision;
        return this;
    };
    RarityParameterStatus.prototype.withRevision = function (revision) {
        this.revision = revision;
        return this;
    };
    RarityParameterStatus.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new RarityParameterStatus()
            .withRarityParameterStatusId(data["rarityParameterStatusId"])
            .withUserId(data["userId"])
            .withParameterName(data["parameterName"])
            .withPropertyId(data["propertyId"])
            .withParameterValues(data.parameterValues ?
            data.parameterValues.map(function (item) {
                return RarityParameterValue_1.default.fromDict(item);
            }) : [])
            .withCreatedAt(data["createdAt"])
            .withUpdatedAt(data["updatedAt"])
            .withRevision(data["revision"]);
    };
    RarityParameterStatus.prototype.toDict = function () {
        return {
            "rarityParameterStatusId": this.getRarityParameterStatusId(),
            "userId": this.getUserId(),
            "parameterName": this.getParameterName(),
            "propertyId": this.getPropertyId(),
            "parameterValues": this.getParameterValues() ?
                this.getParameterValues().map(function (item) {
                    return item.toDict();
                }) : [],
            "createdAt": this.getCreatedAt(),
            "updatedAt": this.getUpdatedAt(),
            "revision": this.getRevision(),
        };
    };
    return RarityParameterStatus;
}());
exports.default = RarityParameterStatus;
//# sourceMappingURL=RarityParameterStatus.js.map
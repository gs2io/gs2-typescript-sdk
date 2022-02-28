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
var AttributeRange_1 = (0, tslib_1.__importDefault)(require("./AttributeRange"));
var CapacityOfRole_1 = (0, tslib_1.__importDefault)(require("./CapacityOfRole"));
var grnFormat = "grn:gs2:{region}:{ownerId}:matchmaking:{namespaceName}:gathering:{gatheringName}";
var Gathering = /** @class */ (function () {
    function Gathering() {
        this.gatheringId = null;
        this.name = null;
        this.attributeRanges = null;
        this.capacityOfRoles = null;
        this.allowUserIds = null;
        this.metadata = null;
        this.expiresAt = null;
        this.createdAt = null;
        this.updatedAt = null;
    }
    Gathering.getRegion = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '(.*)')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{gatheringName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    Gathering.getOwnerId = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '(.*)')
            .replace('{namespaceName}', '.*')
            .replace('{gatheringName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    Gathering.getNamespaceName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '(.*)')
            .replace('{gatheringName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    Gathering.getGatheringName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{gatheringName}', '(.*)'));
        if (match) {
            return match[1];
        }
        return null;
    };
    Gathering.isValid = function (grn) {
        if (this.getRegion(grn) == null || this.getRegion(grn) === '') {
            return false;
        }
        if (this.getOwnerId(grn) == null || this.getOwnerId(grn) === '') {
            return false;
        }
        if (this.getNamespaceName(grn) == null || this.getNamespaceName(grn) === '') {
            return false;
        }
        if (this.getGatheringName(grn) == null || this.getGatheringName(grn) === '') {
            return false;
        }
        return true;
    };
    Gathering.createGrn = function (region, ownerId, namespaceName, gatheringName) {
        return grnFormat
            .replace('{region}', region !== null && region !== void 0 ? region : '')
            .replace('{ownerId}', ownerId !== null && ownerId !== void 0 ? ownerId : '')
            .replace('{namespaceName}', namespaceName !== null && namespaceName !== void 0 ? namespaceName : '')
            .replace('{gatheringName}', gatheringName !== null && gatheringName !== void 0 ? gatheringName : '');
    };
    Gathering.prototype.getGatheringId = function () {
        return this.gatheringId;
    };
    Gathering.prototype.setGatheringId = function (gatheringId) {
        this.gatheringId = gatheringId;
        return this;
    };
    Gathering.prototype.withGatheringId = function (gatheringId) {
        this.gatheringId = gatheringId;
        return this;
    };
    Gathering.prototype.getName = function () {
        return this.name;
    };
    Gathering.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    Gathering.prototype.withName = function (name) {
        this.name = name;
        return this;
    };
    Gathering.prototype.getAttributeRanges = function () {
        return this.attributeRanges;
    };
    Gathering.prototype.setAttributeRanges = function (attributeRanges) {
        this.attributeRanges = attributeRanges;
        return this;
    };
    Gathering.prototype.withAttributeRanges = function (attributeRanges) {
        this.attributeRanges = attributeRanges;
        return this;
    };
    Gathering.prototype.getCapacityOfRoles = function () {
        return this.capacityOfRoles;
    };
    Gathering.prototype.setCapacityOfRoles = function (capacityOfRoles) {
        this.capacityOfRoles = capacityOfRoles;
        return this;
    };
    Gathering.prototype.withCapacityOfRoles = function (capacityOfRoles) {
        this.capacityOfRoles = capacityOfRoles;
        return this;
    };
    Gathering.prototype.getAllowUserIds = function () {
        return this.allowUserIds;
    };
    Gathering.prototype.setAllowUserIds = function (allowUserIds) {
        this.allowUserIds = allowUserIds;
        return this;
    };
    Gathering.prototype.withAllowUserIds = function (allowUserIds) {
        this.allowUserIds = allowUserIds;
        return this;
    };
    Gathering.prototype.getMetadata = function () {
        return this.metadata;
    };
    Gathering.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    Gathering.prototype.withMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    Gathering.prototype.getExpiresAt = function () {
        return this.expiresAt;
    };
    Gathering.prototype.setExpiresAt = function (expiresAt) {
        this.expiresAt = expiresAt;
        return this;
    };
    Gathering.prototype.withExpiresAt = function (expiresAt) {
        this.expiresAt = expiresAt;
        return this;
    };
    Gathering.prototype.getCreatedAt = function () {
        return this.createdAt;
    };
    Gathering.prototype.setCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    Gathering.prototype.withCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    Gathering.prototype.getUpdatedAt = function () {
        return this.updatedAt;
    };
    Gathering.prototype.setUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    Gathering.prototype.withUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    Gathering.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new Gathering()
            .withGatheringId(data["gatheringId"])
            .withName(data["name"])
            .withAttributeRanges(data.attributeRanges ?
            data.attributeRanges.map(function (item) {
                return AttributeRange_1.default.fromDict(item);
            }) : [])
            .withCapacityOfRoles(data.capacityOfRoles ?
            data.capacityOfRoles.map(function (item) {
                return CapacityOfRole_1.default.fromDict(item);
            }) : [])
            .withAllowUserIds(data.allowUserIds ?
            data.allowUserIds.map(function (item) {
                return item;
            }) : [])
            .withMetadata(data["metadata"])
            .withExpiresAt(data["expiresAt"])
            .withCreatedAt(data["createdAt"])
            .withUpdatedAt(data["updatedAt"]);
    };
    Gathering.prototype.toDict = function () {
        return {
            "gatheringId": this.getGatheringId(),
            "name": this.getName(),
            "attributeRanges": this.getAttributeRanges() ?
                this.getAttributeRanges().map(function (item) {
                    return item.toDict();
                }) : [],
            "capacityOfRoles": this.getCapacityOfRoles() ?
                this.getCapacityOfRoles().map(function (item) {
                    return item.toDict();
                }) : [],
            "allowUserIds": this.getAllowUserIds() ?
                this.getAllowUserIds().map(function (item) {
                    return item;
                }) : [],
            "metadata": this.getMetadata(),
            "expiresAt": this.getExpiresAt(),
            "createdAt": this.getCreatedAt(),
            "updatedAt": this.getUpdatedAt(),
        };
    };
    return Gathering;
}());
exports.default = Gathering;
//# sourceMappingURL=Gathering.js.map
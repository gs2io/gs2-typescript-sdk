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
var grnFormat = "grn:gs2:{region}:{ownerId}:lottery:{namespaceName}:table:{prizeTableName}:prize:{prizeId}";
var PrizeLimit = /** @class */ (function () {
    function PrizeLimit() {
        this.prizeLimitId = null;
        this.prizeId = null;
        this.drawnCount = null;
        this.createdAt = null;
        this.updatedAt = null;
    }
    PrizeLimit.getRegion = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '(.*)')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{prizeTableName}', '.*')
            .replace('{prizeId}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    PrizeLimit.getOwnerId = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '(.*)')
            .replace('{namespaceName}', '.*')
            .replace('{prizeTableName}', '.*')
            .replace('{prizeId}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    PrizeLimit.getNamespaceName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '(.*)')
            .replace('{prizeTableName}', '.*')
            .replace('{prizeId}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    PrizeLimit.getPrizeTableName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{prizeTableName}', '(.*)')
            .replace('{prizeId}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    PrizeLimit.getPrizeId = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{prizeTableName}', '.*')
            .replace('{prizeId}', '(.*)'));
        if (match) {
            return match[1];
        }
        return null;
    };
    PrizeLimit.isValid = function (grn) {
        if (this.getRegion(grn) == null || this.getRegion(grn) === '') {
            return false;
        }
        if (this.getOwnerId(grn) == null || this.getOwnerId(grn) === '') {
            return false;
        }
        if (this.getNamespaceName(grn) == null || this.getNamespaceName(grn) === '') {
            return false;
        }
        if (this.getPrizeTableName(grn) == null || this.getPrizeTableName(grn) === '') {
            return false;
        }
        if (this.getPrizeId(grn) == null || this.getPrizeId(grn) === '') {
            return false;
        }
        return true;
    };
    PrizeLimit.createGrn = function (region, ownerId, namespaceName, prizeTableName, prizeId) {
        return grnFormat
            .replace('{region}', region !== null && region !== void 0 ? region : '')
            .replace('{ownerId}', ownerId !== null && ownerId !== void 0 ? ownerId : '')
            .replace('{namespaceName}', namespaceName !== null && namespaceName !== void 0 ? namespaceName : '')
            .replace('{prizeTableName}', prizeTableName !== null && prizeTableName !== void 0 ? prizeTableName : '')
            .replace('{prizeId}', prizeId !== null && prizeId !== void 0 ? prizeId : '');
    };
    PrizeLimit.prototype.getPrizeLimitId = function () {
        return this.prizeLimitId;
    };
    PrizeLimit.prototype.setPrizeLimitId = function (prizeLimitId) {
        this.prizeLimitId = prizeLimitId;
        return this;
    };
    PrizeLimit.prototype.withPrizeLimitId = function (prizeLimitId) {
        this.prizeLimitId = prizeLimitId;
        return this;
    };
    PrizeLimit.prototype.getPrizeId = function () {
        return this.prizeId;
    };
    PrizeLimit.prototype.setPrizeId = function (prizeId) {
        this.prizeId = prizeId;
        return this;
    };
    PrizeLimit.prototype.withPrizeId = function (prizeId) {
        this.prizeId = prizeId;
        return this;
    };
    PrizeLimit.prototype.getDrawnCount = function () {
        return this.drawnCount;
    };
    PrizeLimit.prototype.setDrawnCount = function (drawnCount) {
        this.drawnCount = drawnCount;
        return this;
    };
    PrizeLimit.prototype.withDrawnCount = function (drawnCount) {
        this.drawnCount = drawnCount;
        return this;
    };
    PrizeLimit.prototype.getCreatedAt = function () {
        return this.createdAt;
    };
    PrizeLimit.prototype.setCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    PrizeLimit.prototype.withCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    PrizeLimit.prototype.getUpdatedAt = function () {
        return this.updatedAt;
    };
    PrizeLimit.prototype.setUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    PrizeLimit.prototype.withUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    PrizeLimit.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new PrizeLimit()
            .withPrizeLimitId(data["prizeLimitId"])
            .withPrizeId(data["prizeId"])
            .withDrawnCount(data["drawnCount"])
            .withCreatedAt(data["createdAt"])
            .withUpdatedAt(data["updatedAt"]);
    };
    PrizeLimit.prototype.toDict = function () {
        return {
            "prizeLimitId": this.getPrizeLimitId(),
            "prizeId": this.getPrizeId(),
            "drawnCount": this.getDrawnCount(),
            "createdAt": this.getCreatedAt(),
            "updatedAt": this.getUpdatedAt(),
        };
    };
    return PrizeLimit;
}());
exports.default = PrizeLimit;
//# sourceMappingURL=PrizeLimit.js.map
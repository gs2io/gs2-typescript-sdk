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
var Prize_1 = (0, tslib_1.__importDefault)(require("./Prize"));
var grnFormat = "grn:gs2:{region}:{ownerId}:lottery:{namespaceName}:table:{prizeTableName}";
var PrizeTable = /** @class */ (function () {
    function PrizeTable() {
        this.prizeTableId = null;
        this.name = null;
        this.metadata = null;
        this.prizes = null;
    }
    PrizeTable.getRegion = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '(.*)')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{prizeTableName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    PrizeTable.getOwnerId = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '(.*)')
            .replace('{namespaceName}', '.*')
            .replace('{prizeTableName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    PrizeTable.getNamespaceName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '(.*)')
            .replace('{prizeTableName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    PrizeTable.getPrizeTableName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{prizeTableName}', '(.*)'));
        if (match) {
            return match[1];
        }
        return null;
    };
    PrizeTable.isValid = function (grn) {
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
        return true;
    };
    PrizeTable.createGrn = function (region, ownerId, namespaceName, prizeTableName) {
        return grnFormat
            .replace('{region}', region !== null && region !== void 0 ? region : '')
            .replace('{ownerId}', ownerId !== null && ownerId !== void 0 ? ownerId : '')
            .replace('{namespaceName}', namespaceName !== null && namespaceName !== void 0 ? namespaceName : '')
            .replace('{prizeTableName}', prizeTableName !== null && prizeTableName !== void 0 ? prizeTableName : '');
    };
    PrizeTable.prototype.getPrizeTableId = function () {
        return this.prizeTableId;
    };
    PrizeTable.prototype.setPrizeTableId = function (prizeTableId) {
        this.prizeTableId = prizeTableId;
        return this;
    };
    PrizeTable.prototype.withPrizeTableId = function (prizeTableId) {
        this.prizeTableId = prizeTableId;
        return this;
    };
    PrizeTable.prototype.getName = function () {
        return this.name;
    };
    PrizeTable.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    PrizeTable.prototype.withName = function (name) {
        this.name = name;
        return this;
    };
    PrizeTable.prototype.getMetadata = function () {
        return this.metadata;
    };
    PrizeTable.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    PrizeTable.prototype.withMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    PrizeTable.prototype.getPrizes = function () {
        return this.prizes;
    };
    PrizeTable.prototype.setPrizes = function (prizes) {
        this.prizes = prizes;
        return this;
    };
    PrizeTable.prototype.withPrizes = function (prizes) {
        this.prizes = prizes;
        return this;
    };
    PrizeTable.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new PrizeTable()
            .withPrizeTableId(data["prizeTableId"])
            .withName(data["name"])
            .withMetadata(data["metadata"])
            .withPrizes(data.prizes ?
            data.prizes.map(function (item) {
                return Prize_1.default.fromDict(item);
            }) : []);
    };
    PrizeTable.prototype.toDict = function () {
        return {
            "prizeTableId": this.getPrizeTableId(),
            "name": this.getName(),
            "metadata": this.getMetadata(),
            "prizes": this.getPrizes() ?
                this.getPrizes().map(function (item) {
                    return item.toDict();
                }) : [],
        };
    };
    return PrizeTable;
}());
exports.default = PrizeTable;
//# sourceMappingURL=PrizeTable.js.map
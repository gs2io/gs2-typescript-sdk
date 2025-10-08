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
var grnFormat = "grn:gs2:{region}:{ownerId}:lottery:{namespaceName}:user:{userId}:box:table:{prizeTableName}:{index}";
var Box = /** @class */ (function () {
    function Box() {
        this.boxId = null;
        this.prizeTableName = null;
        this.index = null;
        this.userId = null;
        this.drawnIndexes = null;
        this.createdAt = null;
        this.updatedAt = null;
    }
    Box.getRegion = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '(.*)')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{userId}', '.*')
            .replace('{prizeTableName}', '.*')
            .replace('{index}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    Box.getOwnerId = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '(.*)')
            .replace('{namespaceName}', '.*')
            .replace('{userId}', '.*')
            .replace('{prizeTableName}', '.*')
            .replace('{index}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    Box.getNamespaceName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '(.*)')
            .replace('{userId}', '.*')
            .replace('{prizeTableName}', '.*')
            .replace('{index}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    Box.getUserId = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{userId}', '(.*)')
            .replace('{prizeTableName}', '.*')
            .replace('{index}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    Box.getPrizeTableName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{userId}', '.*')
            .replace('{prizeTableName}', '(.*)')
            .replace('{index}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    Box.getIndex = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{userId}', '.*')
            .replace('{prizeTableName}', '.*')
            .replace('{index}', '(.*)'));
        if (match) {
            return match[1];
        }
        return null;
    };
    Box.isValid = function (grn) {
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
        if (this.getPrizeTableName(grn) == null || this.getPrizeTableName(grn) === '') {
            return false;
        }
        if (this.getIndex(grn) == null || this.getIndex(grn) === '') {
            return false;
        }
        return true;
    };
    Box.createGrn = function (region, ownerId, namespaceName, userId, prizeTableName, index) {
        return grnFormat
            .replace('{region}', region !== null && region !== void 0 ? region : '')
            .replace('{ownerId}', ownerId !== null && ownerId !== void 0 ? ownerId : '')
            .replace('{namespaceName}', namespaceName !== null && namespaceName !== void 0 ? namespaceName : '')
            .replace('{userId}', userId !== null && userId !== void 0 ? userId : '')
            .replace('{prizeTableName}', prizeTableName !== null && prizeTableName !== void 0 ? prizeTableName : '')
            .replace('{index}', index !== null && index !== void 0 ? index : '');
    };
    Box.prototype.getBoxId = function () {
        return this.boxId;
    };
    Box.prototype.setBoxId = function (boxId) {
        this.boxId = boxId;
        return this;
    };
    Box.prototype.withBoxId = function (boxId) {
        this.boxId = boxId;
        return this;
    };
    Box.prototype.getPrizeTableName = function () {
        return this.prizeTableName;
    };
    Box.prototype.setPrizeTableName = function (prizeTableName) {
        this.prizeTableName = prizeTableName;
        return this;
    };
    Box.prototype.withPrizeTableName = function (prizeTableName) {
        this.prizeTableName = prizeTableName;
        return this;
    };
    Box.prototype.getIndex = function () {
        return this.index;
    };
    Box.prototype.setIndex = function (index) {
        this.index = index;
        return this;
    };
    Box.prototype.withIndex = function (index) {
        this.index = index;
        return this;
    };
    Box.prototype.getUserId = function () {
        return this.userId;
    };
    Box.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    Box.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    Box.prototype.getDrawnIndexes = function () {
        return this.drawnIndexes;
    };
    Box.prototype.setDrawnIndexes = function (drawnIndexes) {
        this.drawnIndexes = drawnIndexes;
        return this;
    };
    Box.prototype.withDrawnIndexes = function (drawnIndexes) {
        this.drawnIndexes = drawnIndexes;
        return this;
    };
    Box.prototype.getCreatedAt = function () {
        return this.createdAt;
    };
    Box.prototype.setCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    Box.prototype.withCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    Box.prototype.getUpdatedAt = function () {
        return this.updatedAt;
    };
    Box.prototype.setUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    Box.prototype.withUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    Box.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new Box()
            .withBoxId(data["boxId"])
            .withPrizeTableName(data["prizeTableName"])
            .withIndex(data["index"])
            .withUserId(data["userId"])
            .withDrawnIndexes(data.drawnIndexes ?
            data.drawnIndexes.map(function (item) {
                return item;
            }) : [])
            .withCreatedAt(data["createdAt"])
            .withUpdatedAt(data["updatedAt"]);
    };
    Box.prototype.toDict = function () {
        return {
            "boxId": this.getBoxId(),
            "prizeTableName": this.getPrizeTableName(),
            "index": this.getIndex(),
            "userId": this.getUserId(),
            "drawnIndexes": this.getDrawnIndexes() ?
                this.getDrawnIndexes().map(function (item) {
                    return item;
                }) : [],
            "createdAt": this.getCreatedAt(),
            "updatedAt": this.getUpdatedAt(),
        };
    };
    return Box;
}());
exports.default = Box;
//# sourceMappingURL=Box.js.map
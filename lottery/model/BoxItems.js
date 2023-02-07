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
var BoxItem_1 = tslib_1.__importDefault(require("./BoxItem"));
var grnFormat = "grn:gs2:{region}:{ownerId}:lottery:{namespaceName}:user:{userId}:box:items:{prizeTableName}";
var BoxItems = /** @class */ (function () {
    function BoxItems() {
        this.boxId = null;
        this.prizeTableName = null;
        this.userId = null;
        this.items = null;
    }
    BoxItems.getRegion = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '(.*)')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{userId}', '.*')
            .replace('{prizeTableName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    BoxItems.getOwnerId = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '(.*)')
            .replace('{namespaceName}', '.*')
            .replace('{userId}', '.*')
            .replace('{prizeTableName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    BoxItems.getNamespaceName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '(.*)')
            .replace('{userId}', '.*')
            .replace('{prizeTableName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    BoxItems.getUserId = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{userId}', '(.*)')
            .replace('{prizeTableName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    BoxItems.getPrizeTableName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{userId}', '.*')
            .replace('{prizeTableName}', '(.*)'));
        if (match) {
            return match[1];
        }
        return null;
    };
    BoxItems.isValid = function (grn) {
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
        return true;
    };
    BoxItems.createGrn = function (region, ownerId, namespaceName, userId, prizeTableName) {
        return grnFormat
            .replace('{region}', region !== null && region !== void 0 ? region : '')
            .replace('{ownerId}', ownerId !== null && ownerId !== void 0 ? ownerId : '')
            .replace('{namespaceName}', namespaceName !== null && namespaceName !== void 0 ? namespaceName : '')
            .replace('{userId}', userId !== null && userId !== void 0 ? userId : '')
            .replace('{prizeTableName}', prizeTableName !== null && prizeTableName !== void 0 ? prizeTableName : '');
    };
    BoxItems.prototype.getBoxId = function () {
        return this.boxId;
    };
    BoxItems.prototype.setBoxId = function (boxId) {
        this.boxId = boxId;
        return this;
    };
    BoxItems.prototype.withBoxId = function (boxId) {
        this.boxId = boxId;
        return this;
    };
    BoxItems.prototype.getPrizeTableName = function () {
        return this.prizeTableName;
    };
    BoxItems.prototype.setPrizeTableName = function (prizeTableName) {
        this.prizeTableName = prizeTableName;
        return this;
    };
    BoxItems.prototype.withPrizeTableName = function (prizeTableName) {
        this.prizeTableName = prizeTableName;
        return this;
    };
    BoxItems.prototype.getUserId = function () {
        return this.userId;
    };
    BoxItems.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    BoxItems.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    BoxItems.prototype.getItems = function () {
        return this.items;
    };
    BoxItems.prototype.setItems = function (items) {
        this.items = items;
        return this;
    };
    BoxItems.prototype.withItems = function (items) {
        this.items = items;
        return this;
    };
    BoxItems.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new BoxItems()
            .withBoxId(data["boxId"])
            .withPrizeTableName(data["prizeTableName"])
            .withUserId(data["userId"])
            .withItems(data.items ?
            data.items.map(function (item) {
                return BoxItem_1.default.fromDict(item);
            }) : []);
    };
    BoxItems.prototype.toDict = function () {
        return {
            "boxId": this.getBoxId(),
            "prizeTableName": this.getPrizeTableName(),
            "userId": this.getUserId(),
            "items": this.getItems() ?
                this.getItems().map(function (item) {
                    return item.toDict();
                }) : [],
        };
    };
    return BoxItems;
}());
exports.default = BoxItems;
//# sourceMappingURL=BoxItems.js.map
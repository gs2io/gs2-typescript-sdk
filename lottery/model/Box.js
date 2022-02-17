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
var Box = /** @class */ (function () {
    function Box() {
        this.boxId = null;
        this.prizeTableName = null;
        this.userId = null;
        this.drawnIndexes = null;
        this.createdAt = null;
        this.updatedAt = null;
    }
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
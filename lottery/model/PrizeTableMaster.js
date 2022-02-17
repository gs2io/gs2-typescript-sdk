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
import Prize from './Prize';
var PrizeTableMaster = /** @class */ (function () {
    function PrizeTableMaster() {
        this.prizeTableId = null;
        this.name = null;
        this.metadata = null;
        this.description = null;
        this.prizes = null;
        this.createdAt = null;
        this.updatedAt = null;
    }
    PrizeTableMaster.prototype.getPrizeTableId = function () {
        return this.prizeTableId;
    };
    PrizeTableMaster.prototype.setPrizeTableId = function (prizeTableId) {
        this.prizeTableId = prizeTableId;
        return this;
    };
    PrizeTableMaster.prototype.withPrizeTableId = function (prizeTableId) {
        this.prizeTableId = prizeTableId;
        return this;
    };
    PrizeTableMaster.prototype.getName = function () {
        return this.name;
    };
    PrizeTableMaster.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    PrizeTableMaster.prototype.withName = function (name) {
        this.name = name;
        return this;
    };
    PrizeTableMaster.prototype.getMetadata = function () {
        return this.metadata;
    };
    PrizeTableMaster.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    PrizeTableMaster.prototype.withMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    PrizeTableMaster.prototype.getDescription = function () {
        return this.description;
    };
    PrizeTableMaster.prototype.setDescription = function (description) {
        this.description = description;
        return this;
    };
    PrizeTableMaster.prototype.withDescription = function (description) {
        this.description = description;
        return this;
    };
    PrizeTableMaster.prototype.getPrizes = function () {
        return this.prizes;
    };
    PrizeTableMaster.prototype.setPrizes = function (prizes) {
        this.prizes = prizes;
        return this;
    };
    PrizeTableMaster.prototype.withPrizes = function (prizes) {
        this.prizes = prizes;
        return this;
    };
    PrizeTableMaster.prototype.getCreatedAt = function () {
        return this.createdAt;
    };
    PrizeTableMaster.prototype.setCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    PrizeTableMaster.prototype.withCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    PrizeTableMaster.prototype.getUpdatedAt = function () {
        return this.updatedAt;
    };
    PrizeTableMaster.prototype.setUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    PrizeTableMaster.prototype.withUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    PrizeTableMaster.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new PrizeTableMaster()
            .withPrizeTableId(data["prizeTableId"])
            .withName(data["name"])
            .withMetadata(data["metadata"])
            .withDescription(data["description"])
            .withPrizes(data.prizes ?
            data.prizes.map(function (item) {
                return Prize.fromDict(item);
            }) : [])
            .withCreatedAt(data["createdAt"])
            .withUpdatedAt(data["updatedAt"]);
    };
    PrizeTableMaster.prototype.toDict = function () {
        return {
            "prizeTableId": this.getPrizeTableId(),
            "name": this.getName(),
            "metadata": this.getMetadata(),
            "description": this.getDescription(),
            "prizes": this.getPrizes() ?
                this.getPrizes().map(function (item) {
                    return item.toDict();
                }) : [],
            "createdAt": this.getCreatedAt(),
            "updatedAt": this.getUpdatedAt(),
        };
    };
    return PrizeTableMaster;
}());
export default PrizeTableMaster;
//# sourceMappingURL=PrizeTableMaster.js.map
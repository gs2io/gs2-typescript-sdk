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
var PrizeTable = /** @class */ (function () {
    function PrizeTable() {
        this.prizeTableId = null;
        this.name = null;
        this.metadata = null;
        this.prizes = null;
    }
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
                return Prize.fromDict(item);
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
export default PrizeTable;
//# sourceMappingURL=PrizeTable.js.map
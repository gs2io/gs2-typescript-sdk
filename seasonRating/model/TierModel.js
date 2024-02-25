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
var TierModel = /** @class */ (function () {
    function TierModel() {
        this.metadata = null;
        this.raiseRankBonus = null;
        this.entryFee = null;
        this.minimumChangePoint = null;
        this.maximumChangePoint = null;
    }
    TierModel.prototype.getMetadata = function () {
        return this.metadata;
    };
    TierModel.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    TierModel.prototype.withMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    TierModel.prototype.getRaiseRankBonus = function () {
        return this.raiseRankBonus;
    };
    TierModel.prototype.setRaiseRankBonus = function (raiseRankBonus) {
        this.raiseRankBonus = raiseRankBonus;
        return this;
    };
    TierModel.prototype.withRaiseRankBonus = function (raiseRankBonus) {
        this.raiseRankBonus = raiseRankBonus;
        return this;
    };
    TierModel.prototype.getEntryFee = function () {
        return this.entryFee;
    };
    TierModel.prototype.setEntryFee = function (entryFee) {
        this.entryFee = entryFee;
        return this;
    };
    TierModel.prototype.withEntryFee = function (entryFee) {
        this.entryFee = entryFee;
        return this;
    };
    TierModel.prototype.getMinimumChangePoint = function () {
        return this.minimumChangePoint;
    };
    TierModel.prototype.setMinimumChangePoint = function (minimumChangePoint) {
        this.minimumChangePoint = minimumChangePoint;
        return this;
    };
    TierModel.prototype.withMinimumChangePoint = function (minimumChangePoint) {
        this.minimumChangePoint = minimumChangePoint;
        return this;
    };
    TierModel.prototype.getMaximumChangePoint = function () {
        return this.maximumChangePoint;
    };
    TierModel.prototype.setMaximumChangePoint = function (maximumChangePoint) {
        this.maximumChangePoint = maximumChangePoint;
        return this;
    };
    TierModel.prototype.withMaximumChangePoint = function (maximumChangePoint) {
        this.maximumChangePoint = maximumChangePoint;
        return this;
    };
    TierModel.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new TierModel()
            .withMetadata(data["metadata"])
            .withRaiseRankBonus(data["raiseRankBonus"])
            .withEntryFee(data["entryFee"])
            .withMinimumChangePoint(data["minimumChangePoint"])
            .withMaximumChangePoint(data["maximumChangePoint"]);
    };
    TierModel.prototype.toDict = function () {
        return {
            "metadata": this.getMetadata(),
            "raiseRankBonus": this.getRaiseRankBonus(),
            "entryFee": this.getEntryFee(),
            "minimumChangePoint": this.getMinimumChangePoint(),
            "maximumChangePoint": this.getMaximumChangePoint(),
        };
    };
    return TierModel;
}());
exports.default = TierModel;
//# sourceMappingURL=TierModel.js.map
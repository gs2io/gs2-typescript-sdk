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
var Gs2Buff = tslib_1.__importStar(require("../../buff/model"));
var BuffTargetModel = /** @class */ (function () {
    function BuffTargetModel() {
        this.targetModelName = null;
        this.targetFieldName = null;
        this.conditionGrns = null;
        this.rate = null;
    }
    BuffTargetModel.prototype.getTargetModelName = function () {
        return this.targetModelName;
    };
    BuffTargetModel.prototype.setTargetModelName = function (targetModelName) {
        this.targetModelName = targetModelName;
        return this;
    };
    BuffTargetModel.prototype.withTargetModelName = function (targetModelName) {
        this.targetModelName = targetModelName;
        return this;
    };
    BuffTargetModel.prototype.getTargetFieldName = function () {
        return this.targetFieldName;
    };
    BuffTargetModel.prototype.setTargetFieldName = function (targetFieldName) {
        this.targetFieldName = targetFieldName;
        return this;
    };
    BuffTargetModel.prototype.withTargetFieldName = function (targetFieldName) {
        this.targetFieldName = targetFieldName;
        return this;
    };
    BuffTargetModel.prototype.getConditionGrns = function () {
        return this.conditionGrns;
    };
    BuffTargetModel.prototype.setConditionGrns = function (conditionGrns) {
        this.conditionGrns = conditionGrns;
        return this;
    };
    BuffTargetModel.prototype.withConditionGrns = function (conditionGrns) {
        this.conditionGrns = conditionGrns;
        return this;
    };
    BuffTargetModel.prototype.getRate = function () {
        return this.rate;
    };
    BuffTargetModel.prototype.setRate = function (rate) {
        this.rate = rate;
        return this;
    };
    BuffTargetModel.prototype.withRate = function (rate) {
        this.rate = rate;
        return this;
    };
    BuffTargetModel.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new BuffTargetModel()
            .withTargetModelName(data["targetModelName"])
            .withTargetFieldName(data["targetFieldName"])
            .withConditionGrns(data.conditionGrns ?
            data.conditionGrns.map(function (item) {
                return Gs2Buff.BuffTargetGrn.fromDict(item);
            }) : null)
            .withRate(data["rate"]);
    };
    BuffTargetModel.prototype.toDict = function () {
        return {
            "targetModelName": this.getTargetModelName(),
            "targetFieldName": this.getTargetFieldName(),
            "conditionGrns": this.getConditionGrns() ?
                this.getConditionGrns().map(function (item) {
                    return item.toDict();
                }) : null,
            "rate": this.getRate(),
        };
    };
    return BuffTargetModel;
}());
exports.default = BuffTargetModel;
//# sourceMappingURL=BuffTargetModel.js.map
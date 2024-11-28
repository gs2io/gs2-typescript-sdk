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
var BuffTargetAction = /** @class */ (function () {
    function BuffTargetAction() {
        this.targetActionName = null;
        this.targetFieldName = null;
        this.conditionGrns = null;
        this.rate = null;
    }
    BuffTargetAction.prototype.getTargetActionName = function () {
        return this.targetActionName;
    };
    BuffTargetAction.prototype.setTargetActionName = function (targetActionName) {
        this.targetActionName = targetActionName;
        return this;
    };
    BuffTargetAction.prototype.withTargetActionName = function (targetActionName) {
        this.targetActionName = targetActionName;
        return this;
    };
    BuffTargetAction.prototype.getTargetFieldName = function () {
        return this.targetFieldName;
    };
    BuffTargetAction.prototype.setTargetFieldName = function (targetFieldName) {
        this.targetFieldName = targetFieldName;
        return this;
    };
    BuffTargetAction.prototype.withTargetFieldName = function (targetFieldName) {
        this.targetFieldName = targetFieldName;
        return this;
    };
    BuffTargetAction.prototype.getConditionGrns = function () {
        return this.conditionGrns;
    };
    BuffTargetAction.prototype.setConditionGrns = function (conditionGrns) {
        this.conditionGrns = conditionGrns;
        return this;
    };
    BuffTargetAction.prototype.withConditionGrns = function (conditionGrns) {
        this.conditionGrns = conditionGrns;
        return this;
    };
    BuffTargetAction.prototype.getRate = function () {
        return this.rate;
    };
    BuffTargetAction.prototype.setRate = function (rate) {
        this.rate = rate;
        return this;
    };
    BuffTargetAction.prototype.withRate = function (rate) {
        this.rate = rate;
        return this;
    };
    BuffTargetAction.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new BuffTargetAction()
            .withTargetActionName(data["targetActionName"])
            .withTargetFieldName(data["targetFieldName"])
            .withConditionGrns(data.conditionGrns ?
            data.conditionGrns.map(function (item) {
                return Gs2Buff.BuffTargetGrn.fromDict(item);
            }) : null)
            .withRate(data["rate"]);
    };
    BuffTargetAction.prototype.toDict = function () {
        return {
            "targetActionName": this.getTargetActionName(),
            "targetFieldName": this.getTargetFieldName(),
            "conditionGrns": this.getConditionGrns() ?
                this.getConditionGrns().map(function (item) {
                    return item.toDict();
                }) : null,
            "rate": this.getRate(),
        };
    };
    return BuffTargetAction;
}());
exports.default = BuffTargetAction;
//# sourceMappingURL=BuffTargetAction.js.map
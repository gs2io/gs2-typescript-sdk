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
var TargetCounterModel = /** @class */ (function () {
    function TargetCounterModel() {
        this.counterName = null;
        this.scopeType = null;
        this.resetType = null;
        this.conditionName = null;
        this.value = null;
    }
    TargetCounterModel.prototype.getCounterName = function () {
        return this.counterName;
    };
    TargetCounterModel.prototype.setCounterName = function (counterName) {
        this.counterName = counterName;
        return this;
    };
    TargetCounterModel.prototype.withCounterName = function (counterName) {
        this.counterName = counterName;
        return this;
    };
    TargetCounterModel.prototype.getScopeType = function () {
        return this.scopeType;
    };
    TargetCounterModel.prototype.setScopeType = function (scopeType) {
        this.scopeType = scopeType;
        return this;
    };
    TargetCounterModel.prototype.withScopeType = function (scopeType) {
        this.scopeType = scopeType;
        return this;
    };
    TargetCounterModel.prototype.getResetType = function () {
        return this.resetType;
    };
    TargetCounterModel.prototype.setResetType = function (resetType) {
        this.resetType = resetType;
        return this;
    };
    TargetCounterModel.prototype.withResetType = function (resetType) {
        this.resetType = resetType;
        return this;
    };
    TargetCounterModel.prototype.getConditionName = function () {
        return this.conditionName;
    };
    TargetCounterModel.prototype.setConditionName = function (conditionName) {
        this.conditionName = conditionName;
        return this;
    };
    TargetCounterModel.prototype.withConditionName = function (conditionName) {
        this.conditionName = conditionName;
        return this;
    };
    TargetCounterModel.prototype.getValue = function () {
        return this.value;
    };
    TargetCounterModel.prototype.setValue = function (value) {
        this.value = value;
        return this;
    };
    TargetCounterModel.prototype.withValue = function (value) {
        this.value = value;
        return this;
    };
    TargetCounterModel.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new TargetCounterModel()
            .withCounterName(data["counterName"])
            .withScopeType(data["scopeType"])
            .withResetType(data["resetType"])
            .withConditionName(data["conditionName"])
            .withValue(data["value"]);
    };
    TargetCounterModel.prototype.toDict = function () {
        return {
            "counterName": this.getCounterName(),
            "scopeType": this.getScopeType(),
            "resetType": this.getResetType(),
            "conditionName": this.getConditionName(),
            "value": this.getValue(),
        };
    };
    return TargetCounterModel;
}());
exports.default = TargetCounterModel;
//# sourceMappingURL=TargetCounterModel.js.map
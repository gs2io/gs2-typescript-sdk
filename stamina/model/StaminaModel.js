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
import MaxStaminaTable from './MaxStaminaTable';
import RecoverIntervalTable from './RecoverIntervalTable';
import RecoverValueTable from './RecoverValueTable';
var StaminaModel = /** @class */ (function () {
    function StaminaModel() {
        this.staminaModelId = null;
        this.name = null;
        this.metadata = null;
        this.recoverIntervalMinutes = null;
        this.recoverValue = null;
        this.initialCapacity = null;
        this.isOverflow = null;
        this.maxCapacity = null;
        this.maxStaminaTable = null;
        this.recoverIntervalTable = null;
        this.recoverValueTable = null;
    }
    StaminaModel.prototype.getStaminaModelId = function () {
        return this.staminaModelId;
    };
    StaminaModel.prototype.setStaminaModelId = function (staminaModelId) {
        this.staminaModelId = staminaModelId;
        return this;
    };
    StaminaModel.prototype.withStaminaModelId = function (staminaModelId) {
        this.staminaModelId = staminaModelId;
        return this;
    };
    StaminaModel.prototype.getName = function () {
        return this.name;
    };
    StaminaModel.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    StaminaModel.prototype.withName = function (name) {
        this.name = name;
        return this;
    };
    StaminaModel.prototype.getMetadata = function () {
        return this.metadata;
    };
    StaminaModel.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    StaminaModel.prototype.withMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    StaminaModel.prototype.getRecoverIntervalMinutes = function () {
        return this.recoverIntervalMinutes;
    };
    StaminaModel.prototype.setRecoverIntervalMinutes = function (recoverIntervalMinutes) {
        this.recoverIntervalMinutes = recoverIntervalMinutes;
        return this;
    };
    StaminaModel.prototype.withRecoverIntervalMinutes = function (recoverIntervalMinutes) {
        this.recoverIntervalMinutes = recoverIntervalMinutes;
        return this;
    };
    StaminaModel.prototype.getRecoverValue = function () {
        return this.recoverValue;
    };
    StaminaModel.prototype.setRecoverValue = function (recoverValue) {
        this.recoverValue = recoverValue;
        return this;
    };
    StaminaModel.prototype.withRecoverValue = function (recoverValue) {
        this.recoverValue = recoverValue;
        return this;
    };
    StaminaModel.prototype.getInitialCapacity = function () {
        return this.initialCapacity;
    };
    StaminaModel.prototype.setInitialCapacity = function (initialCapacity) {
        this.initialCapacity = initialCapacity;
        return this;
    };
    StaminaModel.prototype.withInitialCapacity = function (initialCapacity) {
        this.initialCapacity = initialCapacity;
        return this;
    };
    StaminaModel.prototype.getIsOverflow = function () {
        return this.isOverflow;
    };
    StaminaModel.prototype.setIsOverflow = function (isOverflow) {
        this.isOverflow = isOverflow;
        return this;
    };
    StaminaModel.prototype.withIsOverflow = function (isOverflow) {
        this.isOverflow = isOverflow;
        return this;
    };
    StaminaModel.prototype.getMaxCapacity = function () {
        return this.maxCapacity;
    };
    StaminaModel.prototype.setMaxCapacity = function (maxCapacity) {
        this.maxCapacity = maxCapacity;
        return this;
    };
    StaminaModel.prototype.withMaxCapacity = function (maxCapacity) {
        this.maxCapacity = maxCapacity;
        return this;
    };
    StaminaModel.prototype.getMaxStaminaTable = function () {
        return this.maxStaminaTable;
    };
    StaminaModel.prototype.setMaxStaminaTable = function (maxStaminaTable) {
        this.maxStaminaTable = maxStaminaTable;
        return this;
    };
    StaminaModel.prototype.withMaxStaminaTable = function (maxStaminaTable) {
        this.maxStaminaTable = maxStaminaTable;
        return this;
    };
    StaminaModel.prototype.getRecoverIntervalTable = function () {
        return this.recoverIntervalTable;
    };
    StaminaModel.prototype.setRecoverIntervalTable = function (recoverIntervalTable) {
        this.recoverIntervalTable = recoverIntervalTable;
        return this;
    };
    StaminaModel.prototype.withRecoverIntervalTable = function (recoverIntervalTable) {
        this.recoverIntervalTable = recoverIntervalTable;
        return this;
    };
    StaminaModel.prototype.getRecoverValueTable = function () {
        return this.recoverValueTable;
    };
    StaminaModel.prototype.setRecoverValueTable = function (recoverValueTable) {
        this.recoverValueTable = recoverValueTable;
        return this;
    };
    StaminaModel.prototype.withRecoverValueTable = function (recoverValueTable) {
        this.recoverValueTable = recoverValueTable;
        return this;
    };
    StaminaModel.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new StaminaModel()
            .withStaminaModelId(data["staminaModelId"])
            .withName(data["name"])
            .withMetadata(data["metadata"])
            .withRecoverIntervalMinutes(data["recoverIntervalMinutes"])
            .withRecoverValue(data["recoverValue"])
            .withInitialCapacity(data["initialCapacity"])
            .withIsOverflow(data["isOverflow"])
            .withMaxCapacity(data["maxCapacity"])
            .withMaxStaminaTable(MaxStaminaTable.fromDict(data["maxStaminaTable"]))
            .withRecoverIntervalTable(RecoverIntervalTable.fromDict(data["recoverIntervalTable"]))
            .withRecoverValueTable(RecoverValueTable.fromDict(data["recoverValueTable"]));
    };
    StaminaModel.prototype.toDict = function () {
        var _a, _b, _c;
        return {
            "staminaModelId": this.getStaminaModelId(),
            "name": this.getName(),
            "metadata": this.getMetadata(),
            "recoverIntervalMinutes": this.getRecoverIntervalMinutes(),
            "recoverValue": this.getRecoverValue(),
            "initialCapacity": this.getInitialCapacity(),
            "isOverflow": this.getIsOverflow(),
            "maxCapacity": this.getMaxCapacity(),
            "maxStaminaTable": (_a = this.getMaxStaminaTable()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "recoverIntervalTable": (_b = this.getRecoverIntervalTable()) === null || _b === void 0 ? void 0 : _b.toDict(),
            "recoverValueTable": (_c = this.getRecoverValueTable()) === null || _c === void 0 ? void 0 : _c.toDict(),
        };
    };
    return StaminaModel;
}());
export default StaminaModel;
//# sourceMappingURL=StaminaModel.js.map
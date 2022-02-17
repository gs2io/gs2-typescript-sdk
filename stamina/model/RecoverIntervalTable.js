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
var RecoverIntervalTable = /** @class */ (function () {
    function RecoverIntervalTable() {
        this.recoverIntervalTableId = null;
        this.name = null;
        this.metadata = null;
        this.experienceModelId = null;
        this.values = null;
    }
    RecoverIntervalTable.prototype.getRecoverIntervalTableId = function () {
        return this.recoverIntervalTableId;
    };
    RecoverIntervalTable.prototype.setRecoverIntervalTableId = function (recoverIntervalTableId) {
        this.recoverIntervalTableId = recoverIntervalTableId;
        return this;
    };
    RecoverIntervalTable.prototype.withRecoverIntervalTableId = function (recoverIntervalTableId) {
        this.recoverIntervalTableId = recoverIntervalTableId;
        return this;
    };
    RecoverIntervalTable.prototype.getName = function () {
        return this.name;
    };
    RecoverIntervalTable.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    RecoverIntervalTable.prototype.withName = function (name) {
        this.name = name;
        return this;
    };
    RecoverIntervalTable.prototype.getMetadata = function () {
        return this.metadata;
    };
    RecoverIntervalTable.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    RecoverIntervalTable.prototype.withMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    RecoverIntervalTable.prototype.getExperienceModelId = function () {
        return this.experienceModelId;
    };
    RecoverIntervalTable.prototype.setExperienceModelId = function (experienceModelId) {
        this.experienceModelId = experienceModelId;
        return this;
    };
    RecoverIntervalTable.prototype.withExperienceModelId = function (experienceModelId) {
        this.experienceModelId = experienceModelId;
        return this;
    };
    RecoverIntervalTable.prototype.getValues = function () {
        return this.values;
    };
    RecoverIntervalTable.prototype.setValues = function (values) {
        this.values = values;
        return this;
    };
    RecoverIntervalTable.prototype.withValues = function (values) {
        this.values = values;
        return this;
    };
    RecoverIntervalTable.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new RecoverIntervalTable()
            .withRecoverIntervalTableId(data["recoverIntervalTableId"])
            .withName(data["name"])
            .withMetadata(data["metadata"])
            .withExperienceModelId(data["experienceModelId"])
            .withValues(data.values ?
            data.values.map(function (item) {
                return item;
            }) : []);
    };
    RecoverIntervalTable.prototype.toDict = function () {
        return {
            "recoverIntervalTableId": this.getRecoverIntervalTableId(),
            "name": this.getName(),
            "metadata": this.getMetadata(),
            "experienceModelId": this.getExperienceModelId(),
            "values": this.getValues() ?
                this.getValues().map(function (item) {
                    return item;
                }) : [],
        };
    };
    return RecoverIntervalTable;
}());
export default RecoverIntervalTable;
//# sourceMappingURL=RecoverIntervalTable.js.map
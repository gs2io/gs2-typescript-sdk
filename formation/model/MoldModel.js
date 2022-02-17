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
import FormModel from './FormModel';
var MoldModel = /** @class */ (function () {
    function MoldModel() {
        this.moldModelId = null;
        this.name = null;
        this.metadata = null;
        this.initialMaxCapacity = null;
        this.maxCapacity = null;
        this.formModel = null;
    }
    MoldModel.prototype.getMoldModelId = function () {
        return this.moldModelId;
    };
    MoldModel.prototype.setMoldModelId = function (moldModelId) {
        this.moldModelId = moldModelId;
        return this;
    };
    MoldModel.prototype.withMoldModelId = function (moldModelId) {
        this.moldModelId = moldModelId;
        return this;
    };
    MoldModel.prototype.getName = function () {
        return this.name;
    };
    MoldModel.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    MoldModel.prototype.withName = function (name) {
        this.name = name;
        return this;
    };
    MoldModel.prototype.getMetadata = function () {
        return this.metadata;
    };
    MoldModel.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    MoldModel.prototype.withMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    MoldModel.prototype.getInitialMaxCapacity = function () {
        return this.initialMaxCapacity;
    };
    MoldModel.prototype.setInitialMaxCapacity = function (initialMaxCapacity) {
        this.initialMaxCapacity = initialMaxCapacity;
        return this;
    };
    MoldModel.prototype.withInitialMaxCapacity = function (initialMaxCapacity) {
        this.initialMaxCapacity = initialMaxCapacity;
        return this;
    };
    MoldModel.prototype.getMaxCapacity = function () {
        return this.maxCapacity;
    };
    MoldModel.prototype.setMaxCapacity = function (maxCapacity) {
        this.maxCapacity = maxCapacity;
        return this;
    };
    MoldModel.prototype.withMaxCapacity = function (maxCapacity) {
        this.maxCapacity = maxCapacity;
        return this;
    };
    MoldModel.prototype.getFormModel = function () {
        return this.formModel;
    };
    MoldModel.prototype.setFormModel = function (formModel) {
        this.formModel = formModel;
        return this;
    };
    MoldModel.prototype.withFormModel = function (formModel) {
        this.formModel = formModel;
        return this;
    };
    MoldModel.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new MoldModel()
            .withMoldModelId(data["moldModelId"])
            .withName(data["name"])
            .withMetadata(data["metadata"])
            .withInitialMaxCapacity(data["initialMaxCapacity"])
            .withMaxCapacity(data["maxCapacity"])
            .withFormModel(FormModel.fromDict(data["formModel"]));
    };
    MoldModel.prototype.toDict = function () {
        var _a;
        return {
            "moldModelId": this.getMoldModelId(),
            "name": this.getName(),
            "metadata": this.getMetadata(),
            "initialMaxCapacity": this.getInitialMaxCapacity(),
            "maxCapacity": this.getMaxCapacity(),
            "formModel": (_a = this.getFormModel()) === null || _a === void 0 ? void 0 : _a.toDict(),
        };
    };
    return MoldModel;
}());
export default MoldModel;
//# sourceMappingURL=MoldModel.js.map
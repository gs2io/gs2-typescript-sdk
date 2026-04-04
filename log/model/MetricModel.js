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
var grnFormat = "";
var MetricModel = /** @class */ (function () {
    function MetricModel() {
        this.name = null;
        this.type = null;
        this.labels = null;
    }
    MetricModel.isValid = function (grn) {
        return true;
    };
    MetricModel.createGrn = function () {
        return grnFormat;
    };
    MetricModel.prototype.getName = function () {
        return this.name;
    };
    MetricModel.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    MetricModel.prototype.withName = function (name) {
        this.name = name;
        return this;
    };
    MetricModel.prototype.getType = function () {
        return this.type;
    };
    MetricModel.prototype.setType = function (type) {
        this.type = type;
        return this;
    };
    MetricModel.prototype.withType = function (type) {
        this.type = type;
        return this;
    };
    MetricModel.prototype.getLabels = function () {
        return this.labels;
    };
    MetricModel.prototype.setLabels = function (labels) {
        this.labels = labels;
        return this;
    };
    MetricModel.prototype.withLabels = function (labels) {
        this.labels = labels;
        return this;
    };
    MetricModel.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new MetricModel()
            .withName(data["name"])
            .withType(data["type"])
            .withLabels(data.labels ?
            data.labels.map(function (item) {
                return item;
            }) : null);
    };
    MetricModel.prototype.toDict = function () {
        return {
            "name": this.getName(),
            "type": this.getType(),
            "labels": this.getLabels() ?
                this.getLabels().map(function (item) {
                    return item;
                }) : null,
        };
    };
    return MetricModel;
}());
exports.default = MetricModel;
//# sourceMappingURL=MetricModel.js.map
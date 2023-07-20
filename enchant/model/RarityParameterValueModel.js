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
var RarityParameterValueModel = /** @class */ (function () {
    function RarityParameterValueModel() {
        this.name = null;
        this.metadata = null;
        this.resourceName = null;
        this.resourceValue = null;
        this.weight = null;
    }
    RarityParameterValueModel.prototype.getName = function () {
        return this.name;
    };
    RarityParameterValueModel.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    RarityParameterValueModel.prototype.withName = function (name) {
        this.name = name;
        return this;
    };
    RarityParameterValueModel.prototype.getMetadata = function () {
        return this.metadata;
    };
    RarityParameterValueModel.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    RarityParameterValueModel.prototype.withMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    RarityParameterValueModel.prototype.getResourceName = function () {
        return this.resourceName;
    };
    RarityParameterValueModel.prototype.setResourceName = function (resourceName) {
        this.resourceName = resourceName;
        return this;
    };
    RarityParameterValueModel.prototype.withResourceName = function (resourceName) {
        this.resourceName = resourceName;
        return this;
    };
    RarityParameterValueModel.prototype.getResourceValue = function () {
        return this.resourceValue;
    };
    RarityParameterValueModel.prototype.setResourceValue = function (resourceValue) {
        this.resourceValue = resourceValue;
        return this;
    };
    RarityParameterValueModel.prototype.withResourceValue = function (resourceValue) {
        this.resourceValue = resourceValue;
        return this;
    };
    RarityParameterValueModel.prototype.getWeight = function () {
        return this.weight;
    };
    RarityParameterValueModel.prototype.setWeight = function (weight) {
        this.weight = weight;
        return this;
    };
    RarityParameterValueModel.prototype.withWeight = function (weight) {
        this.weight = weight;
        return this;
    };
    RarityParameterValueModel.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new RarityParameterValueModel()
            .withName(data["name"])
            .withMetadata(data["metadata"])
            .withResourceName(data["resourceName"])
            .withResourceValue(data["resourceValue"])
            .withWeight(data["weight"]);
    };
    RarityParameterValueModel.prototype.toDict = function () {
        return {
            "name": this.getName(),
            "metadata": this.getMetadata(),
            "resourceName": this.getResourceName(),
            "resourceValue": this.getResourceValue(),
            "weight": this.getWeight(),
        };
    };
    return RarityParameterValueModel;
}());
exports.default = RarityParameterValueModel;
//# sourceMappingURL=RarityParameterValueModel.js.map
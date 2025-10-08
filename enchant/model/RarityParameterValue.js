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
var RarityParameterValue = /** @class */ (function () {
    function RarityParameterValue() {
        this.name = null;
        this.resourceName = null;
        this.resourceValue = null;
    }
    RarityParameterValue.prototype.getName = function () {
        return this.name;
    };
    RarityParameterValue.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    RarityParameterValue.prototype.withName = function (name) {
        this.name = name;
        return this;
    };
    RarityParameterValue.prototype.getResourceName = function () {
        return this.resourceName;
    };
    RarityParameterValue.prototype.setResourceName = function (resourceName) {
        this.resourceName = resourceName;
        return this;
    };
    RarityParameterValue.prototype.withResourceName = function (resourceName) {
        this.resourceName = resourceName;
        return this;
    };
    RarityParameterValue.prototype.getResourceValue = function () {
        return this.resourceValue;
    };
    RarityParameterValue.prototype.setResourceValue = function (resourceValue) {
        this.resourceValue = resourceValue;
        return this;
    };
    RarityParameterValue.prototype.withResourceValue = function (resourceValue) {
        this.resourceValue = resourceValue;
        return this;
    };
    RarityParameterValue.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new RarityParameterValue()
            .withName(data["name"])
            .withResourceName(data["resourceName"])
            .withResourceValue(data["resourceValue"]);
    };
    RarityParameterValue.prototype.toDict = function () {
        return {
            "name": this.getName(),
            "resourceName": this.getResourceName(),
            "resourceValue": this.getResourceValue(),
        };
    };
    return RarityParameterValue;
}());
exports.default = RarityParameterValue;
//# sourceMappingURL=RarityParameterValue.js.map
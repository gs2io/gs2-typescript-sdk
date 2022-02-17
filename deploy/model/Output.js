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
exports.Output = void 0;
var Output = /** @class */ (function () {
    function Output() {
        this.outputId = null;
        this.name = null;
        this.value = null;
        this.createdAt = null;
    }
    Output.prototype.getOutputId = function () {
        return this.outputId;
    };
    Output.prototype.setOutputId = function (outputId) {
        this.outputId = outputId;
        return this;
    };
    Output.prototype.withOutputId = function (outputId) {
        this.outputId = outputId;
        return this;
    };
    Output.prototype.getName = function () {
        return this.name;
    };
    Output.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    Output.prototype.withName = function (name) {
        this.name = name;
        return this;
    };
    Output.prototype.getValue = function () {
        return this.value;
    };
    Output.prototype.setValue = function (value) {
        this.value = value;
        return this;
    };
    Output.prototype.withValue = function (value) {
        this.value = value;
        return this;
    };
    Output.prototype.getCreatedAt = function () {
        return this.createdAt;
    };
    Output.prototype.setCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    Output.prototype.withCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    Output.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new Output()
            .withOutputId(data["outputId"])
            .withName(data["name"])
            .withValue(data["value"])
            .withCreatedAt(data["createdAt"]);
    };
    Output.prototype.toDict = function () {
        return {
            "outputId": this.getOutputId(),
            "name": this.getName(),
            "value": this.getValue(),
            "createdAt": this.getCreatedAt(),
        };
    };
    return Output;
}());
exports.Output = Output;
//# sourceMappingURL=Output.js.map
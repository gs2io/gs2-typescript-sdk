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
var RarityParameterCountModel = /** @class */ (function () {
    function RarityParameterCountModel() {
        this.count = null;
        this.weight = null;
    }
    RarityParameterCountModel.prototype.getCount = function () {
        return this.count;
    };
    RarityParameterCountModel.prototype.setCount = function (count) {
        this.count = count;
        return this;
    };
    RarityParameterCountModel.prototype.withCount = function (count) {
        this.count = count;
        return this;
    };
    RarityParameterCountModel.prototype.getWeight = function () {
        return this.weight;
    };
    RarityParameterCountModel.prototype.setWeight = function (weight) {
        this.weight = weight;
        return this;
    };
    RarityParameterCountModel.prototype.withWeight = function (weight) {
        this.weight = weight;
        return this;
    };
    RarityParameterCountModel.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new RarityParameterCountModel()
            .withCount(data["count"])
            .withWeight(data["weight"]);
    };
    RarityParameterCountModel.prototype.toDict = function () {
        return {
            "count": this.getCount(),
            "weight": this.getWeight(),
        };
    };
    return RarityParameterCountModel;
}());
exports.default = RarityParameterCountModel;
//# sourceMappingURL=RarityParameterCountModel.js.map
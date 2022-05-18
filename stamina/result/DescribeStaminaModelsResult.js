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
var Gs2Stamina = tslib_1.__importStar(require("../model"));
var DescribeStaminaModelsResult = /** @class */ (function () {
    function DescribeStaminaModelsResult() {
        this.items = null;
    }
    DescribeStaminaModelsResult.prototype.getItems = function () {
        return this.items;
    };
    DescribeStaminaModelsResult.prototype.setItems = function (items) {
        this.items = items;
        return this;
    };
    DescribeStaminaModelsResult.prototype.withItems = function (items) {
        this.items = items;
        return this;
    };
    DescribeStaminaModelsResult.fromDict = function (data) {
        return new DescribeStaminaModelsResult()
            .withItems(data.items ?
            data.items.map(function (item) {
                return Gs2Stamina.StaminaModel.fromDict(item);
            }) : []);
    };
    DescribeStaminaModelsResult.prototype.toDict = function () {
        return {
            "items": this.getItems() ?
                this.getItems().map(function (item) {
                    return item.toDict();
                }) : [],
        };
    };
    return DescribeStaminaModelsResult;
}());
exports.default = DescribeStaminaModelsResult;
//# sourceMappingURL=DescribeStaminaModelsResult.js.map
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
var Gs2Inventory = tslib_1.__importStar(require("../model"));
var ConsumeSimpleItemsByStampTaskResult = /** @class */ (function () {
    function ConsumeSimpleItemsByStampTaskResult() {
        this.items = null;
        this.newContextStack = null;
    }
    ConsumeSimpleItemsByStampTaskResult.prototype.getItems = function () {
        return this.items;
    };
    ConsumeSimpleItemsByStampTaskResult.prototype.setItems = function (items) {
        this.items = items;
        return this;
    };
    ConsumeSimpleItemsByStampTaskResult.prototype.withItems = function (items) {
        this.items = items;
        return this;
    };
    ConsumeSimpleItemsByStampTaskResult.prototype.getNewContextStack = function () {
        return this.newContextStack;
    };
    ConsumeSimpleItemsByStampTaskResult.prototype.setNewContextStack = function (newContextStack) {
        this.newContextStack = newContextStack;
        return this;
    };
    ConsumeSimpleItemsByStampTaskResult.prototype.withNewContextStack = function (newContextStack) {
        this.newContextStack = newContextStack;
        return this;
    };
    ConsumeSimpleItemsByStampTaskResult.fromDict = function (data) {
        return new ConsumeSimpleItemsByStampTaskResult()
            .withItems(data.items ?
            data.items.map(function (item) {
                return Gs2Inventory.SimpleItem.fromDict(item);
            }) : null)
            .withNewContextStack(data["newContextStack"]);
    };
    ConsumeSimpleItemsByStampTaskResult.prototype.toDict = function () {
        return {
            "items": this.getItems() ?
                this.getItems().map(function (item) {
                    return item.toDict();
                }) : null,
            "newContextStack": this.getNewContextStack(),
        };
    };
    return ConsumeSimpleItemsByStampTaskResult;
}());
exports.default = ConsumeSimpleItemsByStampTaskResult;
//# sourceMappingURL=ConsumeSimpleItemsByStampTaskResult.js.map
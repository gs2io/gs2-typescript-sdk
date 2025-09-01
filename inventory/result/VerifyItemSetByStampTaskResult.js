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
var VerifyItemSetByStampTaskResult = /** @class */ (function () {
    function VerifyItemSetByStampTaskResult() {
        this.items = null;
        this.newContextStack = null;
    }
    VerifyItemSetByStampTaskResult.prototype.getItems = function () {
        return this.items;
    };
    VerifyItemSetByStampTaskResult.prototype.setItems = function (items) {
        this.items = items;
        return this;
    };
    VerifyItemSetByStampTaskResult.prototype.withItems = function (items) {
        this.items = items;
        return this;
    };
    VerifyItemSetByStampTaskResult.prototype.getNewContextStack = function () {
        return this.newContextStack;
    };
    VerifyItemSetByStampTaskResult.prototype.setNewContextStack = function (newContextStack) {
        this.newContextStack = newContextStack;
        return this;
    };
    VerifyItemSetByStampTaskResult.prototype.withNewContextStack = function (newContextStack) {
        this.newContextStack = newContextStack;
        return this;
    };
    VerifyItemSetByStampTaskResult.fromDict = function (data) {
        return new VerifyItemSetByStampTaskResult()
            .withItems(data.items ?
            data.items.map(function (item) {
                return Gs2Inventory.ItemSet.fromDict(item);
            }) : null)
            .withNewContextStack(data["newContextStack"]);
    };
    VerifyItemSetByStampTaskResult.prototype.toDict = function () {
        return {
            "items": this.getItems() ?
                this.getItems().map(function (item) {
                    return item.toDict();
                }) : null,
            "newContextStack": this.getNewContextStack(),
        };
    };
    return VerifyItemSetByStampTaskResult;
}());
exports.default = VerifyItemSetByStampTaskResult;
//# sourceMappingURL=VerifyItemSetByStampTaskResult.js.map
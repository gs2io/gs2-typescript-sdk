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
var ShowcaseDisplayItem_1 = tslib_1.__importDefault(require("./ShowcaseDisplayItem"));
var ShowcaseShowcase = /** @class */ (function () {
    function ShowcaseShowcase() {
        this.name = null;
        this.displayItem = null;
    }
    ShowcaseShowcase.prototype.getName = function () {
        return this.name;
    };
    ShowcaseShowcase.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    ShowcaseShowcase.prototype.withName = function (name) {
        this.name = name;
        return this;
    };
    ShowcaseShowcase.prototype.getDisplayItem = function () {
        return this.displayItem;
    };
    ShowcaseShowcase.prototype.setDisplayItem = function (displayItem) {
        this.displayItem = displayItem;
        return this;
    };
    ShowcaseShowcase.prototype.withDisplayItem = function (displayItem) {
        this.displayItem = displayItem;
        return this;
    };
    ShowcaseShowcase.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new ShowcaseShowcase()
            .withName(data["name"])
            .withDisplayItem(data.displayItem ?
            data.displayItem.map(function (item) {
                return ShowcaseDisplayItem_1.default.fromDict(item);
            }) : []);
    };
    ShowcaseShowcase.prototype.toDict = function () {
        return {
            "name": this.getName(),
            "displayItem": this.getDisplayItem() ?
                this.getDisplayItem().map(function (item) {
                    return item.toDict();
                }) : [],
        };
    };
    return ShowcaseShowcase;
}());
exports.default = ShowcaseShowcase;
//# sourceMappingURL=ShowcaseShowcase.js.map
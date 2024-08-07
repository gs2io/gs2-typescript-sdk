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
var Gs2Formation = tslib_1.__importStar(require("../model"));
var SubMoldCapacityResult = /** @class */ (function () {
    function SubMoldCapacityResult() {
        this.item = null;
        this.moldModel = null;
    }
    SubMoldCapacityResult.prototype.getItem = function () {
        return this.item;
    };
    SubMoldCapacityResult.prototype.setItem = function (item) {
        this.item = item;
        return this;
    };
    SubMoldCapacityResult.prototype.withItem = function (item) {
        this.item = item;
        return this;
    };
    SubMoldCapacityResult.prototype.getMoldModel = function () {
        return this.moldModel;
    };
    SubMoldCapacityResult.prototype.setMoldModel = function (moldModel) {
        this.moldModel = moldModel;
        return this;
    };
    SubMoldCapacityResult.prototype.withMoldModel = function (moldModel) {
        this.moldModel = moldModel;
        return this;
    };
    SubMoldCapacityResult.fromDict = function (data) {
        return new SubMoldCapacityResult()
            .withItem(Gs2Formation.Mold.fromDict(data["item"]))
            .withMoldModel(Gs2Formation.MoldModel.fromDict(data["moldModel"]));
    };
    SubMoldCapacityResult.prototype.toDict = function () {
        var _a, _b;
        return {
            "item": (_a = this.getItem()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "moldModel": (_b = this.getMoldModel()) === null || _b === void 0 ? void 0 : _b.toDict(),
        };
    };
    return SubMoldCapacityResult;
}());
exports.default = SubMoldCapacityResult;
//# sourceMappingURL=SubMoldCapacityResult.js.map
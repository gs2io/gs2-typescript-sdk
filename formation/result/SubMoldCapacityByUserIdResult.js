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
var SubMoldCapacityByUserIdResult = /** @class */ (function () {
    function SubMoldCapacityByUserIdResult() {
        this.item = null;
        this.moldModel = null;
    }
    SubMoldCapacityByUserIdResult.prototype.getItem = function () {
        return this.item;
    };
    SubMoldCapacityByUserIdResult.prototype.setItem = function (item) {
        this.item = item;
        return this;
    };
    SubMoldCapacityByUserIdResult.prototype.withItem = function (item) {
        this.item = item;
        return this;
    };
    SubMoldCapacityByUserIdResult.prototype.getMoldModel = function () {
        return this.moldModel;
    };
    SubMoldCapacityByUserIdResult.prototype.setMoldModel = function (moldModel) {
        this.moldModel = moldModel;
        return this;
    };
    SubMoldCapacityByUserIdResult.prototype.withMoldModel = function (moldModel) {
        this.moldModel = moldModel;
        return this;
    };
    SubMoldCapacityByUserIdResult.fromDict = function (data) {
        return new SubMoldCapacityByUserIdResult()
            .withItem(Gs2Formation.Mold.fromDict(data["item"]))
            .withMoldModel(Gs2Formation.MoldModel.fromDict(data["moldModel"]));
    };
    SubMoldCapacityByUserIdResult.prototype.toDict = function () {
        var _a, _b;
        return {
            "item": (_a = this.getItem()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "moldModel": (_b = this.getMoldModel()) === null || _b === void 0 ? void 0 : _b.toDict(),
        };
    };
    return SubMoldCapacityByUserIdResult;
}());
exports.default = SubMoldCapacityByUserIdResult;
//# sourceMappingURL=SubMoldCapacityByUserIdResult.js.map
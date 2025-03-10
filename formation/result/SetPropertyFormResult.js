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
var SetPropertyFormResult = /** @class */ (function () {
    function SetPropertyFormResult() {
        this.item = null;
        this.propertyFormModel = null;
    }
    SetPropertyFormResult.prototype.getItem = function () {
        return this.item;
    };
    SetPropertyFormResult.prototype.setItem = function (item) {
        this.item = item;
        return this;
    };
    SetPropertyFormResult.prototype.withItem = function (item) {
        this.item = item;
        return this;
    };
    SetPropertyFormResult.prototype.getPropertyFormModel = function () {
        return this.propertyFormModel;
    };
    SetPropertyFormResult.prototype.setPropertyFormModel = function (propertyFormModel) {
        this.propertyFormModel = propertyFormModel;
        return this;
    };
    SetPropertyFormResult.prototype.withPropertyFormModel = function (propertyFormModel) {
        this.propertyFormModel = propertyFormModel;
        return this;
    };
    SetPropertyFormResult.fromDict = function (data) {
        return new SetPropertyFormResult()
            .withItem(Gs2Formation.PropertyForm.fromDict(data["item"]))
            .withPropertyFormModel(Gs2Formation.PropertyFormModel.fromDict(data["propertyFormModel"]));
    };
    SetPropertyFormResult.prototype.toDict = function () {
        var _a, _b;
        return {
            "item": (_a = this.getItem()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "propertyFormModel": (_b = this.getPropertyFormModel()) === null || _b === void 0 ? void 0 : _b.toDict(),
        };
    };
    return SetPropertyFormResult;
}());
exports.default = SetPropertyFormResult;
//# sourceMappingURL=SetPropertyFormResult.js.map
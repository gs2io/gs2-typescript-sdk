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
var SetPropertyFormWithSignatureResult = /** @class */ (function () {
    function SetPropertyFormWithSignatureResult() {
        this.item = null;
        this.proeprtyFormModel = null;
    }
    SetPropertyFormWithSignatureResult.prototype.getItem = function () {
        return this.item;
    };
    SetPropertyFormWithSignatureResult.prototype.setItem = function (item) {
        this.item = item;
        return this;
    };
    SetPropertyFormWithSignatureResult.prototype.withItem = function (item) {
        this.item = item;
        return this;
    };
    SetPropertyFormWithSignatureResult.prototype.getProeprtyFormModel = function () {
        return this.proeprtyFormModel;
    };
    SetPropertyFormWithSignatureResult.prototype.setProeprtyFormModel = function (proeprtyFormModel) {
        this.proeprtyFormModel = proeprtyFormModel;
        return this;
    };
    SetPropertyFormWithSignatureResult.prototype.withProeprtyFormModel = function (proeprtyFormModel) {
        this.proeprtyFormModel = proeprtyFormModel;
        return this;
    };
    SetPropertyFormWithSignatureResult.fromDict = function (data) {
        return new SetPropertyFormWithSignatureResult()
            .withItem(Gs2Formation.PropertyForm.fromDict(data["item"]))
            .withProeprtyFormModel(Gs2Formation.PropertyFormModel.fromDict(data["proeprtyFormModel"]));
    };
    SetPropertyFormWithSignatureResult.prototype.toDict = function () {
        var _a, _b;
        return {
            "item": (_a = this.getItem()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "proeprtyFormModel": (_b = this.getProeprtyFormModel()) === null || _b === void 0 ? void 0 : _b.toDict(),
        };
    };
    return SetPropertyFormWithSignatureResult;
}());
exports.default = SetPropertyFormWithSignatureResult;
//# sourceMappingURL=SetPropertyFormWithSignatureResult.js.map
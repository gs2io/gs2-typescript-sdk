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
var SetFormResult = /** @class */ (function () {
    function SetFormResult() {
        this.item = null;
        this.mold = null;
        this.moldModel = null;
        this.formModel = null;
    }
    SetFormResult.prototype.getItem = function () {
        return this.item;
    };
    SetFormResult.prototype.setItem = function (item) {
        this.item = item;
        return this;
    };
    SetFormResult.prototype.withItem = function (item) {
        this.item = item;
        return this;
    };
    SetFormResult.prototype.getMold = function () {
        return this.mold;
    };
    SetFormResult.prototype.setMold = function (mold) {
        this.mold = mold;
        return this;
    };
    SetFormResult.prototype.withMold = function (mold) {
        this.mold = mold;
        return this;
    };
    SetFormResult.prototype.getMoldModel = function () {
        return this.moldModel;
    };
    SetFormResult.prototype.setMoldModel = function (moldModel) {
        this.moldModel = moldModel;
        return this;
    };
    SetFormResult.prototype.withMoldModel = function (moldModel) {
        this.moldModel = moldModel;
        return this;
    };
    SetFormResult.prototype.getFormModel = function () {
        return this.formModel;
    };
    SetFormResult.prototype.setFormModel = function (formModel) {
        this.formModel = formModel;
        return this;
    };
    SetFormResult.prototype.withFormModel = function (formModel) {
        this.formModel = formModel;
        return this;
    };
    SetFormResult.fromDict = function (data) {
        return new SetFormResult()
            .withItem(Gs2Formation.Form.fromDict(data["item"]))
            .withMold(Gs2Formation.Mold.fromDict(data["mold"]))
            .withMoldModel(Gs2Formation.MoldModel.fromDict(data["moldModel"]))
            .withFormModel(Gs2Formation.FormModel.fromDict(data["formModel"]));
    };
    SetFormResult.prototype.toDict = function () {
        var _a, _b, _c, _d;
        return {
            "item": (_a = this.getItem()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "mold": (_b = this.getMold()) === null || _b === void 0 ? void 0 : _b.toDict(),
            "moldModel": (_c = this.getMoldModel()) === null || _c === void 0 ? void 0 : _c.toDict(),
            "formModel": (_d = this.getFormModel()) === null || _d === void 0 ? void 0 : _d.toDict(),
        };
    };
    return SetFormResult;
}());
exports.default = SetFormResult;
//# sourceMappingURL=SetFormResult.js.map
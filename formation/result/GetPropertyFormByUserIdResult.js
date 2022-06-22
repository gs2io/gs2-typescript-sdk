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
var GetPropertyFormByUserIdResult = /** @class */ (function () {
    function GetPropertyFormByUserIdResult() {
        this.item = null;
        this.formModel = null;
    }
    GetPropertyFormByUserIdResult.prototype.getItem = function () {
        return this.item;
    };
    GetPropertyFormByUserIdResult.prototype.setItem = function (item) {
        this.item = item;
        return this;
    };
    GetPropertyFormByUserIdResult.prototype.withItem = function (item) {
        this.item = item;
        return this;
    };
    GetPropertyFormByUserIdResult.prototype.getFormModel = function () {
        return this.formModel;
    };
    GetPropertyFormByUserIdResult.prototype.setFormModel = function (formModel) {
        this.formModel = formModel;
        return this;
    };
    GetPropertyFormByUserIdResult.prototype.withFormModel = function (formModel) {
        this.formModel = formModel;
        return this;
    };
    GetPropertyFormByUserIdResult.fromDict = function (data) {
        return new GetPropertyFormByUserIdResult()
            .withItem(Gs2Formation.PropertyForm.fromDict(data["item"]))
            .withFormModel(Gs2Formation.FormModel.fromDict(data["formModel"]));
    };
    GetPropertyFormByUserIdResult.prototype.toDict = function () {
        var _a, _b;
        return {
            "item": (_a = this.getItem()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "formModel": (_b = this.getFormModel()) === null || _b === void 0 ? void 0 : _b.toDict(),
        };
    };
    return GetPropertyFormByUserIdResult;
}());
exports.default = GetPropertyFormByUserIdResult;
//# sourceMappingURL=GetPropertyFormByUserIdResult.js.map
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
var DeletePropertyFormByUserIdResult = /** @class */ (function () {
    function DeletePropertyFormByUserIdResult() {
        this.item = null;
        this.formModel = null;
    }
    DeletePropertyFormByUserIdResult.prototype.getItem = function () {
        return this.item;
    };
    DeletePropertyFormByUserIdResult.prototype.setItem = function (item) {
        this.item = item;
        return this;
    };
    DeletePropertyFormByUserIdResult.prototype.withItem = function (item) {
        this.item = item;
        return this;
    };
    DeletePropertyFormByUserIdResult.prototype.getFormModel = function () {
        return this.formModel;
    };
    DeletePropertyFormByUserIdResult.prototype.setFormModel = function (formModel) {
        this.formModel = formModel;
        return this;
    };
    DeletePropertyFormByUserIdResult.prototype.withFormModel = function (formModel) {
        this.formModel = formModel;
        return this;
    };
    DeletePropertyFormByUserIdResult.fromDict = function (data) {
        return new DeletePropertyFormByUserIdResult()
            .withItem(Gs2Formation.PropertyForm.fromDict(data["item"]))
            .withFormModel(Gs2Formation.FormModel.fromDict(data["formModel"]));
    };
    DeletePropertyFormByUserIdResult.prototype.toDict = function () {
        var _a, _b;
        return {
            "item": (_a = this.getItem()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "formModel": (_b = this.getFormModel()) === null || _b === void 0 ? void 0 : _b.toDict(),
        };
    };
    return DeletePropertyFormByUserIdResult;
}());
exports.default = DeletePropertyFormByUserIdResult;
//# sourceMappingURL=DeletePropertyFormByUserIdResult.js.map
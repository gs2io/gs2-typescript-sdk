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
var GetPropertyFormWithSignatureByUserIdResult = /** @class */ (function () {
    function GetPropertyFormWithSignatureByUserIdResult() {
        this.item = null;
        this.body = null;
        this.signature = null;
        this.formModel = null;
    }
    GetPropertyFormWithSignatureByUserIdResult.prototype.getItem = function () {
        return this.item;
    };
    GetPropertyFormWithSignatureByUserIdResult.prototype.setItem = function (item) {
        this.item = item;
        return this;
    };
    GetPropertyFormWithSignatureByUserIdResult.prototype.withItem = function (item) {
        this.item = item;
        return this;
    };
    GetPropertyFormWithSignatureByUserIdResult.prototype.getBody = function () {
        return this.body;
    };
    GetPropertyFormWithSignatureByUserIdResult.prototype.setBody = function (body) {
        this.body = body;
        return this;
    };
    GetPropertyFormWithSignatureByUserIdResult.prototype.withBody = function (body) {
        this.body = body;
        return this;
    };
    GetPropertyFormWithSignatureByUserIdResult.prototype.getSignature = function () {
        return this.signature;
    };
    GetPropertyFormWithSignatureByUserIdResult.prototype.setSignature = function (signature) {
        this.signature = signature;
        return this;
    };
    GetPropertyFormWithSignatureByUserIdResult.prototype.withSignature = function (signature) {
        this.signature = signature;
        return this;
    };
    GetPropertyFormWithSignatureByUserIdResult.prototype.getFormModel = function () {
        return this.formModel;
    };
    GetPropertyFormWithSignatureByUserIdResult.prototype.setFormModel = function (formModel) {
        this.formModel = formModel;
        return this;
    };
    GetPropertyFormWithSignatureByUserIdResult.prototype.withFormModel = function (formModel) {
        this.formModel = formModel;
        return this;
    };
    GetPropertyFormWithSignatureByUserIdResult.fromDict = function (data) {
        return new GetPropertyFormWithSignatureByUserIdResult()
            .withItem(Gs2Formation.PropertyForm.fromDict(data["item"]))
            .withBody(data["body"])
            .withSignature(data["signature"])
            .withFormModel(Gs2Formation.FormModel.fromDict(data["formModel"]));
    };
    GetPropertyFormWithSignatureByUserIdResult.prototype.toDict = function () {
        var _a, _b;
        return {
            "item": (_a = this.getItem()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "body": this.getBody(),
            "signature": this.getSignature(),
            "formModel": (_b = this.getFormModel()) === null || _b === void 0 ? void 0 : _b.toDict(),
        };
    };
    return GetPropertyFormWithSignatureByUserIdResult;
}());
exports.default = GetPropertyFormWithSignatureByUserIdResult;
//# sourceMappingURL=GetPropertyFormWithSignatureByUserIdResult.js.map
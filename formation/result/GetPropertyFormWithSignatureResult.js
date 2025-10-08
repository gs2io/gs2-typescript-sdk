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
var GetPropertyFormWithSignatureResult = /** @class */ (function () {
    function GetPropertyFormWithSignatureResult() {
        this.item = null;
        this.body = null;
        this.signature = null;
        this.propertyFormModel = null;
    }
    GetPropertyFormWithSignatureResult.prototype.getItem = function () {
        return this.item;
    };
    GetPropertyFormWithSignatureResult.prototype.setItem = function (item) {
        this.item = item;
        return this;
    };
    GetPropertyFormWithSignatureResult.prototype.withItem = function (item) {
        this.item = item;
        return this;
    };
    GetPropertyFormWithSignatureResult.prototype.getBody = function () {
        return this.body;
    };
    GetPropertyFormWithSignatureResult.prototype.setBody = function (body) {
        this.body = body;
        return this;
    };
    GetPropertyFormWithSignatureResult.prototype.withBody = function (body) {
        this.body = body;
        return this;
    };
    GetPropertyFormWithSignatureResult.prototype.getSignature = function () {
        return this.signature;
    };
    GetPropertyFormWithSignatureResult.prototype.setSignature = function (signature) {
        this.signature = signature;
        return this;
    };
    GetPropertyFormWithSignatureResult.prototype.withSignature = function (signature) {
        this.signature = signature;
        return this;
    };
    GetPropertyFormWithSignatureResult.prototype.getPropertyFormModel = function () {
        return this.propertyFormModel;
    };
    GetPropertyFormWithSignatureResult.prototype.setPropertyFormModel = function (propertyFormModel) {
        this.propertyFormModel = propertyFormModel;
        return this;
    };
    GetPropertyFormWithSignatureResult.prototype.withPropertyFormModel = function (propertyFormModel) {
        this.propertyFormModel = propertyFormModel;
        return this;
    };
    GetPropertyFormWithSignatureResult.fromDict = function (data) {
        return new GetPropertyFormWithSignatureResult()
            .withItem(Gs2Formation.PropertyForm.fromDict(data["item"]))
            .withBody(data["body"])
            .withSignature(data["signature"])
            .withPropertyFormModel(Gs2Formation.PropertyFormModel.fromDict(data["propertyFormModel"]));
    };
    GetPropertyFormWithSignatureResult.prototype.toDict = function () {
        var _a, _b;
        return {
            "item": (_a = this.getItem()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "body": this.getBody(),
            "signature": this.getSignature(),
            "propertyFormModel": (_b = this.getPropertyFormModel()) === null || _b === void 0 ? void 0 : _b.toDict(),
        };
    };
    return GetPropertyFormWithSignatureResult;
}());
exports.default = GetPropertyFormWithSignatureResult;
//# sourceMappingURL=GetPropertyFormWithSignatureResult.js.map
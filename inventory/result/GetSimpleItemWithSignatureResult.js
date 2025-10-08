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
var Gs2Inventory = tslib_1.__importStar(require("../model"));
var GetSimpleItemWithSignatureResult = /** @class */ (function () {
    function GetSimpleItemWithSignatureResult() {
        this.item = null;
        this.simpleItemModel = null;
        this.body = null;
        this.signature = null;
    }
    GetSimpleItemWithSignatureResult.prototype.getItem = function () {
        return this.item;
    };
    GetSimpleItemWithSignatureResult.prototype.setItem = function (item) {
        this.item = item;
        return this;
    };
    GetSimpleItemWithSignatureResult.prototype.withItem = function (item) {
        this.item = item;
        return this;
    };
    GetSimpleItemWithSignatureResult.prototype.getSimpleItemModel = function () {
        return this.simpleItemModel;
    };
    GetSimpleItemWithSignatureResult.prototype.setSimpleItemModel = function (simpleItemModel) {
        this.simpleItemModel = simpleItemModel;
        return this;
    };
    GetSimpleItemWithSignatureResult.prototype.withSimpleItemModel = function (simpleItemModel) {
        this.simpleItemModel = simpleItemModel;
        return this;
    };
    GetSimpleItemWithSignatureResult.prototype.getBody = function () {
        return this.body;
    };
    GetSimpleItemWithSignatureResult.prototype.setBody = function (body) {
        this.body = body;
        return this;
    };
    GetSimpleItemWithSignatureResult.prototype.withBody = function (body) {
        this.body = body;
        return this;
    };
    GetSimpleItemWithSignatureResult.prototype.getSignature = function () {
        return this.signature;
    };
    GetSimpleItemWithSignatureResult.prototype.setSignature = function (signature) {
        this.signature = signature;
        return this;
    };
    GetSimpleItemWithSignatureResult.prototype.withSignature = function (signature) {
        this.signature = signature;
        return this;
    };
    GetSimpleItemWithSignatureResult.fromDict = function (data) {
        return new GetSimpleItemWithSignatureResult()
            .withItem(Gs2Inventory.SimpleItem.fromDict(data["item"]))
            .withSimpleItemModel(Gs2Inventory.SimpleItemModel.fromDict(data["simpleItemModel"]))
            .withBody(data["body"])
            .withSignature(data["signature"]);
    };
    GetSimpleItemWithSignatureResult.prototype.toDict = function () {
        var _a, _b;
        return {
            "item": (_a = this.getItem()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "simpleItemModel": (_b = this.getSimpleItemModel()) === null || _b === void 0 ? void 0 : _b.toDict(),
            "body": this.getBody(),
            "signature": this.getSignature(),
        };
    };
    return GetSimpleItemWithSignatureResult;
}());
exports.default = GetSimpleItemWithSignatureResult;
//# sourceMappingURL=GetSimpleItemWithSignatureResult.js.map
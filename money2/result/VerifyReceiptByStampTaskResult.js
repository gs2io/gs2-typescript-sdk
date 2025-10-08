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
var Gs2Money2 = tslib_1.__importStar(require("../model"));
var VerifyReceiptByStampTaskResult = /** @class */ (function () {
    function VerifyReceiptByStampTaskResult() {
        this.item = null;
        this.newContextStack = null;
    }
    VerifyReceiptByStampTaskResult.prototype.getItem = function () {
        return this.item;
    };
    VerifyReceiptByStampTaskResult.prototype.setItem = function (item) {
        this.item = item;
        return this;
    };
    VerifyReceiptByStampTaskResult.prototype.withItem = function (item) {
        this.item = item;
        return this;
    };
    VerifyReceiptByStampTaskResult.prototype.getNewContextStack = function () {
        return this.newContextStack;
    };
    VerifyReceiptByStampTaskResult.prototype.setNewContextStack = function (newContextStack) {
        this.newContextStack = newContextStack;
        return this;
    };
    VerifyReceiptByStampTaskResult.prototype.withNewContextStack = function (newContextStack) {
        this.newContextStack = newContextStack;
        return this;
    };
    VerifyReceiptByStampTaskResult.fromDict = function (data) {
        return new VerifyReceiptByStampTaskResult()
            .withItem(Gs2Money2.Event.fromDict(data["item"]))
            .withNewContextStack(data["newContextStack"]);
    };
    VerifyReceiptByStampTaskResult.prototype.toDict = function () {
        var _a;
        return {
            "item": (_a = this.getItem()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "newContextStack": this.getNewContextStack(),
        };
    };
    return VerifyReceiptByStampTaskResult;
}());
exports.default = VerifyReceiptByStampTaskResult;
//# sourceMappingURL=VerifyReceiptByStampTaskResult.js.map
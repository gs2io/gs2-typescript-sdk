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
var Gs2Distributor = tslib_1.__importStar(require("../model"));
var IfExpressionByStampTaskResult = /** @class */ (function () {
    function IfExpressionByStampTaskResult() {
        this.item = null;
        this.expressionResult = null;
        this.newContextStack = null;
    }
    IfExpressionByStampTaskResult.prototype.getItem = function () {
        return this.item;
    };
    IfExpressionByStampTaskResult.prototype.setItem = function (item) {
        this.item = item;
        return this;
    };
    IfExpressionByStampTaskResult.prototype.withItem = function (item) {
        this.item = item;
        return this;
    };
    IfExpressionByStampTaskResult.prototype.getExpressionResult = function () {
        return this.expressionResult;
    };
    IfExpressionByStampTaskResult.prototype.setExpressionResult = function (expressionResult) {
        this.expressionResult = expressionResult;
        return this;
    };
    IfExpressionByStampTaskResult.prototype.withExpressionResult = function (expressionResult) {
        this.expressionResult = expressionResult;
        return this;
    };
    IfExpressionByStampTaskResult.prototype.getNewContextStack = function () {
        return this.newContextStack;
    };
    IfExpressionByStampTaskResult.prototype.setNewContextStack = function (newContextStack) {
        this.newContextStack = newContextStack;
        return this;
    };
    IfExpressionByStampTaskResult.prototype.withNewContextStack = function (newContextStack) {
        this.newContextStack = newContextStack;
        return this;
    };
    IfExpressionByStampTaskResult.fromDict = function (data) {
        return new IfExpressionByStampTaskResult()
            .withItem(Gs2Distributor.TransactionResult.fromDict(data["item"]))
            .withExpressionResult(data["expressionResult"])
            .withNewContextStack(data["newContextStack"]);
    };
    IfExpressionByStampTaskResult.prototype.toDict = function () {
        var _a;
        return {
            "item": (_a = this.getItem()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "expressionResult": this.getExpressionResult(),
            "newContextStack": this.getNewContextStack(),
        };
    };
    return IfExpressionByStampTaskResult;
}());
exports.default = IfExpressionByStampTaskResult;
//# sourceMappingURL=IfExpressionByStampTaskResult.js.map
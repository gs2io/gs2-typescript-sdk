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
var Gs2JobQueue = tslib_1.__importStar(require("../model"));
var DeleteByStampTaskResult = /** @class */ (function () {
    function DeleteByStampTaskResult() {
        this.item = null;
        this.newContextStack = null;
    }
    DeleteByStampTaskResult.prototype.getItem = function () {
        return this.item;
    };
    DeleteByStampTaskResult.prototype.setItem = function (item) {
        this.item = item;
        return this;
    };
    DeleteByStampTaskResult.prototype.withItem = function (item) {
        this.item = item;
        return this;
    };
    DeleteByStampTaskResult.prototype.getNewContextStack = function () {
        return this.newContextStack;
    };
    DeleteByStampTaskResult.prototype.setNewContextStack = function (newContextStack) {
        this.newContextStack = newContextStack;
        return this;
    };
    DeleteByStampTaskResult.prototype.withNewContextStack = function (newContextStack) {
        this.newContextStack = newContextStack;
        return this;
    };
    DeleteByStampTaskResult.fromDict = function (data) {
        return new DeleteByStampTaskResult()
            .withItem(Gs2JobQueue.Job.fromDict(data["item"]))
            .withNewContextStack(data["newContextStack"]);
    };
    DeleteByStampTaskResult.prototype.toDict = function () {
        var _a;
        return {
            "item": (_a = this.getItem()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "newContextStack": this.getNewContextStack(),
        };
    };
    return DeleteByStampTaskResult;
}());
exports.default = DeleteByStampTaskResult;
//# sourceMappingURL=DeleteByStampTaskResult.js.map
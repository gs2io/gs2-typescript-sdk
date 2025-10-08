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
var RunByUserIdResult = /** @class */ (function () {
    function RunByUserIdResult() {
        this.item = null;
        this.result = null;
        this.isLastJob = null;
    }
    RunByUserIdResult.prototype.getItem = function () {
        return this.item;
    };
    RunByUserIdResult.prototype.setItem = function (item) {
        this.item = item;
        return this;
    };
    RunByUserIdResult.prototype.withItem = function (item) {
        this.item = item;
        return this;
    };
    RunByUserIdResult.prototype.getResult = function () {
        return this.result;
    };
    RunByUserIdResult.prototype.setResult = function (result) {
        this.result = result;
        return this;
    };
    RunByUserIdResult.prototype.withResult = function (result) {
        this.result = result;
        return this;
    };
    RunByUserIdResult.prototype.getIsLastJob = function () {
        return this.isLastJob;
    };
    RunByUserIdResult.prototype.setIsLastJob = function (isLastJob) {
        this.isLastJob = isLastJob;
        return this;
    };
    RunByUserIdResult.prototype.withIsLastJob = function (isLastJob) {
        this.isLastJob = isLastJob;
        return this;
    };
    RunByUserIdResult.fromDict = function (data) {
        return new RunByUserIdResult()
            .withItem(Gs2JobQueue.Job.fromDict(data["item"]))
            .withResult(Gs2JobQueue.JobResultBody.fromDict(data["result"]))
            .withIsLastJob(data["isLastJob"]);
    };
    RunByUserIdResult.prototype.toDict = function () {
        var _a, _b;
        return {
            "item": (_a = this.getItem()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "result": (_b = this.getResult()) === null || _b === void 0 ? void 0 : _b.toDict(),
            "isLastJob": this.getIsLastJob(),
        };
    };
    return RunByUserIdResult;
}());
exports.default = RunByUserIdResult;
//# sourceMappingURL=RunByUserIdResult.js.map
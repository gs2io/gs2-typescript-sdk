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
var Gs2Idle = tslib_1.__importStar(require("../model"));
var PredictionByUserIdResult = /** @class */ (function () {
    function PredictionByUserIdResult() {
        this.items = null;
        this.status = null;
    }
    PredictionByUserIdResult.prototype.getItems = function () {
        return this.items;
    };
    PredictionByUserIdResult.prototype.setItems = function (items) {
        this.items = items;
        return this;
    };
    PredictionByUserIdResult.prototype.withItems = function (items) {
        this.items = items;
        return this;
    };
    PredictionByUserIdResult.prototype.getStatus = function () {
        return this.status;
    };
    PredictionByUserIdResult.prototype.setStatus = function (status) {
        this.status = status;
        return this;
    };
    PredictionByUserIdResult.prototype.withStatus = function (status) {
        this.status = status;
        return this;
    };
    PredictionByUserIdResult.fromDict = function (data) {
        return new PredictionByUserIdResult()
            .withItems(data.items ?
            data.items.map(function (item) {
                return Gs2Idle.AcquireAction.fromDict(item);
            }) : [])
            .withStatus(Gs2Idle.Status.fromDict(data["status"]));
    };
    PredictionByUserIdResult.prototype.toDict = function () {
        var _a;
        return {
            "items": this.getItems() ?
                this.getItems().map(function (item) {
                    return item.toDict();
                }) : [],
            "status": (_a = this.getStatus()) === null || _a === void 0 ? void 0 : _a.toDict(),
        };
    };
    return PredictionByUserIdResult;
}());
exports.default = PredictionByUserIdResult;
//# sourceMappingURL=PredictionByUserIdResult.js.map
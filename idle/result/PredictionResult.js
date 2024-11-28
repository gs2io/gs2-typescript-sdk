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
var PredictionResult = /** @class */ (function () {
    function PredictionResult() {
        this.items = null;
        this.status = null;
    }
    PredictionResult.prototype.getItems = function () {
        return this.items;
    };
    PredictionResult.prototype.setItems = function (items) {
        this.items = items;
        return this;
    };
    PredictionResult.prototype.withItems = function (items) {
        this.items = items;
        return this;
    };
    PredictionResult.prototype.getStatus = function () {
        return this.status;
    };
    PredictionResult.prototype.setStatus = function (status) {
        this.status = status;
        return this;
    };
    PredictionResult.prototype.withStatus = function (status) {
        this.status = status;
        return this;
    };
    PredictionResult.fromDict = function (data) {
        return new PredictionResult()
            .withItems(data.items ?
            data.items.map(function (item) {
                return Gs2Idle.AcquireAction.fromDict(item);
            }) : null)
            .withStatus(Gs2Idle.Status.fromDict(data["status"]));
    };
    PredictionResult.prototype.toDict = function () {
        var _a;
        return {
            "items": this.getItems() ?
                this.getItems().map(function (item) {
                    return item.toDict();
                }) : null,
            "status": (_a = this.getStatus()) === null || _a === void 0 ? void 0 : _a.toDict(),
        };
    };
    return PredictionResult;
}());
exports.default = PredictionResult;
//# sourceMappingURL=PredictionResult.js.map
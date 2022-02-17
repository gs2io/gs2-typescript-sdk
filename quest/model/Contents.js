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
var AcquireAction_1 = (0, tslib_1.__importDefault)(require("./AcquireAction"));
var Contents = /** @class */ (function () {
    function Contents() {
        this.metadata = null;
        this.completeAcquireActions = null;
        this.weight = null;
    }
    Contents.prototype.getMetadata = function () {
        return this.metadata;
    };
    Contents.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    Contents.prototype.withMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    Contents.prototype.getCompleteAcquireActions = function () {
        return this.completeAcquireActions;
    };
    Contents.prototype.setCompleteAcquireActions = function (completeAcquireActions) {
        this.completeAcquireActions = completeAcquireActions;
        return this;
    };
    Contents.prototype.withCompleteAcquireActions = function (completeAcquireActions) {
        this.completeAcquireActions = completeAcquireActions;
        return this;
    };
    Contents.prototype.getWeight = function () {
        return this.weight;
    };
    Contents.prototype.setWeight = function (weight) {
        this.weight = weight;
        return this;
    };
    Contents.prototype.withWeight = function (weight) {
        this.weight = weight;
        return this;
    };
    Contents.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new Contents()
            .withMetadata(data["metadata"])
            .withCompleteAcquireActions(data.completeAcquireActions ?
            data.completeAcquireActions.map(function (item) {
                return AcquireAction_1.default.fromDict(item);
            }) : [])
            .withWeight(data["weight"]);
    };
    Contents.prototype.toDict = function () {
        return {
            "metadata": this.getMetadata(),
            "completeAcquireActions": this.getCompleteAcquireActions() ?
                this.getCompleteAcquireActions().map(function (item) {
                    return item.toDict();
                }) : [],
            "weight": this.getWeight(),
        };
    };
    return Contents;
}());
exports.default = Contents;
//# sourceMappingURL=Contents.js.map
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
var Gs2Lottery = tslib_1.__importStar(require("../../lottery/model"));
var BoxItem = /** @class */ (function () {
    function BoxItem() {
        this.prizeId = null;
        this.acquireActions = null;
        this.remaining = null;
        this.initial = null;
    }
    BoxItem.prototype.getPrizeId = function () {
        return this.prizeId;
    };
    BoxItem.prototype.setPrizeId = function (prizeId) {
        this.prizeId = prizeId;
        return this;
    };
    BoxItem.prototype.withPrizeId = function (prizeId) {
        this.prizeId = prizeId;
        return this;
    };
    BoxItem.prototype.getAcquireActions = function () {
        return this.acquireActions;
    };
    BoxItem.prototype.setAcquireActions = function (acquireActions) {
        this.acquireActions = acquireActions;
        return this;
    };
    BoxItem.prototype.withAcquireActions = function (acquireActions) {
        this.acquireActions = acquireActions;
        return this;
    };
    BoxItem.prototype.getRemaining = function () {
        return this.remaining;
    };
    BoxItem.prototype.setRemaining = function (remaining) {
        this.remaining = remaining;
        return this;
    };
    BoxItem.prototype.withRemaining = function (remaining) {
        this.remaining = remaining;
        return this;
    };
    BoxItem.prototype.getInitial = function () {
        return this.initial;
    };
    BoxItem.prototype.setInitial = function (initial) {
        this.initial = initial;
        return this;
    };
    BoxItem.prototype.withInitial = function (initial) {
        this.initial = initial;
        return this;
    };
    BoxItem.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new BoxItem()
            .withPrizeId(data["prizeId"])
            .withAcquireActions(data.acquireActions ?
            data.acquireActions.map(function (item) {
                return Gs2Lottery.AcquireAction.fromDict(item);
            }) : null)
            .withRemaining(data["remaining"])
            .withInitial(data["initial"]);
    };
    BoxItem.prototype.toDict = function () {
        return {
            "prizeId": this.getPrizeId(),
            "acquireActions": this.getAcquireActions() ?
                this.getAcquireActions().map(function (item) {
                    return item.toDict();
                }) : null,
            "remaining": this.getRemaining(),
            "initial": this.getInitial(),
        };
    };
    return BoxItem;
}());
exports.default = BoxItem;
//# sourceMappingURL=BoxItem.js.map
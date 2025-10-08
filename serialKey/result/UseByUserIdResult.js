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
var Gs2SerialKey = tslib_1.__importStar(require("../model"));
var UseByUserIdResult = /** @class */ (function () {
    function UseByUserIdResult() {
        this.item = null;
        this.campaignModel = null;
    }
    UseByUserIdResult.prototype.getItem = function () {
        return this.item;
    };
    UseByUserIdResult.prototype.setItem = function (item) {
        this.item = item;
        return this;
    };
    UseByUserIdResult.prototype.withItem = function (item) {
        this.item = item;
        return this;
    };
    UseByUserIdResult.prototype.getCampaignModel = function () {
        return this.campaignModel;
    };
    UseByUserIdResult.prototype.setCampaignModel = function (campaignModel) {
        this.campaignModel = campaignModel;
        return this;
    };
    UseByUserIdResult.prototype.withCampaignModel = function (campaignModel) {
        this.campaignModel = campaignModel;
        return this;
    };
    UseByUserIdResult.fromDict = function (data) {
        return new UseByUserIdResult()
            .withItem(Gs2SerialKey.SerialKey.fromDict(data["item"]))
            .withCampaignModel(Gs2SerialKey.CampaignModel.fromDict(data["campaignModel"]));
    };
    UseByUserIdResult.prototype.toDict = function () {
        var _a, _b;
        return {
            "item": (_a = this.getItem()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "campaignModel": (_b = this.getCampaignModel()) === null || _b === void 0 ? void 0 : _b.toDict(),
        };
    };
    return UseByUserIdResult;
}());
exports.default = UseByUserIdResult;
//# sourceMappingURL=UseByUserIdResult.js.map
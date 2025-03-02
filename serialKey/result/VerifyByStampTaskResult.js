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
var VerifyByStampTaskResult = /** @class */ (function () {
    function VerifyByStampTaskResult() {
        this.item = null;
        this.campaignModel = null;
        this.newContextStack = null;
    }
    VerifyByStampTaskResult.prototype.getItem = function () {
        return this.item;
    };
    VerifyByStampTaskResult.prototype.setItem = function (item) {
        this.item = item;
        return this;
    };
    VerifyByStampTaskResult.prototype.withItem = function (item) {
        this.item = item;
        return this;
    };
    VerifyByStampTaskResult.prototype.getCampaignModel = function () {
        return this.campaignModel;
    };
    VerifyByStampTaskResult.prototype.setCampaignModel = function (campaignModel) {
        this.campaignModel = campaignModel;
        return this;
    };
    VerifyByStampTaskResult.prototype.withCampaignModel = function (campaignModel) {
        this.campaignModel = campaignModel;
        return this;
    };
    VerifyByStampTaskResult.prototype.getNewContextStack = function () {
        return this.newContextStack;
    };
    VerifyByStampTaskResult.prototype.setNewContextStack = function (newContextStack) {
        this.newContextStack = newContextStack;
        return this;
    };
    VerifyByStampTaskResult.prototype.withNewContextStack = function (newContextStack) {
        this.newContextStack = newContextStack;
        return this;
    };
    VerifyByStampTaskResult.fromDict = function (data) {
        return new VerifyByStampTaskResult()
            .withItem(Gs2SerialKey.SerialKey.fromDict(data["item"]))
            .withCampaignModel(Gs2SerialKey.CampaignModel.fromDict(data["campaignModel"]))
            .withNewContextStack(data["newContextStack"]);
    };
    VerifyByStampTaskResult.prototype.toDict = function () {
        var _a, _b;
        return {
            "item": (_a = this.getItem()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "campaignModel": (_b = this.getCampaignModel()) === null || _b === void 0 ? void 0 : _b.toDict(),
            "newContextStack": this.getNewContextStack(),
        };
    };
    return VerifyByStampTaskResult;
}());
exports.default = VerifyByStampTaskResult;
//# sourceMappingURL=VerifyByStampTaskResult.js.map
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
var Gs2Money2 = tslib_1.__importStar(require("../../money2/model"));
var RefundEvent = /** @class */ (function () {
    function RefundEvent() {
        this.contentName = null;
        this.platform = null;
        this.appleAppStoreRefundEvent = null;
        this.googlePlayRefundEvent = null;
    }
    RefundEvent.prototype.getContentName = function () {
        return this.contentName;
    };
    RefundEvent.prototype.setContentName = function (contentName) {
        this.contentName = contentName;
        return this;
    };
    RefundEvent.prototype.withContentName = function (contentName) {
        this.contentName = contentName;
        return this;
    };
    RefundEvent.prototype.getPlatform = function () {
        return this.platform;
    };
    RefundEvent.prototype.setPlatform = function (platform) {
        this.platform = platform;
        return this;
    };
    RefundEvent.prototype.withPlatform = function (platform) {
        this.platform = platform;
        return this;
    };
    RefundEvent.prototype.getAppleAppStoreRefundEvent = function () {
        return this.appleAppStoreRefundEvent;
    };
    RefundEvent.prototype.setAppleAppStoreRefundEvent = function (appleAppStoreRefundEvent) {
        this.appleAppStoreRefundEvent = appleAppStoreRefundEvent;
        return this;
    };
    RefundEvent.prototype.withAppleAppStoreRefundEvent = function (appleAppStoreRefundEvent) {
        this.appleAppStoreRefundEvent = appleAppStoreRefundEvent;
        return this;
    };
    RefundEvent.prototype.getGooglePlayRefundEvent = function () {
        return this.googlePlayRefundEvent;
    };
    RefundEvent.prototype.setGooglePlayRefundEvent = function (googlePlayRefundEvent) {
        this.googlePlayRefundEvent = googlePlayRefundEvent;
        return this;
    };
    RefundEvent.prototype.withGooglePlayRefundEvent = function (googlePlayRefundEvent) {
        this.googlePlayRefundEvent = googlePlayRefundEvent;
        return this;
    };
    RefundEvent.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new RefundEvent()
            .withContentName(data["contentName"])
            .withPlatform(data["platform"])
            .withAppleAppStoreRefundEvent(Gs2Money2.AppleAppStoreVerifyReceiptEvent.fromDict(data["appleAppStoreRefundEvent"]))
            .withGooglePlayRefundEvent(Gs2Money2.GooglePlayVerifyReceiptEvent.fromDict(data["googlePlayRefundEvent"]));
    };
    RefundEvent.prototype.toDict = function () {
        var _a, _b;
        return {
            "contentName": this.getContentName(),
            "platform": this.getPlatform(),
            "appleAppStoreRefundEvent": (_a = this.getAppleAppStoreRefundEvent()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "googlePlayRefundEvent": (_b = this.getGooglePlayRefundEvent()) === null || _b === void 0 ? void 0 : _b.toDict(),
        };
    };
    return RefundEvent;
}());
exports.default = RefundEvent;
//# sourceMappingURL=RefundEvent.js.map
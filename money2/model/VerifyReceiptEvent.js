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
var AppleAppStoreVerifyReceiptEvent_1 = tslib_1.__importDefault(require("./AppleAppStoreVerifyReceiptEvent"));
var GooglePlayVerifyReceiptEvent_1 = tslib_1.__importDefault(require("./GooglePlayVerifyReceiptEvent"));
var VerifyReceiptEvent = /** @class */ (function () {
    function VerifyReceiptEvent() {
        this.contentName = null;
        this.platform = null;
        this.appleAppStoreVerifyReceiptEvent = null;
        this.googlePlayVerifyReceiptEvent = null;
    }
    VerifyReceiptEvent.prototype.getContentName = function () {
        return this.contentName;
    };
    VerifyReceiptEvent.prototype.setContentName = function (contentName) {
        this.contentName = contentName;
        return this;
    };
    VerifyReceiptEvent.prototype.withContentName = function (contentName) {
        this.contentName = contentName;
        return this;
    };
    VerifyReceiptEvent.prototype.getPlatform = function () {
        return this.platform;
    };
    VerifyReceiptEvent.prototype.setPlatform = function (platform) {
        this.platform = platform;
        return this;
    };
    VerifyReceiptEvent.prototype.withPlatform = function (platform) {
        this.platform = platform;
        return this;
    };
    VerifyReceiptEvent.prototype.getAppleAppStoreVerifyReceiptEvent = function () {
        return this.appleAppStoreVerifyReceiptEvent;
    };
    VerifyReceiptEvent.prototype.setAppleAppStoreVerifyReceiptEvent = function (appleAppStoreVerifyReceiptEvent) {
        this.appleAppStoreVerifyReceiptEvent = appleAppStoreVerifyReceiptEvent;
        return this;
    };
    VerifyReceiptEvent.prototype.withAppleAppStoreVerifyReceiptEvent = function (appleAppStoreVerifyReceiptEvent) {
        this.appleAppStoreVerifyReceiptEvent = appleAppStoreVerifyReceiptEvent;
        return this;
    };
    VerifyReceiptEvent.prototype.getGooglePlayVerifyReceiptEvent = function () {
        return this.googlePlayVerifyReceiptEvent;
    };
    VerifyReceiptEvent.prototype.setGooglePlayVerifyReceiptEvent = function (googlePlayVerifyReceiptEvent) {
        this.googlePlayVerifyReceiptEvent = googlePlayVerifyReceiptEvent;
        return this;
    };
    VerifyReceiptEvent.prototype.withGooglePlayVerifyReceiptEvent = function (googlePlayVerifyReceiptEvent) {
        this.googlePlayVerifyReceiptEvent = googlePlayVerifyReceiptEvent;
        return this;
    };
    VerifyReceiptEvent.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new VerifyReceiptEvent()
            .withContentName(data["contentName"])
            .withPlatform(data["platform"])
            .withAppleAppStoreVerifyReceiptEvent(AppleAppStoreVerifyReceiptEvent_1.default.fromDict(data["appleAppStoreVerifyReceiptEvent"]))
            .withGooglePlayVerifyReceiptEvent(GooglePlayVerifyReceiptEvent_1.default.fromDict(data["googlePlayVerifyReceiptEvent"]));
    };
    VerifyReceiptEvent.prototype.toDict = function () {
        var _a, _b;
        return {
            "contentName": this.getContentName(),
            "platform": this.getPlatform(),
            "appleAppStoreVerifyReceiptEvent": (_a = this.getAppleAppStoreVerifyReceiptEvent()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "googlePlayVerifyReceiptEvent": (_b = this.getGooglePlayVerifyReceiptEvent()) === null || _b === void 0 ? void 0 : _b.toDict(),
        };
    };
    return VerifyReceiptEvent;
}());
exports.default = VerifyReceiptEvent;
//# sourceMappingURL=VerifyReceiptEvent.js.map
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
var PlatformSetting = /** @class */ (function () {
    function PlatformSetting() {
        this.appleAppStore = null;
        this.googlePlay = null;
        this.fake = null;
    }
    PlatformSetting.prototype.getAppleAppStore = function () {
        return this.appleAppStore;
    };
    PlatformSetting.prototype.setAppleAppStore = function (appleAppStore) {
        this.appleAppStore = appleAppStore;
        return this;
    };
    PlatformSetting.prototype.withAppleAppStore = function (appleAppStore) {
        this.appleAppStore = appleAppStore;
        return this;
    };
    PlatformSetting.prototype.getGooglePlay = function () {
        return this.googlePlay;
    };
    PlatformSetting.prototype.setGooglePlay = function (googlePlay) {
        this.googlePlay = googlePlay;
        return this;
    };
    PlatformSetting.prototype.withGooglePlay = function (googlePlay) {
        this.googlePlay = googlePlay;
        return this;
    };
    PlatformSetting.prototype.getFake = function () {
        return this.fake;
    };
    PlatformSetting.prototype.setFake = function (fake) {
        this.fake = fake;
        return this;
    };
    PlatformSetting.prototype.withFake = function (fake) {
        this.fake = fake;
        return this;
    };
    PlatformSetting.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new PlatformSetting()
            .withAppleAppStore(Gs2Money2.AppleAppStoreSetting.fromDict(data["appleAppStore"]))
            .withGooglePlay(Gs2Money2.GooglePlaySetting.fromDict(data["googlePlay"]))
            .withFake(Gs2Money2.FakeSetting.fromDict(data["fake"]));
    };
    PlatformSetting.prototype.toDict = function () {
        var _a, _b, _c;
        return {
            "appleAppStore": (_a = this.getAppleAppStore()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "googlePlay": (_b = this.getGooglePlay()) === null || _b === void 0 ? void 0 : _b.toDict(),
            "fake": (_c = this.getFake()) === null || _c === void 0 ? void 0 : _c.toDict(),
        };
    };
    return PlatformSetting;
}());
exports.default = PlatformSetting;
//# sourceMappingURL=PlatformSetting.js.map
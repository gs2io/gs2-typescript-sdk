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
var AppleAppStoreSetting = /** @class */ (function () {
    function AppleAppStoreSetting() {
        this.bundleId = null;
    }
    AppleAppStoreSetting.prototype.getBundleId = function () {
        return this.bundleId;
    };
    AppleAppStoreSetting.prototype.setBundleId = function (bundleId) {
        this.bundleId = bundleId;
        return this;
    };
    AppleAppStoreSetting.prototype.withBundleId = function (bundleId) {
        this.bundleId = bundleId;
        return this;
    };
    AppleAppStoreSetting.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new AppleAppStoreSetting()
            .withBundleId(data["bundleId"]);
    };
    AppleAppStoreSetting.prototype.toDict = function () {
        return {
            "bundleId": this.getBundleId(),
        };
    };
    return AppleAppStoreSetting;
}());
exports.default = AppleAppStoreSetting;
//# sourceMappingURL=AppleAppStoreSetting.js.map
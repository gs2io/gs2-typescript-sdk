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
var FakeSetting = /** @class */ (function () {
    function FakeSetting() {
        this.acceptFakeReceipt = null;
    }
    FakeSetting.prototype.getAcceptFakeReceipt = function () {
        return this.acceptFakeReceipt;
    };
    FakeSetting.prototype.setAcceptFakeReceipt = function (acceptFakeReceipt) {
        this.acceptFakeReceipt = acceptFakeReceipt;
        return this;
    };
    FakeSetting.prototype.withAcceptFakeReceipt = function (acceptFakeReceipt) {
        this.acceptFakeReceipt = acceptFakeReceipt;
        return this;
    };
    FakeSetting.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new FakeSetting()
            .withAcceptFakeReceipt(data["acceptFakeReceipt"]);
    };
    FakeSetting.prototype.toDict = function () {
        return {
            "acceptFakeReceipt": this.getAcceptFakeReceipt(),
        };
    };
    return FakeSetting;
}());
exports.default = FakeSetting;
//# sourceMappingURL=FakeSetting.js.map
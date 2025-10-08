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
var AppleAppStoreVerifyReceiptEvent = /** @class */ (function () {
    function AppleAppStoreVerifyReceiptEvent() {
        this.environment = null;
    }
    AppleAppStoreVerifyReceiptEvent.prototype.getEnvironment = function () {
        return this.environment;
    };
    AppleAppStoreVerifyReceiptEvent.prototype.setEnvironment = function (environment) {
        this.environment = environment;
        return this;
    };
    AppleAppStoreVerifyReceiptEvent.prototype.withEnvironment = function (environment) {
        this.environment = environment;
        return this;
    };
    AppleAppStoreVerifyReceiptEvent.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new AppleAppStoreVerifyReceiptEvent()
            .withEnvironment(data["environment"]);
    };
    AppleAppStoreVerifyReceiptEvent.prototype.toDict = function () {
        return {
            "environment": this.getEnvironment(),
        };
    };
    return AppleAppStoreVerifyReceiptEvent;
}());
exports.default = AppleAppStoreVerifyReceiptEvent;
//# sourceMappingURL=AppleAppStoreVerifyReceiptEvent.js.map
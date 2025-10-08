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
var GooglePlayVerifyReceiptEvent = /** @class */ (function () {
    function GooglePlayVerifyReceiptEvent() {
        this.purchaseToken = null;
    }
    GooglePlayVerifyReceiptEvent.prototype.getPurchaseToken = function () {
        return this.purchaseToken;
    };
    GooglePlayVerifyReceiptEvent.prototype.setPurchaseToken = function (purchaseToken) {
        this.purchaseToken = purchaseToken;
        return this;
    };
    GooglePlayVerifyReceiptEvent.prototype.withPurchaseToken = function (purchaseToken) {
        this.purchaseToken = purchaseToken;
        return this;
    };
    GooglePlayVerifyReceiptEvent.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new GooglePlayVerifyReceiptEvent()
            .withPurchaseToken(data["purchaseToken"]);
    };
    GooglePlayVerifyReceiptEvent.prototype.toDict = function () {
        return {
            "purchaseToken": this.getPurchaseToken(),
        };
    };
    return GooglePlayVerifyReceiptEvent;
}());
exports.default = GooglePlayVerifyReceiptEvent;
//# sourceMappingURL=GooglePlayVerifyReceiptEvent.js.map
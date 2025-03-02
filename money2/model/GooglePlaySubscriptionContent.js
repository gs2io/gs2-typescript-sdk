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
var GooglePlaySubscriptionContent = /** @class */ (function () {
    function GooglePlaySubscriptionContent() {
        this.productId = null;
    }
    GooglePlaySubscriptionContent.prototype.getProductId = function () {
        return this.productId;
    };
    GooglePlaySubscriptionContent.prototype.setProductId = function (productId) {
        this.productId = productId;
        return this;
    };
    GooglePlaySubscriptionContent.prototype.withProductId = function (productId) {
        this.productId = productId;
        return this;
    };
    GooglePlaySubscriptionContent.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new GooglePlaySubscriptionContent()
            .withProductId(data["productId"]);
    };
    GooglePlaySubscriptionContent.prototype.toDict = function () {
        return {
            "productId": this.getProductId(),
        };
    };
    return GooglePlaySubscriptionContent;
}());
exports.default = GooglePlaySubscriptionContent;
//# sourceMappingURL=GooglePlaySubscriptionContent.js.map
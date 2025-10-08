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
var AppleAppStoreSubscriptionContent = /** @class */ (function () {
    function AppleAppStoreSubscriptionContent() {
        this.subscriptionGroupIdentifier = null;
    }
    AppleAppStoreSubscriptionContent.prototype.getSubscriptionGroupIdentifier = function () {
        return this.subscriptionGroupIdentifier;
    };
    AppleAppStoreSubscriptionContent.prototype.setSubscriptionGroupIdentifier = function (subscriptionGroupIdentifier) {
        this.subscriptionGroupIdentifier = subscriptionGroupIdentifier;
        return this;
    };
    AppleAppStoreSubscriptionContent.prototype.withSubscriptionGroupIdentifier = function (subscriptionGroupIdentifier) {
        this.subscriptionGroupIdentifier = subscriptionGroupIdentifier;
        return this;
    };
    AppleAppStoreSubscriptionContent.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new AppleAppStoreSubscriptionContent()
            .withSubscriptionGroupIdentifier(data["subscriptionGroupIdentifier"]);
    };
    AppleAppStoreSubscriptionContent.prototype.toDict = function () {
        return {
            "subscriptionGroupIdentifier": this.getSubscriptionGroupIdentifier(),
        };
    };
    return AppleAppStoreSubscriptionContent;
}());
exports.default = AppleAppStoreSubscriptionContent;
//# sourceMappingURL=AppleAppStoreSubscriptionContent.js.map
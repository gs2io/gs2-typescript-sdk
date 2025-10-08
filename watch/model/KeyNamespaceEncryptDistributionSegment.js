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
var KeyNamespaceEncryptDistributionSegment = /** @class */ (function () {
    function KeyNamespaceEncryptDistributionSegment() {
        this.keyName = null;
        this.count = null;
    }
    KeyNamespaceEncryptDistributionSegment.prototype.getKeyName = function () {
        return this.keyName;
    };
    KeyNamespaceEncryptDistributionSegment.prototype.setKeyName = function (keyName) {
        this.keyName = keyName;
        return this;
    };
    KeyNamespaceEncryptDistributionSegment.prototype.withKeyName = function (keyName) {
        this.keyName = keyName;
        return this;
    };
    KeyNamespaceEncryptDistributionSegment.prototype.getCount = function () {
        return this.count;
    };
    KeyNamespaceEncryptDistributionSegment.prototype.setCount = function (count) {
        this.count = count;
        return this;
    };
    KeyNamespaceEncryptDistributionSegment.prototype.withCount = function (count) {
        this.count = count;
        return this;
    };
    KeyNamespaceEncryptDistributionSegment.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new KeyNamespaceEncryptDistributionSegment()
            .withKeyName(data["keyName"])
            .withCount(data["count"]);
    };
    KeyNamespaceEncryptDistributionSegment.prototype.toDict = function () {
        return {
            "keyName": this.getKeyName(),
            "count": this.getCount(),
        };
    };
    return KeyNamespaceEncryptDistributionSegment;
}());
exports.default = KeyNamespaceEncryptDistributionSegment;
//# sourceMappingURL=KeyNamespaceEncryptDistributionSegment.js.map
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
var KeyNamespaceDecryptDistributionSegment = /** @class */ (function () {
    function KeyNamespaceDecryptDistributionSegment() {
        this.keyName = null;
        this.count = null;
    }
    KeyNamespaceDecryptDistributionSegment.prototype.getKeyName = function () {
        return this.keyName;
    };
    KeyNamespaceDecryptDistributionSegment.prototype.setKeyName = function (keyName) {
        this.keyName = keyName;
        return this;
    };
    KeyNamespaceDecryptDistributionSegment.prototype.withKeyName = function (keyName) {
        this.keyName = keyName;
        return this;
    };
    KeyNamespaceDecryptDistributionSegment.prototype.getCount = function () {
        return this.count;
    };
    KeyNamespaceDecryptDistributionSegment.prototype.setCount = function (count) {
        this.count = count;
        return this;
    };
    KeyNamespaceDecryptDistributionSegment.prototype.withCount = function (count) {
        this.count = count;
        return this;
    };
    KeyNamespaceDecryptDistributionSegment.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new KeyNamespaceDecryptDistributionSegment()
            .withKeyName(data["keyName"])
            .withCount(data["count"]);
    };
    KeyNamespaceDecryptDistributionSegment.prototype.toDict = function () {
        return {
            "keyName": this.getKeyName(),
            "count": this.getCount(),
        };
    };
    return KeyNamespaceDecryptDistributionSegment;
}());
exports.default = KeyNamespaceDecryptDistributionSegment;
//# sourceMappingURL=KeyNamespaceDecryptDistributionSegment.js.map
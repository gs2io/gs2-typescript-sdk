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
var ChatNamespacePostByCategoryDistributionSegment = /** @class */ (function () {
    function ChatNamespacePostByCategoryDistributionSegment() {
        this.category = null;
        this.count = null;
    }
    ChatNamespacePostByCategoryDistributionSegment.prototype.getCategory = function () {
        return this.category;
    };
    ChatNamespacePostByCategoryDistributionSegment.prototype.setCategory = function (category) {
        this.category = category;
        return this;
    };
    ChatNamespacePostByCategoryDistributionSegment.prototype.withCategory = function (category) {
        this.category = category;
        return this;
    };
    ChatNamespacePostByCategoryDistributionSegment.prototype.getCount = function () {
        return this.count;
    };
    ChatNamespacePostByCategoryDistributionSegment.prototype.setCount = function (count) {
        this.count = count;
        return this;
    };
    ChatNamespacePostByCategoryDistributionSegment.prototype.withCount = function (count) {
        this.count = count;
        return this;
    };
    ChatNamespacePostByCategoryDistributionSegment.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new ChatNamespacePostByCategoryDistributionSegment()
            .withCategory(data["category"])
            .withCount(data["count"]);
    };
    ChatNamespacePostByCategoryDistributionSegment.prototype.toDict = function () {
        return {
            "category": this.getCategory(),
            "count": this.getCount(),
        };
    };
    return ChatNamespacePostByCategoryDistributionSegment;
}());
exports.default = ChatNamespacePostByCategoryDistributionSegment;
//# sourceMappingURL=ChatNamespacePostByCategoryDistributionSegment.js.map
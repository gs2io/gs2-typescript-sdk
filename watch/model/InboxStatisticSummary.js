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
var InboxStatisticSummary = /** @class */ (function () {
    function InboxStatisticSummary() {
        this.totalReceived = null;
        this.totalOpened = null;
        this.openRate = null;
    }
    InboxStatisticSummary.prototype.getTotalReceived = function () {
        return this.totalReceived;
    };
    InboxStatisticSummary.prototype.setTotalReceived = function (totalReceived) {
        this.totalReceived = totalReceived;
        return this;
    };
    InboxStatisticSummary.prototype.withTotalReceived = function (totalReceived) {
        this.totalReceived = totalReceived;
        return this;
    };
    InboxStatisticSummary.prototype.getTotalOpened = function () {
        return this.totalOpened;
    };
    InboxStatisticSummary.prototype.setTotalOpened = function (totalOpened) {
        this.totalOpened = totalOpened;
        return this;
    };
    InboxStatisticSummary.prototype.withTotalOpened = function (totalOpened) {
        this.totalOpened = totalOpened;
        return this;
    };
    InboxStatisticSummary.prototype.getOpenRate = function () {
        return this.openRate;
    };
    InboxStatisticSummary.prototype.setOpenRate = function (openRate) {
        this.openRate = openRate;
        return this;
    };
    InboxStatisticSummary.prototype.withOpenRate = function (openRate) {
        this.openRate = openRate;
        return this;
    };
    InboxStatisticSummary.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new InboxStatisticSummary()
            .withTotalReceived(data["totalReceived"])
            .withTotalOpened(data["totalOpened"])
            .withOpenRate(data["openRate"]);
    };
    InboxStatisticSummary.prototype.toDict = function () {
        return {
            "totalReceived": this.getTotalReceived(),
            "totalOpened": this.getTotalOpened(),
            "openRate": this.getOpenRate(),
        };
    };
    return InboxStatisticSummary;
}());
exports.default = InboxStatisticSummary;
//# sourceMappingURL=InboxStatisticSummary.js.map
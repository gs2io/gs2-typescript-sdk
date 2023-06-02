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
var InboxNamespaceStatistics = /** @class */ (function () {
    function InboxNamespaceStatistics() {
        this.sent = null;
        this.open = null;
        this.openRate = null;
    }
    InboxNamespaceStatistics.prototype.getSent = function () {
        return this.sent;
    };
    InboxNamespaceStatistics.prototype.setSent = function (sent) {
        this.sent = sent;
        return this;
    };
    InboxNamespaceStatistics.prototype.withSent = function (sent) {
        this.sent = sent;
        return this;
    };
    InboxNamespaceStatistics.prototype.getOpen = function () {
        return this.open;
    };
    InboxNamespaceStatistics.prototype.setOpen = function (open) {
        this.open = open;
        return this;
    };
    InboxNamespaceStatistics.prototype.withOpen = function (open) {
        this.open = open;
        return this;
    };
    InboxNamespaceStatistics.prototype.getOpenRate = function () {
        return this.openRate;
    };
    InboxNamespaceStatistics.prototype.setOpenRate = function (openRate) {
        this.openRate = openRate;
        return this;
    };
    InboxNamespaceStatistics.prototype.withOpenRate = function (openRate) {
        this.openRate = openRate;
        return this;
    };
    InboxNamespaceStatistics.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new InboxNamespaceStatistics()
            .withSent(data["sent"])
            .withOpen(data["open"])
            .withOpenRate(data["openRate"]);
    };
    InboxNamespaceStatistics.prototype.toDict = function () {
        return {
            "sent": this.getSent(),
            "open": this.getOpen(),
            "openRate": this.getOpenRate(),
        };
    };
    return InboxNamespaceStatistics;
}());
exports.default = InboxNamespaceStatistics;
//# sourceMappingURL=InboxNamespaceStatistics.js.map
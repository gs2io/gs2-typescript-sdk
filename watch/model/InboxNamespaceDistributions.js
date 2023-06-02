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
var tslib_1 = require("tslib");
var InboxNamespaceSendByUserDistribution_1 = tslib_1.__importDefault(require("./InboxNamespaceSendByUserDistribution"));
var InboxNamespaceReadElapsedMinutesDistribution_1 = tslib_1.__importDefault(require("./InboxNamespaceReadElapsedMinutesDistribution"));
var InboxNamespaceDistributions = /** @class */ (function () {
    function InboxNamespaceDistributions() {
        this.sendByUser = null;
        this.readElapsedMinutes = null;
    }
    InboxNamespaceDistributions.prototype.getSendByUser = function () {
        return this.sendByUser;
    };
    InboxNamespaceDistributions.prototype.setSendByUser = function (sendByUser) {
        this.sendByUser = sendByUser;
        return this;
    };
    InboxNamespaceDistributions.prototype.withSendByUser = function (sendByUser) {
        this.sendByUser = sendByUser;
        return this;
    };
    InboxNamespaceDistributions.prototype.getReadElapsedMinutes = function () {
        return this.readElapsedMinutes;
    };
    InboxNamespaceDistributions.prototype.setReadElapsedMinutes = function (readElapsedMinutes) {
        this.readElapsedMinutes = readElapsedMinutes;
        return this;
    };
    InboxNamespaceDistributions.prototype.withReadElapsedMinutes = function (readElapsedMinutes) {
        this.readElapsedMinutes = readElapsedMinutes;
        return this;
    };
    InboxNamespaceDistributions.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new InboxNamespaceDistributions()
            .withSendByUser(InboxNamespaceSendByUserDistribution_1.default.fromDict(data["sendByUser"]))
            .withReadElapsedMinutes(InboxNamespaceReadElapsedMinutesDistribution_1.default.fromDict(data["readElapsedMinutes"]));
    };
    InboxNamespaceDistributions.prototype.toDict = function () {
        var _a, _b;
        return {
            "sendByUser": (_a = this.getSendByUser()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "readElapsedMinutes": (_b = this.getReadElapsedMinutes()) === null || _b === void 0 ? void 0 : _b.toDict(),
        };
    };
    return InboxNamespaceDistributions;
}());
exports.default = InboxNamespaceDistributions;
//# sourceMappingURL=InboxNamespaceDistributions.js.map
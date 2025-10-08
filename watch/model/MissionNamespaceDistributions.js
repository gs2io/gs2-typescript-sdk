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
var Gs2Watch = tslib_1.__importStar(require("../../watch/model"));
var MissionNamespaceDistributions = /** @class */ (function () {
    function MissionNamespaceDistributions() {
        this.increase = null;
        this.increaseAmount = null;
        this.receive = null;
    }
    MissionNamespaceDistributions.prototype.getIncrease = function () {
        return this.increase;
    };
    MissionNamespaceDistributions.prototype.setIncrease = function (increase) {
        this.increase = increase;
        return this;
    };
    MissionNamespaceDistributions.prototype.withIncrease = function (increase) {
        this.increase = increase;
        return this;
    };
    MissionNamespaceDistributions.prototype.getIncreaseAmount = function () {
        return this.increaseAmount;
    };
    MissionNamespaceDistributions.prototype.setIncreaseAmount = function (increaseAmount) {
        this.increaseAmount = increaseAmount;
        return this;
    };
    MissionNamespaceDistributions.prototype.withIncreaseAmount = function (increaseAmount) {
        this.increaseAmount = increaseAmount;
        return this;
    };
    MissionNamespaceDistributions.prototype.getReceive = function () {
        return this.receive;
    };
    MissionNamespaceDistributions.prototype.setReceive = function (receive) {
        this.receive = receive;
        return this;
    };
    MissionNamespaceDistributions.prototype.withReceive = function (receive) {
        this.receive = receive;
        return this;
    };
    MissionNamespaceDistributions.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new MissionNamespaceDistributions()
            .withIncrease(Gs2Watch.MissionNamespaceIncreaseDistribution.fromDict(data["increase"]))
            .withIncreaseAmount(Gs2Watch.MissionNamespaceIncreaseAmountDistribution.fromDict(data["increaseAmount"]))
            .withReceive(Gs2Watch.MissionNamespaceReceiveDistribution.fromDict(data["receive"]));
    };
    MissionNamespaceDistributions.prototype.toDict = function () {
        var _a, _b, _c;
        return {
            "increase": (_a = this.getIncrease()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "increaseAmount": (_b = this.getIncreaseAmount()) === null || _b === void 0 ? void 0 : _b.toDict(),
            "receive": (_c = this.getReceive()) === null || _c === void 0 ? void 0 : _c.toDict(),
        };
    };
    return MissionNamespaceDistributions;
}());
exports.default = MissionNamespaceDistributions;
//# sourceMappingURL=MissionNamespaceDistributions.js.map
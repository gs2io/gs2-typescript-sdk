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
var MissionNamespaceStatistics = /** @class */ (function () {
    function MissionNamespaceStatistics() {
        this.increase = null;
        this.increaseAmount = null;
        this.receive = null;
    }
    MissionNamespaceStatistics.prototype.getIncrease = function () {
        return this.increase;
    };
    MissionNamespaceStatistics.prototype.setIncrease = function (increase) {
        this.increase = increase;
        return this;
    };
    MissionNamespaceStatistics.prototype.withIncrease = function (increase) {
        this.increase = increase;
        return this;
    };
    MissionNamespaceStatistics.prototype.getIncreaseAmount = function () {
        return this.increaseAmount;
    };
    MissionNamespaceStatistics.prototype.setIncreaseAmount = function (increaseAmount) {
        this.increaseAmount = increaseAmount;
        return this;
    };
    MissionNamespaceStatistics.prototype.withIncreaseAmount = function (increaseAmount) {
        this.increaseAmount = increaseAmount;
        return this;
    };
    MissionNamespaceStatistics.prototype.getReceive = function () {
        return this.receive;
    };
    MissionNamespaceStatistics.prototype.setReceive = function (receive) {
        this.receive = receive;
        return this;
    };
    MissionNamespaceStatistics.prototype.withReceive = function (receive) {
        this.receive = receive;
        return this;
    };
    MissionNamespaceStatistics.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new MissionNamespaceStatistics()
            .withIncrease(data["increase"])
            .withIncreaseAmount(data["increaseAmount"])
            .withReceive(data["receive"]);
    };
    MissionNamespaceStatistics.prototype.toDict = function () {
        return {
            "increase": this.getIncrease(),
            "increaseAmount": this.getIncreaseAmount(),
            "receive": this.getReceive(),
        };
    };
    return MissionNamespaceStatistics;
}());
exports.default = MissionNamespaceStatistics;
//# sourceMappingURL=MissionNamespaceStatistics.js.map
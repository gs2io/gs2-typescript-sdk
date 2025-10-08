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
var StaminaNamespaceStatistics = /** @class */ (function () {
    function StaminaNamespaceStatistics() {
        this.consume = null;
        this.recover = null;
    }
    StaminaNamespaceStatistics.prototype.getConsume = function () {
        return this.consume;
    };
    StaminaNamespaceStatistics.prototype.setConsume = function (consume) {
        this.consume = consume;
        return this;
    };
    StaminaNamespaceStatistics.prototype.withConsume = function (consume) {
        this.consume = consume;
        return this;
    };
    StaminaNamespaceStatistics.prototype.getRecover = function () {
        return this.recover;
    };
    StaminaNamespaceStatistics.prototype.setRecover = function (recover) {
        this.recover = recover;
        return this;
    };
    StaminaNamespaceStatistics.prototype.withRecover = function (recover) {
        this.recover = recover;
        return this;
    };
    StaminaNamespaceStatistics.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new StaminaNamespaceStatistics()
            .withConsume(data["consume"])
            .withRecover(data["recover"]);
    };
    StaminaNamespaceStatistics.prototype.toDict = function () {
        return {
            "consume": this.getConsume(),
            "recover": this.getRecover(),
        };
    };
    return StaminaNamespaceStatistics;
}());
exports.default = StaminaNamespaceStatistics;
//# sourceMappingURL=StaminaNamespaceStatistics.js.map
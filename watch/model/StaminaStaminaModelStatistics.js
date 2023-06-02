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
var StaminaStaminaModelStatistics = /** @class */ (function () {
    function StaminaStaminaModelStatistics() {
        this.consume = null;
        this.consumeAmount = null;
        this.recover = null;
        this.recoverAmount = null;
    }
    StaminaStaminaModelStatistics.prototype.getConsume = function () {
        return this.consume;
    };
    StaminaStaminaModelStatistics.prototype.setConsume = function (consume) {
        this.consume = consume;
        return this;
    };
    StaminaStaminaModelStatistics.prototype.withConsume = function (consume) {
        this.consume = consume;
        return this;
    };
    StaminaStaminaModelStatistics.prototype.getConsumeAmount = function () {
        return this.consumeAmount;
    };
    StaminaStaminaModelStatistics.prototype.setConsumeAmount = function (consumeAmount) {
        this.consumeAmount = consumeAmount;
        return this;
    };
    StaminaStaminaModelStatistics.prototype.withConsumeAmount = function (consumeAmount) {
        this.consumeAmount = consumeAmount;
        return this;
    };
    StaminaStaminaModelStatistics.prototype.getRecover = function () {
        return this.recover;
    };
    StaminaStaminaModelStatistics.prototype.setRecover = function (recover) {
        this.recover = recover;
        return this;
    };
    StaminaStaminaModelStatistics.prototype.withRecover = function (recover) {
        this.recover = recover;
        return this;
    };
    StaminaStaminaModelStatistics.prototype.getRecoverAmount = function () {
        return this.recoverAmount;
    };
    StaminaStaminaModelStatistics.prototype.setRecoverAmount = function (recoverAmount) {
        this.recoverAmount = recoverAmount;
        return this;
    };
    StaminaStaminaModelStatistics.prototype.withRecoverAmount = function (recoverAmount) {
        this.recoverAmount = recoverAmount;
        return this;
    };
    StaminaStaminaModelStatistics.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new StaminaStaminaModelStatistics()
            .withConsume(data["consume"])
            .withConsumeAmount(data["consumeAmount"])
            .withRecover(data["recover"])
            .withRecoverAmount(data["recoverAmount"]);
    };
    StaminaStaminaModelStatistics.prototype.toDict = function () {
        return {
            "consume": this.getConsume(),
            "consumeAmount": this.getConsumeAmount(),
            "recover": this.getRecover(),
            "recoverAmount": this.getRecoverAmount(),
        };
    };
    return StaminaStaminaModelStatistics;
}());
exports.default = StaminaStaminaModelStatistics;
//# sourceMappingURL=StaminaStaminaModelStatistics.js.map
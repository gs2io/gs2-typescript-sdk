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
var StaminaStaminaModelDistributions = /** @class */ (function () {
    function StaminaStaminaModelDistributions() {
        this.consume = null;
        this.recover = null;
    }
    StaminaStaminaModelDistributions.prototype.getConsume = function () {
        return this.consume;
    };
    StaminaStaminaModelDistributions.prototype.setConsume = function (consume) {
        this.consume = consume;
        return this;
    };
    StaminaStaminaModelDistributions.prototype.withConsume = function (consume) {
        this.consume = consume;
        return this;
    };
    StaminaStaminaModelDistributions.prototype.getRecover = function () {
        return this.recover;
    };
    StaminaStaminaModelDistributions.prototype.setRecover = function (recover) {
        this.recover = recover;
        return this;
    };
    StaminaStaminaModelDistributions.prototype.withRecover = function (recover) {
        this.recover = recover;
        return this;
    };
    StaminaStaminaModelDistributions.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new StaminaStaminaModelDistributions()
            .withConsume(Gs2Watch.StaminaStaminaModelConsumeDistribution.fromDict(data["consume"]))
            .withRecover(Gs2Watch.StaminaStaminaModelRecoverDistribution.fromDict(data["recover"]));
    };
    StaminaStaminaModelDistributions.prototype.toDict = function () {
        var _a, _b;
        return {
            "consume": (_a = this.getConsume()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "recover": (_b = this.getRecover()) === null || _b === void 0 ? void 0 : _b.toDict(),
        };
    };
    return StaminaStaminaModelDistributions;
}());
exports.default = StaminaStaminaModelDistributions;
//# sourceMappingURL=StaminaStaminaModelDistributions.js.map
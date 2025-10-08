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
var StaminaNamespaceDistributions = /** @class */ (function () {
    function StaminaNamespaceDistributions() {
        this.consume = null;
        this.recover = null;
    }
    StaminaNamespaceDistributions.prototype.getConsume = function () {
        return this.consume;
    };
    StaminaNamespaceDistributions.prototype.setConsume = function (consume) {
        this.consume = consume;
        return this;
    };
    StaminaNamespaceDistributions.prototype.withConsume = function (consume) {
        this.consume = consume;
        return this;
    };
    StaminaNamespaceDistributions.prototype.getRecover = function () {
        return this.recover;
    };
    StaminaNamespaceDistributions.prototype.setRecover = function (recover) {
        this.recover = recover;
        return this;
    };
    StaminaNamespaceDistributions.prototype.withRecover = function (recover) {
        this.recover = recover;
        return this;
    };
    StaminaNamespaceDistributions.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new StaminaNamespaceDistributions()
            .withConsume(Gs2Watch.StaminaNamespaceConsumeDistribution.fromDict(data["consume"]))
            .withRecover(Gs2Watch.StaminaNamespaceRecoverDistribution.fromDict(data["recover"]));
    };
    StaminaNamespaceDistributions.prototype.toDict = function () {
        var _a, _b;
        return {
            "consume": (_a = this.getConsume()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "recover": (_b = this.getRecover()) === null || _b === void 0 ? void 0 : _b.toDict(),
        };
    };
    return StaminaNamespaceDistributions;
}());
exports.default = StaminaNamespaceDistributions;
//# sourceMappingURL=StaminaNamespaceDistributions.js.map
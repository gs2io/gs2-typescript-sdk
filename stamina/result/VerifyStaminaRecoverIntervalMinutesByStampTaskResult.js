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
var VerifyStaminaRecoverIntervalMinutesByStampTaskResult = /** @class */ (function () {
    function VerifyStaminaRecoverIntervalMinutesByStampTaskResult() {
        this.newContextStack = null;
    }
    VerifyStaminaRecoverIntervalMinutesByStampTaskResult.prototype.getNewContextStack = function () {
        return this.newContextStack;
    };
    VerifyStaminaRecoverIntervalMinutesByStampTaskResult.prototype.setNewContextStack = function (newContextStack) {
        this.newContextStack = newContextStack;
        return this;
    };
    VerifyStaminaRecoverIntervalMinutesByStampTaskResult.prototype.withNewContextStack = function (newContextStack) {
        this.newContextStack = newContextStack;
        return this;
    };
    VerifyStaminaRecoverIntervalMinutesByStampTaskResult.fromDict = function (data) {
        return new VerifyStaminaRecoverIntervalMinutesByStampTaskResult()
            .withNewContextStack(data["newContextStack"]);
    };
    VerifyStaminaRecoverIntervalMinutesByStampTaskResult.prototype.toDict = function () {
        return {
            "newContextStack": this.getNewContextStack(),
        };
    };
    return VerifyStaminaRecoverIntervalMinutesByStampTaskResult;
}());
exports.default = VerifyStaminaRecoverIntervalMinutesByStampTaskResult;
//# sourceMappingURL=VerifyStaminaRecoverIntervalMinutesByStampTaskResult.js.map
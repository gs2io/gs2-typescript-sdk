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
var VerifyCounterByStampTaskResult = /** @class */ (function () {
    function VerifyCounterByStampTaskResult() {
        this.newContextStack = null;
    }
    VerifyCounterByStampTaskResult.prototype.getNewContextStack = function () {
        return this.newContextStack;
    };
    VerifyCounterByStampTaskResult.prototype.setNewContextStack = function (newContextStack) {
        this.newContextStack = newContextStack;
        return this;
    };
    VerifyCounterByStampTaskResult.prototype.withNewContextStack = function (newContextStack) {
        this.newContextStack = newContextStack;
        return this;
    };
    VerifyCounterByStampTaskResult.fromDict = function (data) {
        return new VerifyCounterByStampTaskResult()
            .withNewContextStack(data["newContextStack"]);
    };
    VerifyCounterByStampTaskResult.prototype.toDict = function () {
        return {
            "newContextStack": this.getNewContextStack(),
        };
    };
    return VerifyCounterByStampTaskResult;
}());
exports.default = VerifyCounterByStampTaskResult;
//# sourceMappingURL=VerifyCounterByStampTaskResult.js.map
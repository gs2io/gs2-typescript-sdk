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
var VerifyRankCapByStampTaskResult = /** @class */ (function () {
    function VerifyRankCapByStampTaskResult() {
        this.newContextStack = null;
    }
    VerifyRankCapByStampTaskResult.prototype.getNewContextStack = function () {
        return this.newContextStack;
    };
    VerifyRankCapByStampTaskResult.prototype.setNewContextStack = function (newContextStack) {
        this.newContextStack = newContextStack;
        return this;
    };
    VerifyRankCapByStampTaskResult.prototype.withNewContextStack = function (newContextStack) {
        this.newContextStack = newContextStack;
        return this;
    };
    VerifyRankCapByStampTaskResult.fromDict = function (data) {
        return new VerifyRankCapByStampTaskResult()
            .withNewContextStack(data["newContextStack"]);
    };
    VerifyRankCapByStampTaskResult.prototype.toDict = function () {
        return {
            "newContextStack": this.getNewContextStack(),
        };
    };
    return VerifyRankCapByStampTaskResult;
}());
exports.default = VerifyRankCapByStampTaskResult;
//# sourceMappingURL=VerifyRankCapByStampTaskResult.js.map
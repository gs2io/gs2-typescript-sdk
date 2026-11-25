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
var VerifyFollowByStampTaskResult = /** @class */ (function () {
    function VerifyFollowByStampTaskResult() {
        this.newContextStack = null;
    }
    VerifyFollowByStampTaskResult.prototype.getNewContextStack = function () {
        return this.newContextStack;
    };
    VerifyFollowByStampTaskResult.prototype.setNewContextStack = function (newContextStack) {
        this.newContextStack = newContextStack;
        return this;
    };
    VerifyFollowByStampTaskResult.prototype.withNewContextStack = function (newContextStack) {
        this.newContextStack = newContextStack;
        return this;
    };
    VerifyFollowByStampTaskResult.fromDict = function (data) {
        return new VerifyFollowByStampTaskResult()
            .withNewContextStack(data["newContextStack"]);
    };
    VerifyFollowByStampTaskResult.prototype.toDict = function () {
        return {
            "newContextStack": this.getNewContextStack(),
        };
    };
    return VerifyFollowByStampTaskResult;
}());
exports.default = VerifyFollowByStampTaskResult;
//# sourceMappingURL=VerifyFollowByStampTaskResult.js.map
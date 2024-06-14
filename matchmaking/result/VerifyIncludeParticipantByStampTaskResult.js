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
var VerifyIncludeParticipantByStampTaskResult = /** @class */ (function () {
    function VerifyIncludeParticipantByStampTaskResult() {
        this.newContextStack = null;
    }
    VerifyIncludeParticipantByStampTaskResult.prototype.getNewContextStack = function () {
        return this.newContextStack;
    };
    VerifyIncludeParticipantByStampTaskResult.prototype.setNewContextStack = function (newContextStack) {
        this.newContextStack = newContextStack;
        return this;
    };
    VerifyIncludeParticipantByStampTaskResult.prototype.withNewContextStack = function (newContextStack) {
        this.newContextStack = newContextStack;
        return this;
    };
    VerifyIncludeParticipantByStampTaskResult.fromDict = function (data) {
        return new VerifyIncludeParticipantByStampTaskResult()
            .withNewContextStack(data["newContextStack"]);
    };
    VerifyIncludeParticipantByStampTaskResult.prototype.toDict = function () {
        return {
            "newContextStack": this.getNewContextStack(),
        };
    };
    return VerifyIncludeParticipantByStampTaskResult;
}());
exports.default = VerifyIncludeParticipantByStampTaskResult;
//# sourceMappingURL=VerifyIncludeParticipantByStampTaskResult.js.map
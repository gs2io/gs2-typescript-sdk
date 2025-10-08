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
var ChallengeMfaRequest = /** @class */ (function () {
    function ChallengeMfaRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.userName = null;
        this.passcode = null;
    }
    ChallengeMfaRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    ChallengeMfaRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    ChallengeMfaRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    ChallengeMfaRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    ChallengeMfaRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    ChallengeMfaRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    ChallengeMfaRequest.prototype.getUserName = function () {
        return this.userName;
    };
    ChallengeMfaRequest.prototype.setUserName = function (userName) {
        this.userName = userName;
        return this;
    };
    ChallengeMfaRequest.prototype.withUserName = function (userName) {
        this.userName = userName;
        return this;
    };
    ChallengeMfaRequest.prototype.getPasscode = function () {
        return this.passcode;
    };
    ChallengeMfaRequest.prototype.setPasscode = function (passcode) {
        this.passcode = passcode;
        return this;
    };
    ChallengeMfaRequest.prototype.withPasscode = function (passcode) {
        this.passcode = passcode;
        return this;
    };
    ChallengeMfaRequest.fromDict = function (data) {
        return new ChallengeMfaRequest()
            .withUserName(data["userName"])
            .withPasscode(data["passcode"]);
    };
    ChallengeMfaRequest.prototype.toDict = function () {
        return {
            "userName": this.getUserName(),
            "passcode": this.getPasscode(),
        };
    };
    return ChallengeMfaRequest;
}());
exports.default = ChallengeMfaRequest;
//# sourceMappingURL=ChallengeMfaRequest.js.map
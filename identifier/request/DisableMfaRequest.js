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
var DisableMfaRequest = /** @class */ (function () {
    function DisableMfaRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.userName = null;
    }
    DisableMfaRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DisableMfaRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DisableMfaRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DisableMfaRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DisableMfaRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DisableMfaRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DisableMfaRequest.prototype.getUserName = function () {
        return this.userName;
    };
    DisableMfaRequest.prototype.setUserName = function (userName) {
        this.userName = userName;
        return this;
    };
    DisableMfaRequest.prototype.withUserName = function (userName) {
        this.userName = userName;
        return this;
    };
    DisableMfaRequest.fromDict = function (data) {
        return new DisableMfaRequest()
            .withUserName(data["userName"]);
    };
    DisableMfaRequest.prototype.toDict = function () {
        return {
            "userName": this.getUserName(),
        };
    };
    return DisableMfaRequest;
}());
exports.default = DisableMfaRequest;
//# sourceMappingURL=DisableMfaRequest.js.map
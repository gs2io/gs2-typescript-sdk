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
var LoginRequest = /** @class */ (function () {
    function LoginRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.userId = null;
        this.timeOffset = null;
    }
    LoginRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    LoginRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    LoginRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    LoginRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    LoginRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    LoginRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    LoginRequest.prototype.getUserId = function () {
        return this.userId;
    };
    LoginRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    LoginRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    LoginRequest.prototype.getTimeOffset = function () {
        return this.timeOffset;
    };
    LoginRequest.prototype.setTimeOffset = function (timeOffset) {
        this.timeOffset = timeOffset;
        return this;
    };
    LoginRequest.prototype.withTimeOffset = function (timeOffset) {
        this.timeOffset = timeOffset;
        return this;
    };
    LoginRequest.fromDict = function (data) {
        return new LoginRequest()
            .withUserId(data["userId"])
            .withTimeOffset(data["timeOffset"]);
    };
    LoginRequest.prototype.toDict = function () {
        return {
            "userId": this.getUserId(),
            "timeOffset": this.getTimeOffset(),
        };
    };
    return LoginRequest;
}());
export { LoginRequest };
//# sourceMappingURL=LoginRequest.js.map
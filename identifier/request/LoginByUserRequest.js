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
var LoginByUserRequest = /** @class */ (function () {
    function LoginByUserRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.userName = null;
        this.password = null;
        this.otp = null;
    }
    LoginByUserRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    LoginByUserRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    LoginByUserRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    LoginByUserRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    LoginByUserRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    LoginByUserRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    LoginByUserRequest.prototype.getUserName = function () {
        return this.userName;
    };
    LoginByUserRequest.prototype.setUserName = function (userName) {
        this.userName = userName;
        return this;
    };
    LoginByUserRequest.prototype.withUserName = function (userName) {
        this.userName = userName;
        return this;
    };
    LoginByUserRequest.prototype.getPassword = function () {
        return this.password;
    };
    LoginByUserRequest.prototype.setPassword = function (password) {
        this.password = password;
        return this;
    };
    LoginByUserRequest.prototype.withPassword = function (password) {
        this.password = password;
        return this;
    };
    LoginByUserRequest.prototype.getOtp = function () {
        return this.otp;
    };
    LoginByUserRequest.prototype.setOtp = function (otp) {
        this.otp = otp;
        return this;
    };
    LoginByUserRequest.prototype.withOtp = function (otp) {
        this.otp = otp;
        return this;
    };
    LoginByUserRequest.fromDict = function (data) {
        return new LoginByUserRequest()
            .withUserName(data["userName"])
            .withPassword(data["password"])
            .withOtp(data["otp"]);
    };
    LoginByUserRequest.prototype.toDict = function () {
        return {
            "userName": this.getUserName(),
            "password": this.getPassword(),
            "otp": this.getOtp(),
        };
    };
    return LoginByUserRequest;
}());
exports.default = LoginByUserRequest;
//# sourceMappingURL=LoginByUserRequest.js.map
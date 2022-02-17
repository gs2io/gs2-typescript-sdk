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
var SignInRequest = /** @class */ (function () {
    function SignInRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.email = null;
        this.password = null;
    }
    SignInRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    SignInRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    SignInRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    SignInRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    SignInRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    SignInRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    SignInRequest.prototype.getEmail = function () {
        return this.email;
    };
    SignInRequest.prototype.setEmail = function (email) {
        this.email = email;
        return this;
    };
    SignInRequest.prototype.withEmail = function (email) {
        this.email = email;
        return this;
    };
    SignInRequest.prototype.getPassword = function () {
        return this.password;
    };
    SignInRequest.prototype.setPassword = function (password) {
        this.password = password;
        return this;
    };
    SignInRequest.prototype.withPassword = function (password) {
        this.password = password;
        return this;
    };
    SignInRequest.fromDict = function (data) {
        return new SignInRequest()
            .withEmail(data["email"])
            .withPassword(data["password"]);
    };
    SignInRequest.prototype.toDict = function () {
        return {
            "email": this.getEmail(),
            "password": this.getPassword(),
        };
    };
    return SignInRequest;
}());
export { SignInRequest };
//# sourceMappingURL=SignInRequest.js.map
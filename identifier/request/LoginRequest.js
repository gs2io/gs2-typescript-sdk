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
        this.clientId = null;
        this.clientSecret = null;
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
    LoginRequest.prototype.getClientId = function () {
        return this.clientId;
    };
    LoginRequest.prototype.setClientId = function (clientId) {
        this.clientId = clientId;
        return this;
    };
    LoginRequest.prototype.withClientId = function (clientId) {
        this.clientId = clientId;
        return this;
    };
    LoginRequest.prototype.getClientSecret = function () {
        return this.clientSecret;
    };
    LoginRequest.prototype.setClientSecret = function (clientSecret) {
        this.clientSecret = clientSecret;
        return this;
    };
    LoginRequest.prototype.withClientSecret = function (clientSecret) {
        this.clientSecret = clientSecret;
        return this;
    };
    LoginRequest.fromDict = function (data) {
        return new LoginRequest()
            .withClientId(data["clientId"])
            .withClientSecret(data["clientSecret"]);
    };
    LoginRequest.prototype.toDict = function () {
        return {
            "clientId": this.getClientId(),
            "clientSecret": this.getClientSecret(),
        };
    };
    return LoginRequest;
}());
export default LoginRequest;
//# sourceMappingURL=LoginRequest.js.map
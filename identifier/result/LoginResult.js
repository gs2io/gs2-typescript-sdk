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
var LoginResult = /** @class */ (function () {
    function LoginResult() {
        this.accessToken = null;
        this.tokenType = null;
        this.expiresIn = null;
    }
    LoginResult.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    LoginResult.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    LoginResult.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    LoginResult.prototype.getTokenType = function () {
        return this.tokenType;
    };
    LoginResult.prototype.setTokenType = function (tokenType) {
        this.tokenType = tokenType;
        return this;
    };
    LoginResult.prototype.withTokenType = function (tokenType) {
        this.tokenType = tokenType;
        return this;
    };
    LoginResult.prototype.getExpiresIn = function () {
        return this.expiresIn;
    };
    LoginResult.prototype.setExpiresIn = function (expiresIn) {
        this.expiresIn = expiresIn;
        return this;
    };
    LoginResult.prototype.withExpiresIn = function (expiresIn) {
        this.expiresIn = expiresIn;
        return this;
    };
    LoginResult.fromDict = function (data) {
        return new LoginResult()
            .withAccessToken(data["accessToken"])
            .withTokenType(data["tokenType"])
            .withExpiresIn(data["expiresIn"]);
    };
    LoginResult.prototype.toDict = function () {
        return {
            "accessToken": this.getAccessToken(),
            "tokenType": this.getTokenType(),
            "expiresIn": this.getExpiresIn(),
        };
    };
    return LoginResult;
}());
export default LoginResult;
//# sourceMappingURL=LoginResult.js.map
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
import * as Gs2Project from '../model';
var SignInResult = /** @class */ (function () {
    function SignInResult() {
        this.item = null;
        this.accountToken = null;
    }
    SignInResult.prototype.getItem = function () {
        return this.item;
    };
    SignInResult.prototype.setItem = function (item) {
        this.item = item;
        return this;
    };
    SignInResult.prototype.withItem = function (item) {
        this.item = item;
        return this;
    };
    SignInResult.prototype.getAccountToken = function () {
        return this.accountToken;
    };
    SignInResult.prototype.setAccountToken = function (accountToken) {
        this.accountToken = accountToken;
        return this;
    };
    SignInResult.prototype.withAccountToken = function (accountToken) {
        this.accountToken = accountToken;
        return this;
    };
    SignInResult.fromDict = function (data) {
        return new SignInResult()
            .withItem(Gs2Project.Account.fromDict(data["item"]))
            .withAccountToken(data["accountToken"]);
    };
    SignInResult.prototype.toDict = function () {
        var _a;
        return {
            "item": (_a = this.getItem()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "accountToken": this.getAccountToken(),
        };
    };
    return SignInResult;
}());
export { SignInResult };
//# sourceMappingURL=SignInResult.js.map
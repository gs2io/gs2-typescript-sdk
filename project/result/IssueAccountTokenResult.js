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
var IssueAccountTokenResult = /** @class */ (function () {
    function IssueAccountTokenResult() {
        this.accountToken = null;
    }
    IssueAccountTokenResult.prototype.getAccountToken = function () {
        return this.accountToken;
    };
    IssueAccountTokenResult.prototype.setAccountToken = function (accountToken) {
        this.accountToken = accountToken;
        return this;
    };
    IssueAccountTokenResult.prototype.withAccountToken = function (accountToken) {
        this.accountToken = accountToken;
        return this;
    };
    IssueAccountTokenResult.fromDict = function (data) {
        return new IssueAccountTokenResult()
            .withAccountToken(data["accountToken"]);
    };
    IssueAccountTokenResult.prototype.toDict = function () {
        return {
            "accountToken": this.getAccountToken(),
        };
    };
    return IssueAccountTokenResult;
}());
export { IssueAccountTokenResult };
//# sourceMappingURL=IssueAccountTokenResult.js.map
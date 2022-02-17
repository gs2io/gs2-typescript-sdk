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
var ForgetResult = /** @class */ (function () {
    function ForgetResult() {
        this.issuePasswordToken = null;
    }
    ForgetResult.prototype.getIssuePasswordToken = function () {
        return this.issuePasswordToken;
    };
    ForgetResult.prototype.setIssuePasswordToken = function (issuePasswordToken) {
        this.issuePasswordToken = issuePasswordToken;
        return this;
    };
    ForgetResult.prototype.withIssuePasswordToken = function (issuePasswordToken) {
        this.issuePasswordToken = issuePasswordToken;
        return this;
    };
    ForgetResult.fromDict = function (data) {
        return new ForgetResult()
            .withIssuePasswordToken(data["issuePasswordToken"]);
    };
    ForgetResult.prototype.toDict = function () {
        return {
            "issuePasswordToken": this.getIssuePasswordToken(),
        };
    };
    return ForgetResult;
}());
export { ForgetResult };
//# sourceMappingURL=ForgetResult.js.map
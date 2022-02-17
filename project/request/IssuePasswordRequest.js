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
var IssuePasswordRequest = /** @class */ (function () {
    function IssuePasswordRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.issuePasswordToken = null;
    }
    IssuePasswordRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    IssuePasswordRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    IssuePasswordRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    IssuePasswordRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    IssuePasswordRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    IssuePasswordRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    IssuePasswordRequest.prototype.getIssuePasswordToken = function () {
        return this.issuePasswordToken;
    };
    IssuePasswordRequest.prototype.setIssuePasswordToken = function (issuePasswordToken) {
        this.issuePasswordToken = issuePasswordToken;
        return this;
    };
    IssuePasswordRequest.prototype.withIssuePasswordToken = function (issuePasswordToken) {
        this.issuePasswordToken = issuePasswordToken;
        return this;
    };
    IssuePasswordRequest.fromDict = function (data) {
        return new IssuePasswordRequest()
            .withIssuePasswordToken(data["issuePasswordToken"]);
    };
    IssuePasswordRequest.prototype.toDict = function () {
        return {
            "issuePasswordToken": this.getIssuePasswordToken(),
        };
    };
    return IssuePasswordRequest;
}());
export { IssuePasswordRequest };
//# sourceMappingURL=IssuePasswordRequest.js.map
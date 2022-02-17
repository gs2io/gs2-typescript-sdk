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
var GetStackStatusRequest = /** @class */ (function () {
    function GetStackStatusRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.stackName = null;
    }
    GetStackStatusRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetStackStatusRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetStackStatusRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetStackStatusRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetStackStatusRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetStackStatusRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetStackStatusRequest.prototype.getStackName = function () {
        return this.stackName;
    };
    GetStackStatusRequest.prototype.setStackName = function (stackName) {
        this.stackName = stackName;
        return this;
    };
    GetStackStatusRequest.prototype.withStackName = function (stackName) {
        this.stackName = stackName;
        return this;
    };
    GetStackStatusRequest.fromDict = function (data) {
        return new GetStackStatusRequest()
            .withStackName(data["stackName"]);
    };
    GetStackStatusRequest.prototype.toDict = function () {
        return {
            "stackName": this.getStackName(),
        };
    };
    return GetStackStatusRequest;
}());
export { GetStackStatusRequest };
//# sourceMappingURL=GetStackStatusRequest.js.map
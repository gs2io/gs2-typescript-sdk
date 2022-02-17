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
var DeleteStackEntityRequest = /** @class */ (function () {
    function DeleteStackEntityRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.stackName = null;
    }
    DeleteStackEntityRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DeleteStackEntityRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DeleteStackEntityRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DeleteStackEntityRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DeleteStackEntityRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DeleteStackEntityRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DeleteStackEntityRequest.prototype.getStackName = function () {
        return this.stackName;
    };
    DeleteStackEntityRequest.prototype.setStackName = function (stackName) {
        this.stackName = stackName;
        return this;
    };
    DeleteStackEntityRequest.prototype.withStackName = function (stackName) {
        this.stackName = stackName;
        return this;
    };
    DeleteStackEntityRequest.fromDict = function (data) {
        return new DeleteStackEntityRequest()
            .withStackName(data["stackName"]);
    };
    DeleteStackEntityRequest.prototype.toDict = function () {
        return {
            "stackName": this.getStackName(),
        };
    };
    return DeleteStackEntityRequest;
}());
export { DeleteStackEntityRequest };
//# sourceMappingURL=DeleteStackEntityRequest.js.map
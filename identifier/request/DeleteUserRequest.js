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
var DeleteUserRequest = /** @class */ (function () {
    function DeleteUserRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.userName = null;
    }
    DeleteUserRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DeleteUserRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DeleteUserRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DeleteUserRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DeleteUserRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DeleteUserRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DeleteUserRequest.prototype.getUserName = function () {
        return this.userName;
    };
    DeleteUserRequest.prototype.setUserName = function (userName) {
        this.userName = userName;
        return this;
    };
    DeleteUserRequest.prototype.withUserName = function (userName) {
        this.userName = userName;
        return this;
    };
    DeleteUserRequest.fromDict = function (data) {
        return new DeleteUserRequest()
            .withUserName(data["userName"]);
    };
    DeleteUserRequest.prototype.toDict = function () {
        return {
            "userName": this.getUserName(),
        };
    };
    return DeleteUserRequest;
}());
export default DeleteUserRequest;
//# sourceMappingURL=DeleteUserRequest.js.map
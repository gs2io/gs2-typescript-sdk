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
var CreatePasswordRequest = /** @class */ (function () {
    function CreatePasswordRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.userName = null;
        this.password = null;
    }
    CreatePasswordRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    CreatePasswordRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    CreatePasswordRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    CreatePasswordRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    CreatePasswordRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    CreatePasswordRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    CreatePasswordRequest.prototype.getUserName = function () {
        return this.userName;
    };
    CreatePasswordRequest.prototype.setUserName = function (userName) {
        this.userName = userName;
        return this;
    };
    CreatePasswordRequest.prototype.withUserName = function (userName) {
        this.userName = userName;
        return this;
    };
    CreatePasswordRequest.prototype.getPassword = function () {
        return this.password;
    };
    CreatePasswordRequest.prototype.setPassword = function (password) {
        this.password = password;
        return this;
    };
    CreatePasswordRequest.prototype.withPassword = function (password) {
        this.password = password;
        return this;
    };
    CreatePasswordRequest.fromDict = function (data) {
        return new CreatePasswordRequest()
            .withUserName(data["userName"])
            .withPassword(data["password"]);
    };
    CreatePasswordRequest.prototype.toDict = function () {
        return {
            "userName": this.getUserName(),
            "password": this.getPassword(),
        };
    };
    return CreatePasswordRequest;
}());
export default CreatePasswordRequest;
//# sourceMappingURL=CreatePasswordRequest.js.map
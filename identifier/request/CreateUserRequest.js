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
var CreateUserRequest = /** @class */ (function () {
    function CreateUserRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.name = null;
        this.description = null;
    }
    CreateUserRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    CreateUserRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    CreateUserRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    CreateUserRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    CreateUserRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    CreateUserRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    CreateUserRequest.prototype.getName = function () {
        return this.name;
    };
    CreateUserRequest.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    CreateUserRequest.prototype.withName = function (name) {
        this.name = name;
        return this;
    };
    CreateUserRequest.prototype.getDescription = function () {
        return this.description;
    };
    CreateUserRequest.prototype.setDescription = function (description) {
        this.description = description;
        return this;
    };
    CreateUserRequest.prototype.withDescription = function (description) {
        this.description = description;
        return this;
    };
    CreateUserRequest.fromDict = function (data) {
        return new CreateUserRequest()
            .withName(data["name"])
            .withDescription(data["description"]);
    };
    CreateUserRequest.prototype.toDict = function () {
        return {
            "name": this.getName(),
            "description": this.getDescription(),
        };
    };
    return CreateUserRequest;
}());
export default CreateUserRequest;
//# sourceMappingURL=CreateUserRequest.js.map
"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var UpdateUserRequest = /** @class */ (function () {
    function UpdateUserRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.userName = null;
        this.description = null;
    }
    UpdateUserRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    UpdateUserRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    UpdateUserRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    UpdateUserRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    UpdateUserRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    UpdateUserRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    UpdateUserRequest.prototype.getUserName = function () {
        return this.userName;
    };
    UpdateUserRequest.prototype.setUserName = function (userName) {
        this.userName = userName;
        return this;
    };
    UpdateUserRequest.prototype.withUserName = function (userName) {
        this.userName = userName;
        return this;
    };
    UpdateUserRequest.prototype.getDescription = function () {
        return this.description;
    };
    UpdateUserRequest.prototype.setDescription = function (description) {
        this.description = description;
        return this;
    };
    UpdateUserRequest.prototype.withDescription = function (description) {
        this.description = description;
        return this;
    };
    UpdateUserRequest.fromDict = function (data) {
        return new UpdateUserRequest()
            .withUserName(data["userName"])
            .withDescription(data["description"]);
    };
    UpdateUserRequest.prototype.toDict = function () {
        return {
            "userName": this.getUserName(),
            "description": this.getDescription(),
        };
    };
    return UpdateUserRequest;
}());
exports.default = UpdateUserRequest;
//# sourceMappingURL=UpdateUserRequest.js.map
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
var CreateTakeOverRequest = /** @class */ (function () {
    function CreateTakeOverRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.accessToken = null;
        this.type = null;
        this.userIdentifier = null;
        this.password = null;
    }
    CreateTakeOverRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    CreateTakeOverRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    CreateTakeOverRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    CreateTakeOverRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    CreateTakeOverRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    CreateTakeOverRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    CreateTakeOverRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    CreateTakeOverRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    CreateTakeOverRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    CreateTakeOverRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    CreateTakeOverRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    CreateTakeOverRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    CreateTakeOverRequest.prototype.getType = function () {
        return this.type;
    };
    CreateTakeOverRequest.prototype.setType = function (type) {
        this.type = type;
        return this;
    };
    CreateTakeOverRequest.prototype.withType = function (type) {
        this.type = type;
        return this;
    };
    CreateTakeOverRequest.prototype.getUserIdentifier = function () {
        return this.userIdentifier;
    };
    CreateTakeOverRequest.prototype.setUserIdentifier = function (userIdentifier) {
        this.userIdentifier = userIdentifier;
        return this;
    };
    CreateTakeOverRequest.prototype.withUserIdentifier = function (userIdentifier) {
        this.userIdentifier = userIdentifier;
        return this;
    };
    CreateTakeOverRequest.prototype.getPassword = function () {
        return this.password;
    };
    CreateTakeOverRequest.prototype.setPassword = function (password) {
        this.password = password;
        return this;
    };
    CreateTakeOverRequest.prototype.withPassword = function (password) {
        this.password = password;
        return this;
    };
    CreateTakeOverRequest.fromDict = function (data) {
        return new CreateTakeOverRequest()
            .withNamespaceName(data["namespaceName"])
            .withAccessToken(data["accessToken"])
            .withType(data["type"])
            .withUserIdentifier(data["userIdentifier"])
            .withPassword(data["password"]);
    };
    CreateTakeOverRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "accessToken": this.getAccessToken(),
            "type": this.getType(),
            "userIdentifier": this.getUserIdentifier(),
            "password": this.getPassword(),
        };
    };
    return CreateTakeOverRequest;
}());
export default CreateTakeOverRequest;
//# sourceMappingURL=CreateTakeOverRequest.js.map
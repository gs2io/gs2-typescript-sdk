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
var CreateKeyRequest = /** @class */ (function () {
    function CreateKeyRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.name = null;
        this.description = null;
    }
    CreateKeyRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    CreateKeyRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    CreateKeyRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    CreateKeyRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    CreateKeyRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    CreateKeyRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    CreateKeyRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    CreateKeyRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    CreateKeyRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    CreateKeyRequest.prototype.getName = function () {
        return this.name;
    };
    CreateKeyRequest.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    CreateKeyRequest.prototype.withName = function (name) {
        this.name = name;
        return this;
    };
    CreateKeyRequest.prototype.getDescription = function () {
        return this.description;
    };
    CreateKeyRequest.prototype.setDescription = function (description) {
        this.description = description;
        return this;
    };
    CreateKeyRequest.prototype.withDescription = function (description) {
        this.description = description;
        return this;
    };
    CreateKeyRequest.fromDict = function (data) {
        return new CreateKeyRequest()
            .withNamespaceName(data["namespaceName"])
            .withName(data["name"])
            .withDescription(data["description"]);
    };
    CreateKeyRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "name": this.getName(),
            "description": this.getDescription(),
        };
    };
    return CreateKeyRequest;
}());
exports.default = CreateKeyRequest;
//# sourceMappingURL=CreateKeyRequest.js.map
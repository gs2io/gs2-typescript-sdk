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
var DeletePlatformIdByUserIdentifierRequest = /** @class */ (function () {
    function DeletePlatformIdByUserIdentifierRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.type = null;
        this.userIdentifier = null;
        this.duplicationAvoider = null;
    }
    DeletePlatformIdByUserIdentifierRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DeletePlatformIdByUserIdentifierRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DeletePlatformIdByUserIdentifierRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DeletePlatformIdByUserIdentifierRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DeletePlatformIdByUserIdentifierRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DeletePlatformIdByUserIdentifierRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DeletePlatformIdByUserIdentifierRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DeletePlatformIdByUserIdentifierRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DeletePlatformIdByUserIdentifierRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DeletePlatformIdByUserIdentifierRequest.prototype.getType = function () {
        return this.type;
    };
    DeletePlatformIdByUserIdentifierRequest.prototype.setType = function (type) {
        this.type = type;
        return this;
    };
    DeletePlatformIdByUserIdentifierRequest.prototype.withType = function (type) {
        this.type = type;
        return this;
    };
    DeletePlatformIdByUserIdentifierRequest.prototype.getUserIdentifier = function () {
        return this.userIdentifier;
    };
    DeletePlatformIdByUserIdentifierRequest.prototype.setUserIdentifier = function (userIdentifier) {
        this.userIdentifier = userIdentifier;
        return this;
    };
    DeletePlatformIdByUserIdentifierRequest.prototype.withUserIdentifier = function (userIdentifier) {
        this.userIdentifier = userIdentifier;
        return this;
    };
    DeletePlatformIdByUserIdentifierRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    DeletePlatformIdByUserIdentifierRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    DeletePlatformIdByUserIdentifierRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    DeletePlatformIdByUserIdentifierRequest.fromDict = function (data) {
        return new DeletePlatformIdByUserIdentifierRequest()
            .withNamespaceName(data["namespaceName"])
            .withType(data["type"])
            .withUserIdentifier(data["userIdentifier"]);
    };
    DeletePlatformIdByUserIdentifierRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "type": this.getType(),
            "userIdentifier": this.getUserIdentifier(),
        };
    };
    return DeletePlatformIdByUserIdentifierRequest;
}());
exports.default = DeletePlatformIdByUserIdentifierRequest;
//# sourceMappingURL=DeletePlatformIdByUserIdentifierRequest.js.map
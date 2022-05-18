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
var DeleteTakeOverByUserIdentifierRequest = /** @class */ (function () {
    function DeleteTakeOverByUserIdentifierRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.type = null;
        this.userIdentifier = null;
        this.duplicationAvoider = null;
    }
    DeleteTakeOverByUserIdentifierRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DeleteTakeOverByUserIdentifierRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DeleteTakeOverByUserIdentifierRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DeleteTakeOverByUserIdentifierRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DeleteTakeOverByUserIdentifierRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DeleteTakeOverByUserIdentifierRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DeleteTakeOverByUserIdentifierRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DeleteTakeOverByUserIdentifierRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DeleteTakeOverByUserIdentifierRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DeleteTakeOverByUserIdentifierRequest.prototype.getType = function () {
        return this.type;
    };
    DeleteTakeOverByUserIdentifierRequest.prototype.setType = function (type) {
        this.type = type;
        return this;
    };
    DeleteTakeOverByUserIdentifierRequest.prototype.withType = function (type) {
        this.type = type;
        return this;
    };
    DeleteTakeOverByUserIdentifierRequest.prototype.getUserIdentifier = function () {
        return this.userIdentifier;
    };
    DeleteTakeOverByUserIdentifierRequest.prototype.setUserIdentifier = function (userIdentifier) {
        this.userIdentifier = userIdentifier;
        return this;
    };
    DeleteTakeOverByUserIdentifierRequest.prototype.withUserIdentifier = function (userIdentifier) {
        this.userIdentifier = userIdentifier;
        return this;
    };
    DeleteTakeOverByUserIdentifierRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    DeleteTakeOverByUserIdentifierRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    DeleteTakeOverByUserIdentifierRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    DeleteTakeOverByUserIdentifierRequest.fromDict = function (data) {
        return new DeleteTakeOverByUserIdentifierRequest()
            .withNamespaceName(data["namespaceName"])
            .withType(data["type"])
            .withUserIdentifier(data["userIdentifier"]);
    };
    DeleteTakeOverByUserIdentifierRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "type": this.getType(),
            "userIdentifier": this.getUserIdentifier(),
        };
    };
    return DeleteTakeOverByUserIdentifierRequest;
}());
exports.default = DeleteTakeOverByUserIdentifierRequest;
//# sourceMappingURL=DeleteTakeOverByUserIdentifierRequest.js.map
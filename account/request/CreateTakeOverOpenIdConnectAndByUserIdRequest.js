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
var CreateTakeOverOpenIdConnectAndByUserIdRequest = /** @class */ (function () {
    function CreateTakeOverOpenIdConnectAndByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.userId = null;
        this.type = null;
        this.idToken = null;
        this.timeOffsetToken = null;
        this.duplicationAvoider = null;
    }
    CreateTakeOverOpenIdConnectAndByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    CreateTakeOverOpenIdConnectAndByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    CreateTakeOverOpenIdConnectAndByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    CreateTakeOverOpenIdConnectAndByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    CreateTakeOverOpenIdConnectAndByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    CreateTakeOverOpenIdConnectAndByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    CreateTakeOverOpenIdConnectAndByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    CreateTakeOverOpenIdConnectAndByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    CreateTakeOverOpenIdConnectAndByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    CreateTakeOverOpenIdConnectAndByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    CreateTakeOverOpenIdConnectAndByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    CreateTakeOverOpenIdConnectAndByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    CreateTakeOverOpenIdConnectAndByUserIdRequest.prototype.getType = function () {
        return this.type;
    };
    CreateTakeOverOpenIdConnectAndByUserIdRequest.prototype.setType = function (type) {
        this.type = type;
        return this;
    };
    CreateTakeOverOpenIdConnectAndByUserIdRequest.prototype.withType = function (type) {
        this.type = type;
        return this;
    };
    CreateTakeOverOpenIdConnectAndByUserIdRequest.prototype.getIdToken = function () {
        return this.idToken;
    };
    CreateTakeOverOpenIdConnectAndByUserIdRequest.prototype.setIdToken = function (idToken) {
        this.idToken = idToken;
        return this;
    };
    CreateTakeOverOpenIdConnectAndByUserIdRequest.prototype.withIdToken = function (idToken) {
        this.idToken = idToken;
        return this;
    };
    CreateTakeOverOpenIdConnectAndByUserIdRequest.prototype.getTimeOffsetToken = function () {
        return this.timeOffsetToken;
    };
    CreateTakeOverOpenIdConnectAndByUserIdRequest.prototype.setTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    CreateTakeOverOpenIdConnectAndByUserIdRequest.prototype.withTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    CreateTakeOverOpenIdConnectAndByUserIdRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    CreateTakeOverOpenIdConnectAndByUserIdRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    CreateTakeOverOpenIdConnectAndByUserIdRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    CreateTakeOverOpenIdConnectAndByUserIdRequest.fromDict = function (data) {
        return new CreateTakeOverOpenIdConnectAndByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withUserId(data["userId"])
            .withType(data["type"])
            .withIdToken(data["idToken"])
            .withTimeOffsetToken(data["timeOffsetToken"]);
    };
    CreateTakeOverOpenIdConnectAndByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "userId": this.getUserId(),
            "type": this.getType(),
            "idToken": this.getIdToken(),
            "timeOffsetToken": this.getTimeOffsetToken(),
        };
    };
    return CreateTakeOverOpenIdConnectAndByUserIdRequest;
}());
exports.default = CreateTakeOverOpenIdConnectAndByUserIdRequest;
//# sourceMappingURL=CreateTakeOverOpenIdConnectAndByUserIdRequest.js.map
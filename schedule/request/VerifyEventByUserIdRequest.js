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
var VerifyEventByUserIdRequest = /** @class */ (function () {
    function VerifyEventByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.userId = null;
        this.eventName = null;
        this.verifyType = null;
        this.duplicationAvoider = null;
    }
    VerifyEventByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    VerifyEventByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    VerifyEventByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    VerifyEventByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    VerifyEventByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    VerifyEventByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    VerifyEventByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    VerifyEventByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    VerifyEventByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    VerifyEventByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    VerifyEventByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    VerifyEventByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    VerifyEventByUserIdRequest.prototype.getEventName = function () {
        return this.eventName;
    };
    VerifyEventByUserIdRequest.prototype.setEventName = function (eventName) {
        this.eventName = eventName;
        return this;
    };
    VerifyEventByUserIdRequest.prototype.withEventName = function (eventName) {
        this.eventName = eventName;
        return this;
    };
    VerifyEventByUserIdRequest.prototype.getVerifyType = function () {
        return this.verifyType;
    };
    VerifyEventByUserIdRequest.prototype.setVerifyType = function (verifyType) {
        this.verifyType = verifyType;
        return this;
    };
    VerifyEventByUserIdRequest.prototype.withVerifyType = function (verifyType) {
        this.verifyType = verifyType;
        return this;
    };
    VerifyEventByUserIdRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    VerifyEventByUserIdRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    VerifyEventByUserIdRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    VerifyEventByUserIdRequest.fromDict = function (data) {
        return new VerifyEventByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withUserId(data["userId"])
            .withEventName(data["eventName"])
            .withVerifyType(data["verifyType"]);
    };
    VerifyEventByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "userId": this.getUserId(),
            "eventName": this.getEventName(),
            "verifyType": this.getVerifyType(),
        };
    };
    return VerifyEventByUserIdRequest;
}());
exports.default = VerifyEventByUserIdRequest;
//# sourceMappingURL=VerifyEventByUserIdRequest.js.map
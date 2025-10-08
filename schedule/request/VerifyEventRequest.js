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
var VerifyEventRequest = /** @class */ (function () {
    function VerifyEventRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.accessToken = null;
        this.eventName = null;
        this.verifyType = null;
        this.duplicationAvoider = null;
    }
    VerifyEventRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    VerifyEventRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    VerifyEventRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    VerifyEventRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    VerifyEventRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    VerifyEventRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    VerifyEventRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    VerifyEventRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    VerifyEventRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    VerifyEventRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    VerifyEventRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    VerifyEventRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    VerifyEventRequest.prototype.getEventName = function () {
        return this.eventName;
    };
    VerifyEventRequest.prototype.setEventName = function (eventName) {
        this.eventName = eventName;
        return this;
    };
    VerifyEventRequest.prototype.withEventName = function (eventName) {
        this.eventName = eventName;
        return this;
    };
    VerifyEventRequest.prototype.getVerifyType = function () {
        return this.verifyType;
    };
    VerifyEventRequest.prototype.setVerifyType = function (verifyType) {
        this.verifyType = verifyType;
        return this;
    };
    VerifyEventRequest.prototype.withVerifyType = function (verifyType) {
        this.verifyType = verifyType;
        return this;
    };
    VerifyEventRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    VerifyEventRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    VerifyEventRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    VerifyEventRequest.fromDict = function (data) {
        return new VerifyEventRequest()
            .withNamespaceName(data["namespaceName"])
            .withAccessToken(data["accessToken"])
            .withEventName(data["eventName"])
            .withVerifyType(data["verifyType"]);
    };
    VerifyEventRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "accessToken": this.getAccessToken(),
            "eventName": this.getEventName(),
            "verifyType": this.getVerifyType(),
        };
    };
    return VerifyEventRequest;
}());
exports.default = VerifyEventRequest;
//# sourceMappingURL=VerifyEventRequest.js.map
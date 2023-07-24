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
var EmitRequest = /** @class */ (function () {
    function EmitRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.accessToken = null;
        this.statusName = null;
        this.eventName = null;
        this.args = null;
        this.duplicationAvoider = null;
    }
    EmitRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    EmitRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    EmitRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    EmitRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    EmitRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    EmitRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    EmitRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    EmitRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    EmitRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    EmitRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    EmitRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    EmitRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    EmitRequest.prototype.getStatusName = function () {
        return this.statusName;
    };
    EmitRequest.prototype.setStatusName = function (statusName) {
        this.statusName = statusName;
        return this;
    };
    EmitRequest.prototype.withStatusName = function (statusName) {
        this.statusName = statusName;
        return this;
    };
    EmitRequest.prototype.getEventName = function () {
        return this.eventName;
    };
    EmitRequest.prototype.setEventName = function (eventName) {
        this.eventName = eventName;
        return this;
    };
    EmitRequest.prototype.withEventName = function (eventName) {
        this.eventName = eventName;
        return this;
    };
    EmitRequest.prototype.getArgs = function () {
        return this.args;
    };
    EmitRequest.prototype.setArgs = function (args) {
        this.args = args;
        return this;
    };
    EmitRequest.prototype.withArgs = function (args) {
        this.args = args;
        return this;
    };
    EmitRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    EmitRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    EmitRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    EmitRequest.fromDict = function (data) {
        return new EmitRequest()
            .withNamespaceName(data["namespaceName"])
            .withAccessToken(data["accessToken"])
            .withStatusName(data["statusName"])
            .withEventName(data["eventName"])
            .withArgs(data["args"]);
    };
    EmitRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "accessToken": this.getAccessToken(),
            "statusName": this.getStatusName(),
            "eventName": this.getEventName(),
            "args": this.getArgs(),
        };
    };
    return EmitRequest;
}());
exports.default = EmitRequest;
//# sourceMappingURL=EmitRequest.js.map
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
var RejectRequestRequest = /** @class */ (function () {
    function RejectRequestRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.guildModelName = null;
        this.accessToken = null;
        this.fromUserId = null;
        this.duplicationAvoider = null;
    }
    RejectRequestRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    RejectRequestRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    RejectRequestRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    RejectRequestRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    RejectRequestRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    RejectRequestRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    RejectRequestRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    RejectRequestRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    RejectRequestRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    RejectRequestRequest.prototype.getGuildModelName = function () {
        return this.guildModelName;
    };
    RejectRequestRequest.prototype.setGuildModelName = function (guildModelName) {
        this.guildModelName = guildModelName;
        return this;
    };
    RejectRequestRequest.prototype.withGuildModelName = function (guildModelName) {
        this.guildModelName = guildModelName;
        return this;
    };
    RejectRequestRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    RejectRequestRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    RejectRequestRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    RejectRequestRequest.prototype.getFromUserId = function () {
        return this.fromUserId;
    };
    RejectRequestRequest.prototype.setFromUserId = function (fromUserId) {
        this.fromUserId = fromUserId;
        return this;
    };
    RejectRequestRequest.prototype.withFromUserId = function (fromUserId) {
        this.fromUserId = fromUserId;
        return this;
    };
    RejectRequestRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    RejectRequestRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    RejectRequestRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    RejectRequestRequest.fromDict = function (data) {
        return new RejectRequestRequest()
            .withNamespaceName(data["namespaceName"])
            .withGuildModelName(data["guildModelName"])
            .withAccessToken(data["accessToken"])
            .withFromUserId(data["fromUserId"]);
    };
    RejectRequestRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "guildModelName": this.getGuildModelName(),
            "accessToken": this.getAccessToken(),
            "fromUserId": this.getFromUserId(),
        };
    };
    return RejectRequestRequest;
}());
exports.default = RejectRequestRequest;
//# sourceMappingURL=RejectRequestRequest.js.map
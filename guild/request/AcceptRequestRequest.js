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
var AcceptRequestRequest = /** @class */ (function () {
    function AcceptRequestRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.guildModelName = null;
        this.accessToken = null;
        this.fromUserId = null;
        this.duplicationAvoider = null;
    }
    AcceptRequestRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    AcceptRequestRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    AcceptRequestRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    AcceptRequestRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    AcceptRequestRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    AcceptRequestRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    AcceptRequestRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    AcceptRequestRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    AcceptRequestRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    AcceptRequestRequest.prototype.getGuildModelName = function () {
        return this.guildModelName;
    };
    AcceptRequestRequest.prototype.setGuildModelName = function (guildModelName) {
        this.guildModelName = guildModelName;
        return this;
    };
    AcceptRequestRequest.prototype.withGuildModelName = function (guildModelName) {
        this.guildModelName = guildModelName;
        return this;
    };
    AcceptRequestRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    AcceptRequestRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    AcceptRequestRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    AcceptRequestRequest.prototype.getFromUserId = function () {
        return this.fromUserId;
    };
    AcceptRequestRequest.prototype.setFromUserId = function (fromUserId) {
        this.fromUserId = fromUserId;
        return this;
    };
    AcceptRequestRequest.prototype.withFromUserId = function (fromUserId) {
        this.fromUserId = fromUserId;
        return this;
    };
    AcceptRequestRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    AcceptRequestRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    AcceptRequestRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    AcceptRequestRequest.fromDict = function (data) {
        return new AcceptRequestRequest()
            .withNamespaceName(data["namespaceName"])
            .withGuildModelName(data["guildModelName"])
            .withAccessToken(data["accessToken"])
            .withFromUserId(data["fromUserId"]);
    };
    AcceptRequestRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "guildModelName": this.getGuildModelName(),
            "accessToken": this.getAccessToken(),
            "fromUserId": this.getFromUserId(),
        };
    };
    return AcceptRequestRequest;
}());
exports.default = AcceptRequestRequest;
//# sourceMappingURL=AcceptRequestRequest.js.map
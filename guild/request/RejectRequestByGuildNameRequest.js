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
var RejectRequestByGuildNameRequest = /** @class */ (function () {
    function RejectRequestByGuildNameRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.guildModelName = null;
        this.guildName = null;
        this.fromUserId = null;
        this.duplicationAvoider = null;
    }
    RejectRequestByGuildNameRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    RejectRequestByGuildNameRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    RejectRequestByGuildNameRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    RejectRequestByGuildNameRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    RejectRequestByGuildNameRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    RejectRequestByGuildNameRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    RejectRequestByGuildNameRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    RejectRequestByGuildNameRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    RejectRequestByGuildNameRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    RejectRequestByGuildNameRequest.prototype.getGuildModelName = function () {
        return this.guildModelName;
    };
    RejectRequestByGuildNameRequest.prototype.setGuildModelName = function (guildModelName) {
        this.guildModelName = guildModelName;
        return this;
    };
    RejectRequestByGuildNameRequest.prototype.withGuildModelName = function (guildModelName) {
        this.guildModelName = guildModelName;
        return this;
    };
    RejectRequestByGuildNameRequest.prototype.getGuildName = function () {
        return this.guildName;
    };
    RejectRequestByGuildNameRequest.prototype.setGuildName = function (guildName) {
        this.guildName = guildName;
        return this;
    };
    RejectRequestByGuildNameRequest.prototype.withGuildName = function (guildName) {
        this.guildName = guildName;
        return this;
    };
    RejectRequestByGuildNameRequest.prototype.getFromUserId = function () {
        return this.fromUserId;
    };
    RejectRequestByGuildNameRequest.prototype.setFromUserId = function (fromUserId) {
        this.fromUserId = fromUserId;
        return this;
    };
    RejectRequestByGuildNameRequest.prototype.withFromUserId = function (fromUserId) {
        this.fromUserId = fromUserId;
        return this;
    };
    RejectRequestByGuildNameRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    RejectRequestByGuildNameRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    RejectRequestByGuildNameRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    RejectRequestByGuildNameRequest.fromDict = function (data) {
        return new RejectRequestByGuildNameRequest()
            .withNamespaceName(data["namespaceName"])
            .withGuildModelName(data["guildModelName"])
            .withGuildName(data["guildName"])
            .withFromUserId(data["fromUserId"]);
    };
    RejectRequestByGuildNameRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "guildModelName": this.getGuildModelName(),
            "guildName": this.getGuildName(),
            "fromUserId": this.getFromUserId(),
        };
    };
    return RejectRequestByGuildNameRequest;
}());
exports.default = RejectRequestByGuildNameRequest;
//# sourceMappingURL=RejectRequestByGuildNameRequest.js.map
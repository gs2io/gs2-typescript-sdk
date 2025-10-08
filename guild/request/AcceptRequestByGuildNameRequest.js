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
var AcceptRequestByGuildNameRequest = /** @class */ (function () {
    function AcceptRequestByGuildNameRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.guildModelName = null;
        this.guildName = null;
        this.fromUserId = null;
        this.duplicationAvoider = null;
    }
    AcceptRequestByGuildNameRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    AcceptRequestByGuildNameRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    AcceptRequestByGuildNameRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    AcceptRequestByGuildNameRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    AcceptRequestByGuildNameRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    AcceptRequestByGuildNameRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    AcceptRequestByGuildNameRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    AcceptRequestByGuildNameRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    AcceptRequestByGuildNameRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    AcceptRequestByGuildNameRequest.prototype.getGuildModelName = function () {
        return this.guildModelName;
    };
    AcceptRequestByGuildNameRequest.prototype.setGuildModelName = function (guildModelName) {
        this.guildModelName = guildModelName;
        return this;
    };
    AcceptRequestByGuildNameRequest.prototype.withGuildModelName = function (guildModelName) {
        this.guildModelName = guildModelName;
        return this;
    };
    AcceptRequestByGuildNameRequest.prototype.getGuildName = function () {
        return this.guildName;
    };
    AcceptRequestByGuildNameRequest.prototype.setGuildName = function (guildName) {
        this.guildName = guildName;
        return this;
    };
    AcceptRequestByGuildNameRequest.prototype.withGuildName = function (guildName) {
        this.guildName = guildName;
        return this;
    };
    AcceptRequestByGuildNameRequest.prototype.getFromUserId = function () {
        return this.fromUserId;
    };
    AcceptRequestByGuildNameRequest.prototype.setFromUserId = function (fromUserId) {
        this.fromUserId = fromUserId;
        return this;
    };
    AcceptRequestByGuildNameRequest.prototype.withFromUserId = function (fromUserId) {
        this.fromUserId = fromUserId;
        return this;
    };
    AcceptRequestByGuildNameRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    AcceptRequestByGuildNameRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    AcceptRequestByGuildNameRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    AcceptRequestByGuildNameRequest.fromDict = function (data) {
        return new AcceptRequestByGuildNameRequest()
            .withNamespaceName(data["namespaceName"])
            .withGuildModelName(data["guildModelName"])
            .withGuildName(data["guildName"])
            .withFromUserId(data["fromUserId"]);
    };
    AcceptRequestByGuildNameRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "guildModelName": this.getGuildModelName(),
            "guildName": this.getGuildName(),
            "fromUserId": this.getFromUserId(),
        };
    };
    return AcceptRequestByGuildNameRequest;
}());
exports.default = AcceptRequestByGuildNameRequest;
//# sourceMappingURL=AcceptRequestByGuildNameRequest.js.map
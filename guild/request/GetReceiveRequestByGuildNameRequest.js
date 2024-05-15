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
var GetReceiveRequestByGuildNameRequest = /** @class */ (function () {
    function GetReceiveRequestByGuildNameRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.guildModelName = null;
        this.guildName = null;
        this.fromUserId = null;
    }
    GetReceiveRequestByGuildNameRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetReceiveRequestByGuildNameRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetReceiveRequestByGuildNameRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetReceiveRequestByGuildNameRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetReceiveRequestByGuildNameRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetReceiveRequestByGuildNameRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetReceiveRequestByGuildNameRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    GetReceiveRequestByGuildNameRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetReceiveRequestByGuildNameRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetReceiveRequestByGuildNameRequest.prototype.getGuildModelName = function () {
        return this.guildModelName;
    };
    GetReceiveRequestByGuildNameRequest.prototype.setGuildModelName = function (guildModelName) {
        this.guildModelName = guildModelName;
        return this;
    };
    GetReceiveRequestByGuildNameRequest.prototype.withGuildModelName = function (guildModelName) {
        this.guildModelName = guildModelName;
        return this;
    };
    GetReceiveRequestByGuildNameRequest.prototype.getGuildName = function () {
        return this.guildName;
    };
    GetReceiveRequestByGuildNameRequest.prototype.setGuildName = function (guildName) {
        this.guildName = guildName;
        return this;
    };
    GetReceiveRequestByGuildNameRequest.prototype.withGuildName = function (guildName) {
        this.guildName = guildName;
        return this;
    };
    GetReceiveRequestByGuildNameRequest.prototype.getFromUserId = function () {
        return this.fromUserId;
    };
    GetReceiveRequestByGuildNameRequest.prototype.setFromUserId = function (fromUserId) {
        this.fromUserId = fromUserId;
        return this;
    };
    GetReceiveRequestByGuildNameRequest.prototype.withFromUserId = function (fromUserId) {
        this.fromUserId = fromUserId;
        return this;
    };
    GetReceiveRequestByGuildNameRequest.fromDict = function (data) {
        return new GetReceiveRequestByGuildNameRequest()
            .withNamespaceName(data["namespaceName"])
            .withGuildModelName(data["guildModelName"])
            .withGuildName(data["guildName"])
            .withFromUserId(data["fromUserId"]);
    };
    GetReceiveRequestByGuildNameRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "guildModelName": this.getGuildModelName(),
            "guildName": this.getGuildName(),
            "fromUserId": this.getFromUserId(),
        };
    };
    return GetReceiveRequestByGuildNameRequest;
}());
exports.default = GetReceiveRequestByGuildNameRequest;
//# sourceMappingURL=GetReceiveRequestByGuildNameRequest.js.map
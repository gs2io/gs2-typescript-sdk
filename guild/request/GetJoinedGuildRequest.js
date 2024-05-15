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
var GetJoinedGuildRequest = /** @class */ (function () {
    function GetJoinedGuildRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.accessToken = null;
        this.guildModelName = null;
        this.guildName = null;
    }
    GetJoinedGuildRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetJoinedGuildRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetJoinedGuildRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetJoinedGuildRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetJoinedGuildRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetJoinedGuildRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetJoinedGuildRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    GetJoinedGuildRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetJoinedGuildRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetJoinedGuildRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    GetJoinedGuildRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    GetJoinedGuildRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    GetJoinedGuildRequest.prototype.getGuildModelName = function () {
        return this.guildModelName;
    };
    GetJoinedGuildRequest.prototype.setGuildModelName = function (guildModelName) {
        this.guildModelName = guildModelName;
        return this;
    };
    GetJoinedGuildRequest.prototype.withGuildModelName = function (guildModelName) {
        this.guildModelName = guildModelName;
        return this;
    };
    GetJoinedGuildRequest.prototype.getGuildName = function () {
        return this.guildName;
    };
    GetJoinedGuildRequest.prototype.setGuildName = function (guildName) {
        this.guildName = guildName;
        return this;
    };
    GetJoinedGuildRequest.prototype.withGuildName = function (guildName) {
        this.guildName = guildName;
        return this;
    };
    GetJoinedGuildRequest.fromDict = function (data) {
        return new GetJoinedGuildRequest()
            .withNamespaceName(data["namespaceName"])
            .withAccessToken(data["accessToken"])
            .withGuildModelName(data["guildModelName"])
            .withGuildName(data["guildName"]);
    };
    GetJoinedGuildRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "accessToken": this.getAccessToken(),
            "guildModelName": this.getGuildModelName(),
            "guildName": this.getGuildName(),
        };
    };
    return GetJoinedGuildRequest;
}());
exports.default = GetJoinedGuildRequest;
//# sourceMappingURL=GetJoinedGuildRequest.js.map
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
var GetLastGuildMasterActivityRequest = /** @class */ (function () {
    function GetLastGuildMasterActivityRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.guildModelName = null;
        this.accessToken = null;
    }
    GetLastGuildMasterActivityRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetLastGuildMasterActivityRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetLastGuildMasterActivityRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetLastGuildMasterActivityRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetLastGuildMasterActivityRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetLastGuildMasterActivityRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetLastGuildMasterActivityRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    GetLastGuildMasterActivityRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetLastGuildMasterActivityRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetLastGuildMasterActivityRequest.prototype.getGuildModelName = function () {
        return this.guildModelName;
    };
    GetLastGuildMasterActivityRequest.prototype.setGuildModelName = function (guildModelName) {
        this.guildModelName = guildModelName;
        return this;
    };
    GetLastGuildMasterActivityRequest.prototype.withGuildModelName = function (guildModelName) {
        this.guildModelName = guildModelName;
        return this;
    };
    GetLastGuildMasterActivityRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    GetLastGuildMasterActivityRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    GetLastGuildMasterActivityRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    GetLastGuildMasterActivityRequest.fromDict = function (data) {
        return new GetLastGuildMasterActivityRequest()
            .withNamespaceName(data["namespaceName"])
            .withGuildModelName(data["guildModelName"])
            .withAccessToken(data["accessToken"]);
    };
    GetLastGuildMasterActivityRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "guildModelName": this.getGuildModelName(),
            "accessToken": this.getAccessToken(),
        };
    };
    return GetLastGuildMasterActivityRequest;
}());
exports.default = GetLastGuildMasterActivityRequest;
//# sourceMappingURL=GetLastGuildMasterActivityRequest.js.map
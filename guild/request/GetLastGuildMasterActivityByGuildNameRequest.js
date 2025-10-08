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
var GetLastGuildMasterActivityByGuildNameRequest = /** @class */ (function () {
    function GetLastGuildMasterActivityByGuildNameRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.guildModelName = null;
        this.guildName = null;
    }
    GetLastGuildMasterActivityByGuildNameRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetLastGuildMasterActivityByGuildNameRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetLastGuildMasterActivityByGuildNameRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetLastGuildMasterActivityByGuildNameRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetLastGuildMasterActivityByGuildNameRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetLastGuildMasterActivityByGuildNameRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetLastGuildMasterActivityByGuildNameRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    GetLastGuildMasterActivityByGuildNameRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetLastGuildMasterActivityByGuildNameRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetLastGuildMasterActivityByGuildNameRequest.prototype.getGuildModelName = function () {
        return this.guildModelName;
    };
    GetLastGuildMasterActivityByGuildNameRequest.prototype.setGuildModelName = function (guildModelName) {
        this.guildModelName = guildModelName;
        return this;
    };
    GetLastGuildMasterActivityByGuildNameRequest.prototype.withGuildModelName = function (guildModelName) {
        this.guildModelName = guildModelName;
        return this;
    };
    GetLastGuildMasterActivityByGuildNameRequest.prototype.getGuildName = function () {
        return this.guildName;
    };
    GetLastGuildMasterActivityByGuildNameRequest.prototype.setGuildName = function (guildName) {
        this.guildName = guildName;
        return this;
    };
    GetLastGuildMasterActivityByGuildNameRequest.prototype.withGuildName = function (guildName) {
        this.guildName = guildName;
        return this;
    };
    GetLastGuildMasterActivityByGuildNameRequest.fromDict = function (data) {
        return new GetLastGuildMasterActivityByGuildNameRequest()
            .withNamespaceName(data["namespaceName"])
            .withGuildModelName(data["guildModelName"])
            .withGuildName(data["guildName"]);
    };
    GetLastGuildMasterActivityByGuildNameRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "guildModelName": this.getGuildModelName(),
            "guildName": this.getGuildName(),
        };
    };
    return GetLastGuildMasterActivityByGuildNameRequest;
}());
exports.default = GetLastGuildMasterActivityByGuildNameRequest;
//# sourceMappingURL=GetLastGuildMasterActivityByGuildNameRequest.js.map
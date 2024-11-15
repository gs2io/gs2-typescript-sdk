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
var tslib_1 = require("tslib");
var Gs2Guild = tslib_1.__importStar(require("../model"));
var BatchUpdateMemberRoleRequest = /** @class */ (function () {
    function BatchUpdateMemberRoleRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.guildModelName = null;
        this.accessToken = null;
        this.members = null;
        this.duplicationAvoider = null;
    }
    BatchUpdateMemberRoleRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    BatchUpdateMemberRoleRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    BatchUpdateMemberRoleRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    BatchUpdateMemberRoleRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    BatchUpdateMemberRoleRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    BatchUpdateMemberRoleRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    BatchUpdateMemberRoleRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    BatchUpdateMemberRoleRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    BatchUpdateMemberRoleRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    BatchUpdateMemberRoleRequest.prototype.getGuildModelName = function () {
        return this.guildModelName;
    };
    BatchUpdateMemberRoleRequest.prototype.setGuildModelName = function (guildModelName) {
        this.guildModelName = guildModelName;
        return this;
    };
    BatchUpdateMemberRoleRequest.prototype.withGuildModelName = function (guildModelName) {
        this.guildModelName = guildModelName;
        return this;
    };
    BatchUpdateMemberRoleRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    BatchUpdateMemberRoleRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    BatchUpdateMemberRoleRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    BatchUpdateMemberRoleRequest.prototype.getMembers = function () {
        return this.members;
    };
    BatchUpdateMemberRoleRequest.prototype.setMembers = function (members) {
        this.members = members;
        return this;
    };
    BatchUpdateMemberRoleRequest.prototype.withMembers = function (members) {
        this.members = members;
        return this;
    };
    BatchUpdateMemberRoleRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    BatchUpdateMemberRoleRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    BatchUpdateMemberRoleRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    BatchUpdateMemberRoleRequest.fromDict = function (data) {
        return new BatchUpdateMemberRoleRequest()
            .withNamespaceName(data["namespaceName"])
            .withGuildModelName(data["guildModelName"])
            .withAccessToken(data["accessToken"])
            .withMembers(data.members ?
            data.members.map(function (item) {
                return Gs2Guild.Member.fromDict(item);
            }) : []);
    };
    BatchUpdateMemberRoleRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "guildModelName": this.getGuildModelName(),
            "accessToken": this.getAccessToken(),
            "members": this.getMembers() ?
                this.getMembers().map(function (item) {
                    return item.toDict();
                }) : [],
        };
    };
    return BatchUpdateMemberRoleRequest;
}());
exports.default = BatchUpdateMemberRoleRequest;
//# sourceMappingURL=BatchUpdateMemberRoleRequest.js.map
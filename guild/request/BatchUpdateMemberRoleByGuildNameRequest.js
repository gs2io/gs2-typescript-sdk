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
var BatchUpdateMemberRoleByGuildNameRequest = /** @class */ (function () {
    function BatchUpdateMemberRoleByGuildNameRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.guildModelName = null;
        this.guildName = null;
        this.members = null;
        this.duplicationAvoider = null;
    }
    BatchUpdateMemberRoleByGuildNameRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    BatchUpdateMemberRoleByGuildNameRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    BatchUpdateMemberRoleByGuildNameRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    BatchUpdateMemberRoleByGuildNameRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    BatchUpdateMemberRoleByGuildNameRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    BatchUpdateMemberRoleByGuildNameRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    BatchUpdateMemberRoleByGuildNameRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    BatchUpdateMemberRoleByGuildNameRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    BatchUpdateMemberRoleByGuildNameRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    BatchUpdateMemberRoleByGuildNameRequest.prototype.getGuildModelName = function () {
        return this.guildModelName;
    };
    BatchUpdateMemberRoleByGuildNameRequest.prototype.setGuildModelName = function (guildModelName) {
        this.guildModelName = guildModelName;
        return this;
    };
    BatchUpdateMemberRoleByGuildNameRequest.prototype.withGuildModelName = function (guildModelName) {
        this.guildModelName = guildModelName;
        return this;
    };
    BatchUpdateMemberRoleByGuildNameRequest.prototype.getGuildName = function () {
        return this.guildName;
    };
    BatchUpdateMemberRoleByGuildNameRequest.prototype.setGuildName = function (guildName) {
        this.guildName = guildName;
        return this;
    };
    BatchUpdateMemberRoleByGuildNameRequest.prototype.withGuildName = function (guildName) {
        this.guildName = guildName;
        return this;
    };
    BatchUpdateMemberRoleByGuildNameRequest.prototype.getMembers = function () {
        return this.members;
    };
    BatchUpdateMemberRoleByGuildNameRequest.prototype.setMembers = function (members) {
        this.members = members;
        return this;
    };
    BatchUpdateMemberRoleByGuildNameRequest.prototype.withMembers = function (members) {
        this.members = members;
        return this;
    };
    BatchUpdateMemberRoleByGuildNameRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    BatchUpdateMemberRoleByGuildNameRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    BatchUpdateMemberRoleByGuildNameRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    BatchUpdateMemberRoleByGuildNameRequest.fromDict = function (data) {
        return new BatchUpdateMemberRoleByGuildNameRequest()
            .withNamespaceName(data["namespaceName"])
            .withGuildModelName(data["guildModelName"])
            .withGuildName(data["guildName"])
            .withMembers(data.members ?
            data.members.map(function (item) {
                return Gs2Guild.Member.fromDict(item);
            }) : []);
    };
    BatchUpdateMemberRoleByGuildNameRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "guildModelName": this.getGuildModelName(),
            "guildName": this.getGuildName(),
            "members": this.getMembers() ?
                this.getMembers().map(function (item) {
                    return item.toDict();
                }) : [],
        };
    };
    return BatchUpdateMemberRoleByGuildNameRequest;
}());
exports.default = BatchUpdateMemberRoleByGuildNameRequest;
//# sourceMappingURL=BatchUpdateMemberRoleByGuildNameRequest.js.map
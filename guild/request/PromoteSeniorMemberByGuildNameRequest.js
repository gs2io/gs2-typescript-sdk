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
var PromoteSeniorMemberByGuildNameRequest = /** @class */ (function () {
    function PromoteSeniorMemberByGuildNameRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.guildModelName = null;
        this.guildName = null;
        this.duplicationAvoider = null;
    }
    PromoteSeniorMemberByGuildNameRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    PromoteSeniorMemberByGuildNameRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    PromoteSeniorMemberByGuildNameRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    PromoteSeniorMemberByGuildNameRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    PromoteSeniorMemberByGuildNameRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    PromoteSeniorMemberByGuildNameRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    PromoteSeniorMemberByGuildNameRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    PromoteSeniorMemberByGuildNameRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    PromoteSeniorMemberByGuildNameRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    PromoteSeniorMemberByGuildNameRequest.prototype.getGuildModelName = function () {
        return this.guildModelName;
    };
    PromoteSeniorMemberByGuildNameRequest.prototype.setGuildModelName = function (guildModelName) {
        this.guildModelName = guildModelName;
        return this;
    };
    PromoteSeniorMemberByGuildNameRequest.prototype.withGuildModelName = function (guildModelName) {
        this.guildModelName = guildModelName;
        return this;
    };
    PromoteSeniorMemberByGuildNameRequest.prototype.getGuildName = function () {
        return this.guildName;
    };
    PromoteSeniorMemberByGuildNameRequest.prototype.setGuildName = function (guildName) {
        this.guildName = guildName;
        return this;
    };
    PromoteSeniorMemberByGuildNameRequest.prototype.withGuildName = function (guildName) {
        this.guildName = guildName;
        return this;
    };
    PromoteSeniorMemberByGuildNameRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    PromoteSeniorMemberByGuildNameRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    PromoteSeniorMemberByGuildNameRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    PromoteSeniorMemberByGuildNameRequest.fromDict = function (data) {
        return new PromoteSeniorMemberByGuildNameRequest()
            .withNamespaceName(data["namespaceName"])
            .withGuildModelName(data["guildModelName"])
            .withGuildName(data["guildName"]);
    };
    PromoteSeniorMemberByGuildNameRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "guildModelName": this.getGuildModelName(),
            "guildName": this.getGuildName(),
        };
    };
    return PromoteSeniorMemberByGuildNameRequest;
}());
exports.default = PromoteSeniorMemberByGuildNameRequest;
//# sourceMappingURL=PromoteSeniorMemberByGuildNameRequest.js.map
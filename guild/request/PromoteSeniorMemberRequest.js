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
var PromoteSeniorMemberRequest = /** @class */ (function () {
    function PromoteSeniorMemberRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.guildModelName = null;
        this.accessToken = null;
        this.duplicationAvoider = null;
    }
    PromoteSeniorMemberRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    PromoteSeniorMemberRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    PromoteSeniorMemberRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    PromoteSeniorMemberRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    PromoteSeniorMemberRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    PromoteSeniorMemberRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    PromoteSeniorMemberRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    PromoteSeniorMemberRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    PromoteSeniorMemberRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    PromoteSeniorMemberRequest.prototype.getGuildModelName = function () {
        return this.guildModelName;
    };
    PromoteSeniorMemberRequest.prototype.setGuildModelName = function (guildModelName) {
        this.guildModelName = guildModelName;
        return this;
    };
    PromoteSeniorMemberRequest.prototype.withGuildModelName = function (guildModelName) {
        this.guildModelName = guildModelName;
        return this;
    };
    PromoteSeniorMemberRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    PromoteSeniorMemberRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    PromoteSeniorMemberRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    PromoteSeniorMemberRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    PromoteSeniorMemberRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    PromoteSeniorMemberRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    PromoteSeniorMemberRequest.fromDict = function (data) {
        return new PromoteSeniorMemberRequest()
            .withNamespaceName(data["namespaceName"])
            .withGuildModelName(data["guildModelName"])
            .withAccessToken(data["accessToken"]);
    };
    PromoteSeniorMemberRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "guildModelName": this.getGuildModelName(),
            "accessToken": this.getAccessToken(),
        };
    };
    return PromoteSeniorMemberRequest;
}());
exports.default = PromoteSeniorMemberRequest;
//# sourceMappingURL=PromoteSeniorMemberRequest.js.map
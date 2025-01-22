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
var UpdateMemberMetadataRequest = /** @class */ (function () {
    function UpdateMemberMetadataRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.guildModelName = null;
        this.guildName = null;
        this.accessToken = null;
        this.metadata = null;
        this.duplicationAvoider = null;
    }
    UpdateMemberMetadataRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    UpdateMemberMetadataRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    UpdateMemberMetadataRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    UpdateMemberMetadataRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    UpdateMemberMetadataRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    UpdateMemberMetadataRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    UpdateMemberMetadataRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    UpdateMemberMetadataRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    UpdateMemberMetadataRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    UpdateMemberMetadataRequest.prototype.getGuildModelName = function () {
        return this.guildModelName;
    };
    UpdateMemberMetadataRequest.prototype.setGuildModelName = function (guildModelName) {
        this.guildModelName = guildModelName;
        return this;
    };
    UpdateMemberMetadataRequest.prototype.withGuildModelName = function (guildModelName) {
        this.guildModelName = guildModelName;
        return this;
    };
    UpdateMemberMetadataRequest.prototype.getGuildName = function () {
        return this.guildName;
    };
    UpdateMemberMetadataRequest.prototype.setGuildName = function (guildName) {
        this.guildName = guildName;
        return this;
    };
    UpdateMemberMetadataRequest.prototype.withGuildName = function (guildName) {
        this.guildName = guildName;
        return this;
    };
    UpdateMemberMetadataRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    UpdateMemberMetadataRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    UpdateMemberMetadataRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    UpdateMemberMetadataRequest.prototype.getMetadata = function () {
        return this.metadata;
    };
    UpdateMemberMetadataRequest.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    UpdateMemberMetadataRequest.prototype.withMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    UpdateMemberMetadataRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    UpdateMemberMetadataRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    UpdateMemberMetadataRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    UpdateMemberMetadataRequest.fromDict = function (data) {
        return new UpdateMemberMetadataRequest()
            .withNamespaceName(data["namespaceName"])
            .withGuildModelName(data["guildModelName"])
            .withGuildName(data["guildName"])
            .withAccessToken(data["accessToken"])
            .withMetadata(data["metadata"]);
    };
    UpdateMemberMetadataRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "guildModelName": this.getGuildModelName(),
            "guildName": this.getGuildName(),
            "accessToken": this.getAccessToken(),
            "metadata": this.getMetadata(),
        };
    };
    return UpdateMemberMetadataRequest;
}());
exports.default = UpdateMemberMetadataRequest;
//# sourceMappingURL=UpdateMemberMetadataRequest.js.map
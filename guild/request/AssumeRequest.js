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
var AssumeRequest = /** @class */ (function () {
    function AssumeRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.accessToken = null;
        this.guildModelName = null;
        this.guildName = null;
        this.duplicationAvoider = null;
    }
    AssumeRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    AssumeRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    AssumeRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    AssumeRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    AssumeRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    AssumeRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    AssumeRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    AssumeRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    AssumeRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    AssumeRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    AssumeRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    AssumeRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    AssumeRequest.prototype.getGuildModelName = function () {
        return this.guildModelName;
    };
    AssumeRequest.prototype.setGuildModelName = function (guildModelName) {
        this.guildModelName = guildModelName;
        return this;
    };
    AssumeRequest.prototype.withGuildModelName = function (guildModelName) {
        this.guildModelName = guildModelName;
        return this;
    };
    AssumeRequest.prototype.getGuildName = function () {
        return this.guildName;
    };
    AssumeRequest.prototype.setGuildName = function (guildName) {
        this.guildName = guildName;
        return this;
    };
    AssumeRequest.prototype.withGuildName = function (guildName) {
        this.guildName = guildName;
        return this;
    };
    AssumeRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    AssumeRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    AssumeRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    AssumeRequest.fromDict = function (data) {
        return new AssumeRequest()
            .withNamespaceName(data["namespaceName"])
            .withAccessToken(data["accessToken"])
            .withGuildModelName(data["guildModelName"])
            .withGuildName(data["guildName"]);
    };
    AssumeRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "accessToken": this.getAccessToken(),
            "guildModelName": this.getGuildModelName(),
            "guildName": this.getGuildName(),
        };
    };
    return AssumeRequest;
}());
exports.default = AssumeRequest;
//# sourceMappingURL=AssumeRequest.js.map
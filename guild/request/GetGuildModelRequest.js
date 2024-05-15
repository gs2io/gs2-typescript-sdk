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
var GetGuildModelRequest = /** @class */ (function () {
    function GetGuildModelRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.guildModelName = null;
    }
    GetGuildModelRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetGuildModelRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetGuildModelRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetGuildModelRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetGuildModelRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetGuildModelRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetGuildModelRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    GetGuildModelRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetGuildModelRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetGuildModelRequest.prototype.getGuildModelName = function () {
        return this.guildModelName;
    };
    GetGuildModelRequest.prototype.setGuildModelName = function (guildModelName) {
        this.guildModelName = guildModelName;
        return this;
    };
    GetGuildModelRequest.prototype.withGuildModelName = function (guildModelName) {
        this.guildModelName = guildModelName;
        return this;
    };
    GetGuildModelRequest.fromDict = function (data) {
        return new GetGuildModelRequest()
            .withNamespaceName(data["namespaceName"])
            .withGuildModelName(data["guildModelName"]);
    };
    GetGuildModelRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "guildModelName": this.getGuildModelName(),
        };
    };
    return GetGuildModelRequest;
}());
exports.default = GetGuildModelRequest;
//# sourceMappingURL=GetGuildModelRequest.js.map
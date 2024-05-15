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
var GetGuildModelMasterRequest = /** @class */ (function () {
    function GetGuildModelMasterRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.guildModelName = null;
    }
    GetGuildModelMasterRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetGuildModelMasterRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetGuildModelMasterRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetGuildModelMasterRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetGuildModelMasterRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetGuildModelMasterRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetGuildModelMasterRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    GetGuildModelMasterRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetGuildModelMasterRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetGuildModelMasterRequest.prototype.getGuildModelName = function () {
        return this.guildModelName;
    };
    GetGuildModelMasterRequest.prototype.setGuildModelName = function (guildModelName) {
        this.guildModelName = guildModelName;
        return this;
    };
    GetGuildModelMasterRequest.prototype.withGuildModelName = function (guildModelName) {
        this.guildModelName = guildModelName;
        return this;
    };
    GetGuildModelMasterRequest.fromDict = function (data) {
        return new GetGuildModelMasterRequest()
            .withNamespaceName(data["namespaceName"])
            .withGuildModelName(data["guildModelName"]);
    };
    GetGuildModelMasterRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "guildModelName": this.getGuildModelName(),
        };
    };
    return GetGuildModelMasterRequest;
}());
exports.default = GetGuildModelMasterRequest;
//# sourceMappingURL=GetGuildModelMasterRequest.js.map
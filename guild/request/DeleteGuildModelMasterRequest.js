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
var DeleteGuildModelMasterRequest = /** @class */ (function () {
    function DeleteGuildModelMasterRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.guildModelName = null;
    }
    DeleteGuildModelMasterRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DeleteGuildModelMasterRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DeleteGuildModelMasterRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DeleteGuildModelMasterRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DeleteGuildModelMasterRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DeleteGuildModelMasterRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DeleteGuildModelMasterRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DeleteGuildModelMasterRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DeleteGuildModelMasterRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DeleteGuildModelMasterRequest.prototype.getGuildModelName = function () {
        return this.guildModelName;
    };
    DeleteGuildModelMasterRequest.prototype.setGuildModelName = function (guildModelName) {
        this.guildModelName = guildModelName;
        return this;
    };
    DeleteGuildModelMasterRequest.prototype.withGuildModelName = function (guildModelName) {
        this.guildModelName = guildModelName;
        return this;
    };
    DeleteGuildModelMasterRequest.fromDict = function (data) {
        return new DeleteGuildModelMasterRequest()
            .withNamespaceName(data["namespaceName"])
            .withGuildModelName(data["guildModelName"]);
    };
    DeleteGuildModelMasterRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "guildModelName": this.getGuildModelName(),
        };
    };
    return DeleteGuildModelMasterRequest;
}());
exports.default = DeleteGuildModelMasterRequest;
//# sourceMappingURL=DeleteGuildModelMasterRequest.js.map
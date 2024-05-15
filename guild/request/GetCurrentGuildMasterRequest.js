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
var GetCurrentGuildMasterRequest = /** @class */ (function () {
    function GetCurrentGuildMasterRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
    }
    GetCurrentGuildMasterRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetCurrentGuildMasterRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetCurrentGuildMasterRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetCurrentGuildMasterRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetCurrentGuildMasterRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetCurrentGuildMasterRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetCurrentGuildMasterRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    GetCurrentGuildMasterRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetCurrentGuildMasterRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetCurrentGuildMasterRequest.fromDict = function (data) {
        return new GetCurrentGuildMasterRequest()
            .withNamespaceName(data["namespaceName"]);
    };
    GetCurrentGuildMasterRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
        };
    };
    return GetCurrentGuildMasterRequest;
}());
exports.default = GetCurrentGuildMasterRequest;
//# sourceMappingURL=GetCurrentGuildMasterRequest.js.map
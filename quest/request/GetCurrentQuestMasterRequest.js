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
var GetCurrentQuestMasterRequest = /** @class */ (function () {
    function GetCurrentQuestMasterRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
    }
    GetCurrentQuestMasterRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetCurrentQuestMasterRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetCurrentQuestMasterRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetCurrentQuestMasterRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetCurrentQuestMasterRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetCurrentQuestMasterRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetCurrentQuestMasterRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    GetCurrentQuestMasterRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetCurrentQuestMasterRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetCurrentQuestMasterRequest.fromDict = function (data) {
        return new GetCurrentQuestMasterRequest()
            .withNamespaceName(data["namespaceName"]);
    };
    GetCurrentQuestMasterRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
        };
    };
    return GetCurrentQuestMasterRequest;
}());
exports.default = GetCurrentQuestMasterRequest;
//# sourceMappingURL=GetCurrentQuestMasterRequest.js.map
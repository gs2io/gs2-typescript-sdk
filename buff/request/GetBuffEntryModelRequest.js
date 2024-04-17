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
var GetBuffEntryModelRequest = /** @class */ (function () {
    function GetBuffEntryModelRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.buffEntryName = null;
    }
    GetBuffEntryModelRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetBuffEntryModelRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetBuffEntryModelRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetBuffEntryModelRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetBuffEntryModelRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetBuffEntryModelRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetBuffEntryModelRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    GetBuffEntryModelRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetBuffEntryModelRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetBuffEntryModelRequest.prototype.getBuffEntryName = function () {
        return this.buffEntryName;
    };
    GetBuffEntryModelRequest.prototype.setBuffEntryName = function (buffEntryName) {
        this.buffEntryName = buffEntryName;
        return this;
    };
    GetBuffEntryModelRequest.prototype.withBuffEntryName = function (buffEntryName) {
        this.buffEntryName = buffEntryName;
        return this;
    };
    GetBuffEntryModelRequest.fromDict = function (data) {
        return new GetBuffEntryModelRequest()
            .withNamespaceName(data["namespaceName"])
            .withBuffEntryName(data["buffEntryName"]);
    };
    GetBuffEntryModelRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "buffEntryName": this.getBuffEntryName(),
        };
    };
    return GetBuffEntryModelRequest;
}());
exports.default = GetBuffEntryModelRequest;
//# sourceMappingURL=GetBuffEntryModelRequest.js.map
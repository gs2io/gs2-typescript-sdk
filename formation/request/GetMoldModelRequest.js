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
var GetMoldModelRequest = /** @class */ (function () {
    function GetMoldModelRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.moldModelName = null;
    }
    GetMoldModelRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetMoldModelRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetMoldModelRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetMoldModelRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetMoldModelRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetMoldModelRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetMoldModelRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    GetMoldModelRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetMoldModelRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetMoldModelRequest.prototype.getMoldModelName = function () {
        return this.moldModelName;
    };
    GetMoldModelRequest.prototype.setMoldModelName = function (moldModelName) {
        this.moldModelName = moldModelName;
        return this;
    };
    GetMoldModelRequest.prototype.withMoldModelName = function (moldModelName) {
        this.moldModelName = moldModelName;
        return this;
    };
    GetMoldModelRequest.fromDict = function (data) {
        return new GetMoldModelRequest()
            .withNamespaceName(data["namespaceName"])
            .withMoldModelName(data["moldModelName"]);
    };
    GetMoldModelRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "moldModelName": this.getMoldModelName(),
        };
    };
    return GetMoldModelRequest;
}());
exports.default = GetMoldModelRequest;
//# sourceMappingURL=GetMoldModelRequest.js.map
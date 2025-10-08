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
var GetStoreContentModelRequest = /** @class */ (function () {
    function GetStoreContentModelRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.contentName = null;
    }
    GetStoreContentModelRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetStoreContentModelRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetStoreContentModelRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetStoreContentModelRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetStoreContentModelRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetStoreContentModelRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetStoreContentModelRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    GetStoreContentModelRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetStoreContentModelRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetStoreContentModelRequest.prototype.getContentName = function () {
        return this.contentName;
    };
    GetStoreContentModelRequest.prototype.setContentName = function (contentName) {
        this.contentName = contentName;
        return this;
    };
    GetStoreContentModelRequest.prototype.withContentName = function (contentName) {
        this.contentName = contentName;
        return this;
    };
    GetStoreContentModelRequest.fromDict = function (data) {
        return new GetStoreContentModelRequest()
            .withNamespaceName(data["namespaceName"])
            .withContentName(data["contentName"]);
    };
    GetStoreContentModelRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "contentName": this.getContentName(),
        };
    };
    return GetStoreContentModelRequest;
}());
exports.default = GetStoreContentModelRequest;
//# sourceMappingURL=GetStoreContentModelRequest.js.map
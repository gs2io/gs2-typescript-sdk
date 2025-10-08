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
var GetStoreSubscriptionContentModelRequest = /** @class */ (function () {
    function GetStoreSubscriptionContentModelRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.contentName = null;
    }
    GetStoreSubscriptionContentModelRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetStoreSubscriptionContentModelRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetStoreSubscriptionContentModelRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetStoreSubscriptionContentModelRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetStoreSubscriptionContentModelRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetStoreSubscriptionContentModelRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetStoreSubscriptionContentModelRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    GetStoreSubscriptionContentModelRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetStoreSubscriptionContentModelRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetStoreSubscriptionContentModelRequest.prototype.getContentName = function () {
        return this.contentName;
    };
    GetStoreSubscriptionContentModelRequest.prototype.setContentName = function (contentName) {
        this.contentName = contentName;
        return this;
    };
    GetStoreSubscriptionContentModelRequest.prototype.withContentName = function (contentName) {
        this.contentName = contentName;
        return this;
    };
    GetStoreSubscriptionContentModelRequest.fromDict = function (data) {
        return new GetStoreSubscriptionContentModelRequest()
            .withNamespaceName(data["namespaceName"])
            .withContentName(data["contentName"]);
    };
    GetStoreSubscriptionContentModelRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "contentName": this.getContentName(),
        };
    };
    return GetStoreSubscriptionContentModelRequest;
}());
exports.default = GetStoreSubscriptionContentModelRequest;
//# sourceMappingURL=GetStoreSubscriptionContentModelRequest.js.map
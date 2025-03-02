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
var GetStoreSubscriptionContentModelMasterRequest = /** @class */ (function () {
    function GetStoreSubscriptionContentModelMasterRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.contentName = null;
    }
    GetStoreSubscriptionContentModelMasterRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetStoreSubscriptionContentModelMasterRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetStoreSubscriptionContentModelMasterRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetStoreSubscriptionContentModelMasterRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetStoreSubscriptionContentModelMasterRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetStoreSubscriptionContentModelMasterRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetStoreSubscriptionContentModelMasterRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    GetStoreSubscriptionContentModelMasterRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetStoreSubscriptionContentModelMasterRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetStoreSubscriptionContentModelMasterRequest.prototype.getContentName = function () {
        return this.contentName;
    };
    GetStoreSubscriptionContentModelMasterRequest.prototype.setContentName = function (contentName) {
        this.contentName = contentName;
        return this;
    };
    GetStoreSubscriptionContentModelMasterRequest.prototype.withContentName = function (contentName) {
        this.contentName = contentName;
        return this;
    };
    GetStoreSubscriptionContentModelMasterRequest.fromDict = function (data) {
        return new GetStoreSubscriptionContentModelMasterRequest()
            .withNamespaceName(data["namespaceName"])
            .withContentName(data["contentName"]);
    };
    GetStoreSubscriptionContentModelMasterRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "contentName": this.getContentName(),
        };
    };
    return GetStoreSubscriptionContentModelMasterRequest;
}());
exports.default = GetStoreSubscriptionContentModelMasterRequest;
//# sourceMappingURL=GetStoreSubscriptionContentModelMasterRequest.js.map
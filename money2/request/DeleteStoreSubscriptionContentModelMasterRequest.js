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
var DeleteStoreSubscriptionContentModelMasterRequest = /** @class */ (function () {
    function DeleteStoreSubscriptionContentModelMasterRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.contentName = null;
    }
    DeleteStoreSubscriptionContentModelMasterRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DeleteStoreSubscriptionContentModelMasterRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DeleteStoreSubscriptionContentModelMasterRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DeleteStoreSubscriptionContentModelMasterRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DeleteStoreSubscriptionContentModelMasterRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DeleteStoreSubscriptionContentModelMasterRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DeleteStoreSubscriptionContentModelMasterRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DeleteStoreSubscriptionContentModelMasterRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DeleteStoreSubscriptionContentModelMasterRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DeleteStoreSubscriptionContentModelMasterRequest.prototype.getContentName = function () {
        return this.contentName;
    };
    DeleteStoreSubscriptionContentModelMasterRequest.prototype.setContentName = function (contentName) {
        this.contentName = contentName;
        return this;
    };
    DeleteStoreSubscriptionContentModelMasterRequest.prototype.withContentName = function (contentName) {
        this.contentName = contentName;
        return this;
    };
    DeleteStoreSubscriptionContentModelMasterRequest.fromDict = function (data) {
        return new DeleteStoreSubscriptionContentModelMasterRequest()
            .withNamespaceName(data["namespaceName"])
            .withContentName(data["contentName"]);
    };
    DeleteStoreSubscriptionContentModelMasterRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "contentName": this.getContentName(),
        };
    };
    return DeleteStoreSubscriptionContentModelMasterRequest;
}());
exports.default = DeleteStoreSubscriptionContentModelMasterRequest;
//# sourceMappingURL=DeleteStoreSubscriptionContentModelMasterRequest.js.map
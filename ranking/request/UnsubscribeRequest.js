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
var UnsubscribeRequest = /** @class */ (function () {
    function UnsubscribeRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.categoryName = null;
        this.accessToken = null;
        this.targetUserId = null;
    }
    UnsubscribeRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    UnsubscribeRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    UnsubscribeRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    UnsubscribeRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    UnsubscribeRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    UnsubscribeRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    UnsubscribeRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    UnsubscribeRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    UnsubscribeRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    UnsubscribeRequest.prototype.getCategoryName = function () {
        return this.categoryName;
    };
    UnsubscribeRequest.prototype.setCategoryName = function (categoryName) {
        this.categoryName = categoryName;
        return this;
    };
    UnsubscribeRequest.prototype.withCategoryName = function (categoryName) {
        this.categoryName = categoryName;
        return this;
    };
    UnsubscribeRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    UnsubscribeRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    UnsubscribeRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    UnsubscribeRequest.prototype.getTargetUserId = function () {
        return this.targetUserId;
    };
    UnsubscribeRequest.prototype.setTargetUserId = function (targetUserId) {
        this.targetUserId = targetUserId;
        return this;
    };
    UnsubscribeRequest.prototype.withTargetUserId = function (targetUserId) {
        this.targetUserId = targetUserId;
        return this;
    };
    UnsubscribeRequest.fromDict = function (data) {
        return new UnsubscribeRequest()
            .withNamespaceName(data["namespaceName"])
            .withCategoryName(data["categoryName"])
            .withAccessToken(data["accessToken"])
            .withTargetUserId(data["targetUserId"]);
    };
    UnsubscribeRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "categoryName": this.getCategoryName(),
            "accessToken": this.getAccessToken(),
            "targetUserId": this.getTargetUserId(),
        };
    };
    return UnsubscribeRequest;
}());
export default UnsubscribeRequest;
//# sourceMappingURL=UnsubscribeRequest.js.map
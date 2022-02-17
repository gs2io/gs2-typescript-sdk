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
var SetUserIdRequest = /** @class */ (function () {
    function SetUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.accessToken = null;
        this.allowConcurrentAccess = null;
    }
    SetUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    SetUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    SetUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    SetUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    SetUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    SetUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    SetUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    SetUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    SetUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    SetUserIdRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    SetUserIdRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    SetUserIdRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    SetUserIdRequest.prototype.getAllowConcurrentAccess = function () {
        return this.allowConcurrentAccess;
    };
    SetUserIdRequest.prototype.setAllowConcurrentAccess = function (allowConcurrentAccess) {
        this.allowConcurrentAccess = allowConcurrentAccess;
        return this;
    };
    SetUserIdRequest.prototype.withAllowConcurrentAccess = function (allowConcurrentAccess) {
        this.allowConcurrentAccess = allowConcurrentAccess;
        return this;
    };
    SetUserIdRequest.fromDict = function (data) {
        return new SetUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withAccessToken(data["accessToken"])
            .withAllowConcurrentAccess(data["allowConcurrentAccess"]);
    };
    SetUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "accessToken": this.getAccessToken(),
            "allowConcurrentAccess": this.getAllowConcurrentAccess(),
        };
    };
    return SetUserIdRequest;
}());
export default SetUserIdRequest;
//# sourceMappingURL=SetUserIdRequest.js.map
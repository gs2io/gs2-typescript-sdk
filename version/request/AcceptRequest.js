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
var AcceptRequest = /** @class */ (function () {
    function AcceptRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.versionName = null;
        this.accessToken = null;
    }
    AcceptRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    AcceptRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    AcceptRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    AcceptRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    AcceptRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    AcceptRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    AcceptRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    AcceptRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    AcceptRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    AcceptRequest.prototype.getVersionName = function () {
        return this.versionName;
    };
    AcceptRequest.prototype.setVersionName = function (versionName) {
        this.versionName = versionName;
        return this;
    };
    AcceptRequest.prototype.withVersionName = function (versionName) {
        this.versionName = versionName;
        return this;
    };
    AcceptRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    AcceptRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    AcceptRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    AcceptRequest.fromDict = function (data) {
        return new AcceptRequest()
            .withNamespaceName(data["namespaceName"])
            .withVersionName(data["versionName"])
            .withAccessToken(data["accessToken"]);
    };
    AcceptRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "versionName": this.getVersionName(),
            "accessToken": this.getAccessToken(),
        };
    };
    return AcceptRequest;
}());
export default AcceptRequest;
//# sourceMappingURL=AcceptRequest.js.map
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
var DeleteAwaitRequest = /** @class */ (function () {
    function DeleteAwaitRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.accessToken = null;
        this.rateName = null;
        this.awaitName = null;
    }
    DeleteAwaitRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DeleteAwaitRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DeleteAwaitRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DeleteAwaitRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DeleteAwaitRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DeleteAwaitRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DeleteAwaitRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DeleteAwaitRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DeleteAwaitRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DeleteAwaitRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    DeleteAwaitRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    DeleteAwaitRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    DeleteAwaitRequest.prototype.getRateName = function () {
        return this.rateName;
    };
    DeleteAwaitRequest.prototype.setRateName = function (rateName) {
        this.rateName = rateName;
        return this;
    };
    DeleteAwaitRequest.prototype.withRateName = function (rateName) {
        this.rateName = rateName;
        return this;
    };
    DeleteAwaitRequest.prototype.getAwaitName = function () {
        return this.awaitName;
    };
    DeleteAwaitRequest.prototype.setAwaitName = function (awaitName) {
        this.awaitName = awaitName;
        return this;
    };
    DeleteAwaitRequest.prototype.withAwaitName = function (awaitName) {
        this.awaitName = awaitName;
        return this;
    };
    DeleteAwaitRequest.fromDict = function (data) {
        return new DeleteAwaitRequest()
            .withNamespaceName(data["namespaceName"])
            .withAccessToken(data["accessToken"])
            .withRateName(data["rateName"])
            .withAwaitName(data["awaitName"]);
    };
    DeleteAwaitRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "accessToken": this.getAccessToken(),
            "rateName": this.getRateName(),
            "awaitName": this.getAwaitName(),
        };
    };
    return DeleteAwaitRequest;
}());
export default DeleteAwaitRequest;
//# sourceMappingURL=DeleteAwaitRequest.js.map
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
var DeleteFirebaseTokenRequest = /** @class */ (function () {
    function DeleteFirebaseTokenRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.accessToken = null;
    }
    DeleteFirebaseTokenRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DeleteFirebaseTokenRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DeleteFirebaseTokenRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DeleteFirebaseTokenRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DeleteFirebaseTokenRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DeleteFirebaseTokenRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DeleteFirebaseTokenRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DeleteFirebaseTokenRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DeleteFirebaseTokenRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DeleteFirebaseTokenRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    DeleteFirebaseTokenRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    DeleteFirebaseTokenRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    DeleteFirebaseTokenRequest.fromDict = function (data) {
        return new DeleteFirebaseTokenRequest()
            .withNamespaceName(data["namespaceName"])
            .withAccessToken(data["accessToken"]);
    };
    DeleteFirebaseTokenRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "accessToken": this.getAccessToken(),
        };
    };
    return DeleteFirebaseTokenRequest;
}());
export default DeleteFirebaseTokenRequest;
//# sourceMappingURL=DeleteFirebaseTokenRequest.js.map
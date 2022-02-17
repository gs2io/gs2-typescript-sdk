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
var GetFirebaseTokenByUserIdRequest = /** @class */ (function () {
    function GetFirebaseTokenByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.userId = null;
    }
    GetFirebaseTokenByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetFirebaseTokenByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetFirebaseTokenByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetFirebaseTokenByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetFirebaseTokenByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetFirebaseTokenByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetFirebaseTokenByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    GetFirebaseTokenByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetFirebaseTokenByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetFirebaseTokenByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    GetFirebaseTokenByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    GetFirebaseTokenByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    GetFirebaseTokenByUserIdRequest.fromDict = function (data) {
        return new GetFirebaseTokenByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withUserId(data["userId"]);
    };
    GetFirebaseTokenByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "userId": this.getUserId(),
        };
    };
    return GetFirebaseTokenByUserIdRequest;
}());
export default GetFirebaseTokenByUserIdRequest;
//# sourceMappingURL=GetFirebaseTokenByUserIdRequest.js.map
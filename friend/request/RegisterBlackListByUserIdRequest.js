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
var RegisterBlackListByUserIdRequest = /** @class */ (function () {
    function RegisterBlackListByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.userId = null;
        this.targetUserId = null;
    }
    RegisterBlackListByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    RegisterBlackListByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    RegisterBlackListByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    RegisterBlackListByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    RegisterBlackListByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    RegisterBlackListByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    RegisterBlackListByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    RegisterBlackListByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    RegisterBlackListByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    RegisterBlackListByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    RegisterBlackListByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    RegisterBlackListByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    RegisterBlackListByUserIdRequest.prototype.getTargetUserId = function () {
        return this.targetUserId;
    };
    RegisterBlackListByUserIdRequest.prototype.setTargetUserId = function (targetUserId) {
        this.targetUserId = targetUserId;
        return this;
    };
    RegisterBlackListByUserIdRequest.prototype.withTargetUserId = function (targetUserId) {
        this.targetUserId = targetUserId;
        return this;
    };
    RegisterBlackListByUserIdRequest.fromDict = function (data) {
        return new RegisterBlackListByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withUserId(data["userId"])
            .withTargetUserId(data["targetUserId"]);
    };
    RegisterBlackListByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "userId": this.getUserId(),
            "targetUserId": this.getTargetUserId(),
        };
    };
    return RegisterBlackListByUserIdRequest;
}());
export default RegisterBlackListByUserIdRequest;
//# sourceMappingURL=RegisterBlackListByUserIdRequest.js.map
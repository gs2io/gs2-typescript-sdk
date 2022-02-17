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
var DeleteRequestByUserIdRequest = /** @class */ (function () {
    function DeleteRequestByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.userId = null;
        this.targetUserId = null;
    }
    DeleteRequestByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DeleteRequestByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DeleteRequestByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DeleteRequestByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DeleteRequestByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DeleteRequestByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DeleteRequestByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DeleteRequestByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DeleteRequestByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DeleteRequestByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    DeleteRequestByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    DeleteRequestByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    DeleteRequestByUserIdRequest.prototype.getTargetUserId = function () {
        return this.targetUserId;
    };
    DeleteRequestByUserIdRequest.prototype.setTargetUserId = function (targetUserId) {
        this.targetUserId = targetUserId;
        return this;
    };
    DeleteRequestByUserIdRequest.prototype.withTargetUserId = function (targetUserId) {
        this.targetUserId = targetUserId;
        return this;
    };
    DeleteRequestByUserIdRequest.fromDict = function (data) {
        return new DeleteRequestByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withUserId(data["userId"])
            .withTargetUserId(data["targetUserId"]);
    };
    DeleteRequestByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "userId": this.getUserId(),
            "targetUserId": this.getTargetUserId(),
        };
    };
    return DeleteRequestByUserIdRequest;
}());
export default DeleteRequestByUserIdRequest;
//# sourceMappingURL=DeleteRequestByUserIdRequest.js.map
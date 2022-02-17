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
var DeleteDeadLetterJobByUserIdRequest = /** @class */ (function () {
    function DeleteDeadLetterJobByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.userId = null;
        this.deadLetterJobName = null;
    }
    DeleteDeadLetterJobByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DeleteDeadLetterJobByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DeleteDeadLetterJobByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DeleteDeadLetterJobByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DeleteDeadLetterJobByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DeleteDeadLetterJobByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DeleteDeadLetterJobByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DeleteDeadLetterJobByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DeleteDeadLetterJobByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DeleteDeadLetterJobByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    DeleteDeadLetterJobByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    DeleteDeadLetterJobByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    DeleteDeadLetterJobByUserIdRequest.prototype.getDeadLetterJobName = function () {
        return this.deadLetterJobName;
    };
    DeleteDeadLetterJobByUserIdRequest.prototype.setDeadLetterJobName = function (deadLetterJobName) {
        this.deadLetterJobName = deadLetterJobName;
        return this;
    };
    DeleteDeadLetterJobByUserIdRequest.prototype.withDeadLetterJobName = function (deadLetterJobName) {
        this.deadLetterJobName = deadLetterJobName;
        return this;
    };
    DeleteDeadLetterJobByUserIdRequest.fromDict = function (data) {
        return new DeleteDeadLetterJobByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withUserId(data["userId"])
            .withDeadLetterJobName(data["deadLetterJobName"]);
    };
    DeleteDeadLetterJobByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "userId": this.getUserId(),
            "deadLetterJobName": this.getDeadLetterJobName(),
        };
    };
    return DeleteDeadLetterJobByUserIdRequest;
}());
exports.default = DeleteDeadLetterJobByUserIdRequest;
//# sourceMappingURL=DeleteDeadLetterJobByUserIdRequest.js.map
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
var GetDeadLetterJobByUserIdRequest = /** @class */ (function () {
    function GetDeadLetterJobByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.userId = null;
        this.deadLetterJobName = null;
    }
    GetDeadLetterJobByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetDeadLetterJobByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetDeadLetterJobByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetDeadLetterJobByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetDeadLetterJobByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetDeadLetterJobByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetDeadLetterJobByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    GetDeadLetterJobByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetDeadLetterJobByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetDeadLetterJobByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    GetDeadLetterJobByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    GetDeadLetterJobByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    GetDeadLetterJobByUserIdRequest.prototype.getDeadLetterJobName = function () {
        return this.deadLetterJobName;
    };
    GetDeadLetterJobByUserIdRequest.prototype.setDeadLetterJobName = function (deadLetterJobName) {
        this.deadLetterJobName = deadLetterJobName;
        return this;
    };
    GetDeadLetterJobByUserIdRequest.prototype.withDeadLetterJobName = function (deadLetterJobName) {
        this.deadLetterJobName = deadLetterJobName;
        return this;
    };
    GetDeadLetterJobByUserIdRequest.fromDict = function (data) {
        return new GetDeadLetterJobByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withUserId(data["userId"])
            .withDeadLetterJobName(data["deadLetterJobName"]);
    };
    GetDeadLetterJobByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "userId": this.getUserId(),
            "deadLetterJobName": this.getDeadLetterJobName(),
        };
    };
    return GetDeadLetterJobByUserIdRequest;
}());
export default GetDeadLetterJobByUserIdRequest;
//# sourceMappingURL=GetDeadLetterJobByUserIdRequest.js.map
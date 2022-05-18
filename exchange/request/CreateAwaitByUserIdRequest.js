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
var CreateAwaitByUserIdRequest = /** @class */ (function () {
    function CreateAwaitByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.userId = null;
        this.rateName = null;
        this.count = null;
        this.duplicationAvoider = null;
    }
    CreateAwaitByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    CreateAwaitByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    CreateAwaitByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    CreateAwaitByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    CreateAwaitByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    CreateAwaitByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    CreateAwaitByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    CreateAwaitByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    CreateAwaitByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    CreateAwaitByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    CreateAwaitByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    CreateAwaitByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    CreateAwaitByUserIdRequest.prototype.getRateName = function () {
        return this.rateName;
    };
    CreateAwaitByUserIdRequest.prototype.setRateName = function (rateName) {
        this.rateName = rateName;
        return this;
    };
    CreateAwaitByUserIdRequest.prototype.withRateName = function (rateName) {
        this.rateName = rateName;
        return this;
    };
    CreateAwaitByUserIdRequest.prototype.getCount = function () {
        return this.count;
    };
    CreateAwaitByUserIdRequest.prototype.setCount = function (count) {
        this.count = count;
        return this;
    };
    CreateAwaitByUserIdRequest.prototype.withCount = function (count) {
        this.count = count;
        return this;
    };
    CreateAwaitByUserIdRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    CreateAwaitByUserIdRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    CreateAwaitByUserIdRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    CreateAwaitByUserIdRequest.fromDict = function (data) {
        return new CreateAwaitByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withUserId(data["userId"])
            .withRateName(data["rateName"])
            .withCount(data["count"]);
    };
    CreateAwaitByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "userId": this.getUserId(),
            "rateName": this.getRateName(),
            "count": this.getCount(),
        };
    };
    return CreateAwaitByUserIdRequest;
}());
exports.default = CreateAwaitByUserIdRequest;
//# sourceMappingURL=CreateAwaitByUserIdRequest.js.map
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
var AcquirePointByUserIdRequest = /** @class */ (function () {
    function AcquirePointByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.userId = null;
        this.point = null;
        this.duplicationAvoider = null;
    }
    AcquirePointByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    AcquirePointByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    AcquirePointByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    AcquirePointByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    AcquirePointByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    AcquirePointByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    AcquirePointByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    AcquirePointByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    AcquirePointByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    AcquirePointByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    AcquirePointByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    AcquirePointByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    AcquirePointByUserIdRequest.prototype.getPoint = function () {
        return this.point;
    };
    AcquirePointByUserIdRequest.prototype.setPoint = function (point) {
        this.point = point;
        return this;
    };
    AcquirePointByUserIdRequest.prototype.withPoint = function (point) {
        this.point = point;
        return this;
    };
    AcquirePointByUserIdRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    AcquirePointByUserIdRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    AcquirePointByUserIdRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    AcquirePointByUserIdRequest.fromDict = function (data) {
        return new AcquirePointByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withUserId(data["userId"])
            .withPoint(data["point"]);
    };
    AcquirePointByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "userId": this.getUserId(),
            "point": this.getPoint(),
        };
    };
    return AcquirePointByUserIdRequest;
}());
exports.default = AcquirePointByUserIdRequest;
//# sourceMappingURL=AcquirePointByUserIdRequest.js.map
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
var DeleteRatingRequest = /** @class */ (function () {
    function DeleteRatingRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.userId = null;
        this.ratingName = null;
        this.duplicationAvoider = null;
    }
    DeleteRatingRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DeleteRatingRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DeleteRatingRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DeleteRatingRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DeleteRatingRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DeleteRatingRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DeleteRatingRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DeleteRatingRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DeleteRatingRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DeleteRatingRequest.prototype.getUserId = function () {
        return this.userId;
    };
    DeleteRatingRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    DeleteRatingRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    DeleteRatingRequest.prototype.getRatingName = function () {
        return this.ratingName;
    };
    DeleteRatingRequest.prototype.setRatingName = function (ratingName) {
        this.ratingName = ratingName;
        return this;
    };
    DeleteRatingRequest.prototype.withRatingName = function (ratingName) {
        this.ratingName = ratingName;
        return this;
    };
    DeleteRatingRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    DeleteRatingRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    DeleteRatingRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    DeleteRatingRequest.fromDict = function (data) {
        return new DeleteRatingRequest()
            .withNamespaceName(data["namespaceName"])
            .withUserId(data["userId"])
            .withRatingName(data["ratingName"]);
    };
    DeleteRatingRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "userId": this.getUserId(),
            "ratingName": this.getRatingName(),
        };
    };
    return DeleteRatingRequest;
}());
exports.default = DeleteRatingRequest;
//# sourceMappingURL=DeleteRatingRequest.js.map
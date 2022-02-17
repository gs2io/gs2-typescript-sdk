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
var GetRatingByUserIdRequest = /** @class */ (function () {
    function GetRatingByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.userId = null;
        this.ratingName = null;
    }
    GetRatingByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetRatingByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetRatingByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetRatingByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetRatingByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetRatingByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetRatingByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    GetRatingByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetRatingByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetRatingByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    GetRatingByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    GetRatingByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    GetRatingByUserIdRequest.prototype.getRatingName = function () {
        return this.ratingName;
    };
    GetRatingByUserIdRequest.prototype.setRatingName = function (ratingName) {
        this.ratingName = ratingName;
        return this;
    };
    GetRatingByUserIdRequest.prototype.withRatingName = function (ratingName) {
        this.ratingName = ratingName;
        return this;
    };
    GetRatingByUserIdRequest.fromDict = function (data) {
        return new GetRatingByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withUserId(data["userId"])
            .withRatingName(data["ratingName"]);
    };
    GetRatingByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "userId": this.getUserId(),
            "ratingName": this.getRatingName(),
        };
    };
    return GetRatingByUserIdRequest;
}());
exports.default = GetRatingByUserIdRequest;
//# sourceMappingURL=GetRatingByUserIdRequest.js.map
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
var PutScoreByUserIdRequest = /** @class */ (function () {
    function PutScoreByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.categoryName = null;
        this.userId = null;
        this.score = null;
        this.metadata = null;
    }
    PutScoreByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    PutScoreByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    PutScoreByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    PutScoreByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    PutScoreByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    PutScoreByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    PutScoreByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    PutScoreByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    PutScoreByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    PutScoreByUserIdRequest.prototype.getCategoryName = function () {
        return this.categoryName;
    };
    PutScoreByUserIdRequest.prototype.setCategoryName = function (categoryName) {
        this.categoryName = categoryName;
        return this;
    };
    PutScoreByUserIdRequest.prototype.withCategoryName = function (categoryName) {
        this.categoryName = categoryName;
        return this;
    };
    PutScoreByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    PutScoreByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    PutScoreByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    PutScoreByUserIdRequest.prototype.getScore = function () {
        return this.score;
    };
    PutScoreByUserIdRequest.prototype.setScore = function (score) {
        this.score = score;
        return this;
    };
    PutScoreByUserIdRequest.prototype.withScore = function (score) {
        this.score = score;
        return this;
    };
    PutScoreByUserIdRequest.prototype.getMetadata = function () {
        return this.metadata;
    };
    PutScoreByUserIdRequest.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    PutScoreByUserIdRequest.prototype.withMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    PutScoreByUserIdRequest.fromDict = function (data) {
        return new PutScoreByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withCategoryName(data["categoryName"])
            .withUserId(data["userId"])
            .withScore(data["score"])
            .withMetadata(data["metadata"]);
    };
    PutScoreByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "categoryName": this.getCategoryName(),
            "userId": this.getUserId(),
            "score": this.getScore(),
            "metadata": this.getMetadata(),
        };
    };
    return PutScoreByUserIdRequest;
}());
export default PutScoreByUserIdRequest;
//# sourceMappingURL=PutScoreByUserIdRequest.js.map
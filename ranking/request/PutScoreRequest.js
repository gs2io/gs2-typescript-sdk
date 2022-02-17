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
var PutScoreRequest = /** @class */ (function () {
    function PutScoreRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.categoryName = null;
        this.accessToken = null;
        this.score = null;
        this.metadata = null;
    }
    PutScoreRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    PutScoreRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    PutScoreRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    PutScoreRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    PutScoreRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    PutScoreRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    PutScoreRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    PutScoreRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    PutScoreRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    PutScoreRequest.prototype.getCategoryName = function () {
        return this.categoryName;
    };
    PutScoreRequest.prototype.setCategoryName = function (categoryName) {
        this.categoryName = categoryName;
        return this;
    };
    PutScoreRequest.prototype.withCategoryName = function (categoryName) {
        this.categoryName = categoryName;
        return this;
    };
    PutScoreRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    PutScoreRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    PutScoreRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    PutScoreRequest.prototype.getScore = function () {
        return this.score;
    };
    PutScoreRequest.prototype.setScore = function (score) {
        this.score = score;
        return this;
    };
    PutScoreRequest.prototype.withScore = function (score) {
        this.score = score;
        return this;
    };
    PutScoreRequest.prototype.getMetadata = function () {
        return this.metadata;
    };
    PutScoreRequest.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    PutScoreRequest.prototype.withMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    PutScoreRequest.fromDict = function (data) {
        return new PutScoreRequest()
            .withNamespaceName(data["namespaceName"])
            .withCategoryName(data["categoryName"])
            .withAccessToken(data["accessToken"])
            .withScore(data["score"])
            .withMetadata(data["metadata"]);
    };
    PutScoreRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "categoryName": this.getCategoryName(),
            "accessToken": this.getAccessToken(),
            "score": this.getScore(),
            "metadata": this.getMetadata(),
        };
    };
    return PutScoreRequest;
}());
export default PutScoreRequest;
//# sourceMappingURL=PutScoreRequest.js.map
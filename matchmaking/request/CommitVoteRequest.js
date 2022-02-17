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
var CommitVoteRequest = /** @class */ (function () {
    function CommitVoteRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.ratingName = null;
        this.gatheringName = null;
    }
    CommitVoteRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    CommitVoteRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    CommitVoteRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    CommitVoteRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    CommitVoteRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    CommitVoteRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    CommitVoteRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    CommitVoteRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    CommitVoteRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    CommitVoteRequest.prototype.getRatingName = function () {
        return this.ratingName;
    };
    CommitVoteRequest.prototype.setRatingName = function (ratingName) {
        this.ratingName = ratingName;
        return this;
    };
    CommitVoteRequest.prototype.withRatingName = function (ratingName) {
        this.ratingName = ratingName;
        return this;
    };
    CommitVoteRequest.prototype.getGatheringName = function () {
        return this.gatheringName;
    };
    CommitVoteRequest.prototype.setGatheringName = function (gatheringName) {
        this.gatheringName = gatheringName;
        return this;
    };
    CommitVoteRequest.prototype.withGatheringName = function (gatheringName) {
        this.gatheringName = gatheringName;
        return this;
    };
    CommitVoteRequest.fromDict = function (data) {
        return new CommitVoteRequest()
            .withNamespaceName(data["namespaceName"])
            .withRatingName(data["ratingName"])
            .withGatheringName(data["gatheringName"]);
    };
    CommitVoteRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "ratingName": this.getRatingName(),
            "gatheringName": this.getGatheringName(),
        };
    };
    return CommitVoteRequest;
}());
export default CommitVoteRequest;
//# sourceMappingURL=CommitVoteRequest.js.map
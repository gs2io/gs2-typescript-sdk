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
var GetBallotByUserIdRequest = /** @class */ (function () {
    function GetBallotByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.ratingName = null;
        this.gatheringName = null;
        this.userId = null;
        this.numberOfPlayer = null;
        this.keyId = null;
    }
    GetBallotByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetBallotByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetBallotByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetBallotByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetBallotByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetBallotByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetBallotByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    GetBallotByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetBallotByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetBallotByUserIdRequest.prototype.getRatingName = function () {
        return this.ratingName;
    };
    GetBallotByUserIdRequest.prototype.setRatingName = function (ratingName) {
        this.ratingName = ratingName;
        return this;
    };
    GetBallotByUserIdRequest.prototype.withRatingName = function (ratingName) {
        this.ratingName = ratingName;
        return this;
    };
    GetBallotByUserIdRequest.prototype.getGatheringName = function () {
        return this.gatheringName;
    };
    GetBallotByUserIdRequest.prototype.setGatheringName = function (gatheringName) {
        this.gatheringName = gatheringName;
        return this;
    };
    GetBallotByUserIdRequest.prototype.withGatheringName = function (gatheringName) {
        this.gatheringName = gatheringName;
        return this;
    };
    GetBallotByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    GetBallotByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    GetBallotByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    GetBallotByUserIdRequest.prototype.getNumberOfPlayer = function () {
        return this.numberOfPlayer;
    };
    GetBallotByUserIdRequest.prototype.setNumberOfPlayer = function (numberOfPlayer) {
        this.numberOfPlayer = numberOfPlayer;
        return this;
    };
    GetBallotByUserIdRequest.prototype.withNumberOfPlayer = function (numberOfPlayer) {
        this.numberOfPlayer = numberOfPlayer;
        return this;
    };
    GetBallotByUserIdRequest.prototype.getKeyId = function () {
        return this.keyId;
    };
    GetBallotByUserIdRequest.prototype.setKeyId = function (keyId) {
        this.keyId = keyId;
        return this;
    };
    GetBallotByUserIdRequest.prototype.withKeyId = function (keyId) {
        this.keyId = keyId;
        return this;
    };
    GetBallotByUserIdRequest.fromDict = function (data) {
        return new GetBallotByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withRatingName(data["ratingName"])
            .withGatheringName(data["gatheringName"])
            .withUserId(data["userId"])
            .withNumberOfPlayer(data["numberOfPlayer"])
            .withKeyId(data["keyId"]);
    };
    GetBallotByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "ratingName": this.getRatingName(),
            "gatheringName": this.getGatheringName(),
            "userId": this.getUserId(),
            "numberOfPlayer": this.getNumberOfPlayer(),
            "keyId": this.getKeyId(),
        };
    };
    return GetBallotByUserIdRequest;
}());
export default GetBallotByUserIdRequest;
//# sourceMappingURL=GetBallotByUserIdRequest.js.map
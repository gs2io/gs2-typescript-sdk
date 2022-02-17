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
var GetBallotRequest = /** @class */ (function () {
    function GetBallotRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.ratingName = null;
        this.gatheringName = null;
        this.accessToken = null;
        this.numberOfPlayer = null;
        this.keyId = null;
    }
    GetBallotRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetBallotRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetBallotRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetBallotRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetBallotRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetBallotRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetBallotRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    GetBallotRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetBallotRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetBallotRequest.prototype.getRatingName = function () {
        return this.ratingName;
    };
    GetBallotRequest.prototype.setRatingName = function (ratingName) {
        this.ratingName = ratingName;
        return this;
    };
    GetBallotRequest.prototype.withRatingName = function (ratingName) {
        this.ratingName = ratingName;
        return this;
    };
    GetBallotRequest.prototype.getGatheringName = function () {
        return this.gatheringName;
    };
    GetBallotRequest.prototype.setGatheringName = function (gatheringName) {
        this.gatheringName = gatheringName;
        return this;
    };
    GetBallotRequest.prototype.withGatheringName = function (gatheringName) {
        this.gatheringName = gatheringName;
        return this;
    };
    GetBallotRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    GetBallotRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    GetBallotRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    GetBallotRequest.prototype.getNumberOfPlayer = function () {
        return this.numberOfPlayer;
    };
    GetBallotRequest.prototype.setNumberOfPlayer = function (numberOfPlayer) {
        this.numberOfPlayer = numberOfPlayer;
        return this;
    };
    GetBallotRequest.prototype.withNumberOfPlayer = function (numberOfPlayer) {
        this.numberOfPlayer = numberOfPlayer;
        return this;
    };
    GetBallotRequest.prototype.getKeyId = function () {
        return this.keyId;
    };
    GetBallotRequest.prototype.setKeyId = function (keyId) {
        this.keyId = keyId;
        return this;
    };
    GetBallotRequest.prototype.withKeyId = function (keyId) {
        this.keyId = keyId;
        return this;
    };
    GetBallotRequest.fromDict = function (data) {
        return new GetBallotRequest()
            .withNamespaceName(data["namespaceName"])
            .withRatingName(data["ratingName"])
            .withGatheringName(data["gatheringName"])
            .withAccessToken(data["accessToken"])
            .withNumberOfPlayer(data["numberOfPlayer"])
            .withKeyId(data["keyId"]);
    };
    GetBallotRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "ratingName": this.getRatingName(),
            "gatheringName": this.getGatheringName(),
            "accessToken": this.getAccessToken(),
            "numberOfPlayer": this.getNumberOfPlayer(),
            "keyId": this.getKeyId(),
        };
    };
    return GetBallotRequest;
}());
export default GetBallotRequest;
//# sourceMappingURL=GetBallotRequest.js.map
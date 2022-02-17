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
import * as Gs2Matchmaking from '../model';
var UpdateGatheringRequest = /** @class */ (function () {
    function UpdateGatheringRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.gatheringName = null;
        this.accessToken = null;
        this.attributeRanges = null;
    }
    UpdateGatheringRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    UpdateGatheringRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    UpdateGatheringRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    UpdateGatheringRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    UpdateGatheringRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    UpdateGatheringRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    UpdateGatheringRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    UpdateGatheringRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    UpdateGatheringRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    UpdateGatheringRequest.prototype.getGatheringName = function () {
        return this.gatheringName;
    };
    UpdateGatheringRequest.prototype.setGatheringName = function (gatheringName) {
        this.gatheringName = gatheringName;
        return this;
    };
    UpdateGatheringRequest.prototype.withGatheringName = function (gatheringName) {
        this.gatheringName = gatheringName;
        return this;
    };
    UpdateGatheringRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    UpdateGatheringRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    UpdateGatheringRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    UpdateGatheringRequest.prototype.getAttributeRanges = function () {
        return this.attributeRanges;
    };
    UpdateGatheringRequest.prototype.setAttributeRanges = function (attributeRanges) {
        this.attributeRanges = attributeRanges;
        return this;
    };
    UpdateGatheringRequest.prototype.withAttributeRanges = function (attributeRanges) {
        this.attributeRanges = attributeRanges;
        return this;
    };
    UpdateGatheringRequest.fromDict = function (data) {
        return new UpdateGatheringRequest()
            .withNamespaceName(data["namespaceName"])
            .withGatheringName(data["gatheringName"])
            .withAccessToken(data["accessToken"])
            .withAttributeRanges(data.attributeRanges ?
            data.attributeRanges.map(function (item) {
                return Gs2Matchmaking.AttributeRange.fromDict(item);
            }) : []);
    };
    UpdateGatheringRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "gatheringName": this.getGatheringName(),
            "accessToken": this.getAccessToken(),
            "attributeRanges": this.getAttributeRanges() ?
                this.getAttributeRanges().map(function (item) {
                    return item.toDict();
                }) : [],
        };
    };
    return UpdateGatheringRequest;
}());
export default UpdateGatheringRequest;
//# sourceMappingURL=UpdateGatheringRequest.js.map
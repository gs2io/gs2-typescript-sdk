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
var AddRankCapByUserIdRequest = /** @class */ (function () {
    function AddRankCapByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.userId = null;
        this.experienceName = null;
        this.propertyId = null;
        this.rankCapValue = null;
    }
    AddRankCapByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    AddRankCapByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    AddRankCapByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    AddRankCapByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    AddRankCapByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    AddRankCapByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    AddRankCapByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    AddRankCapByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    AddRankCapByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    AddRankCapByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    AddRankCapByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    AddRankCapByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    AddRankCapByUserIdRequest.prototype.getExperienceName = function () {
        return this.experienceName;
    };
    AddRankCapByUserIdRequest.prototype.setExperienceName = function (experienceName) {
        this.experienceName = experienceName;
        return this;
    };
    AddRankCapByUserIdRequest.prototype.withExperienceName = function (experienceName) {
        this.experienceName = experienceName;
        return this;
    };
    AddRankCapByUserIdRequest.prototype.getPropertyId = function () {
        return this.propertyId;
    };
    AddRankCapByUserIdRequest.prototype.setPropertyId = function (propertyId) {
        this.propertyId = propertyId;
        return this;
    };
    AddRankCapByUserIdRequest.prototype.withPropertyId = function (propertyId) {
        this.propertyId = propertyId;
        return this;
    };
    AddRankCapByUserIdRequest.prototype.getRankCapValue = function () {
        return this.rankCapValue;
    };
    AddRankCapByUserIdRequest.prototype.setRankCapValue = function (rankCapValue) {
        this.rankCapValue = rankCapValue;
        return this;
    };
    AddRankCapByUserIdRequest.prototype.withRankCapValue = function (rankCapValue) {
        this.rankCapValue = rankCapValue;
        return this;
    };
    AddRankCapByUserIdRequest.fromDict = function (data) {
        return new AddRankCapByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withUserId(data["userId"])
            .withExperienceName(data["experienceName"])
            .withPropertyId(data["propertyId"])
            .withRankCapValue(data["rankCapValue"]);
    };
    AddRankCapByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "userId": this.getUserId(),
            "experienceName": this.getExperienceName(),
            "propertyId": this.getPropertyId(),
            "rankCapValue": this.getRankCapValue(),
        };
    };
    return AddRankCapByUserIdRequest;
}());
export default AddRankCapByUserIdRequest;
//# sourceMappingURL=AddRankCapByUserIdRequest.js.map
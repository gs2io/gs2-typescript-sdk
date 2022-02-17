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
var UpdateRatingModelMasterRequest = /** @class */ (function () {
    function UpdateRatingModelMasterRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.ratingName = null;
        this.description = null;
        this.metadata = null;
        this.volatility = null;
    }
    UpdateRatingModelMasterRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    UpdateRatingModelMasterRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    UpdateRatingModelMasterRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    UpdateRatingModelMasterRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    UpdateRatingModelMasterRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    UpdateRatingModelMasterRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    UpdateRatingModelMasterRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    UpdateRatingModelMasterRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    UpdateRatingModelMasterRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    UpdateRatingModelMasterRequest.prototype.getRatingName = function () {
        return this.ratingName;
    };
    UpdateRatingModelMasterRequest.prototype.setRatingName = function (ratingName) {
        this.ratingName = ratingName;
        return this;
    };
    UpdateRatingModelMasterRequest.prototype.withRatingName = function (ratingName) {
        this.ratingName = ratingName;
        return this;
    };
    UpdateRatingModelMasterRequest.prototype.getDescription = function () {
        return this.description;
    };
    UpdateRatingModelMasterRequest.prototype.setDescription = function (description) {
        this.description = description;
        return this;
    };
    UpdateRatingModelMasterRequest.prototype.withDescription = function (description) {
        this.description = description;
        return this;
    };
    UpdateRatingModelMasterRequest.prototype.getMetadata = function () {
        return this.metadata;
    };
    UpdateRatingModelMasterRequest.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    UpdateRatingModelMasterRequest.prototype.withMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    UpdateRatingModelMasterRequest.prototype.getVolatility = function () {
        return this.volatility;
    };
    UpdateRatingModelMasterRequest.prototype.setVolatility = function (volatility) {
        this.volatility = volatility;
        return this;
    };
    UpdateRatingModelMasterRequest.prototype.withVolatility = function (volatility) {
        this.volatility = volatility;
        return this;
    };
    UpdateRatingModelMasterRequest.fromDict = function (data) {
        return new UpdateRatingModelMasterRequest()
            .withNamespaceName(data["namespaceName"])
            .withRatingName(data["ratingName"])
            .withDescription(data["description"])
            .withMetadata(data["metadata"])
            .withVolatility(data["volatility"]);
    };
    UpdateRatingModelMasterRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "ratingName": this.getRatingName(),
            "description": this.getDescription(),
            "metadata": this.getMetadata(),
            "volatility": this.getVolatility(),
        };
    };
    return UpdateRatingModelMasterRequest;
}());
exports.default = UpdateRatingModelMasterRequest;
//# sourceMappingURL=UpdateRatingModelMasterRequest.js.map
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
var RatingModelMaster = /** @class */ (function () {
    function RatingModelMaster() {
        this.ratingModelId = null;
        this.name = null;
        this.metadata = null;
        this.description = null;
        this.volatility = null;
        this.createdAt = null;
        this.updatedAt = null;
    }
    RatingModelMaster.prototype.getRatingModelId = function () {
        return this.ratingModelId;
    };
    RatingModelMaster.prototype.setRatingModelId = function (ratingModelId) {
        this.ratingModelId = ratingModelId;
        return this;
    };
    RatingModelMaster.prototype.withRatingModelId = function (ratingModelId) {
        this.ratingModelId = ratingModelId;
        return this;
    };
    RatingModelMaster.prototype.getName = function () {
        return this.name;
    };
    RatingModelMaster.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    RatingModelMaster.prototype.withName = function (name) {
        this.name = name;
        return this;
    };
    RatingModelMaster.prototype.getMetadata = function () {
        return this.metadata;
    };
    RatingModelMaster.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    RatingModelMaster.prototype.withMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    RatingModelMaster.prototype.getDescription = function () {
        return this.description;
    };
    RatingModelMaster.prototype.setDescription = function (description) {
        this.description = description;
        return this;
    };
    RatingModelMaster.prototype.withDescription = function (description) {
        this.description = description;
        return this;
    };
    RatingModelMaster.prototype.getVolatility = function () {
        return this.volatility;
    };
    RatingModelMaster.prototype.setVolatility = function (volatility) {
        this.volatility = volatility;
        return this;
    };
    RatingModelMaster.prototype.withVolatility = function (volatility) {
        this.volatility = volatility;
        return this;
    };
    RatingModelMaster.prototype.getCreatedAt = function () {
        return this.createdAt;
    };
    RatingModelMaster.prototype.setCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    RatingModelMaster.prototype.withCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    RatingModelMaster.prototype.getUpdatedAt = function () {
        return this.updatedAt;
    };
    RatingModelMaster.prototype.setUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    RatingModelMaster.prototype.withUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    RatingModelMaster.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new RatingModelMaster()
            .withRatingModelId(data["ratingModelId"])
            .withName(data["name"])
            .withMetadata(data["metadata"])
            .withDescription(data["description"])
            .withVolatility(data["volatility"])
            .withCreatedAt(data["createdAt"])
            .withUpdatedAt(data["updatedAt"]);
    };
    RatingModelMaster.prototype.toDict = function () {
        return {
            "ratingModelId": this.getRatingModelId(),
            "name": this.getName(),
            "metadata": this.getMetadata(),
            "description": this.getDescription(),
            "volatility": this.getVolatility(),
            "createdAt": this.getCreatedAt(),
            "updatedAt": this.getUpdatedAt(),
        };
    };
    return RatingModelMaster;
}());
exports.default = RatingModelMaster;
//# sourceMappingURL=RatingModelMaster.js.map
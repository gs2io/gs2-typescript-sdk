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
var grnFormat = "grn:gs2:{region}:{ownerId}:matchmaking:{namespaceName}:model:{ratingName}";
var RatingModel = /** @class */ (function () {
    function RatingModel() {
        this.ratingModelId = null;
        this.name = null;
        this.metadata = null;
        this.initialValue = null;
        this.volatility = null;
    }
    RatingModel.getRegion = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '(.*)')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{ratingName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    RatingModel.getOwnerId = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '(.*)')
            .replace('{namespaceName}', '.*')
            .replace('{ratingName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    RatingModel.getNamespaceName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '(.*)')
            .replace('{ratingName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    RatingModel.getRatingName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{ratingName}', '(.*)'));
        if (match) {
            return match[1];
        }
        return null;
    };
    RatingModel.isValid = function (grn) {
        if (this.getRegion(grn) == null || this.getRegion(grn) === '') {
            return false;
        }
        if (this.getOwnerId(grn) == null || this.getOwnerId(grn) === '') {
            return false;
        }
        if (this.getNamespaceName(grn) == null || this.getNamespaceName(grn) === '') {
            return false;
        }
        if (this.getRatingName(grn) == null || this.getRatingName(grn) === '') {
            return false;
        }
        return true;
    };
    RatingModel.createGrn = function (region, ownerId, namespaceName, ratingName) {
        return grnFormat
            .replace('{region}', region !== null && region !== void 0 ? region : '')
            .replace('{ownerId}', ownerId !== null && ownerId !== void 0 ? ownerId : '')
            .replace('{namespaceName}', namespaceName !== null && namespaceName !== void 0 ? namespaceName : '')
            .replace('{ratingName}', ratingName !== null && ratingName !== void 0 ? ratingName : '');
    };
    RatingModel.prototype.getRatingModelId = function () {
        return this.ratingModelId;
    };
    RatingModel.prototype.setRatingModelId = function (ratingModelId) {
        this.ratingModelId = ratingModelId;
        return this;
    };
    RatingModel.prototype.withRatingModelId = function (ratingModelId) {
        this.ratingModelId = ratingModelId;
        return this;
    };
    RatingModel.prototype.getName = function () {
        return this.name;
    };
    RatingModel.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    RatingModel.prototype.withName = function (name) {
        this.name = name;
        return this;
    };
    RatingModel.prototype.getMetadata = function () {
        return this.metadata;
    };
    RatingModel.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    RatingModel.prototype.withMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    RatingModel.prototype.getInitialValue = function () {
        return this.initialValue;
    };
    RatingModel.prototype.setInitialValue = function (initialValue) {
        this.initialValue = initialValue;
        return this;
    };
    RatingModel.prototype.withInitialValue = function (initialValue) {
        this.initialValue = initialValue;
        return this;
    };
    RatingModel.prototype.getVolatility = function () {
        return this.volatility;
    };
    RatingModel.prototype.setVolatility = function (volatility) {
        this.volatility = volatility;
        return this;
    };
    RatingModel.prototype.withVolatility = function (volatility) {
        this.volatility = volatility;
        return this;
    };
    RatingModel.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new RatingModel()
            .withRatingModelId(data["ratingModelId"])
            .withName(data["name"])
            .withMetadata(data["metadata"])
            .withInitialValue(data["initialValue"])
            .withVolatility(data["volatility"]);
    };
    RatingModel.prototype.toDict = function () {
        return {
            "ratingModelId": this.getRatingModelId(),
            "name": this.getName(),
            "metadata": this.getMetadata(),
            "initialValue": this.getInitialValue(),
            "volatility": this.getVolatility(),
        };
    };
    return RatingModel;
}());
exports.default = RatingModel;
//# sourceMappingURL=RatingModel.js.map
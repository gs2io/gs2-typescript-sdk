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
var GetRatingModelRequest = /** @class */ (function () {
    function GetRatingModelRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.ratingName = null;
    }
    GetRatingModelRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetRatingModelRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetRatingModelRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetRatingModelRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetRatingModelRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetRatingModelRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetRatingModelRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    GetRatingModelRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetRatingModelRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetRatingModelRequest.prototype.getRatingName = function () {
        return this.ratingName;
    };
    GetRatingModelRequest.prototype.setRatingName = function (ratingName) {
        this.ratingName = ratingName;
        return this;
    };
    GetRatingModelRequest.prototype.withRatingName = function (ratingName) {
        this.ratingName = ratingName;
        return this;
    };
    GetRatingModelRequest.fromDict = function (data) {
        return new GetRatingModelRequest()
            .withNamespaceName(data["namespaceName"])
            .withRatingName(data["ratingName"]);
    };
    GetRatingModelRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "ratingName": this.getRatingName(),
        };
    };
    return GetRatingModelRequest;
}());
exports.default = GetRatingModelRequest;
//# sourceMappingURL=GetRatingModelRequest.js.map
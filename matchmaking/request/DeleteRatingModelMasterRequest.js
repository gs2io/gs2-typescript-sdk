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
var DeleteRatingModelMasterRequest = /** @class */ (function () {
    function DeleteRatingModelMasterRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.ratingName = null;
    }
    DeleteRatingModelMasterRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DeleteRatingModelMasterRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DeleteRatingModelMasterRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DeleteRatingModelMasterRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DeleteRatingModelMasterRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DeleteRatingModelMasterRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DeleteRatingModelMasterRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DeleteRatingModelMasterRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DeleteRatingModelMasterRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DeleteRatingModelMasterRequest.prototype.getRatingName = function () {
        return this.ratingName;
    };
    DeleteRatingModelMasterRequest.prototype.setRatingName = function (ratingName) {
        this.ratingName = ratingName;
        return this;
    };
    DeleteRatingModelMasterRequest.prototype.withRatingName = function (ratingName) {
        this.ratingName = ratingName;
        return this;
    };
    DeleteRatingModelMasterRequest.fromDict = function (data) {
        return new DeleteRatingModelMasterRequest()
            .withNamespaceName(data["namespaceName"])
            .withRatingName(data["ratingName"]);
    };
    DeleteRatingModelMasterRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "ratingName": this.getRatingName(),
        };
    };
    return DeleteRatingModelMasterRequest;
}());
exports.default = DeleteRatingModelMasterRequest;
//# sourceMappingURL=DeleteRatingModelMasterRequest.js.map
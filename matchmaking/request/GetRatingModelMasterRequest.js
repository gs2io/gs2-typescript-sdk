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
var GetRatingModelMasterRequest = /** @class */ (function () {
    function GetRatingModelMasterRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.ratingName = null;
    }
    GetRatingModelMasterRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetRatingModelMasterRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetRatingModelMasterRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetRatingModelMasterRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetRatingModelMasterRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetRatingModelMasterRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetRatingModelMasterRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    GetRatingModelMasterRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetRatingModelMasterRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetRatingModelMasterRequest.prototype.getRatingName = function () {
        return this.ratingName;
    };
    GetRatingModelMasterRequest.prototype.setRatingName = function (ratingName) {
        this.ratingName = ratingName;
        return this;
    };
    GetRatingModelMasterRequest.prototype.withRatingName = function (ratingName) {
        this.ratingName = ratingName;
        return this;
    };
    GetRatingModelMasterRequest.fromDict = function (data) {
        return new GetRatingModelMasterRequest()
            .withNamespaceName(data["namespaceName"])
            .withRatingName(data["ratingName"]);
    };
    GetRatingModelMasterRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "ratingName": this.getRatingName(),
        };
    };
    return GetRatingModelMasterRequest;
}());
export default GetRatingModelMasterRequest;
//# sourceMappingURL=GetRatingModelMasterRequest.js.map
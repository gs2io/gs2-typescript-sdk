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
var GetCurrentRatingModelMasterRequest = /** @class */ (function () {
    function GetCurrentRatingModelMasterRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
    }
    GetCurrentRatingModelMasterRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetCurrentRatingModelMasterRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetCurrentRatingModelMasterRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetCurrentRatingModelMasterRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetCurrentRatingModelMasterRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetCurrentRatingModelMasterRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetCurrentRatingModelMasterRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    GetCurrentRatingModelMasterRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetCurrentRatingModelMasterRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetCurrentRatingModelMasterRequest.fromDict = function (data) {
        return new GetCurrentRatingModelMasterRequest()
            .withNamespaceName(data["namespaceName"]);
    };
    GetCurrentRatingModelMasterRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
        };
    };
    return GetCurrentRatingModelMasterRequest;
}());
exports.default = GetCurrentRatingModelMasterRequest;
//# sourceMappingURL=GetCurrentRatingModelMasterRequest.js.map
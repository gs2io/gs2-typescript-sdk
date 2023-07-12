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
var DescribeBonusModelsByUserIdRequest = /** @class */ (function () {
    function DescribeBonusModelsByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.userId = null;
    }
    DescribeBonusModelsByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DescribeBonusModelsByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeBonusModelsByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeBonusModelsByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DescribeBonusModelsByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeBonusModelsByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeBonusModelsByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DescribeBonusModelsByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeBonusModelsByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeBonusModelsByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    DescribeBonusModelsByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    DescribeBonusModelsByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    DescribeBonusModelsByUserIdRequest.fromDict = function (data) {
        return new DescribeBonusModelsByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withUserId(data["userId"]);
    };
    DescribeBonusModelsByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "userId": this.getUserId(),
        };
    };
    return DescribeBonusModelsByUserIdRequest;
}());
exports.default = DescribeBonusModelsByUserIdRequest;
//# sourceMappingURL=DescribeBonusModelsByUserIdRequest.js.map
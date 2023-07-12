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
var DescribeBonusModelsRequest = /** @class */ (function () {
    function DescribeBonusModelsRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.accessToken = null;
    }
    DescribeBonusModelsRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DescribeBonusModelsRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeBonusModelsRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeBonusModelsRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DescribeBonusModelsRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeBonusModelsRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeBonusModelsRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DescribeBonusModelsRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeBonusModelsRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeBonusModelsRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    DescribeBonusModelsRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    DescribeBonusModelsRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    DescribeBonusModelsRequest.fromDict = function (data) {
        return new DescribeBonusModelsRequest()
            .withNamespaceName(data["namespaceName"])
            .withAccessToken(data["accessToken"]);
    };
    DescribeBonusModelsRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "accessToken": this.getAccessToken(),
        };
    };
    return DescribeBonusModelsRequest;
}());
exports.default = DescribeBonusModelsRequest;
//# sourceMappingURL=DescribeBonusModelsRequest.js.map
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
var CalcRankingRequest = /** @class */ (function () {
    function CalcRankingRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.categoryName = null;
    }
    CalcRankingRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    CalcRankingRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    CalcRankingRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    CalcRankingRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    CalcRankingRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    CalcRankingRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    CalcRankingRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    CalcRankingRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    CalcRankingRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    CalcRankingRequest.prototype.getCategoryName = function () {
        return this.categoryName;
    };
    CalcRankingRequest.prototype.setCategoryName = function (categoryName) {
        this.categoryName = categoryName;
        return this;
    };
    CalcRankingRequest.prototype.withCategoryName = function (categoryName) {
        this.categoryName = categoryName;
        return this;
    };
    CalcRankingRequest.fromDict = function (data) {
        return new CalcRankingRequest()
            .withNamespaceName(data["namespaceName"])
            .withCategoryName(data["categoryName"]);
    };
    CalcRankingRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "categoryName": this.getCategoryName(),
        };
    };
    return CalcRankingRequest;
}());
export default CalcRankingRequest;
//# sourceMappingURL=CalcRankingRequest.js.map
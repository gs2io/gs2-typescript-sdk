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
var DescribeSubscribesByCategoryNameRequest = /** @class */ (function () {
    function DescribeSubscribesByCategoryNameRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.categoryName = null;
        this.accessToken = null;
    }
    DescribeSubscribesByCategoryNameRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DescribeSubscribesByCategoryNameRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeSubscribesByCategoryNameRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeSubscribesByCategoryNameRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DescribeSubscribesByCategoryNameRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeSubscribesByCategoryNameRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeSubscribesByCategoryNameRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DescribeSubscribesByCategoryNameRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeSubscribesByCategoryNameRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeSubscribesByCategoryNameRequest.prototype.getCategoryName = function () {
        return this.categoryName;
    };
    DescribeSubscribesByCategoryNameRequest.prototype.setCategoryName = function (categoryName) {
        this.categoryName = categoryName;
        return this;
    };
    DescribeSubscribesByCategoryNameRequest.prototype.withCategoryName = function (categoryName) {
        this.categoryName = categoryName;
        return this;
    };
    DescribeSubscribesByCategoryNameRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    DescribeSubscribesByCategoryNameRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    DescribeSubscribesByCategoryNameRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    DescribeSubscribesByCategoryNameRequest.fromDict = function (data) {
        return new DescribeSubscribesByCategoryNameRequest()
            .withNamespaceName(data["namespaceName"])
            .withCategoryName(data["categoryName"])
            .withAccessToken(data["accessToken"]);
    };
    DescribeSubscribesByCategoryNameRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "categoryName": this.getCategoryName(),
            "accessToken": this.getAccessToken(),
        };
    };
    return DescribeSubscribesByCategoryNameRequest;
}());
export default DescribeSubscribesByCategoryNameRequest;
//# sourceMappingURL=DescribeSubscribesByCategoryNameRequest.js.map
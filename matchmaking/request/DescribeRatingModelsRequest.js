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
var DescribeRatingModelsRequest = /** @class */ (function () {
    function DescribeRatingModelsRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
    }
    DescribeRatingModelsRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DescribeRatingModelsRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeRatingModelsRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeRatingModelsRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DescribeRatingModelsRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeRatingModelsRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeRatingModelsRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DescribeRatingModelsRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeRatingModelsRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeRatingModelsRequest.fromDict = function (data) {
        return new DescribeRatingModelsRequest()
            .withNamespaceName(data["namespaceName"]);
    };
    DescribeRatingModelsRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
        };
    };
    return DescribeRatingModelsRequest;
}());
export default DescribeRatingModelsRequest;
//# sourceMappingURL=DescribeRatingModelsRequest.js.map
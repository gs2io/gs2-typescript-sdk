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
var DescribeRateModelsRequest = /** @class */ (function () {
    function DescribeRateModelsRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
    }
    DescribeRateModelsRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DescribeRateModelsRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeRateModelsRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeRateModelsRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DescribeRateModelsRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeRateModelsRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeRateModelsRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DescribeRateModelsRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeRateModelsRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeRateModelsRequest.fromDict = function (data) {
        return new DescribeRateModelsRequest()
            .withNamespaceName(data["namespaceName"]);
    };
    DescribeRateModelsRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
        };
    };
    return DescribeRateModelsRequest;
}());
export default DescribeRateModelsRequest;
//# sourceMappingURL=DescribeRateModelsRequest.js.map
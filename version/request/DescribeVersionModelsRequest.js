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
var DescribeVersionModelsRequest = /** @class */ (function () {
    function DescribeVersionModelsRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
    }
    DescribeVersionModelsRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DescribeVersionModelsRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeVersionModelsRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeVersionModelsRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DescribeVersionModelsRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeVersionModelsRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeVersionModelsRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DescribeVersionModelsRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeVersionModelsRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeVersionModelsRequest.fromDict = function (data) {
        return new DescribeVersionModelsRequest()
            .withNamespaceName(data["namespaceName"]);
    };
    DescribeVersionModelsRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
        };
    };
    return DescribeVersionModelsRequest;
}());
export default DescribeVersionModelsRequest;
//# sourceMappingURL=DescribeVersionModelsRequest.js.map
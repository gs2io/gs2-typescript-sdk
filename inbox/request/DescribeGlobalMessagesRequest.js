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
var DescribeGlobalMessagesRequest = /** @class */ (function () {
    function DescribeGlobalMessagesRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
    }
    DescribeGlobalMessagesRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DescribeGlobalMessagesRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeGlobalMessagesRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeGlobalMessagesRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DescribeGlobalMessagesRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeGlobalMessagesRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeGlobalMessagesRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DescribeGlobalMessagesRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeGlobalMessagesRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeGlobalMessagesRequest.fromDict = function (data) {
        return new DescribeGlobalMessagesRequest()
            .withNamespaceName(data["namespaceName"]);
    };
    DescribeGlobalMessagesRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
        };
    };
    return DescribeGlobalMessagesRequest;
}());
export default DescribeGlobalMessagesRequest;
//# sourceMappingURL=DescribeGlobalMessagesRequest.js.map
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
var DescribeRawEventsRequest = /** @class */ (function () {
    function DescribeRawEventsRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
    }
    DescribeRawEventsRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DescribeRawEventsRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeRawEventsRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeRawEventsRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DescribeRawEventsRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeRawEventsRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeRawEventsRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DescribeRawEventsRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeRawEventsRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeRawEventsRequest.fromDict = function (data) {
        return new DescribeRawEventsRequest()
            .withNamespaceName(data["namespaceName"]);
    };
    DescribeRawEventsRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
        };
    };
    return DescribeRawEventsRequest;
}());
export default DescribeRawEventsRequest;
//# sourceMappingURL=DescribeRawEventsRequest.js.map
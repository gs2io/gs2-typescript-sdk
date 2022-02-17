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
var DescribeQuestGroupModelsRequest = /** @class */ (function () {
    function DescribeQuestGroupModelsRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
    }
    DescribeQuestGroupModelsRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DescribeQuestGroupModelsRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeQuestGroupModelsRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeQuestGroupModelsRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DescribeQuestGroupModelsRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeQuestGroupModelsRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeQuestGroupModelsRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DescribeQuestGroupModelsRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeQuestGroupModelsRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeQuestGroupModelsRequest.fromDict = function (data) {
        return new DescribeQuestGroupModelsRequest()
            .withNamespaceName(data["namespaceName"]);
    };
    DescribeQuestGroupModelsRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
        };
    };
    return DescribeQuestGroupModelsRequest;
}());
export default DescribeQuestGroupModelsRequest;
//# sourceMappingURL=DescribeQuestGroupModelsRequest.js.map
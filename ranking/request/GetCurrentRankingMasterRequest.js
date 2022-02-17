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
var GetCurrentRankingMasterRequest = /** @class */ (function () {
    function GetCurrentRankingMasterRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
    }
    GetCurrentRankingMasterRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetCurrentRankingMasterRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetCurrentRankingMasterRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetCurrentRankingMasterRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetCurrentRankingMasterRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetCurrentRankingMasterRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetCurrentRankingMasterRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    GetCurrentRankingMasterRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetCurrentRankingMasterRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetCurrentRankingMasterRequest.fromDict = function (data) {
        return new GetCurrentRankingMasterRequest()
            .withNamespaceName(data["namespaceName"]);
    };
    GetCurrentRankingMasterRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
        };
    };
    return GetCurrentRankingMasterRequest;
}());
export default GetCurrentRankingMasterRequest;
//# sourceMappingURL=GetCurrentRankingMasterRequest.js.map
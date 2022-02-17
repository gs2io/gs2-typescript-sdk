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
var DeleteLotteryModelMasterRequest = /** @class */ (function () {
    function DeleteLotteryModelMasterRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.lotteryName = null;
    }
    DeleteLotteryModelMasterRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DeleteLotteryModelMasterRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DeleteLotteryModelMasterRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DeleteLotteryModelMasterRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DeleteLotteryModelMasterRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DeleteLotteryModelMasterRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DeleteLotteryModelMasterRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DeleteLotteryModelMasterRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DeleteLotteryModelMasterRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DeleteLotteryModelMasterRequest.prototype.getLotteryName = function () {
        return this.lotteryName;
    };
    DeleteLotteryModelMasterRequest.prototype.setLotteryName = function (lotteryName) {
        this.lotteryName = lotteryName;
        return this;
    };
    DeleteLotteryModelMasterRequest.prototype.withLotteryName = function (lotteryName) {
        this.lotteryName = lotteryName;
        return this;
    };
    DeleteLotteryModelMasterRequest.fromDict = function (data) {
        return new DeleteLotteryModelMasterRequest()
            .withNamespaceName(data["namespaceName"])
            .withLotteryName(data["lotteryName"]);
    };
    DeleteLotteryModelMasterRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "lotteryName": this.getLotteryName(),
        };
    };
    return DeleteLotteryModelMasterRequest;
}());
export default DeleteLotteryModelMasterRequest;
//# sourceMappingURL=DeleteLotteryModelMasterRequest.js.map
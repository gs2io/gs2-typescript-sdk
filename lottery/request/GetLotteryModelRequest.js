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
var GetLotteryModelRequest = /** @class */ (function () {
    function GetLotteryModelRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.lotteryName = null;
    }
    GetLotteryModelRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetLotteryModelRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetLotteryModelRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetLotteryModelRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetLotteryModelRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetLotteryModelRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetLotteryModelRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    GetLotteryModelRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetLotteryModelRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetLotteryModelRequest.prototype.getLotteryName = function () {
        return this.lotteryName;
    };
    GetLotteryModelRequest.prototype.setLotteryName = function (lotteryName) {
        this.lotteryName = lotteryName;
        return this;
    };
    GetLotteryModelRequest.prototype.withLotteryName = function (lotteryName) {
        this.lotteryName = lotteryName;
        return this;
    };
    GetLotteryModelRequest.fromDict = function (data) {
        return new GetLotteryModelRequest()
            .withNamespaceName(data["namespaceName"])
            .withLotteryName(data["lotteryName"]);
    };
    GetLotteryModelRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "lotteryName": this.getLotteryName(),
        };
    };
    return GetLotteryModelRequest;
}());
export default GetLotteryModelRequest;
//# sourceMappingURL=GetLotteryModelRequest.js.map
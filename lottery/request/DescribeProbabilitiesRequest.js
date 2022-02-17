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
var DescribeProbabilitiesRequest = /** @class */ (function () {
    function DescribeProbabilitiesRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.lotteryName = null;
        this.accessToken = null;
    }
    DescribeProbabilitiesRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DescribeProbabilitiesRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeProbabilitiesRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeProbabilitiesRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DescribeProbabilitiesRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeProbabilitiesRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeProbabilitiesRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DescribeProbabilitiesRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeProbabilitiesRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeProbabilitiesRequest.prototype.getLotteryName = function () {
        return this.lotteryName;
    };
    DescribeProbabilitiesRequest.prototype.setLotteryName = function (lotteryName) {
        this.lotteryName = lotteryName;
        return this;
    };
    DescribeProbabilitiesRequest.prototype.withLotteryName = function (lotteryName) {
        this.lotteryName = lotteryName;
        return this;
    };
    DescribeProbabilitiesRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    DescribeProbabilitiesRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    DescribeProbabilitiesRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    DescribeProbabilitiesRequest.fromDict = function (data) {
        return new DescribeProbabilitiesRequest()
            .withNamespaceName(data["namespaceName"])
            .withLotteryName(data["lotteryName"])
            .withAccessToken(data["accessToken"]);
    };
    DescribeProbabilitiesRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "lotteryName": this.getLotteryName(),
            "accessToken": this.getAccessToken(),
        };
    };
    return DescribeProbabilitiesRequest;
}());
export default DescribeProbabilitiesRequest;
//# sourceMappingURL=DescribeProbabilitiesRequest.js.map
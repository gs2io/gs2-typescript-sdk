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
var CountUpRequest = /** @class */ (function () {
    function CountUpRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.limitName = null;
        this.counterName = null;
        this.accessToken = null;
        this.countUpValue = null;
        this.maxValue = null;
    }
    CountUpRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    CountUpRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    CountUpRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    CountUpRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    CountUpRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    CountUpRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    CountUpRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    CountUpRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    CountUpRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    CountUpRequest.prototype.getLimitName = function () {
        return this.limitName;
    };
    CountUpRequest.prototype.setLimitName = function (limitName) {
        this.limitName = limitName;
        return this;
    };
    CountUpRequest.prototype.withLimitName = function (limitName) {
        this.limitName = limitName;
        return this;
    };
    CountUpRequest.prototype.getCounterName = function () {
        return this.counterName;
    };
    CountUpRequest.prototype.setCounterName = function (counterName) {
        this.counterName = counterName;
        return this;
    };
    CountUpRequest.prototype.withCounterName = function (counterName) {
        this.counterName = counterName;
        return this;
    };
    CountUpRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    CountUpRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    CountUpRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    CountUpRequest.prototype.getCountUpValue = function () {
        return this.countUpValue;
    };
    CountUpRequest.prototype.setCountUpValue = function (countUpValue) {
        this.countUpValue = countUpValue;
        return this;
    };
    CountUpRequest.prototype.withCountUpValue = function (countUpValue) {
        this.countUpValue = countUpValue;
        return this;
    };
    CountUpRequest.prototype.getMaxValue = function () {
        return this.maxValue;
    };
    CountUpRequest.prototype.setMaxValue = function (maxValue) {
        this.maxValue = maxValue;
        return this;
    };
    CountUpRequest.prototype.withMaxValue = function (maxValue) {
        this.maxValue = maxValue;
        return this;
    };
    CountUpRequest.fromDict = function (data) {
        return new CountUpRequest()
            .withNamespaceName(data["namespaceName"])
            .withLimitName(data["limitName"])
            .withCounterName(data["counterName"])
            .withAccessToken(data["accessToken"])
            .withCountUpValue(data["countUpValue"])
            .withMaxValue(data["maxValue"]);
    };
    CountUpRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "limitName": this.getLimitName(),
            "counterName": this.getCounterName(),
            "accessToken": this.getAccessToken(),
            "countUpValue": this.getCountUpValue(),
            "maxValue": this.getMaxValue(),
        };
    };
    return CountUpRequest;
}());
export default CountUpRequest;
//# sourceMappingURL=CountUpRequest.js.map
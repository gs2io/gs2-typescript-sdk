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
var CountUpByUserIdRequest = /** @class */ (function () {
    function CountUpByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.limitName = null;
        this.counterName = null;
        this.userId = null;
        this.countUpValue = null;
        this.maxValue = null;
    }
    CountUpByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    CountUpByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    CountUpByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    CountUpByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    CountUpByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    CountUpByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    CountUpByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    CountUpByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    CountUpByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    CountUpByUserIdRequest.prototype.getLimitName = function () {
        return this.limitName;
    };
    CountUpByUserIdRequest.prototype.setLimitName = function (limitName) {
        this.limitName = limitName;
        return this;
    };
    CountUpByUserIdRequest.prototype.withLimitName = function (limitName) {
        this.limitName = limitName;
        return this;
    };
    CountUpByUserIdRequest.prototype.getCounterName = function () {
        return this.counterName;
    };
    CountUpByUserIdRequest.prototype.setCounterName = function (counterName) {
        this.counterName = counterName;
        return this;
    };
    CountUpByUserIdRequest.prototype.withCounterName = function (counterName) {
        this.counterName = counterName;
        return this;
    };
    CountUpByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    CountUpByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    CountUpByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    CountUpByUserIdRequest.prototype.getCountUpValue = function () {
        return this.countUpValue;
    };
    CountUpByUserIdRequest.prototype.setCountUpValue = function (countUpValue) {
        this.countUpValue = countUpValue;
        return this;
    };
    CountUpByUserIdRequest.prototype.withCountUpValue = function (countUpValue) {
        this.countUpValue = countUpValue;
        return this;
    };
    CountUpByUserIdRequest.prototype.getMaxValue = function () {
        return this.maxValue;
    };
    CountUpByUserIdRequest.prototype.setMaxValue = function (maxValue) {
        this.maxValue = maxValue;
        return this;
    };
    CountUpByUserIdRequest.prototype.withMaxValue = function (maxValue) {
        this.maxValue = maxValue;
        return this;
    };
    CountUpByUserIdRequest.fromDict = function (data) {
        return new CountUpByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withLimitName(data["limitName"])
            .withCounterName(data["counterName"])
            .withUserId(data["userId"])
            .withCountUpValue(data["countUpValue"])
            .withMaxValue(data["maxValue"]);
    };
    CountUpByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "limitName": this.getLimitName(),
            "counterName": this.getCounterName(),
            "userId": this.getUserId(),
            "countUpValue": this.getCountUpValue(),
            "maxValue": this.getMaxValue(),
        };
    };
    return CountUpByUserIdRequest;
}());
export default CountUpByUserIdRequest;
//# sourceMappingURL=CountUpByUserIdRequest.js.map
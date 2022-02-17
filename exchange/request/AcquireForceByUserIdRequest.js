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
import * as Gs2Exchange from '../model';
var AcquireForceByUserIdRequest = /** @class */ (function () {
    function AcquireForceByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.userId = null;
        this.rateName = null;
        this.awaitName = null;
        this.config = null;
    }
    AcquireForceByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    AcquireForceByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    AcquireForceByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    AcquireForceByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    AcquireForceByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    AcquireForceByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    AcquireForceByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    AcquireForceByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    AcquireForceByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    AcquireForceByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    AcquireForceByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    AcquireForceByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    AcquireForceByUserIdRequest.prototype.getRateName = function () {
        return this.rateName;
    };
    AcquireForceByUserIdRequest.prototype.setRateName = function (rateName) {
        this.rateName = rateName;
        return this;
    };
    AcquireForceByUserIdRequest.prototype.withRateName = function (rateName) {
        this.rateName = rateName;
        return this;
    };
    AcquireForceByUserIdRequest.prototype.getAwaitName = function () {
        return this.awaitName;
    };
    AcquireForceByUserIdRequest.prototype.setAwaitName = function (awaitName) {
        this.awaitName = awaitName;
        return this;
    };
    AcquireForceByUserIdRequest.prototype.withAwaitName = function (awaitName) {
        this.awaitName = awaitName;
        return this;
    };
    AcquireForceByUserIdRequest.prototype.getConfig = function () {
        return this.config;
    };
    AcquireForceByUserIdRequest.prototype.setConfig = function (config) {
        this.config = config;
        return this;
    };
    AcquireForceByUserIdRequest.prototype.withConfig = function (config) {
        this.config = config;
        return this;
    };
    AcquireForceByUserIdRequest.fromDict = function (data) {
        return new AcquireForceByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withUserId(data["userId"])
            .withRateName(data["rateName"])
            .withAwaitName(data["awaitName"])
            .withConfig(data.config ?
            data.config.map(function (item) {
                return Gs2Exchange.Config.fromDict(item);
            }) : []);
    };
    AcquireForceByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "userId": this.getUserId(),
            "rateName": this.getRateName(),
            "awaitName": this.getAwaitName(),
            "config": this.getConfig() ?
                this.getConfig().map(function (item) {
                    return item.toDict();
                }) : [],
        };
    };
    return AcquireForceByUserIdRequest;
}());
export default AcquireForceByUserIdRequest;
//# sourceMappingURL=AcquireForceByUserIdRequest.js.map
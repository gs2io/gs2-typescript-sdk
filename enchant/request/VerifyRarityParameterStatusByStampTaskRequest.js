"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var VerifyRarityParameterStatusByStampTaskRequest = /** @class */ (function () {
    function VerifyRarityParameterStatusByStampTaskRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.stampTask = null;
        this.keyId = null;
    }
    VerifyRarityParameterStatusByStampTaskRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    VerifyRarityParameterStatusByStampTaskRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    VerifyRarityParameterStatusByStampTaskRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    VerifyRarityParameterStatusByStampTaskRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    VerifyRarityParameterStatusByStampTaskRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    VerifyRarityParameterStatusByStampTaskRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    VerifyRarityParameterStatusByStampTaskRequest.prototype.getStampTask = function () {
        return this.stampTask;
    };
    VerifyRarityParameterStatusByStampTaskRequest.prototype.setStampTask = function (stampTask) {
        this.stampTask = stampTask;
        return this;
    };
    VerifyRarityParameterStatusByStampTaskRequest.prototype.withStampTask = function (stampTask) {
        this.stampTask = stampTask;
        return this;
    };
    VerifyRarityParameterStatusByStampTaskRequest.prototype.getKeyId = function () {
        return this.keyId;
    };
    VerifyRarityParameterStatusByStampTaskRequest.prototype.setKeyId = function (keyId) {
        this.keyId = keyId;
        return this;
    };
    VerifyRarityParameterStatusByStampTaskRequest.prototype.withKeyId = function (keyId) {
        this.keyId = keyId;
        return this;
    };
    VerifyRarityParameterStatusByStampTaskRequest.fromDict = function (data) {
        return new VerifyRarityParameterStatusByStampTaskRequest()
            .withStampTask(data["stampTask"])
            .withKeyId(data["keyId"]);
    };
    VerifyRarityParameterStatusByStampTaskRequest.prototype.toDict = function () {
        return {
            "stampTask": this.getStampTask(),
            "keyId": this.getKeyId(),
        };
    };
    return VerifyRarityParameterStatusByStampTaskRequest;
}());
exports.default = VerifyRarityParameterStatusByStampTaskRequest;
//# sourceMappingURL=VerifyRarityParameterStatusByStampTaskRequest.js.map
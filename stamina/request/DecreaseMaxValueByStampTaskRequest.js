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
var DecreaseMaxValueByStampTaskRequest = /** @class */ (function () {
    function DecreaseMaxValueByStampTaskRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.stampTask = null;
        this.keyId = null;
    }
    DecreaseMaxValueByStampTaskRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DecreaseMaxValueByStampTaskRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DecreaseMaxValueByStampTaskRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DecreaseMaxValueByStampTaskRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DecreaseMaxValueByStampTaskRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DecreaseMaxValueByStampTaskRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DecreaseMaxValueByStampTaskRequest.prototype.getStampTask = function () {
        return this.stampTask;
    };
    DecreaseMaxValueByStampTaskRequest.prototype.setStampTask = function (stampTask) {
        this.stampTask = stampTask;
        return this;
    };
    DecreaseMaxValueByStampTaskRequest.prototype.withStampTask = function (stampTask) {
        this.stampTask = stampTask;
        return this;
    };
    DecreaseMaxValueByStampTaskRequest.prototype.getKeyId = function () {
        return this.keyId;
    };
    DecreaseMaxValueByStampTaskRequest.prototype.setKeyId = function (keyId) {
        this.keyId = keyId;
        return this;
    };
    DecreaseMaxValueByStampTaskRequest.prototype.withKeyId = function (keyId) {
        this.keyId = keyId;
        return this;
    };
    DecreaseMaxValueByStampTaskRequest.fromDict = function (data) {
        return new DecreaseMaxValueByStampTaskRequest()
            .withStampTask(data["stampTask"])
            .withKeyId(data["keyId"]);
    };
    DecreaseMaxValueByStampTaskRequest.prototype.toDict = function () {
        return {
            "stampTask": this.getStampTask(),
            "keyId": this.getKeyId(),
        };
    };
    return DecreaseMaxValueByStampTaskRequest;
}());
exports.default = DecreaseMaxValueByStampTaskRequest;
//# sourceMappingURL=DecreaseMaxValueByStampTaskRequest.js.map
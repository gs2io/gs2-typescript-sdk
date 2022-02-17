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
var ConsumeStaminaByStampTaskRequest = /** @class */ (function () {
    function ConsumeStaminaByStampTaskRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.stampTask = null;
        this.keyId = null;
    }
    ConsumeStaminaByStampTaskRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    ConsumeStaminaByStampTaskRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    ConsumeStaminaByStampTaskRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    ConsumeStaminaByStampTaskRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    ConsumeStaminaByStampTaskRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    ConsumeStaminaByStampTaskRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    ConsumeStaminaByStampTaskRequest.prototype.getStampTask = function () {
        return this.stampTask;
    };
    ConsumeStaminaByStampTaskRequest.prototype.setStampTask = function (stampTask) {
        this.stampTask = stampTask;
        return this;
    };
    ConsumeStaminaByStampTaskRequest.prototype.withStampTask = function (stampTask) {
        this.stampTask = stampTask;
        return this;
    };
    ConsumeStaminaByStampTaskRequest.prototype.getKeyId = function () {
        return this.keyId;
    };
    ConsumeStaminaByStampTaskRequest.prototype.setKeyId = function (keyId) {
        this.keyId = keyId;
        return this;
    };
    ConsumeStaminaByStampTaskRequest.prototype.withKeyId = function (keyId) {
        this.keyId = keyId;
        return this;
    };
    ConsumeStaminaByStampTaskRequest.fromDict = function (data) {
        return new ConsumeStaminaByStampTaskRequest()
            .withStampTask(data["stampTask"])
            .withKeyId(data["keyId"]);
    };
    ConsumeStaminaByStampTaskRequest.prototype.toDict = function () {
        return {
            "stampTask": this.getStampTask(),
            "keyId": this.getKeyId(),
        };
    };
    return ConsumeStaminaByStampTaskRequest;
}());
export default ConsumeStaminaByStampTaskRequest;
//# sourceMappingURL=ConsumeStaminaByStampTaskRequest.js.map
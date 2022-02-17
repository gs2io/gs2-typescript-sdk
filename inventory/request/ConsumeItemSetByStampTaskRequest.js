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
var ConsumeItemSetByStampTaskRequest = /** @class */ (function () {
    function ConsumeItemSetByStampTaskRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.stampTask = null;
        this.keyId = null;
    }
    ConsumeItemSetByStampTaskRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    ConsumeItemSetByStampTaskRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    ConsumeItemSetByStampTaskRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    ConsumeItemSetByStampTaskRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    ConsumeItemSetByStampTaskRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    ConsumeItemSetByStampTaskRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    ConsumeItemSetByStampTaskRequest.prototype.getStampTask = function () {
        return this.stampTask;
    };
    ConsumeItemSetByStampTaskRequest.prototype.setStampTask = function (stampTask) {
        this.stampTask = stampTask;
        return this;
    };
    ConsumeItemSetByStampTaskRequest.prototype.withStampTask = function (stampTask) {
        this.stampTask = stampTask;
        return this;
    };
    ConsumeItemSetByStampTaskRequest.prototype.getKeyId = function () {
        return this.keyId;
    };
    ConsumeItemSetByStampTaskRequest.prototype.setKeyId = function (keyId) {
        this.keyId = keyId;
        return this;
    };
    ConsumeItemSetByStampTaskRequest.prototype.withKeyId = function (keyId) {
        this.keyId = keyId;
        return this;
    };
    ConsumeItemSetByStampTaskRequest.fromDict = function (data) {
        return new ConsumeItemSetByStampTaskRequest()
            .withStampTask(data["stampTask"])
            .withKeyId(data["keyId"]);
    };
    ConsumeItemSetByStampTaskRequest.prototype.toDict = function () {
        return {
            "stampTask": this.getStampTask(),
            "keyId": this.getKeyId(),
        };
    };
    return ConsumeItemSetByStampTaskRequest;
}());
export default ConsumeItemSetByStampTaskRequest;
//# sourceMappingURL=ConsumeItemSetByStampTaskRequest.js.map
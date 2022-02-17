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
var RunStampTaskWithoutNamespaceRequest = /** @class */ (function () {
    function RunStampTaskWithoutNamespaceRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.stampTask = null;
        this.keyId = null;
    }
    RunStampTaskWithoutNamespaceRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    RunStampTaskWithoutNamespaceRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    RunStampTaskWithoutNamespaceRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    RunStampTaskWithoutNamespaceRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    RunStampTaskWithoutNamespaceRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    RunStampTaskWithoutNamespaceRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    RunStampTaskWithoutNamespaceRequest.prototype.getStampTask = function () {
        return this.stampTask;
    };
    RunStampTaskWithoutNamespaceRequest.prototype.setStampTask = function (stampTask) {
        this.stampTask = stampTask;
        return this;
    };
    RunStampTaskWithoutNamespaceRequest.prototype.withStampTask = function (stampTask) {
        this.stampTask = stampTask;
        return this;
    };
    RunStampTaskWithoutNamespaceRequest.prototype.getKeyId = function () {
        return this.keyId;
    };
    RunStampTaskWithoutNamespaceRequest.prototype.setKeyId = function (keyId) {
        this.keyId = keyId;
        return this;
    };
    RunStampTaskWithoutNamespaceRequest.prototype.withKeyId = function (keyId) {
        this.keyId = keyId;
        return this;
    };
    RunStampTaskWithoutNamespaceRequest.fromDict = function (data) {
        return new RunStampTaskWithoutNamespaceRequest()
            .withStampTask(data["stampTask"])
            .withKeyId(data["keyId"]);
    };
    RunStampTaskWithoutNamespaceRequest.prototype.toDict = function () {
        return {
            "stampTask": this.getStampTask(),
            "keyId": this.getKeyId(),
        };
    };
    return RunStampTaskWithoutNamespaceRequest;
}());
export default RunStampTaskWithoutNamespaceRequest;
//# sourceMappingURL=RunStampTaskWithoutNamespaceRequest.js.map
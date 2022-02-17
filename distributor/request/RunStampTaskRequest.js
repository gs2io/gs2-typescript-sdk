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
var RunStampTaskRequest = /** @class */ (function () {
    function RunStampTaskRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.stampTask = null;
        this.keyId = null;
    }
    RunStampTaskRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    RunStampTaskRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    RunStampTaskRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    RunStampTaskRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    RunStampTaskRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    RunStampTaskRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    RunStampTaskRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    RunStampTaskRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    RunStampTaskRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    RunStampTaskRequest.prototype.getStampTask = function () {
        return this.stampTask;
    };
    RunStampTaskRequest.prototype.setStampTask = function (stampTask) {
        this.stampTask = stampTask;
        return this;
    };
    RunStampTaskRequest.prototype.withStampTask = function (stampTask) {
        this.stampTask = stampTask;
        return this;
    };
    RunStampTaskRequest.prototype.getKeyId = function () {
        return this.keyId;
    };
    RunStampTaskRequest.prototype.setKeyId = function (keyId) {
        this.keyId = keyId;
        return this;
    };
    RunStampTaskRequest.prototype.withKeyId = function (keyId) {
        this.keyId = keyId;
        return this;
    };
    RunStampTaskRequest.fromDict = function (data) {
        return new RunStampTaskRequest()
            .withNamespaceName(data["namespaceName"])
            .withStampTask(data["stampTask"])
            .withKeyId(data["keyId"]);
    };
    RunStampTaskRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "stampTask": this.getStampTask(),
            "keyId": this.getKeyId(),
        };
    };
    return RunStampTaskRequest;
}());
export default RunStampTaskRequest;
//# sourceMappingURL=RunStampTaskRequest.js.map
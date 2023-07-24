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
var StartStateMachineByStampTaskRequest = /** @class */ (function () {
    function StartStateMachineByStampTaskRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.stampSheet = null;
        this.keyId = null;
    }
    StartStateMachineByStampTaskRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    StartStateMachineByStampTaskRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    StartStateMachineByStampTaskRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    StartStateMachineByStampTaskRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    StartStateMachineByStampTaskRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    StartStateMachineByStampTaskRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    StartStateMachineByStampTaskRequest.prototype.getStampSheet = function () {
        return this.stampSheet;
    };
    StartStateMachineByStampTaskRequest.prototype.setStampSheet = function (stampSheet) {
        this.stampSheet = stampSheet;
        return this;
    };
    StartStateMachineByStampTaskRequest.prototype.withStampSheet = function (stampSheet) {
        this.stampSheet = stampSheet;
        return this;
    };
    StartStateMachineByStampTaskRequest.prototype.getKeyId = function () {
        return this.keyId;
    };
    StartStateMachineByStampTaskRequest.prototype.setKeyId = function (keyId) {
        this.keyId = keyId;
        return this;
    };
    StartStateMachineByStampTaskRequest.prototype.withKeyId = function (keyId) {
        this.keyId = keyId;
        return this;
    };
    StartStateMachineByStampTaskRequest.fromDict = function (data) {
        return new StartStateMachineByStampTaskRequest()
            .withStampSheet(data["stampSheet"])
            .withKeyId(data["keyId"]);
    };
    StartStateMachineByStampTaskRequest.prototype.toDict = function () {
        return {
            "stampSheet": this.getStampSheet(),
            "keyId": this.getKeyId(),
        };
    };
    return StartStateMachineByStampTaskRequest;
}());
exports.default = StartStateMachineByStampTaskRequest;
//# sourceMappingURL=StartStateMachineByStampTaskRequest.js.map
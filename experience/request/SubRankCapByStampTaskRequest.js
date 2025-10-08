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
var SubRankCapByStampTaskRequest = /** @class */ (function () {
    function SubRankCapByStampTaskRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.stampTask = null;
        this.keyId = null;
    }
    SubRankCapByStampTaskRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    SubRankCapByStampTaskRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    SubRankCapByStampTaskRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    SubRankCapByStampTaskRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    SubRankCapByStampTaskRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    SubRankCapByStampTaskRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    SubRankCapByStampTaskRequest.prototype.getStampTask = function () {
        return this.stampTask;
    };
    SubRankCapByStampTaskRequest.prototype.setStampTask = function (stampTask) {
        this.stampTask = stampTask;
        return this;
    };
    SubRankCapByStampTaskRequest.prototype.withStampTask = function (stampTask) {
        this.stampTask = stampTask;
        return this;
    };
    SubRankCapByStampTaskRequest.prototype.getKeyId = function () {
        return this.keyId;
    };
    SubRankCapByStampTaskRequest.prototype.setKeyId = function (keyId) {
        this.keyId = keyId;
        return this;
    };
    SubRankCapByStampTaskRequest.prototype.withKeyId = function (keyId) {
        this.keyId = keyId;
        return this;
    };
    SubRankCapByStampTaskRequest.fromDict = function (data) {
        return new SubRankCapByStampTaskRequest()
            .withStampTask(data["stampTask"])
            .withKeyId(data["keyId"]);
    };
    SubRankCapByStampTaskRequest.prototype.toDict = function () {
        return {
            "stampTask": this.getStampTask(),
            "keyId": this.getKeyId(),
        };
    };
    return SubRankCapByStampTaskRequest;
}());
exports.default = SubRankCapByStampTaskRequest;
//# sourceMappingURL=SubRankCapByStampTaskRequest.js.map
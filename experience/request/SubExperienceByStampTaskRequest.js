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
var SubExperienceByStampTaskRequest = /** @class */ (function () {
    function SubExperienceByStampTaskRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.stampTask = null;
        this.keyId = null;
    }
    SubExperienceByStampTaskRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    SubExperienceByStampTaskRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    SubExperienceByStampTaskRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    SubExperienceByStampTaskRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    SubExperienceByStampTaskRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    SubExperienceByStampTaskRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    SubExperienceByStampTaskRequest.prototype.getStampTask = function () {
        return this.stampTask;
    };
    SubExperienceByStampTaskRequest.prototype.setStampTask = function (stampTask) {
        this.stampTask = stampTask;
        return this;
    };
    SubExperienceByStampTaskRequest.prototype.withStampTask = function (stampTask) {
        this.stampTask = stampTask;
        return this;
    };
    SubExperienceByStampTaskRequest.prototype.getKeyId = function () {
        return this.keyId;
    };
    SubExperienceByStampTaskRequest.prototype.setKeyId = function (keyId) {
        this.keyId = keyId;
        return this;
    };
    SubExperienceByStampTaskRequest.prototype.withKeyId = function (keyId) {
        this.keyId = keyId;
        return this;
    };
    SubExperienceByStampTaskRequest.fromDict = function (data) {
        return new SubExperienceByStampTaskRequest()
            .withStampTask(data["stampTask"])
            .withKeyId(data["keyId"]);
    };
    SubExperienceByStampTaskRequest.prototype.toDict = function () {
        return {
            "stampTask": this.getStampTask(),
            "keyId": this.getKeyId(),
        };
    };
    return SubExperienceByStampTaskRequest;
}());
exports.default = SubExperienceByStampTaskRequest;
//# sourceMappingURL=SubExperienceByStampTaskRequest.js.map
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
var SubGradeByStampTaskRequest = /** @class */ (function () {
    function SubGradeByStampTaskRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.stampTask = null;
        this.keyId = null;
    }
    SubGradeByStampTaskRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    SubGradeByStampTaskRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    SubGradeByStampTaskRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    SubGradeByStampTaskRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    SubGradeByStampTaskRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    SubGradeByStampTaskRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    SubGradeByStampTaskRequest.prototype.getStampTask = function () {
        return this.stampTask;
    };
    SubGradeByStampTaskRequest.prototype.setStampTask = function (stampTask) {
        this.stampTask = stampTask;
        return this;
    };
    SubGradeByStampTaskRequest.prototype.withStampTask = function (stampTask) {
        this.stampTask = stampTask;
        return this;
    };
    SubGradeByStampTaskRequest.prototype.getKeyId = function () {
        return this.keyId;
    };
    SubGradeByStampTaskRequest.prototype.setKeyId = function (keyId) {
        this.keyId = keyId;
        return this;
    };
    SubGradeByStampTaskRequest.prototype.withKeyId = function (keyId) {
        this.keyId = keyId;
        return this;
    };
    SubGradeByStampTaskRequest.fromDict = function (data) {
        return new SubGradeByStampTaskRequest()
            .withStampTask(data["stampTask"])
            .withKeyId(data["keyId"]);
    };
    SubGradeByStampTaskRequest.prototype.toDict = function () {
        return {
            "stampTask": this.getStampTask(),
            "keyId": this.getKeyId(),
        };
    };
    return SubGradeByStampTaskRequest;
}());
exports.default = SubGradeByStampTaskRequest;
//# sourceMappingURL=SubGradeByStampTaskRequest.js.map
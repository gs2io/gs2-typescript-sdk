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
var RollbackStageRequest = /** @class */ (function () {
    function RollbackStageRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.stageName = null;
    }
    RollbackStageRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    RollbackStageRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    RollbackStageRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    RollbackStageRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    RollbackStageRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    RollbackStageRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    RollbackStageRequest.prototype.getStageName = function () {
        return this.stageName;
    };
    RollbackStageRequest.prototype.setStageName = function (stageName) {
        this.stageName = stageName;
        return this;
    };
    RollbackStageRequest.prototype.withStageName = function (stageName) {
        this.stageName = stageName;
        return this;
    };
    RollbackStageRequest.fromDict = function (data) {
        return new RollbackStageRequest()
            .withStageName(data["stageName"]);
    };
    RollbackStageRequest.prototype.toDict = function () {
        return {
            "stageName": this.getStageName(),
        };
    };
    return RollbackStageRequest;
}());
exports.default = RollbackStageRequest;
//# sourceMappingURL=RollbackStageRequest.js.map
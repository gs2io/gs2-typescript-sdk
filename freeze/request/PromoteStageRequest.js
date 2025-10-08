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
var PromoteStageRequest = /** @class */ (function () {
    function PromoteStageRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.stageName = null;
    }
    PromoteStageRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    PromoteStageRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    PromoteStageRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    PromoteStageRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    PromoteStageRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    PromoteStageRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    PromoteStageRequest.prototype.getStageName = function () {
        return this.stageName;
    };
    PromoteStageRequest.prototype.setStageName = function (stageName) {
        this.stageName = stageName;
        return this;
    };
    PromoteStageRequest.prototype.withStageName = function (stageName) {
        this.stageName = stageName;
        return this;
    };
    PromoteStageRequest.fromDict = function (data) {
        return new PromoteStageRequest()
            .withStageName(data["stageName"]);
    };
    PromoteStageRequest.prototype.toDict = function () {
        return {
            "stageName": this.getStageName(),
        };
    };
    return PromoteStageRequest;
}());
exports.default = PromoteStageRequest;
//# sourceMappingURL=PromoteStageRequest.js.map
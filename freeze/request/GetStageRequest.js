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
var GetStageRequest = /** @class */ (function () {
    function GetStageRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.stageName = null;
    }
    GetStageRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetStageRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetStageRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetStageRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetStageRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetStageRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetStageRequest.prototype.getStageName = function () {
        return this.stageName;
    };
    GetStageRequest.prototype.setStageName = function (stageName) {
        this.stageName = stageName;
        return this;
    };
    GetStageRequest.prototype.withStageName = function (stageName) {
        this.stageName = stageName;
        return this;
    };
    GetStageRequest.fromDict = function (data) {
        return new GetStageRequest()
            .withStageName(data["stageName"]);
    };
    GetStageRequest.prototype.toDict = function () {
        return {
            "stageName": this.getStageName(),
        };
    };
    return GetStageRequest;
}());
exports.default = GetStageRequest;
//# sourceMappingURL=GetStageRequest.js.map
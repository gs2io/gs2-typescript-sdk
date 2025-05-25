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
var GetOutputRequest = /** @class */ (function () {
    function GetOutputRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.stageName = null;
        this.outputName = null;
    }
    GetOutputRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetOutputRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetOutputRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetOutputRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetOutputRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetOutputRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetOutputRequest.prototype.getStageName = function () {
        return this.stageName;
    };
    GetOutputRequest.prototype.setStageName = function (stageName) {
        this.stageName = stageName;
        return this;
    };
    GetOutputRequest.prototype.withStageName = function (stageName) {
        this.stageName = stageName;
        return this;
    };
    GetOutputRequest.prototype.getOutputName = function () {
        return this.outputName;
    };
    GetOutputRequest.prototype.setOutputName = function (outputName) {
        this.outputName = outputName;
        return this;
    };
    GetOutputRequest.prototype.withOutputName = function (outputName) {
        this.outputName = outputName;
        return this;
    };
    GetOutputRequest.fromDict = function (data) {
        return new GetOutputRequest()
            .withStageName(data["stageName"])
            .withOutputName(data["outputName"]);
    };
    GetOutputRequest.prototype.toDict = function () {
        return {
            "stageName": this.getStageName(),
            "outputName": this.getOutputName(),
        };
    };
    return GetOutputRequest;
}());
exports.default = GetOutputRequest;
//# sourceMappingURL=GetOutputRequest.js.map
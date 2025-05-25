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
var DescribeStagesRequest = /** @class */ (function () {
    function DescribeStagesRequest() {
        this.requestId = null;
        this.contextStack = null;
    }
    DescribeStagesRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DescribeStagesRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeStagesRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeStagesRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DescribeStagesRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeStagesRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeStagesRequest.fromDict = function (data) {
        return new DescribeStagesRequest();
    };
    DescribeStagesRequest.prototype.toDict = function () {
        return {};
    };
    return DescribeStagesRequest;
}());
exports.default = DescribeStagesRequest;
//# sourceMappingURL=DescribeStagesRequest.js.map
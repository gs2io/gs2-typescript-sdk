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
var PreCreateStackRequest = /** @class */ (function () {
    function PreCreateStackRequest() {
        this.requestId = null;
        this.contextStack = null;
    }
    PreCreateStackRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    PreCreateStackRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    PreCreateStackRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    PreCreateStackRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    PreCreateStackRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    PreCreateStackRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    PreCreateStackRequest.fromDict = function (data) {
        return new PreCreateStackRequest();
    };
    PreCreateStackRequest.prototype.toDict = function () {
        return {};
    };
    return PreCreateStackRequest;
}());
exports.default = PreCreateStackRequest;
//# sourceMappingURL=PreCreateStackRequest.js.map
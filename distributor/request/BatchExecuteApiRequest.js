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
var tslib_1 = require("tslib");
var Gs2Distributor = tslib_1.__importStar(require("../model"));
var BatchExecuteApiRequest = /** @class */ (function () {
    function BatchExecuteApiRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.requestPayloads = null;
    }
    BatchExecuteApiRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    BatchExecuteApiRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    BatchExecuteApiRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    BatchExecuteApiRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    BatchExecuteApiRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    BatchExecuteApiRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    BatchExecuteApiRequest.prototype.getRequestPayloads = function () {
        return this.requestPayloads;
    };
    BatchExecuteApiRequest.prototype.setRequestPayloads = function (requestPayloads) {
        this.requestPayloads = requestPayloads;
        return this;
    };
    BatchExecuteApiRequest.prototype.withRequestPayloads = function (requestPayloads) {
        this.requestPayloads = requestPayloads;
        return this;
    };
    BatchExecuteApiRequest.fromDict = function (data) {
        return new BatchExecuteApiRequest()
            .withRequestPayloads(data.requestPayloads ?
            data.requestPayloads.map(function (item) {
                return Gs2Distributor.BatchRequestPayload.fromDict(item);
            }) : null);
    };
    BatchExecuteApiRequest.prototype.toDict = function () {
        return {
            "requestPayloads": this.getRequestPayloads() ?
                this.getRequestPayloads().map(function (item) {
                    return item.toDict();
                }) : null,
        };
    };
    return BatchExecuteApiRequest;
}());
exports.default = BatchExecuteApiRequest;
//# sourceMappingURL=BatchExecuteApiRequest.js.map
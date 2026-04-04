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
var GetTraceRequest = /** @class */ (function () {
    function GetTraceRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.traceId = null;
        this.begin = null;
        this.end = null;
    }
    GetTraceRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetTraceRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetTraceRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetTraceRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetTraceRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetTraceRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetTraceRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    GetTraceRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetTraceRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetTraceRequest.prototype.getTraceId = function () {
        return this.traceId;
    };
    GetTraceRequest.prototype.setTraceId = function (traceId) {
        this.traceId = traceId;
        return this;
    };
    GetTraceRequest.prototype.withTraceId = function (traceId) {
        this.traceId = traceId;
        return this;
    };
    GetTraceRequest.prototype.getBegin = function () {
        return this.begin;
    };
    GetTraceRequest.prototype.setBegin = function (begin) {
        this.begin = begin;
        return this;
    };
    GetTraceRequest.prototype.withBegin = function (begin) {
        this.begin = begin;
        return this;
    };
    GetTraceRequest.prototype.getEnd = function () {
        return this.end;
    };
    GetTraceRequest.prototype.setEnd = function (end) {
        this.end = end;
        return this;
    };
    GetTraceRequest.prototype.withEnd = function (end) {
        this.end = end;
        return this;
    };
    GetTraceRequest.fromDict = function (data) {
        return new GetTraceRequest()
            .withNamespaceName(data["namespaceName"])
            .withTraceId(data["traceId"])
            .withBegin(data["begin"])
            .withEnd(data["end"]);
    };
    GetTraceRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "traceId": this.getTraceId(),
            "begin": this.getBegin(),
            "end": this.getEnd(),
        };
    };
    return GetTraceRequest;
}());
exports.default = GetTraceRequest;
//# sourceMappingURL=GetTraceRequest.js.map
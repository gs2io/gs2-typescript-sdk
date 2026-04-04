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
var GetLogRequest = /** @class */ (function () {
    function GetLogRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.logRequestId = null;
        this.begin = null;
        this.end = null;
    }
    GetLogRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetLogRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetLogRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetLogRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetLogRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetLogRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetLogRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    GetLogRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetLogRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetLogRequest.prototype.getLogRequestId = function () {
        return this.logRequestId;
    };
    GetLogRequest.prototype.setLogRequestId = function (logRequestId) {
        this.logRequestId = logRequestId;
        return this;
    };
    GetLogRequest.prototype.withLogRequestId = function (logRequestId) {
        this.logRequestId = logRequestId;
        return this;
    };
    GetLogRequest.prototype.getBegin = function () {
        return this.begin;
    };
    GetLogRequest.prototype.setBegin = function (begin) {
        this.begin = begin;
        return this;
    };
    GetLogRequest.prototype.withBegin = function (begin) {
        this.begin = begin;
        return this;
    };
    GetLogRequest.prototype.getEnd = function () {
        return this.end;
    };
    GetLogRequest.prototype.setEnd = function (end) {
        this.end = end;
        return this;
    };
    GetLogRequest.prototype.withEnd = function (end) {
        this.end = end;
        return this;
    };
    GetLogRequest.fromDict = function (data) {
        return new GetLogRequest()
            .withNamespaceName(data["namespaceName"])
            .withLogRequestId(data["logRequestId"])
            .withBegin(data["begin"])
            .withEnd(data["end"]);
    };
    GetLogRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "logRequestId": this.getLogRequestId(),
            "begin": this.getBegin(),
            "end": this.getEnd(),
        };
    };
    return GetLogRequest;
}());
exports.default = GetLogRequest;
//# sourceMappingURL=GetLogRequest.js.map
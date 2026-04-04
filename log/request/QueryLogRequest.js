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
var QueryLogRequest = /** @class */ (function () {
    function QueryLogRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.begin = null;
        this.end = null;
        this.query = null;
        this.pageToken = null;
        this.limit = null;
    }
    QueryLogRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    QueryLogRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    QueryLogRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    QueryLogRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    QueryLogRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    QueryLogRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    QueryLogRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    QueryLogRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    QueryLogRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    QueryLogRequest.prototype.getBegin = function () {
        return this.begin;
    };
    QueryLogRequest.prototype.setBegin = function (begin) {
        this.begin = begin;
        return this;
    };
    QueryLogRequest.prototype.withBegin = function (begin) {
        this.begin = begin;
        return this;
    };
    QueryLogRequest.prototype.getEnd = function () {
        return this.end;
    };
    QueryLogRequest.prototype.setEnd = function (end) {
        this.end = end;
        return this;
    };
    QueryLogRequest.prototype.withEnd = function (end) {
        this.end = end;
        return this;
    };
    QueryLogRequest.prototype.getQuery = function () {
        return this.query;
    };
    QueryLogRequest.prototype.setQuery = function (query) {
        this.query = query;
        return this;
    };
    QueryLogRequest.prototype.withQuery = function (query) {
        this.query = query;
        return this;
    };
    QueryLogRequest.prototype.getPageToken = function () {
        return this.pageToken;
    };
    QueryLogRequest.prototype.setPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    QueryLogRequest.prototype.withPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    QueryLogRequest.prototype.getLimit = function () {
        return this.limit;
    };
    QueryLogRequest.prototype.setLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    QueryLogRequest.prototype.withLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    QueryLogRequest.fromDict = function (data) {
        return new QueryLogRequest()
            .withNamespaceName(data["namespaceName"])
            .withBegin(data["begin"])
            .withEnd(data["end"])
            .withQuery(data["query"])
            .withPageToken(data["pageToken"])
            .withLimit(data["limit"]);
    };
    QueryLogRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "begin": this.getBegin(),
            "end": this.getEnd(),
            "query": this.getQuery(),
            "pageToken": this.getPageToken(),
            "limit": this.getLimit(),
        };
    };
    return QueryLogRequest;
}());
exports.default = QueryLogRequest;
//# sourceMappingURL=QueryLogRequest.js.map
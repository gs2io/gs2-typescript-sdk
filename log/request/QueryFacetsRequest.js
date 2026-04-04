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
var QueryFacetsRequest = /** @class */ (function () {
    function QueryFacetsRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.begin = null;
        this.end = null;
        this.query = null;
    }
    QueryFacetsRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    QueryFacetsRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    QueryFacetsRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    QueryFacetsRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    QueryFacetsRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    QueryFacetsRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    QueryFacetsRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    QueryFacetsRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    QueryFacetsRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    QueryFacetsRequest.prototype.getBegin = function () {
        return this.begin;
    };
    QueryFacetsRequest.prototype.setBegin = function (begin) {
        this.begin = begin;
        return this;
    };
    QueryFacetsRequest.prototype.withBegin = function (begin) {
        this.begin = begin;
        return this;
    };
    QueryFacetsRequest.prototype.getEnd = function () {
        return this.end;
    };
    QueryFacetsRequest.prototype.setEnd = function (end) {
        this.end = end;
        return this;
    };
    QueryFacetsRequest.prototype.withEnd = function (end) {
        this.end = end;
        return this;
    };
    QueryFacetsRequest.prototype.getQuery = function () {
        return this.query;
    };
    QueryFacetsRequest.prototype.setQuery = function (query) {
        this.query = query;
        return this;
    };
    QueryFacetsRequest.prototype.withQuery = function (query) {
        this.query = query;
        return this;
    };
    QueryFacetsRequest.fromDict = function (data) {
        return new QueryFacetsRequest()
            .withNamespaceName(data["namespaceName"])
            .withBegin(data["begin"])
            .withEnd(data["end"])
            .withQuery(data["query"]);
    };
    QueryFacetsRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "begin": this.getBegin(),
            "end": this.getEnd(),
            "query": this.getQuery(),
        };
    };
    return QueryFacetsRequest;
}());
exports.default = QueryFacetsRequest;
//# sourceMappingURL=QueryFacetsRequest.js.map
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
var DescribeDumpProgressesRequest = /** @class */ (function () {
    function DescribeDumpProgressesRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.pageToken = null;
        this.limit = null;
    }
    DescribeDumpProgressesRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DescribeDumpProgressesRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeDumpProgressesRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeDumpProgressesRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DescribeDumpProgressesRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeDumpProgressesRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeDumpProgressesRequest.prototype.getPageToken = function () {
        return this.pageToken;
    };
    DescribeDumpProgressesRequest.prototype.setPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeDumpProgressesRequest.prototype.withPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeDumpProgressesRequest.prototype.getLimit = function () {
        return this.limit;
    };
    DescribeDumpProgressesRequest.prototype.setLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeDumpProgressesRequest.prototype.withLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeDumpProgressesRequest.fromDict = function (data) {
        return new DescribeDumpProgressesRequest()
            .withPageToken(data["pageToken"])
            .withLimit(data["limit"]);
    };
    DescribeDumpProgressesRequest.prototype.toDict = function () {
        return {
            "pageToken": this.getPageToken(),
            "limit": this.getLimit(),
        };
    };
    return DescribeDumpProgressesRequest;
}());
exports.default = DescribeDumpProgressesRequest;
//# sourceMappingURL=DescribeDumpProgressesRequest.js.map
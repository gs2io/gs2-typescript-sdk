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
var DescribeEventsRequest = /** @class */ (function () {
    function DescribeEventsRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.stackName = null;
        this.pageToken = null;
        this.limit = null;
    }
    DescribeEventsRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DescribeEventsRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeEventsRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeEventsRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DescribeEventsRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeEventsRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeEventsRequest.prototype.getStackName = function () {
        return this.stackName;
    };
    DescribeEventsRequest.prototype.setStackName = function (stackName) {
        this.stackName = stackName;
        return this;
    };
    DescribeEventsRequest.prototype.withStackName = function (stackName) {
        this.stackName = stackName;
        return this;
    };
    DescribeEventsRequest.prototype.getPageToken = function () {
        return this.pageToken;
    };
    DescribeEventsRequest.prototype.setPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeEventsRequest.prototype.withPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeEventsRequest.prototype.getLimit = function () {
        return this.limit;
    };
    DescribeEventsRequest.prototype.setLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeEventsRequest.prototype.withLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeEventsRequest.fromDict = function (data) {
        return new DescribeEventsRequest()
            .withStackName(data["stackName"])
            .withPageToken(data["pageToken"])
            .withLimit(data["limit"]);
    };
    DescribeEventsRequest.prototype.toDict = function () {
        return {
            "stackName": this.getStackName(),
            "pageToken": this.getPageToken(),
            "limit": this.getLimit(),
        };
    };
    return DescribeEventsRequest;
}());
export { DescribeEventsRequest };
//# sourceMappingURL=DescribeEventsRequest.js.map
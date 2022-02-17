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
var DescribeSecurityPoliciesRequest = /** @class */ (function () {
    function DescribeSecurityPoliciesRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.pageToken = null;
        this.limit = null;
    }
    DescribeSecurityPoliciesRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DescribeSecurityPoliciesRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeSecurityPoliciesRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeSecurityPoliciesRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DescribeSecurityPoliciesRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeSecurityPoliciesRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeSecurityPoliciesRequest.prototype.getPageToken = function () {
        return this.pageToken;
    };
    DescribeSecurityPoliciesRequest.prototype.setPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeSecurityPoliciesRequest.prototype.withPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeSecurityPoliciesRequest.prototype.getLimit = function () {
        return this.limit;
    };
    DescribeSecurityPoliciesRequest.prototype.setLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeSecurityPoliciesRequest.prototype.withLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeSecurityPoliciesRequest.fromDict = function (data) {
        return new DescribeSecurityPoliciesRequest()
            .withPageToken(data["pageToken"])
            .withLimit(data["limit"]);
    };
    DescribeSecurityPoliciesRequest.prototype.toDict = function () {
        return {
            "pageToken": this.getPageToken(),
            "limit": this.getLimit(),
        };
    };
    return DescribeSecurityPoliciesRequest;
}());
export default DescribeSecurityPoliciesRequest;
//# sourceMappingURL=DescribeSecurityPoliciesRequest.js.map
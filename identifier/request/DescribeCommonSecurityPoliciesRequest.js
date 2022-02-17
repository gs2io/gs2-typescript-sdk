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
var DescribeCommonSecurityPoliciesRequest = /** @class */ (function () {
    function DescribeCommonSecurityPoliciesRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.pageToken = null;
        this.limit = null;
    }
    DescribeCommonSecurityPoliciesRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DescribeCommonSecurityPoliciesRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeCommonSecurityPoliciesRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeCommonSecurityPoliciesRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DescribeCommonSecurityPoliciesRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeCommonSecurityPoliciesRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeCommonSecurityPoliciesRequest.prototype.getPageToken = function () {
        return this.pageToken;
    };
    DescribeCommonSecurityPoliciesRequest.prototype.setPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeCommonSecurityPoliciesRequest.prototype.withPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeCommonSecurityPoliciesRequest.prototype.getLimit = function () {
        return this.limit;
    };
    DescribeCommonSecurityPoliciesRequest.prototype.setLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeCommonSecurityPoliciesRequest.prototype.withLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeCommonSecurityPoliciesRequest.fromDict = function (data) {
        return new DescribeCommonSecurityPoliciesRequest()
            .withPageToken(data["pageToken"])
            .withLimit(data["limit"]);
    };
    DescribeCommonSecurityPoliciesRequest.prototype.toDict = function () {
        return {
            "pageToken": this.getPageToken(),
            "limit": this.getLimit(),
        };
    };
    return DescribeCommonSecurityPoliciesRequest;
}());
export default DescribeCommonSecurityPoliciesRequest;
//# sourceMappingURL=DescribeCommonSecurityPoliciesRequest.js.map
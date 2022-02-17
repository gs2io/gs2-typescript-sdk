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
var GetHasSecurityPolicyRequest = /** @class */ (function () {
    function GetHasSecurityPolicyRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.userName = null;
    }
    GetHasSecurityPolicyRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetHasSecurityPolicyRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetHasSecurityPolicyRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetHasSecurityPolicyRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetHasSecurityPolicyRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetHasSecurityPolicyRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetHasSecurityPolicyRequest.prototype.getUserName = function () {
        return this.userName;
    };
    GetHasSecurityPolicyRequest.prototype.setUserName = function (userName) {
        this.userName = userName;
        return this;
    };
    GetHasSecurityPolicyRequest.prototype.withUserName = function (userName) {
        this.userName = userName;
        return this;
    };
    GetHasSecurityPolicyRequest.fromDict = function (data) {
        return new GetHasSecurityPolicyRequest()
            .withUserName(data["userName"]);
    };
    GetHasSecurityPolicyRequest.prototype.toDict = function () {
        return {
            "userName": this.getUserName(),
        };
    };
    return GetHasSecurityPolicyRequest;
}());
export default GetHasSecurityPolicyRequest;
//# sourceMappingURL=GetHasSecurityPolicyRequest.js.map
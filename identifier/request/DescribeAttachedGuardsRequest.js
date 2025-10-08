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
var DescribeAttachedGuardsRequest = /** @class */ (function () {
    function DescribeAttachedGuardsRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.clientId = null;
        this.userName = null;
    }
    DescribeAttachedGuardsRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DescribeAttachedGuardsRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeAttachedGuardsRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeAttachedGuardsRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DescribeAttachedGuardsRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeAttachedGuardsRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeAttachedGuardsRequest.prototype.getClientId = function () {
        return this.clientId;
    };
    DescribeAttachedGuardsRequest.prototype.setClientId = function (clientId) {
        this.clientId = clientId;
        return this;
    };
    DescribeAttachedGuardsRequest.prototype.withClientId = function (clientId) {
        this.clientId = clientId;
        return this;
    };
    DescribeAttachedGuardsRequest.prototype.getUserName = function () {
        return this.userName;
    };
    DescribeAttachedGuardsRequest.prototype.setUserName = function (userName) {
        this.userName = userName;
        return this;
    };
    DescribeAttachedGuardsRequest.prototype.withUserName = function (userName) {
        this.userName = userName;
        return this;
    };
    DescribeAttachedGuardsRequest.fromDict = function (data) {
        return new DescribeAttachedGuardsRequest()
            .withClientId(data["clientId"])
            .withUserName(data["userName"]);
    };
    DescribeAttachedGuardsRequest.prototype.toDict = function () {
        return {
            "clientId": this.getClientId(),
            "userName": this.getUserName(),
        };
    };
    return DescribeAttachedGuardsRequest;
}());
exports.default = DescribeAttachedGuardsRequest;
//# sourceMappingURL=DescribeAttachedGuardsRequest.js.map
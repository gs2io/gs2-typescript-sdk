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
var GetDistributorModelRequest = /** @class */ (function () {
    function GetDistributorModelRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.distributorName = null;
    }
    GetDistributorModelRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetDistributorModelRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetDistributorModelRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetDistributorModelRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetDistributorModelRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetDistributorModelRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetDistributorModelRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    GetDistributorModelRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetDistributorModelRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetDistributorModelRequest.prototype.getDistributorName = function () {
        return this.distributorName;
    };
    GetDistributorModelRequest.prototype.setDistributorName = function (distributorName) {
        this.distributorName = distributorName;
        return this;
    };
    GetDistributorModelRequest.prototype.withDistributorName = function (distributorName) {
        this.distributorName = distributorName;
        return this;
    };
    GetDistributorModelRequest.fromDict = function (data) {
        return new GetDistributorModelRequest()
            .withNamespaceName(data["namespaceName"])
            .withDistributorName(data["distributorName"]);
    };
    GetDistributorModelRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "distributorName": this.getDistributorName(),
        };
    };
    return GetDistributorModelRequest;
}());
export default GetDistributorModelRequest;
//# sourceMappingURL=GetDistributorModelRequest.js.map
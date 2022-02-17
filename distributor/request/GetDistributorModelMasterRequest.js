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
var GetDistributorModelMasterRequest = /** @class */ (function () {
    function GetDistributorModelMasterRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.distributorName = null;
    }
    GetDistributorModelMasterRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetDistributorModelMasterRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetDistributorModelMasterRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetDistributorModelMasterRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetDistributorModelMasterRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetDistributorModelMasterRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetDistributorModelMasterRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    GetDistributorModelMasterRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetDistributorModelMasterRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetDistributorModelMasterRequest.prototype.getDistributorName = function () {
        return this.distributorName;
    };
    GetDistributorModelMasterRequest.prototype.setDistributorName = function (distributorName) {
        this.distributorName = distributorName;
        return this;
    };
    GetDistributorModelMasterRequest.prototype.withDistributorName = function (distributorName) {
        this.distributorName = distributorName;
        return this;
    };
    GetDistributorModelMasterRequest.fromDict = function (data) {
        return new GetDistributorModelMasterRequest()
            .withNamespaceName(data["namespaceName"])
            .withDistributorName(data["distributorName"]);
    };
    GetDistributorModelMasterRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "distributorName": this.getDistributorName(),
        };
    };
    return GetDistributorModelMasterRequest;
}());
export default GetDistributorModelMasterRequest;
//# sourceMappingURL=GetDistributorModelMasterRequest.js.map
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
var GetRateModelMasterRequest = /** @class */ (function () {
    function GetRateModelMasterRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.rateName = null;
    }
    GetRateModelMasterRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetRateModelMasterRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetRateModelMasterRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetRateModelMasterRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetRateModelMasterRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetRateModelMasterRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetRateModelMasterRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    GetRateModelMasterRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetRateModelMasterRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetRateModelMasterRequest.prototype.getRateName = function () {
        return this.rateName;
    };
    GetRateModelMasterRequest.prototype.setRateName = function (rateName) {
        this.rateName = rateName;
        return this;
    };
    GetRateModelMasterRequest.prototype.withRateName = function (rateName) {
        this.rateName = rateName;
        return this;
    };
    GetRateModelMasterRequest.fromDict = function (data) {
        return new GetRateModelMasterRequest()
            .withNamespaceName(data["namespaceName"])
            .withRateName(data["rateName"]);
    };
    GetRateModelMasterRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "rateName": this.getRateName(),
        };
    };
    return GetRateModelMasterRequest;
}());
export default GetRateModelMasterRequest;
//# sourceMappingURL=GetRateModelMasterRequest.js.map
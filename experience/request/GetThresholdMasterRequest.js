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
var GetThresholdMasterRequest = /** @class */ (function () {
    function GetThresholdMasterRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.thresholdName = null;
    }
    GetThresholdMasterRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetThresholdMasterRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetThresholdMasterRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetThresholdMasterRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetThresholdMasterRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetThresholdMasterRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetThresholdMasterRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    GetThresholdMasterRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetThresholdMasterRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetThresholdMasterRequest.prototype.getThresholdName = function () {
        return this.thresholdName;
    };
    GetThresholdMasterRequest.prototype.setThresholdName = function (thresholdName) {
        this.thresholdName = thresholdName;
        return this;
    };
    GetThresholdMasterRequest.prototype.withThresholdName = function (thresholdName) {
        this.thresholdName = thresholdName;
        return this;
    };
    GetThresholdMasterRequest.fromDict = function (data) {
        return new GetThresholdMasterRequest()
            .withNamespaceName(data["namespaceName"])
            .withThresholdName(data["thresholdName"]);
    };
    GetThresholdMasterRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "thresholdName": this.getThresholdName(),
        };
    };
    return GetThresholdMasterRequest;
}());
export default GetThresholdMasterRequest;
//# sourceMappingURL=GetThresholdMasterRequest.js.map
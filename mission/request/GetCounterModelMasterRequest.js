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
var GetCounterModelMasterRequest = /** @class */ (function () {
    function GetCounterModelMasterRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.counterName = null;
    }
    GetCounterModelMasterRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetCounterModelMasterRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetCounterModelMasterRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetCounterModelMasterRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetCounterModelMasterRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetCounterModelMasterRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetCounterModelMasterRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    GetCounterModelMasterRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetCounterModelMasterRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetCounterModelMasterRequest.prototype.getCounterName = function () {
        return this.counterName;
    };
    GetCounterModelMasterRequest.prototype.setCounterName = function (counterName) {
        this.counterName = counterName;
        return this;
    };
    GetCounterModelMasterRequest.prototype.withCounterName = function (counterName) {
        this.counterName = counterName;
        return this;
    };
    GetCounterModelMasterRequest.fromDict = function (data) {
        return new GetCounterModelMasterRequest()
            .withNamespaceName(data["namespaceName"])
            .withCounterName(data["counterName"]);
    };
    GetCounterModelMasterRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "counterName": this.getCounterName(),
        };
    };
    return GetCounterModelMasterRequest;
}());
export default GetCounterModelMasterRequest;
//# sourceMappingURL=GetCounterModelMasterRequest.js.map
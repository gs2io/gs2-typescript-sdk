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
var GetFormModelMasterRequest = /** @class */ (function () {
    function GetFormModelMasterRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.formModelName = null;
    }
    GetFormModelMasterRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetFormModelMasterRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetFormModelMasterRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetFormModelMasterRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetFormModelMasterRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetFormModelMasterRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetFormModelMasterRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    GetFormModelMasterRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetFormModelMasterRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetFormModelMasterRequest.prototype.getFormModelName = function () {
        return this.formModelName;
    };
    GetFormModelMasterRequest.prototype.setFormModelName = function (formModelName) {
        this.formModelName = formModelName;
        return this;
    };
    GetFormModelMasterRequest.prototype.withFormModelName = function (formModelName) {
        this.formModelName = formModelName;
        return this;
    };
    GetFormModelMasterRequest.fromDict = function (data) {
        return new GetFormModelMasterRequest()
            .withNamespaceName(data["namespaceName"])
            .withFormModelName(data["formModelName"]);
    };
    GetFormModelMasterRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "formModelName": this.getFormModelName(),
        };
    };
    return GetFormModelMasterRequest;
}());
export default GetFormModelMasterRequest;
//# sourceMappingURL=GetFormModelMasterRequest.js.map
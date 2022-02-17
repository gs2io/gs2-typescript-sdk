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
var UpdateCurrentStaminaMasterRequest = /** @class */ (function () {
    function UpdateCurrentStaminaMasterRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.settings = null;
    }
    UpdateCurrentStaminaMasterRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    UpdateCurrentStaminaMasterRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    UpdateCurrentStaminaMasterRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    UpdateCurrentStaminaMasterRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    UpdateCurrentStaminaMasterRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    UpdateCurrentStaminaMasterRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    UpdateCurrentStaminaMasterRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    UpdateCurrentStaminaMasterRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    UpdateCurrentStaminaMasterRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    UpdateCurrentStaminaMasterRequest.prototype.getSettings = function () {
        return this.settings;
    };
    UpdateCurrentStaminaMasterRequest.prototype.setSettings = function (settings) {
        this.settings = settings;
        return this;
    };
    UpdateCurrentStaminaMasterRequest.prototype.withSettings = function (settings) {
        this.settings = settings;
        return this;
    };
    UpdateCurrentStaminaMasterRequest.fromDict = function (data) {
        return new UpdateCurrentStaminaMasterRequest()
            .withNamespaceName(data["namespaceName"])
            .withSettings(data["settings"]);
    };
    UpdateCurrentStaminaMasterRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "settings": this.getSettings(),
        };
    };
    return UpdateCurrentStaminaMasterRequest;
}());
export default UpdateCurrentStaminaMasterRequest;
//# sourceMappingURL=UpdateCurrentStaminaMasterRequest.js.map
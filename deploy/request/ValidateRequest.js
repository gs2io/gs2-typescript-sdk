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
var ValidateRequest = /** @class */ (function () {
    function ValidateRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.template = null;
    }
    ValidateRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    ValidateRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    ValidateRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    ValidateRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    ValidateRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    ValidateRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    ValidateRequest.prototype.getTemplate = function () {
        return this.template;
    };
    ValidateRequest.prototype.setTemplate = function (template) {
        this.template = template;
        return this;
    };
    ValidateRequest.prototype.withTemplate = function (template) {
        this.template = template;
        return this;
    };
    ValidateRequest.fromDict = function (data) {
        return new ValidateRequest()
            .withTemplate(data["template"]);
    };
    ValidateRequest.prototype.toDict = function () {
        return {
            "template": this.getTemplate(),
        };
    };
    return ValidateRequest;
}());
export { ValidateRequest };
//# sourceMappingURL=ValidateRequest.js.map
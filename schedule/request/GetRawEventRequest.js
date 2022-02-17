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
var GetRawEventRequest = /** @class */ (function () {
    function GetRawEventRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.eventName = null;
    }
    GetRawEventRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetRawEventRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetRawEventRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetRawEventRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetRawEventRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetRawEventRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetRawEventRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    GetRawEventRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetRawEventRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetRawEventRequest.prototype.getEventName = function () {
        return this.eventName;
    };
    GetRawEventRequest.prototype.setEventName = function (eventName) {
        this.eventName = eventName;
        return this;
    };
    GetRawEventRequest.prototype.withEventName = function (eventName) {
        this.eventName = eventName;
        return this;
    };
    GetRawEventRequest.fromDict = function (data) {
        return new GetRawEventRequest()
            .withNamespaceName(data["namespaceName"])
            .withEventName(data["eventName"]);
    };
    GetRawEventRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "eventName": this.getEventName(),
        };
    };
    return GetRawEventRequest;
}());
export default GetRawEventRequest;
//# sourceMappingURL=GetRawEventRequest.js.map
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
var GetEventRequest = /** @class */ (function () {
    function GetEventRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.stackName = null;
        this.eventName = null;
    }
    GetEventRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetEventRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetEventRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetEventRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetEventRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetEventRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetEventRequest.prototype.getStackName = function () {
        return this.stackName;
    };
    GetEventRequest.prototype.setStackName = function (stackName) {
        this.stackName = stackName;
        return this;
    };
    GetEventRequest.prototype.withStackName = function (stackName) {
        this.stackName = stackName;
        return this;
    };
    GetEventRequest.prototype.getEventName = function () {
        return this.eventName;
    };
    GetEventRequest.prototype.setEventName = function (eventName) {
        this.eventName = eventName;
        return this;
    };
    GetEventRequest.prototype.withEventName = function (eventName) {
        this.eventName = eventName;
        return this;
    };
    GetEventRequest.fromDict = function (data) {
        return new GetEventRequest()
            .withStackName(data["stackName"])
            .withEventName(data["eventName"]);
    };
    GetEventRequest.prototype.toDict = function () {
        return {
            "stackName": this.getStackName(),
            "eventName": this.getEventName(),
        };
    };
    return GetEventRequest;
}());
export { GetEventRequest };
//# sourceMappingURL=GetEventRequest.js.map
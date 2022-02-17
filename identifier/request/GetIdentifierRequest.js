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
var GetIdentifierRequest = /** @class */ (function () {
    function GetIdentifierRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.userName = null;
        this.clientId = null;
    }
    GetIdentifierRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetIdentifierRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetIdentifierRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetIdentifierRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetIdentifierRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetIdentifierRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetIdentifierRequest.prototype.getUserName = function () {
        return this.userName;
    };
    GetIdentifierRequest.prototype.setUserName = function (userName) {
        this.userName = userName;
        return this;
    };
    GetIdentifierRequest.prototype.withUserName = function (userName) {
        this.userName = userName;
        return this;
    };
    GetIdentifierRequest.prototype.getClientId = function () {
        return this.clientId;
    };
    GetIdentifierRequest.prototype.setClientId = function (clientId) {
        this.clientId = clientId;
        return this;
    };
    GetIdentifierRequest.prototype.withClientId = function (clientId) {
        this.clientId = clientId;
        return this;
    };
    GetIdentifierRequest.fromDict = function (data) {
        return new GetIdentifierRequest()
            .withUserName(data["userName"])
            .withClientId(data["clientId"]);
    };
    GetIdentifierRequest.prototype.toDict = function () {
        return {
            "userName": this.getUserName(),
            "clientId": this.getClientId(),
        };
    };
    return GetIdentifierRequest;
}());
export default GetIdentifierRequest;
//# sourceMappingURL=GetIdentifierRequest.js.map
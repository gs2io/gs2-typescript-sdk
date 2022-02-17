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
var SendNotificationResult = /** @class */ (function () {
    function SendNotificationResult() {
        this.protocol = null;
    }
    SendNotificationResult.prototype.getProtocol = function () {
        return this.protocol;
    };
    SendNotificationResult.prototype.setProtocol = function (protocol) {
        this.protocol = protocol;
        return this;
    };
    SendNotificationResult.prototype.withProtocol = function (protocol) {
        this.protocol = protocol;
        return this;
    };
    SendNotificationResult.fromDict = function (data) {
        return new SendNotificationResult()
            .withProtocol(data["protocol"]);
    };
    SendNotificationResult.prototype.toDict = function () {
        return {
            "protocol": this.getProtocol(),
        };
    };
    return SendNotificationResult;
}());
export default SendNotificationResult;
//# sourceMappingURL=SendNotificationResult.js.map
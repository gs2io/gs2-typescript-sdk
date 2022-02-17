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
var ConsumeAction = /** @class */ (function () {
    function ConsumeAction() {
        this.action = null;
        this.request = null;
    }
    ConsumeAction.prototype.getAction = function () {
        return this.action;
    };
    ConsumeAction.prototype.setAction = function (action) {
        this.action = action;
        return this;
    };
    ConsumeAction.prototype.withAction = function (action) {
        this.action = action;
        return this;
    };
    ConsumeAction.prototype.getRequest = function () {
        return this.request;
    };
    ConsumeAction.prototype.setRequest = function (request) {
        this.request = request;
        return this;
    };
    ConsumeAction.prototype.withRequest = function (request) {
        this.request = request;
        return this;
    };
    ConsumeAction.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new ConsumeAction()
            .withAction(data["action"])
            .withRequest(data["request"]);
    };
    ConsumeAction.prototype.toDict = function () {
        return {
            "action": this.getAction(),
            "request": this.getRequest(),
        };
    };
    return ConsumeAction;
}());
export default ConsumeAction;
//# sourceMappingURL=ConsumeAction.js.map
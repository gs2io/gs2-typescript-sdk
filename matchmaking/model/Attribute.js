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
var Attribute = /** @class */ (function () {
    function Attribute() {
        this.name = null;
        this.value = null;
    }
    Attribute.prototype.getName = function () {
        return this.name;
    };
    Attribute.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    Attribute.prototype.withName = function (name) {
        this.name = name;
        return this;
    };
    Attribute.prototype.getValue = function () {
        return this.value;
    };
    Attribute.prototype.setValue = function (value) {
        this.value = value;
        return this;
    };
    Attribute.prototype.withValue = function (value) {
        this.value = value;
        return this;
    };
    Attribute.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new Attribute()
            .withName(data["name"])
            .withValue(data["value"]);
    };
    Attribute.prototype.toDict = function () {
        return {
            "name": this.getName(),
            "value": this.getValue(),
        };
    };
    return Attribute;
}());
export default Attribute;
//# sourceMappingURL=Attribute.js.map
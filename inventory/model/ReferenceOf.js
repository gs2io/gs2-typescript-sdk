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
var ReferenceOf = /** @class */ (function () {
    function ReferenceOf() {
        this.referenceOfId = null;
        this.name = null;
    }
    ReferenceOf.prototype.getReferenceOfId = function () {
        return this.referenceOfId;
    };
    ReferenceOf.prototype.setReferenceOfId = function (referenceOfId) {
        this.referenceOfId = referenceOfId;
        return this;
    };
    ReferenceOf.prototype.withReferenceOfId = function (referenceOfId) {
        this.referenceOfId = referenceOfId;
        return this;
    };
    ReferenceOf.prototype.getName = function () {
        return this.name;
    };
    ReferenceOf.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    ReferenceOf.prototype.withName = function (name) {
        this.name = name;
        return this;
    };
    ReferenceOf.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new ReferenceOf()
            .withReferenceOfId(data["referenceOfId"])
            .withName(data["name"]);
    };
    ReferenceOf.prototype.toDict = function () {
        return {
            "referenceOfId": this.getReferenceOfId(),
            "name": this.getName(),
        };
    };
    return ReferenceOf;
}());
export default ReferenceOf;
//# sourceMappingURL=ReferenceOf.js.map
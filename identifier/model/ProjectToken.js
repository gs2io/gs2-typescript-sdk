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
var ProjectToken = /** @class */ (function () {
    function ProjectToken() {
        this.token = null;
    }
    ProjectToken.prototype.getToken = function () {
        return this.token;
    };
    ProjectToken.prototype.setToken = function (token) {
        this.token = token;
        return this;
    };
    ProjectToken.prototype.withToken = function (token) {
        this.token = token;
        return this;
    };
    ProjectToken.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new ProjectToken()
            .withToken(data["token"]);
    };
    ProjectToken.prototype.toDict = function () {
        return {
            "token": this.getToken(),
        };
    };
    return ProjectToken;
}());
export default ProjectToken;
//# sourceMappingURL=ProjectToken.js.map
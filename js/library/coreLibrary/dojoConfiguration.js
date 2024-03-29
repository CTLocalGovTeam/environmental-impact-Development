﻿/*global location, dojoConfig */
/*jslint sloppy:true */
/** @license
| Version 10.2
| Copyright 2013 Esri
|
| Licensed under the Apache License, Version 2.0 (the "License");
| you may not use this file except in compliance with the License.
| You may obtain a copy of the License at
|
|    http://www.apache.org/licenses/LICENSE-2.0
|
| Unless required by applicable law or agreed to in writing, software
| distributed under the License is distributed on an "AS IS" BASIS,
| WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
| See the License for the specific language governing permissions and
| limitations under the License.
*/
//============================================================================================================================//

/**
* initialize default dojo configuration attributes by creating a dojoConfig object
*/
var root = location.href.slice(0, location.href.lastIndexOf('/'));
dojoConfig = {
    parseOnLoad: true,
    async: true,
    baseURL: root,
    packages: [
            { name: "application", location: root },
            { name: "widgets", location: root + '/shared/widgets' },
            { name: "coreLibrary", location: root + '/shared/coreLibrary' }
        ]
};
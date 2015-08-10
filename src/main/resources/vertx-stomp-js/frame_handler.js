/*
 * Copyright 2014 Red Hat, Inc.
 *
 * Red Hat licenses this file to you under the Apache License, version 2.0
 * (the "License"); you may not use this file except in compliance with the
 * License.  You may obtain a copy of the License at:
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.  See the
 * License for the specific language governing permissions and limitations
 * under the License.
 */

/** @module vertx-stomp-js/frame_handler */
var utils = require('vertx-js/util/utils');

var io = Packages.io;
var JsonObject = io.vertx.core.json.JsonObject;
var JFrameHandler = io.vertx.ext.stomp.FrameHandler;
var Frame = io.vertx.ext.stomp.Frame;

/**

 @class
*/
var FrameHandler = function(j_val) {

  var j_frameHandler = j_val;
  var that = this;

  /**

   @public
   @param frame {Object} 
   */
  this.onFrame = function(frame) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'object') {
      j_frameHandler["onFrame(io.vertx.ext.stomp.Frame)"](frame != null ? new Frame(new JsonObject(JSON.stringify(frame))) : null);
    } else utils.invalidArgs();
  };

  // A reference to the underlying Java delegate
  // NOTE! This is an internal API and must not be used in user code.
  // If you rely on this property your code is likely to break if we change it / remove it without warning.
  this._jdel = j_frameHandler;
};

// We export the Constructor function
module.exports = FrameHandler;
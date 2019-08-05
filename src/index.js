var webkit = window.webkit

var START = 'start'
var COMPLETE = 'complete'
var CANCEL = 'cancel'
var ERROR = 'error'

var loadHandler

function postMessage(msg) {
  if (typeof webkit === 'object' && webkit && webkit.messageHandlers) {
    // iOS
    webkit.messageHandlers.callback.postMessage(msg)
  }
  else {
    // Dev Browser
    console.log('sending post message', msg)
  }
}

/**
 * Sends COMPLETE message to native mobile client.
 *
 * Enables mobile client to perform some teardown actions and close the explorable web view,
 * especially, if it is a full view explorable.
 *
 * Call this only after you complete your explorable flow for that scene,
 * and are ready for closing of your explorable view.
 *
 * @memberof module:explorable-helpers
 * @function complete
 *
 */
export var complete = function() {
  postMessage(COMPLETE)
}

/**
 * Sends CANCEL message to native mobile client.
 *
 * Enables mobile client to perform some teardown actions and close the explorable web view,
 * especially if it is a full view explorable.
 *
 * Call this only after user intended to close the view throughout your explorable UI,
 * and you are ready for closing of your explorable view.
 *
 * @memberof module:explorable-helpers
 * @function cancel
 *
 */
export var cancel = function() {
  postMessage(CANCEL)
}

/**
 * Loads Explorable for given scene.
 *
 * THIS FUNCTION IS CALLED BY NATIVE MOBILE CLIENT.
 * EXPLORABLE CREATORS SHOULD ONLY USE IT FOR DEVELOPMENT/TESTING PURPOSES.
 *
 * @memberof module:explorable-helpers
 * @function load
 * @param {String} scene - Scene of the explorable.
 * @param {String} enrolmentId - Unique identifier to distinguish relationship between a dialogue and user.
 *
 */
export var load = function(scene, enrolmentId) {
  try {
    loadHandler(scene, enrolmentId)
    postMessage(START)
  }
  catch (err) {
    postMessage(ERROR + ': ' + JSON.stringify(err))
  }
}

/**
 * Callback for loading explorable scene.
 *
 * @callback onloadCallback
 * @param {String} scene - Scene of the explorable.
 * @param {String} enrolmentId - Unique identifier to distinguish relationship between a dialogue and user.
 *
 */

/**
 * Sets given callback as the function to be called after mobile client calls `load` function.
 *
 * Calling this function as early as possible,
 * and providing a proper callback is required to start your explorable scene.
 *
 * @memberof module:explorable-helpers
 * @param {onloadCallback} cb - Callback to be run on load of explorable scene.
 *
 */
export var onload = function(cb) {
  loadHandler = cb
}

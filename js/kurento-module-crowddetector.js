require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/* Autogenerated with Kurento Idl */

/*
 * (C) Copyright 2013-2015 Kurento (http://kurento.org/)
 *
 * All rights reserved. This program and the accompanying materials are made
 * available under the terms of the GNU Lesser General Public License (LGPL)
 * version 2.1 which accompanies this distribution, and is available at
 * http://www.gnu.org/licenses/lgpl-2.1.html
 *
 * This library is distributed in the hope that it will be useful, but WITHOUT
 * ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
 * FOR A PARTICULAR PURPOSE. See the GNU Lesser General Public License for more
 * details.
 */

var inherits = require('inherits');

var kurentoClient = require('kurento-client');

var checkType      = kurentoClient.checkType;
var ChecktypeError = checkType.ChecktypeError;

var Transaction = kurentoClient.TransactionsManager.Transaction;

var Filter = kurentoClient.register.abstracts.Filter;


function noop(error, result) {
  if (error) console.trace(error);

  return result
};


/**
 * Create a {@link module:crowddetector.CrowdDetectorFilter CrowdDetectorFilter}
 *
 * @classdesc
 *  Filter that detects people agglomeration in video streams
 *
 * @extends module:core/abstracts.Filter
 *
 * @constructor module:crowddetector.CrowdDetectorFilter
 *
 * @fires {@link module:crowddetector#event:CrowdDetectorDirection CrowdDetectorDirection}
 * @fires {@link module:crowddetector#event:CrowdDetectorFluidity CrowdDetectorFluidity}
 * @fires {@link module:crowddetector#event:CrowdDetectorOccupancy CrowdDetectorOccupancy}
 */
function CrowdDetectorFilter(){
  CrowdDetectorFilter.super_.call(this);
};
inherits(CrowdDetectorFilter, Filter);


//
// Public properties
//

/**
 * The processing image will be resized to this width (in pixels)
 *
 * @alias module:crowddetector.CrowdDetectorFilter#getProcessingWidth
 *
 * @param {module:crowddetector.CrowdDetectorFilter~getProcessingWidthCallback} [callback]
 *
 * @return {external:Promise}
 */
CrowdDetectorFilter.prototype.getProcessingWidth = function(callback){
  var transaction = (arguments[0] instanceof Transaction)
                  ? Array.prototype.shift.apply(arguments)
                  : undefined;

  if(!arguments.length) callback = undefined;

  callback = (callback || noop).bind(this)

  return this._invoke(transaction, 'getProcessingWidth', callback);
};
/**
 * @callback module:crowddetector.CrowdDetectorFilter~getProcessingWidthCallback
 * @param {external:Error} error
 * @param {external:Integer} result
 */

/**
 * The processing image will be resized to this width (in pixels)
 *
 * @alias module:crowddetector.CrowdDetectorFilter#setProcessingWidth
 *
 * @param {external:Integer} processingWidth
 * @param {module:crowddetector.CrowdDetectorFilter~setProcessingWidthCallback} [callback]
 *
 * @return {external:Promise}
 */
CrowdDetectorFilter.prototype.setProcessingWidth = function(processingWidth, callback){
  var transaction = (arguments[0] instanceof Transaction)
                  ? Array.prototype.shift.apply(arguments)
                  : undefined;

  checkType('int', 'processingWidth', processingWidth, {required: true});

  var params = {
    processingWidth: processingWidth
  };

  callback = (callback || noop).bind(this)

  return this._invoke(transaction, 'setProcessingWidth', params, callback);
};
/**
 * @callback module:crowddetector.CrowdDetectorFilter~setProcessingWidthCallback
 * @param {external:Error} error
 */


/**
 * @alias module:crowddetector.CrowdDetectorFilter.constructorParams
 *
 * @property {module:core.MediaPipeline} mediaPipeline
 *  the {@link module:core.MediaPipeline MediaPipeline} to which the filter 
 *  belongs
 *
 * @property {module:crowddetector/complexTypes.RegionOfInterest}[] rois
 *  Regions of interest for the filter
 */
CrowdDetectorFilter.constructorParams = {
  mediaPipeline: {
    type: 'MediaPipeline',
    required: true
  },
  rois: {
    type: 'RegionOfInterest',
    isArray: true,
    required: true
  }
};

/**
 * @alias module:crowddetector.CrowdDetectorFilter.events
 *
 * @extends module:core/abstracts.Filter.events
 */
CrowdDetectorFilter.events = Filter.events.concat(['CrowdDetectorDirection', 'CrowdDetectorFluidity', 'CrowdDetectorOccupancy']);


/**
 * Checker for {@link crowddetector.CrowdDetectorFilter}
 *
 * @memberof module:crowddetector
 *
 * @param {external:String} key
 * @param {module:crowddetector.CrowdDetectorFilter} value
 */
function checkCrowdDetectorFilter(key, value)
{
  if(!(value instanceof CrowdDetectorFilter))
    throw ChecktypeError(key, CrowdDetectorFilter, value);
};


module.exports = CrowdDetectorFilter;

CrowdDetectorFilter.check = checkCrowdDetectorFilter;

},{"inherits":"inherits","kurento-client":"kurento-client"}],2:[function(require,module,exports){
/**
 * Loader for the kurento-module-crowddetector package on the browser
 */

require('.');

},{".":"kurento-module-crowddetector"}],3:[function(require,module,exports){
/* Autogenerated with Kurento Idl */

/*
 * (C) Copyright 2013-2015 Kurento (http://kurento.org/)
 *
 * All rights reserved. This program and the accompanying materials are made
 * available under the terms of the GNU Lesser General Public License (LGPL)
 * version 2.1 which accompanies this distribution, and is available at
 * http://www.gnu.org/licenses/lgpl-2.1.html
 *
 * This library is distributed in the hope that it will be useful, but WITHOUT
 * ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
 * FOR A PARTICULAR PURPOSE. See the GNU Lesser General Public License for more
 * details.
 */

var inherits = require('inherits');

var kurentoClient = require('kurento-client');

var checkType = kurentoClient.checkType;
var ChecktypeError = checkType.ChecktypeError;

var ComplexType = kurentoClient.register.complexTypes.ComplexType;


/**
 * Region of interest for some events in a video processing filter
 *
 * @constructor module:crowddetector/complexTypes.RegionOfInterest
 *
 * @property {module:crowddetector/complexTypes.RelativePoint} points
 *  list of points delimiting the region of interest
 * @property {module:crowddetector/complexTypes.RegionOfInterestConfig} regionOfInterestConfig
 *  data structure for configuration of CrowdDetector regions of interest
 * @property {external:String} id
 *  identifier of the region of interest. The string used for the id must begin 
 *   with a letter followed by an alphanumeric character included (/-_.:+)
 */
function RegionOfInterest(regionOfInterestDict){
  if(!(this instanceof RegionOfInterest))
    return new RegionOfInterest(regionOfInterestDict)

  regionOfInterestDict = regionOfInterestDict || {}

  // Check regionOfInterestDict has the required fields
  checkType('RelativePoint', 'regionOfInterestDict.points', regionOfInterestDict.points, {isArray: true, required: true});
  checkType('RegionOfInterestConfig', 'regionOfInterestDict.regionOfInterestConfig', regionOfInterestDict.regionOfInterestConfig, {required: true});
  checkType('String', 'regionOfInterestDict.id', regionOfInterestDict.id, {required: true});

  // Init parent class
  RegionOfInterest.super_.call(this, regionOfInterestDict)

  // Set object properties
  Object.defineProperties(this, {
    points: {
      writable: true,
      enumerable: true,
      value: regionOfInterestDict.points
    },
    regionOfInterestConfig: {
      writable: true,
      enumerable: true,
      value: regionOfInterestDict.regionOfInterestConfig
    },
    id: {
      writable: true,
      enumerable: true,
      value: regionOfInterestDict.id
    }
  })
}
inherits(RegionOfInterest, ComplexType)

// Private identifiers to allow re-construction of the complexType on the server
// They need to be enumerable so JSON.stringify() can access to them
Object.defineProperties(RegionOfInterest.prototype, {
  __module__: {
    enumerable: true,
    value: "crowddetector"
  },
  __type__: {
    enumerable: true,
    value: "RegionOfInterest"
  }
})

/**
 * Checker for {@link crowddetector/complexTypes.RegionOfInterest}
 *
 * @memberof module:crowddetector/complexTypes
 *
 * @param {external:String} key
 * @param {module:crowddetector/complexTypes.RegionOfInterest} value
 */
function checkRegionOfInterest(key, value)
{
  if(!(value instanceof RegionOfInterest))
    throw ChecktypeError(key, RegionOfInterest, value);
};


module.exports = RegionOfInterest;

RegionOfInterest.check = checkRegionOfInterest;

},{"inherits":"inherits","kurento-client":"kurento-client"}],4:[function(require,module,exports){
/* Autogenerated with Kurento Idl */

/*
 * (C) Copyright 2013-2015 Kurento (http://kurento.org/)
 *
 * All rights reserved. This program and the accompanying materials are made
 * available under the terms of the GNU Lesser General Public License (LGPL)
 * version 2.1 which accompanies this distribution, and is available at
 * http://www.gnu.org/licenses/lgpl-2.1.html
 *
 * This library is distributed in the hope that it will be useful, but WITHOUT
 * ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
 * FOR A PARTICULAR PURPOSE. See the GNU Lesser General Public License for more
 * details.
 */

var inherits = require('inherits');

var kurentoClient = require('kurento-client');

var checkType = kurentoClient.checkType;
var ChecktypeError = checkType.ChecktypeError;

var ComplexType = kurentoClient.register.complexTypes.ComplexType;


/**
 * data structure for configuration of CrowdDetector regions of interest
 *
 * @constructor module:crowddetector/complexTypes.RegionOfInterestConfig
 *
 * @property {external:Integer} occupancyLevelMin
 *  minimun occupancy percentage in the ROI to send occupancy events
 * @property {external:Integer} occupancyLevelMed
 *  send occupancy level = 1 if the occupancy percentage is between 
 *  occupancy_level_min and this level
 * @property {external:Integer} occupancyLevelMax
 *  send occupancy level = 2 if the occupancy percentage is between 
 *  occupancy_level_med and this level,
 *  and send occupancy level = 3 if the occupancy percentage is between this 
 *  level and 100
 * @property {external:Integer} occupancyNumFramesToEvent
 *  number of consecutive frames that a new occupancy level has to be detected 
 *  to recognize it as a occupancy level change.
 *  A new occupancy event will be send
 * @property {external:Integer} fluidityLevelMin
 *  minimun fluidity percentage in the ROI to send fluidity events
 * @property {external:Integer} fluidityLevelMed
 *  send fluidity level = 1 if the fluidity percentage is between 
 *  fluidity_level_min and this level
 * @property {external:Integer} fluidityLevelMax
 *  send fluidity level = 2 if the fluidity percentage is between 
 *  fluidity_level_med and this level,
 *   and send fluidity level = 3 if the fluidity percentage is between this 
 *   level and 100
 * @property {external:Integer} fluidityNumFramesToEvent
 *  number of consecutive frames that a new fluidity level has to be detected to
 *   A new fluidity event will be send
 * @property {external:Boolean} sendOpticalFlowEvent
 *  Enable/disable the movement direction detection into the ROI
 * @property {external:Integer} opticalFlowNumFramesToEvent
 *  number of consecutive frames that a new direction of movement has to be 
 *  detected to recognize a new movement direction. 
 *   A new direction event will be send
 * @property {external:Integer} opticalFlowNumFramesToReset
 *  number of consecutive frames in order to reset the counter of repeated 
 *  directions
 * @property {external:Integer} opticalFlowAngleOffset
 *  Direction of the movement. The angle could have four different values: 
 *   left (0), up (90), right (180) and down (270). This cartesian axis could be
 */
function RegionOfInterestConfig(regionOfInterestConfigDict){
  if(!(this instanceof RegionOfInterestConfig))
    return new RegionOfInterestConfig(regionOfInterestConfigDict)

  regionOfInterestConfigDict = regionOfInterestConfigDict || {}

  // Check regionOfInterestConfigDict has the required fields
  checkType('int', 'regionOfInterestConfigDict.occupancyLevelMin', regionOfInterestConfigDict.occupancyLevelMin);
  checkType('int', 'regionOfInterestConfigDict.occupancyLevelMed', regionOfInterestConfigDict.occupancyLevelMed);
  checkType('int', 'regionOfInterestConfigDict.occupancyLevelMax', regionOfInterestConfigDict.occupancyLevelMax);
  checkType('int', 'regionOfInterestConfigDict.occupancyNumFramesToEvent', regionOfInterestConfigDict.occupancyNumFramesToEvent);
  checkType('int', 'regionOfInterestConfigDict.fluidityLevelMin', regionOfInterestConfigDict.fluidityLevelMin);
  checkType('int', 'regionOfInterestConfigDict.fluidityLevelMed', regionOfInterestConfigDict.fluidityLevelMed);
  checkType('int', 'regionOfInterestConfigDict.fluidityLevelMax', regionOfInterestConfigDict.fluidityLevelMax);
  checkType('int', 'regionOfInterestConfigDict.fluidityNumFramesToEvent', regionOfInterestConfigDict.fluidityNumFramesToEvent);
  checkType('boolean', 'regionOfInterestConfigDict.sendOpticalFlowEvent', regionOfInterestConfigDict.sendOpticalFlowEvent);
  checkType('int', 'regionOfInterestConfigDict.opticalFlowNumFramesToEvent', regionOfInterestConfigDict.opticalFlowNumFramesToEvent);
  checkType('int', 'regionOfInterestConfigDict.opticalFlowNumFramesToReset', regionOfInterestConfigDict.opticalFlowNumFramesToReset);
  checkType('int', 'regionOfInterestConfigDict.opticalFlowAngleOffset', regionOfInterestConfigDict.opticalFlowAngleOffset);

  // Init parent class
  RegionOfInterestConfig.super_.call(this, regionOfInterestConfigDict)

  // Set object properties
  Object.defineProperties(this, {
    occupancyLevelMin: {
      writable: true,
      enumerable: true,
      value: regionOfInterestConfigDict.occupancyLevelMin
    },
    occupancyLevelMed: {
      writable: true,
      enumerable: true,
      value: regionOfInterestConfigDict.occupancyLevelMed
    },
    occupancyLevelMax: {
      writable: true,
      enumerable: true,
      value: regionOfInterestConfigDict.occupancyLevelMax
    },
    occupancyNumFramesToEvent: {
      writable: true,
      enumerable: true,
      value: regionOfInterestConfigDict.occupancyNumFramesToEvent
    },
    fluidityLevelMin: {
      writable: true,
      enumerable: true,
      value: regionOfInterestConfigDict.fluidityLevelMin
    },
    fluidityLevelMed: {
      writable: true,
      enumerable: true,
      value: regionOfInterestConfigDict.fluidityLevelMed
    },
    fluidityLevelMax: {
      writable: true,
      enumerable: true,
      value: regionOfInterestConfigDict.fluidityLevelMax
    },
    fluidityNumFramesToEvent: {
      writable: true,
      enumerable: true,
      value: regionOfInterestConfigDict.fluidityNumFramesToEvent
    },
    sendOpticalFlowEvent: {
      writable: true,
      enumerable: true,
      value: regionOfInterestConfigDict.sendOpticalFlowEvent
    },
    opticalFlowNumFramesToEvent: {
      writable: true,
      enumerable: true,
      value: regionOfInterestConfigDict.opticalFlowNumFramesToEvent
    },
    opticalFlowNumFramesToReset: {
      writable: true,
      enumerable: true,
      value: regionOfInterestConfigDict.opticalFlowNumFramesToReset
    },
    opticalFlowAngleOffset: {
      writable: true,
      enumerable: true,
      value: regionOfInterestConfigDict.opticalFlowAngleOffset
    }
  })
}
inherits(RegionOfInterestConfig, ComplexType)

// Private identifiers to allow re-construction of the complexType on the server
// They need to be enumerable so JSON.stringify() can access to them
Object.defineProperties(RegionOfInterestConfig.prototype, {
  __module__: {
    enumerable: true,
    value: "crowddetector"
  },
  __type__: {
    enumerable: true,
    value: "RegionOfInterestConfig"
  }
})

/**
 * Checker for {@link crowddetector/complexTypes.RegionOfInterestConfig}
 *
 * @memberof module:crowddetector/complexTypes
 *
 * @param {external:String} key
 * @param {module:crowddetector/complexTypes.RegionOfInterestConfig} value
 */
function checkRegionOfInterestConfig(key, value)
{
  if(!(value instanceof RegionOfInterestConfig))
    throw ChecktypeError(key, RegionOfInterestConfig, value);
};


module.exports = RegionOfInterestConfig;

RegionOfInterestConfig.check = checkRegionOfInterestConfig;

},{"inherits":"inherits","kurento-client":"kurento-client"}],5:[function(require,module,exports){
/* Autogenerated with Kurento Idl */

/*
 * (C) Copyright 2013-2015 Kurento (http://kurento.org/)
 *
 * All rights reserved. This program and the accompanying materials are made
 * available under the terms of the GNU Lesser General Public License (LGPL)
 * version 2.1 which accompanies this distribution, and is available at
 * http://www.gnu.org/licenses/lgpl-2.1.html
 *
 * This library is distributed in the hope that it will be useful, but WITHOUT
 * ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
 * FOR A PARTICULAR PURPOSE. See the GNU Lesser General Public License for more
 * details.
 */

var inherits = require('inherits');

var kurentoClient = require('kurento-client');

var checkType = kurentoClient.checkType;
var ChecktypeError = checkType.ChecktypeError;

var ComplexType = kurentoClient.register.complexTypes.ComplexType;


/**
 * Relative points in a physical screen, values are a percentage relative to the
 *
 * @constructor module:crowddetector/complexTypes.RelativePoint
 *
 * @property {external:Number} x
 *  Percentage relative to the image width to calculate the X coordinate of the 
 *  point [0..1]
 * @property {external:Number} y
 *  Percentage relative to the image height to calculate the Y coordinate of the
 */
function RelativePoint(relativePointDict){
  if(!(this instanceof RelativePoint))
    return new RelativePoint(relativePointDict)

  relativePointDict = relativePointDict || {}

  // Check relativePointDict has the required fields
  checkType('float', 'relativePointDict.x', relativePointDict.x, {required: true});
  checkType('float', 'relativePointDict.y', relativePointDict.y, {required: true});

  // Init parent class
  RelativePoint.super_.call(this, relativePointDict)

  // Set object properties
  Object.defineProperties(this, {
    x: {
      writable: true,
      enumerable: true,
      value: relativePointDict.x
    },
    y: {
      writable: true,
      enumerable: true,
      value: relativePointDict.y
    }
  })
}
inherits(RelativePoint, ComplexType)

// Private identifiers to allow re-construction of the complexType on the server
// They need to be enumerable so JSON.stringify() can access to them
Object.defineProperties(RelativePoint.prototype, {
  __module__: {
    enumerable: true,
    value: "crowddetector"
  },
  __type__: {
    enumerable: true,
    value: "RelativePoint"
  }
})

/**
 * Checker for {@link crowddetector/complexTypes.RelativePoint}
 *
 * @memberof module:crowddetector/complexTypes
 *
 * @param {external:String} key
 * @param {module:crowddetector/complexTypes.RelativePoint} value
 */
function checkRelativePoint(key, value)
{
  if(!(value instanceof RelativePoint))
    throw ChecktypeError(key, RelativePoint, value);
};


module.exports = RelativePoint;

RelativePoint.check = checkRelativePoint;

},{"inherits":"inherits","kurento-client":"kurento-client"}],6:[function(require,module,exports){
/* Autogenerated with Kurento Idl */

/*
 * (C) Copyright 2013-2015 Kurento (http://kurento.org/)
 *
 * All rights reserved. This program and the accompanying materials are made
 * available under the terms of the GNU Lesser General Public License (LGPL)
 * version 2.1 which accompanies this distribution, and is available at
 * http://www.gnu.org/licenses/lgpl-2.1.html
 *
 * This library is distributed in the hope that it will be useful, but WITHOUT
 * ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
 * FOR A PARTICULAR PURPOSE. See the GNU Lesser General Public License for more
 * details.
 */

/**
 * Media API for the Kurento Web SDK
 *
 * @module crowddetector/complexTypes
 *
 * @copyright 2013-2015 Kurento (http://kurento.org/)
 * @license LGPL
 */

var RegionOfInterest = require('./RegionOfInterest');
var RegionOfInterestConfig = require('./RegionOfInterestConfig');
var RelativePoint = require('./RelativePoint');


exports.RegionOfInterest = RegionOfInterest;
exports.RegionOfInterestConfig = RegionOfInterestConfig;
exports.RelativePoint = RelativePoint;

},{"./RegionOfInterest":3,"./RegionOfInterestConfig":4,"./RelativePoint":5}],"kurento-module-crowddetector":[function(require,module,exports){
/* Autogenerated with Kurento Idl */

/*
 * (C) Copyright 2013-2015 Kurento (http://kurento.org/)
 *
 * All rights reserved. This program and the accompanying materials are made
 * available under the terms of the GNU Lesser General Public License (LGPL)
 * version 2.1 which accompanies this distribution, and is available at
 * http://www.gnu.org/licenses/lgpl-2.1.html
 *
 * This library is distributed in the hope that it will be useful, but WITHOUT
 * ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
 * FOR A PARTICULAR PURPOSE. See the GNU Lesser General Public License for more
 * details.
 */

/**
 * Media API for the Kurento Web SDK
 *
 * @module crowddetector
 *
 * @copyright 2013-2015 Kurento (http://kurento.org/)
 * @license LGPL
 */

Object.defineProperty(exports, 'name',    {value: 'crowddetector'});
Object.defineProperty(exports, 'version', {value: '6.0.0-dev'});


var CrowdDetectorFilter = require('./CrowdDetectorFilter');


exports.CrowdDetectorFilter = CrowdDetectorFilter;

exports.complexTypes = require('./complexTypes');

},{"./CrowdDetectorFilter":1,"./complexTypes":6}]},{},[2]);

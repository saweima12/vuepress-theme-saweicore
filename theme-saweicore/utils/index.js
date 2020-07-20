export const extRE = /\.(md|html)$/
export const externalRE = /^[a-z]+:/i
export const endingSlashRE = /\/$/
export const sectionRE = /\d+\-\d+/

import _ from 'lodash';
import moment from 'moment';

/**
 *  check path is external link.
 * @param {*} path
 */
export function isExternal(path) {
  return externalRE.test(path);
}

/**
 * Check Object not have element.
 * @param {*} obj
 */
export function isEmpty(obj) {
  return _.isEmpty(obj);
}

/**
 * Check { Object | Array } length.
 * @param {*} obj
 */
export function getLength(obj) {
  if (!obj)
    return 0
  return Object.keys(obj).length;
}

/**
 * Formate date by Date string.
 * @param {*} date_str
 */
export function dateFormat(date_str) {
  return moment(date_str).format("YYYY-MM-DD");
}

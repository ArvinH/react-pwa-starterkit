import fs from 'fs'
import mkdirp from 'mkdirp'
import {dirname} from 'path'

/**
 * @param {string} path
 * @param {string} data
 */
export function writeFile (path, data) {
  return new Promise((resolve, reject) => {

    mkdirp(dirname(path), err => {
      if (err) reject(err)
      else {
        fs.exists(path, exists => {
          if (exists) {
            reject(new Error(`${path} already exists`))
          }
          else {
            fs.writeFile(path, data, err => err ? reject(err) : resolve())
          }
        })
      }
    })
  })
}
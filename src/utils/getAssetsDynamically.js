/**
 * @param {string} name - name of the asset with extension
 * @param {string} folder - folder name where the asset is located
 * @returns {string} - path to the asset
 */

export const getAssetsDynamically = (name, folder = "images") => {
  try {
    // Import image on demand
    // eslint-disable-next-line import/no-dynamic-require, global-require
    const asset = require(`../assets/${folder}/${name}`);

    // If the image doesn't exist. return null
    if (!asset) return null;
    return asset;
  } catch (error) {
    return null;
  }
};

export default Image;

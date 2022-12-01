import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet-async";
import Meta from "../../data/meta.json";

/**
 * Returns the path for a favicon based on the given color scheme. (you must have favicon .ico files in public folder, with the name "favicon-dark" and "favicon-light")
 *
 * @param {boolean} isDarkMode If currently in dark mode
 */
const getFaviconPath = (isDarkMode = false) =>
  `/favicon-${isDarkMode ? "dark" : "light"}.ico`;

/**
 *
 * @param {object} - props
 * @param {string} props.page - page key from meta.json
 * @returns
 */

function MetaTags({
  page = "home",
  metaTitle = Meta[page].title,
  metaDescription = Meta[page].description,
  metaLink = Meta[page].link,
  metaLocale = "en_US",
  metaType = "website",
}) {
  const [faviconHref, setFaviconHref] = useState("/favicon-light.ico");

  useEffect(() => {
    // Get current color scheme.
    const matcher = window.matchMedia("(prefers-color-scheme: dark)"); // getting user theme preference through an operating system.
    // Set favicon initially.
    setFaviconHref(getFaviconPath(matcher.matches));
    // Change favicon if the color scheme changes.
    matcher.onchange = () => setFaviconHref(getFaviconPath(matcher.matches));
  }, [faviconHref]);

  return (
    <Helmet>
      <link rel="icon" href={faviconHref} />
      <title>{metaTitle}</title>
      <meta property="og:title" content={metaTitle} />
      <meta name="description" content={metaDescription} />
      <meta property="og:description" content={metaDescription} />
      <link rel="canonical" href={metaLink} />
      <meta property="og:url" content={metaLink} />
      <meta property="og:type" content={metaType} />
      <meta property="og:locale" content={metaLocale} />
      {/* <meta property="og:image" content="IMAGE_URL"/> /> */}
      <meta name="twitter:title" content={metaTitle} />
      <meta name="twitter:description" content={metaDescription} />
    </Helmet>
  );
}

export default MetaTags;

MetaTags.prototype = {
  page: PropTypes.string.isRequired,
  metaTitle: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
};

// you can change meta content dynamically if you want. Just pass content as a prop.

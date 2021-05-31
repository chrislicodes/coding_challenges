"use strict";

const regExp = /^(?:https?:\/\/)?(?:www\.)?([^:\/\n?.]+)\..*$/;

function domainName(url) {
  const match = url.match(regExp);
  return match[1];
}

domainName("http://github.com/carbonfive/raygun");
domainName("http://www.zombie-bites.com");
domainName("https://www.cnet.com");

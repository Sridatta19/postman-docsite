const collapseAPIs = (acc, item) => {
  if (item._postman_isSubFolder) {
    return item.item.reduce(collapseAPIs, acc);
  } else {
    return acc.concat(item);
  }
};

export const getModuleAPIs = module => {
  if (!module || !module.item || module.item.length === 0) {
    return [];
  }
  const apis = module.item
    .filter(item => item.request || item._postman_isSubFolder)
    .reduce(collapseAPIs, []);
  let filteredApis = [];
  return apis.filter(function(api) {
    return filteredApis.indexOf(api.name) == -1 && filteredApis.push(api.name);
  });
};

export const parseStringToJSON = (src, apiName) => {
  let jsonObj = src;
  if (typeof src === "string") {
    src = src
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
    try {
      jsonObj = JSON.parse(src);
    } catch (err) {
      // console.log("JSON PARSE ERROR - ", src, apiName);
      jsonObj = {};
    }
  }
  return jsonObj || {};
};

export const getRequestJSON = requestBody => {
  const mode = requestBody.mode;
  let request = requestBody[mode];
  if (mode === "urlencoded") {
    return request.reduce((acc, elem) => {
      acc[elem.key] = elem.value;
      return acc;
    }, {});
  }
  return request;
};

export const getApiId = (moduleName, apiName) => {
  const mName = (moduleName && moduleName.replace(/[^\w]/gi, "_")) || "";
  const aName = (apiName && apiName.replace(/[^\w]/gi, "_")) || "";
  return mName + (aName ? "_" + aName : "");
};

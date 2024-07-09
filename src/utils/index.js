/**
 * 将URL查询字符串转换为对象。
 *
 * @param {string} url - 要解析的URL，默认为当前窗口的URL。
 * @returns {Object} - 一个键值对的对象，其中键和值都是字符串。
 */
export function paramToObj(url = window.location.href) {
  // 解码URL并尝试分割以获取查询字符串部分。
  // 如果URL中没有查询字符串，则split('?')[1]将是undefined。
  const search = decodeURIComponent(url.split("?")[1]).replace(/\+/g, " ");

  if (!search) return {};

  const obj = {};

  const searchArr = search.split("&");

  searchArr.forEach(v => {
    const index = v.indexOf("=");

    if (index !== -1) {
      const name = v.substring(0, index);
      const val = v.substring(index + 1, v.length);
      obj[name] = val;
    }
  });

  return obj;
}

export const formatFileSizeDisplay = value => {
  if (value < 1024) {
    return `${value} KB`;
  }
  return `${parseFloat((value / 1024).toFixed(1))} MB`;
};

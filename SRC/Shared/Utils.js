const makeUrl = item => {
  let urlArray = 'icon_name_' + item['poster-image'];
  return urlArray.split('.jpg')[0];
};

export {makeUrl};

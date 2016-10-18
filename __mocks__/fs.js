const fs = jest.genMockFromModule('fs');

// Mocks fs.link
fs.link = (src, dest, callback) => {
  callback.call(null);
};

// Mocks fs.unlink
fs.unlink = (dest, callback) => {
  callback.call(null);
};

module.exports = fs;

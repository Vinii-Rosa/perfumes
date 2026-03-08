function mockRes() {
  return {
    status() {
      return this; 
    },
    send(data) {
      return data; 
    },
    json(data) {
      return data; 
    },
    end() {}
  };
}

export default mockRes;
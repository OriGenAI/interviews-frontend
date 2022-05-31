const todosMock = [{ name: "TODO 1" }, { name: "TODO 2" }, { name: "TODO 3" }];

const getTodosById = (id) => {
  return new Promise((resolve, reject) => {
    if (!id) {
      reject("Id parameter is required");
    }
    setTimeout(() => {
      resolve(todosMock);
    }, 300);
  });
};

export { getTodosById };

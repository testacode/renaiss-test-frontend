export const fakePromise = async (data, ms = 5000) =>
  await new Promise((resolve) => {
    return setTimeout(async () => {
      await console.log("Promise resolve: ", data);
      return await resolve(data);
    }, ms);
  });

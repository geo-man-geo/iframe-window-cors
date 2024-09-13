export function printText(element: HTMLInputElement) {
  console.log(element.value);
  console.log("___THROTTLING____");

  // Create a throttled version of the function
  const throttledFunc = throttlingFunction(functionForThrottling, 1000);

  // Call the throttled function multiple times
  throttledFunc(); // Should execute immediately
  throttledFunc(); // Should be ignored if called within 1000ms
  setTimeout(() => {
    throttledFunc(); // Should execute after 800ms if delay is passed
  }, 1200);
  setTimeout(() => {
    throttledFunc(); // Should execute after 800ms if delay is passed
  }, 2000);
}

const functionForThrottling = () => {
  console.log("Executed");
};

const throttlingFunction = (fun: () => void, delay: number) => {
  let shouldWait = false;
  return function () {
    if (!shouldWait) {
      fun();
      shouldWait = true;
      setTimeout(() => {
        shouldWait = false;
      }, delay);
    }
  };
};

export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
    // Initialize the counter for the endpoint if not already present
    if (!weakMap.has(endpoint)) {
        weakMap.set(endpoint, 0);
    }

    // Increment the counter for the endpoint
    const currentCount = weakMap.get(endpoint) + 1;
    weakMap.set(endpoint, currentCount);

    // Check if the counter meets or exceeds the threshold
    if (currentCount >= 5) {
        throw new Error('Endpoint load is high');
    }
}

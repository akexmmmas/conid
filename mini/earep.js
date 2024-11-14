const thresholds = {
    temperature: [-20, 40],
    humidity: [0, 100]
};

function validateThresholds(thresholds) {
    for (let key in thresholds) {
        let [min, max] = thresholds[key];
        if (min > 0 || max < 0) {
            throw new Error(`${key} threshold values must include zero.`);
        }
    }
}

try {
    validateThresholds(thresholds);  // Valid
    validateThresholds({ temperature: [5, 15] });  // Invalid, will throw an error
} catch (error) {
    console.error(error.message);
}

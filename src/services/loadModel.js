const tf = require('@tensorflow/tfjs-node');
async function loadModel() {
    return tf.loadGraphModel('https://storage.googleapis.com/ml-api-storage1/models/model.json');
}
module.exports = loadModel;
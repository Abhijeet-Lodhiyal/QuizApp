recognizer.listen(result => {
  var largest = 0;
  for (var i = 0; i < result.scores.length; i++) {
    if (result.scores[i] > result.scores[largest]) {
      largest = i;
    }
  }
console.log(recognizer.wordLabels()[largest]);
}, {
  includeSpectrogram: true,
  probabilityThreshold: 0.75
});

setTimeout(() => recognizer.stopListening(), 100e3);

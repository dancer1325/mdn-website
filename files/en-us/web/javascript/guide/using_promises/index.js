function successCallback(result) {
  console.log(`Audio file ready at URL: ${result}`);
}

function failureCallback(error) {
  console.error(`Error generating audio file: ${error}`);
}

// TODO:  define the promise -- returned by the -- function
createAudioFileAsync(audioSettings, successCallback, failureCallback);

createAudioFileAsync(audioSettings).then(successCallback, failureCallback);

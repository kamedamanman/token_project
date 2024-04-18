document.getElementById('generateButton').addEventListener('click', function() {
    const shouldFail = document.getElementById('failCheckbox').checked;
    window.location.href = `/generate-token?fail=${shouldFail}`;
});

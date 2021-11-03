const maxRetry = 3;

const fetchAndRedirect = function (retry, redirectUrl) {
    fetch(
        redirectUrl,
        {
            mode: 'no-cors'//,
            //headers: {
            //    'Access-Control-Allow-Origin':'*'
            //}
        }
    )
    .then((resp) => {
        console.log(resp);
        location.replace(redirectUrl)
    })
    .catch(err => {
        if (retry < maxRetry) {
            console.log("Retrying " + retry);
            sleep(2000).then(() => {fetchAndRedirect(retry+1);});
        }
        else {
            console.log(err);
        }
    });
}; 
const express = require('express');
const app = express();
const fetch = require('node-fetch');

const memes = []

app.get("/getMemes", (request, response) => {
    return getMeme()
})

async function getMeme() {
    let meme = await fetch("https://api.imgflip.com/get_memes")
        .then((data) => data.json())
    meme.data.memes.forEach(function() {
        memes.push(meme.data.memes.id, meme.data.memes.url)
    });
    return memes
}

app.listen(3003)
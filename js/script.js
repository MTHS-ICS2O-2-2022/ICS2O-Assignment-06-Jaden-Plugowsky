// Copyright (c) 2023 Jaden Plugowsky All rights reserved
//
// Created by: Jaden Plugowsky
// Created on: June 2023
// This file contains the JS functions for index.html

"use strict"

/**
 * Get API info.
 */
// code from: https://www.youtube.com/watch?v=670f71LTWpM

const getImage = async (URLAddress) => {
  // This takes an image from an API website, then placing the image on my website
  try {
    const result = await fetch(URLAddress)
    const jsonData = await result.json()
    console.log(jsonData)
    document.getElementById("api-image").innerHTML =
      '<img src="' + jsonData.image + '" alt="API fox image">'
    document.getElementById("link").innerHTML =
      '<a href="' + jsonData.link + '">Link to image<a/>'
  } catch (err) {
    console.log(err)
    document.getElementById("link").innerHTML = "Error"
  }
}

getImage("https://randomfox.ca/floof/")

// '<img src="' + jsonData.url + '" alt="API image">'    api-image    (template for image APIs)
// "<div>" + jsonData.slip.advice + "<div/>"    answer    (template for text APIs)

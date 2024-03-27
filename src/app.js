/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");

  const pronouns = ["the", "our"];
  const adjs = ["great", "big"];
  const nouns = ["jogger", "racoon"];
  const dots = [".com", ".net"];

  const getDomainNames = () => {
    let domainName = "";
    let arrayDomainNames = [];
    pronouns.forEach(pronoun => {
      adjs.forEach(adj => {
        nouns.forEach(noun => {
          dots.forEach(dot => {
            domainName += pronoun + adj + noun + dot;

            arrayDomainNames.push(domainName);

            domainName = "";
          });
        });
      });
    });
    return arrayDomainNames;
  };

  const printDomainNames = array => {
    array.forEach(e => {
      console.log(e);
    });
  };

  const getRandomDomainName = array => {
    const numeroRandom = Math.floor(Math.random() * array.length);
    console.log(numeroRandom);
    return array[numeroRandom];
  };

  function main() {
    const domainNames = getDomainNames();
    printDomainNames(domainNames);
    document.getElementById("domainName").innerHTML = getRandomDomainName(
      domainNames
    );
  }

  main();
};

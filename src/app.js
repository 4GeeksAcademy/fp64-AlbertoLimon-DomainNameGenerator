/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  /*
  //write your code here
  console.log("Hello Rigo from the console!");

  let pronouns = ["the", "our"];
  let adjs = ["great", "big"];
  let nouns = ["jogger", "racoon"];
  let dots = [".com", ".net"];

  const getDomainNames = () => {
    let domainName = "";
    let arrayDomainNames = [];

    //También se puede hacer con un for in

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


  */

  const getPronounAdjetiveList = () => {
    const pronounList = ["the", "our"];
    const adjList = ["great", "big"];

    pronounList.reduce((state, pronoun) => {
      adjList.forEach(adjetive => {
        state = [...state, `${pronoun}${adjetive}`];
      });
      return state;
    }, []);
  };

  const getPronounAdjetiveNounList = pronounAdjetiveList => {
    const nounList = ["jogger", "racoon"];

    pronounAdjetiveList.reduce((state, pronounAdjetive) => {
      nounList.forEach(noun => {
        state = [...state, `${pronounAdjetive}${noun}.com`];
      });
      return state;
    }, []);
  };

  function main() {
    const pronounAdjetiveList = getPronounAdjetiveList();
    const pronounAdjetiveNounList = getPronounAdjetiveNounList(
      pronounAdjetiveList
    );
    printpronounAdjectiveNoun(pronounAdjetiveNounList);
  }

  main();
};

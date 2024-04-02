/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const getPronounAdjectiveList = () => {

  const pronounList = ["the", "our"];
  const adjList = ["great", "big"];

  
  pronounList.reduce((state,pronoun) => {
    adjList.forEach(adjetive => {
        state = [...state, `${pronoun}${adjetive}`]
    })
    return state;
  })
};

const getPronounAdjectiveNounList = (pronounAdjetiveList) => {
  const nounList = ["jogger", "racoon"];

  pronounAdjetiveList.reduce((state, pronounAdjetive) => {
    nounList.forEach(noun => {
        state = [...state, `${pronounAdjetive}${noun}.com`];
    });
    return state;
  }, []);
};

function main() {
  const pronounAdjectiveList = getPronounAdjectiveList();
  const pronounAdjectiveNounList = getPronounAdjectiveNounList(pronounAdjectiveList);
  printpronounAdjectiveNoun(pronounAdjectiveNounList);
}

main();
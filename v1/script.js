'use strict'

//Selecting DOM elements
const btn = document.querySelector('.btn-open');
const form = document.querySelector('.fact-form');
const factsList = document.querySelector('.facts-list');

//Load data from Supabase
loadFacts();

async function loadFacts() {
   const res = await fetch("https://wfkhwfokpqeqiibfhigd.supabase.co/rest/v1/facts", {
      headers: {
         apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Indma2h3Zm9rcHFlcWlpYmZoaWdkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTAxMzc3MDEsImV4cCI6MjAwNTcxMzcwMX0.T6HFLhxPCUyBcKtvZlLeGI4v3qMsoaCw0umXQhTi8bU",
         authorization: "Bearber eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Indma2h3Zm9rcHFlcWlpYmZoaWdkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTAxMzc3MDEsImV4cCI6MjAwNTcxMzcwMX0.T6HFLhxPCUyBcKtvZlLeGI4v3qMsoaCw0umXQhTi8bU", 
   }, 
   });
   const data = await res.json();
   createFactsLit(data);
};

//Creating DOM elements: Render facts in list
factsList.innerHTML = "";

const CATEGORIES = [];
function createFactsLit(dataArray) {
   const htmlArray = dataArray.map((fact) => 
   ` <li class="fact"> 
      <p>
      ${fact.text}
      <a class="source" href="${fact.source}" target="_blank">(Source)</a>
      </p>
      <span class="tag" style="background-color: ${CATEGORIES.find((cat) => cat.name === fact.category).color};">${fact.category}</span>
   </li>`
   
   );
   const html = htmlArray.join("");
   factsList.insertAdjacentHTML("afterbegin", html)

};


//Toggle from visibility
btn.addEventListener('click', function() {
   if (form.classList.contains('hidden')){
      form.classList.remove('hidden');
      btn.textContent = 'Close';
   } else {
      form.classList.add('hidden');
      btn.textContent = 'Share a fact';
   }
});
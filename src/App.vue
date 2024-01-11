<template>
    <div id="app">
     <h1>{{ title }}</h1> 
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        title: 'Exercício com Vue',
      };
    },
  };
  </script>
  
  <style>
  #app {
    font-size: 18px;
    font-family: 'Roboto', sans-serif;
    color: blue;
    text-align: center;
  }
  </style>
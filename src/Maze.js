import { Component }from 'react';

/**
 * Maze represents a maze of characters. The goal is to get from the
 * top left corner to the bottom right, following a path of 1's. Arbitrary
 * constants are used to represent locations in the maze that have been TRIED
 * and that are part of the solution PATH.
 *
 * @author Java Foundations--Modified to JS by Casey McCullough
 * @version 4.0
 */
// For react you have fist to import the file you want to read from 

import file from './Testfiles/testfile.txt';



class Maze extends Component{

   constructor()
   {
      super();
      // const fs = require('fs');
      // const readline = require('readline');
      this.readTextFile();
      this.numRows = 0;
      this.numCols = 0; 

   }
   // Awkward hack to get class constants in JS
   static get TRIED() { return 2;} 
   static get PATH() { return 3;}

   readTextFile() {
      fetch(file)
          .then(response => (response.text()))
          .then(data => {
              // Do something with your data
              console.log(data);
            
              // create unique array on each line
              const lines = data.split(/\r?\n/);
              const numArr = lines[0].match(/\d+/g);
              // remove first row (the one that contains row and col #s)
              lines.splice(0,1);

              let table = [];

              lines.forEach(line => {
                 let row = line.split(" ");
                 table.push(row);
              });

              console.log (table);

              console.log (table [0][0]);

          });
  }

} export default Maze;